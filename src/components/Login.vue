<template>



<div class="box">



    <form action="#" class="form">

            <img src='../assets/login.png' alt="" class="profileLogo">


        <div>
          <label for="email">Email address:</label><br>
          <input type="email" placeholder="Enter email" class="textbox" v-model="userId">
        </div>
        <div>
          <label for="pwd">Password:</label><br>
          <input type="password" placeholder="Enter password" class="textbox" v-model="password">
        </div>
        <div>
          <label>
            <input class="form-check-input" type="checkbox"> Remember me
          </label>
        </div><br>
        <button class="btn" @click.prevent="login">Submit</button>

        <br><br>

      <p>Don't have an account??? <a><router-link to="/SignUp" exact>Sign Up</router-link></a></p>
        
      </form>

      
    

</div>


</template>

<script>

import firebase from '../firebase/init';

const Auth = firebase.auth();


export default {
  name: 'Login',

  data() {
      return{

        userId:  "",
        password: ""
      }
  },

  methods: {

    login(){

      let uid = this.userId;
      let password = this.password;

    Auth.signInWithEmailAndPassword(uid, password)
    .then(()=>{
      this.$router.go({ path: this.$router.path });
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert('alert:'+ errorMessage);
      // ...
    });
    }

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
    .box {
        width: 100%;
        height: auto;
        border: 3px solid #1d3557;
        margin-top: 5vh;
        border-radius: 10px;
        background-color: #002B7A;
        color:aliceblue
      }

    .box .form{
      width: 95%;
      margin: 15% 2.5% 0% 2.5%;
      color:aliceblue
    }

    .profileLogo{
      width: 100px;
      height: 100px;
      display: block;
      margin: 0 auto;
    }

    .btn{
      width: 90%;
      margin:0 5% 0% 5%;
      background-color: #4CAF50;
      color: white;
      border: none;
      border-radius: 5px;
      padding: 12px;
      text-decoration: none;
      font-size: 16px;
      transition-duration: 0.4s;
      cursor: pointer;

    }

    .btn:hover {
      background-color: white;
      color: black;
    }

    .textbox{
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
        }

      a{
        color: #90e0ef;
      }

    
      /* mediA query*/
      @media(min-width: 768px){
       
        .box {
        width: 40%;
        margin-left: 30vw;
        }

        .box .form{
        width: 70%;
        margin: 10% 15% 0% 15%;
        color:aliceblue
        }

      }

</style>
