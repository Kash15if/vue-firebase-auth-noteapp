<template>

<div class="Notes">


    <div id="Component" v-for="blog in blogs" :key="blog.id">

    <router-link v-bind:to="'/blog/' + blog.id">
        <i class="material-icons">edit</i>
    </router-link>

    <i class="material-icons del" @click="deleteBlog(blog.id)">delete</i>

    <div class="BlogData">
     <h3>{{ blog.title }}</h3>    
    <p>{{ blog.content}}</p>
    </div>
    
    <i class="Date">Date(m/d/y): {{blog.date}}</i>
    <i class="Time">time: {{blog.time}}</i>

    </div>

    </div>


</div>

</template>

<script>

import firebase from '../firebase/init';

const Auth = firebase.auth();
const db = firebase.firestore();


export default {
  name: 'MyNotes',

  data() {
      return{
            blogs: []
      }
  },

  methods: {

    deleteBlog(id){

          db.collection('users').doc(Auth.currentUser.email).collection('blogs').doc(id).delete()
          .then(()=>{
            this.blogs = this.blogs.filter((blog)=>{
             return  blog.id != id;
          });
          });
      }
  },

  created(){
     db.collection('users').doc(Auth.currentUser.email).collection('blogs').get()
      .then((snapshot) => {
          var blogArray = [];
          
    snapshot.forEach((doc) => {
      var data = doc.data();
      
        data.id = doc.id;
        blogArray.push(data);
    });
    
    this.blogs = blogArray;
  })
  .catch((err) => {
    console.log('Error getting documents', err);
  });

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#Component {
    width: 90%; 
    background-color: rgb(38, 90, 87);
    padding: 1vw;
    margin: 3.5vh 5%  1vw 5%;
    border-radius: 0.8vw;
    text-decoration: none;
}

i{
    margin-left: 10px;
    color: white;
}

.del{
    float:right;
    display:block;
    margin-right:10px;
    clear:left;
}

.BlogData{
    background-color: rgb(208, 250, 241);
    padding: 1.5vw;
    color: rgb(7, 0, 0);
    border-radius: 0.5vw;
    margin-bottom: 1vh;
}

h3 {
    font-family: "Arial Black", Gadget, sans-serif;
}

p{
    padding-top: 1.5vw;
}

.Time {
    font-size: 12px;
    float:right;
    display: block;
    margin-right:10px;
    clear:left;
}

.Date {
    font-size: 12px;
}

   /* mediA query*/
   @media(min-width: 768px){

i {
    font-size: 50px;
    color: white;
}

.Date{
    font-size: 20px;
}

.Time{
    font-size: 20px;
}

}

</style>
