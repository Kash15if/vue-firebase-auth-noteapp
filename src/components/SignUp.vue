<template>
  <div class="box container">
    <form action="#" class="form">
      <img class="profileLogo" src="../assets/login.png" alt="" />

      <div>
        <label for="email">Email address:</label>
        <input
          type="email"
          class="textbox"
          placeholder="Enter email"
          v-model="emailId"
        />
      </div>
      <div>
        <label for="uname">Username:</label>
        <input
          type="uname"
          class="textbox"
          placeholder="Enter username"
          v-model="username"
        />
      </div>
      <div>
        <label for="pwd">Password:</label>
        <input
          type="password"
          class="textbox"
          placeholder="Enter password"
          v-model="password"
        />
      </div>
      <div>
        <label class="form-check-label">
          <input type="checkbox" /> Remember me
        </label>
      </div>
      <button class="btn" @click.prevent="register">Submit</button>

      <br /><br />

      <p>
        Already have an account???
        <a><router-link to="/Login" exact>Log In</router-link></a>
      </p>
    </form>
  </div>
</template>

<script>
import firebase from "../firebase/init";

const Auth = firebase.auth();
const db = firebase.firestore();

export default {
  name: "SignUp",

  data() {
    return {
      emailId: "",
      password: "",
      username: "",
    };
  },

  methods: {
    register() {
      console.log(this.username);

      let email = this.emailId;
      let password = this.password;
      let username = this.username;

      Auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
          db.collection("users")
            .doc(email)
            .set({
              uid: username,
            });
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          window.alert("alert:" + errorMessage);
        });
    },
  },
};
</script>

<style scoped>
.box {
  width: 100%;
  height: auto;
  border: 3px solid #1d3557;
  margin-top: 5vh;
  border-radius: 10px;
  background-color: #002b7a;
  color: aliceblue;
}

.box .form {
  width: 95%;
  margin: 15% 2.5% 0% 2.5%;
  color: aliceblue;
}

.profileLogo {
  width: 100px;
  height: 100px;
  display: block;
  margin: 0 auto;
}

.btn {
  width: 90%;
  margin: 10px 5% 0% 5%;
  background-color: #4caf50;
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

.textbox {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

a {
  color: #90e0ef;
}

/* mediA query*/
@media (min-width: 768px) {
  .box {
    width: 40%;
    margin-left: 30vw;
  }

  .box .form {
    width: 70%;
    margin: 10% 15% 0% 15%;
    color: aliceblue;
  }
}
</style>
