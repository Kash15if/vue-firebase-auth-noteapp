<template>

<div>

    <div align="center" style="margin-top: 7vh;">
        <a><router-link to="/createBlogs" exact>Create New</router-link></a>
        <p>|</p>
        <a ><router-link to="/" exact>My Notes</router-link></a>
    </div>    

</div>

</template>

<script>
export default {
  name: 'CreateNote',

  data() {
      return{
      }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
        font-size: 30px; 
        width: auto;
        padding: 5px;
        color: rgb(8, 179, 122);
        font-weight: bold;
        text-decoration: none;
    }

    .router-link-active {
        border-bottom: 2px solid currentColor;
        color: 	rgb(2, 85, 85);
    }

    p {
        font-size: 30px;
        display: inline;
        color: rgb(1, 170, 114);
        font-weight: bold;
        padding: 5px;
    }

</style>
