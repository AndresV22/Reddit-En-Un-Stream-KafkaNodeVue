import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Pipeline from "../views/Pipeline.vue";
import Team from "../views/Team.vue";
import Comment from "../views/Comment.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Pipeline",
    name: "Pipeline",
    component: Pipeline
  },
  {
    path: "/Team",
    name: "Team",
    component: Team
  },
  {
    path: "/Comment",
    name: "Comment",
    component: Comment
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
