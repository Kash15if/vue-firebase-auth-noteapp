<template>
  <div class="header">
    <a v-if="isLoggedIn" href="#" class="logo">{{ currentUser }}</a>

    <a v-if="isLoggedIn"
      ><router-link to="/createBlogs" exact>Create New</router-link></a
    >
    <a v-if="isLoggedIn"><router-link to="/" exact>My Notes</router-link></a>

    <div class="header-right">
      <a v-if="!isLoggedIn"
        ><router-link to="/Login" exact>Login</router-link></a
      >
      <a v-if="!isLoggedIn"
        ><router-link to="/SignUp" exact>SignUp</router-link></a
      >
      <a v-if="isLoggedIn" @click.prevent="logout">LogOut</a>
      <a v-if="isLoggedIn" @click.prevent="deleteAcc">Delete account</a>
    </div>
  </div>
</template>

<script>
import firebase from "../firebase/init";

const db = firebase.firestore();
const Auth = firebase.auth();

export default {
  name: "Header",

  data() {
    return {
      isLoggedIn: false,
      currentUser: "",
    };
  },

  methods: {
    deleteAcc: function() {
      var user = Auth.currentUser;

      db.collection("users")
        .doc(user.email)
        .delete()
        .then(() => {
          user.delete();
        })
        .then(() => {
          this.$router.go({ path: this.$router.path });
        })
        .catch(function(error) {
          // An error happened.
        });
    },

    logout: function() {
      Auth.signOut()
        .then(() => {
          this.$router.go({ path: this.$router.path });
        })
        .catch(function(error) {});
    },
  },

  created() {
    if (Auth.currentUser) {
      this.isLoggedIn = true;

      db.collection("users")
        .doc(Auth.currentUser.email)
        .get()
        .then((doc) => {
          return doc.data();
        })
        .then((data) => {
          this.currentUser = data.uid;
        })
        .catch(function(error) {
          console.log("Error getting document:", error);
        });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  overflow: hidden;
  background-color: #f1f1f1;
  padding: 20px 10px;
}

.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 8px;
  text-decoration: none;
  font-size: 18px;
  line-height: 20px;
  border-radius: 4px;
}

.header a.logo {
  font-size: 25px;
  font-weight: bold;
}

.header a:hover {
  background-color: #ddd;
  color: black;
}

.router-link-active {
  background-color: dodgerblue;
  color: white;
}

.header-right {
  float: right;
}

@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }

  .header-right {
    float: none;
  }
}
</style>
