<template>
  <div class="Box">
    <div class="inputBox">
      <textarea class="title" v-model="blog.title"></textarea>
    </div>

    <div class="inputBox">
      <textarea class="body" v-model="blog.content"></textarea>
    </div>

    <button class="button" @click="post">Submit Blog</button>
  </div>
</template>

<script>
import firebase from "../firebase/init";
const db = firebase.firestore();
const Auth = firebase.auth();

var d = new Date();
var date = d.toLocaleDateString();
var time = d.toLocaleTimeString();

export default {
  name: "CreateNote",

  data() {
    return {
      blog: {
        title: "",
        content: "",
        date: "",
        time: "",
      },
    };
  },

  methods: {
    post: function() {
      // Add a new document with a generated id.
      db.collection("users")
        .doc(Auth.currentUser.email)
        .collection("blogs")
        .add({
          title: this.blog.title,
          content: this.blog.content,
          date: date,
          time: time,
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.Box {
  margin: 5vh 0 0 10vw;
  width: 80vw;
}

.inputBox .title {
  font-size: 20px;
  margin-top: 2vh;
  width: 100%;
  margin-top: 5vh;
  height: 100px;
  border-radius: 8px;
}

.inputBox .body {
  font-size: 20px;
  margin-top: 2vh;
  width: 100%;
  height: 230px;
  margin-top: 5vh;
  border-radius: 8px;
}

.button {
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin-top: 3vh;
  background-color: rgb(2, 134, 90);
  color: white;
  font-size: 25px;
}
</style>
