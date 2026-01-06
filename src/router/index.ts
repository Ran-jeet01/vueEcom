// router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [{ path: "/", name: "home", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// import { createRouter, createWebHistory } from "vue-router";

// import About from "@/pages/About.vue";
// import Social from "@/pages/Social.vue";
// import Insta from "@/pages/Insta.vue";
// import Facebook from "@/pages/Facebook.vue";

// const routes = [
//   {
//     path: "/about",
//     component: About,
//     children: [
//       {
//         path: "social",
//         component: Social,
//         children: [
//           {
//             path: "insta",
//             name: "about-social-insta",
//             component: Insta,
//           },
//           {
//             path: "facebook",
//             name: "about-social-facebook",
//             component: Facebook,
//           },
//         ],
//       },
//     ],
//   },
// ];

// export default createRouter({
//   history: createWebHistory(),
//   routes,
// });
