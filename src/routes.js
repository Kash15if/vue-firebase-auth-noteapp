import MyNotes from "./components/MyNotes.vue";
import CreateNotes from "./components/CreateNote.vue";
import UpdateBlog from "./components/UpdateBlog.vue";
import SignUp from "./components/SignUp.vue";
import Login from "./components/Login.vue";
import firebase from "firebase";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

let router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: MyNotes,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/createBlogs",
      component: CreateNotes,
      meta: {
        requiresAuth: true,
      },
    },

    {
      path: "/SignUp",
      component: SignUp,
      meta: {
        requiresGuest: true,
      },
    },

    {
      path: "/Login",
      component: Login,
      meta: {
        requiresGuest: true,
      },
    },

    {
      path: "/blog/:id",
      component: UpdateBlog,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!firebase.auth().currentUser) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    if (firebase.auth().currentUser) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
