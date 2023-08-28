import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import * as VueRouter from "vue-router";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";
import ProductsPage from "./pages/ProductsPage.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import NotFoundPage from "./pages/NotFoundPage.vue";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBIOkI8D6R9o2KiWyqh3qgXVB3y_dhBTCQ",
  authDomain: "fs-vue.firebaseapp.com",
  projectId: "fs-vue",
  storageBucket: "fs-vue.appspot.com",
  messagingSenderId: "1088285308792",
  appId: "1:1088285308792:web:eed5e31c23cb8d84e5ba8d",
};

initializeApp(firebaseConfig);

createApp(App)
  .use(
    VueRouter.createRouter({
      history: VueRouter.createWebHistory(process.env.BASE_URL),
      routes: [
        {
          path: "/cart",
          component: ShoppingCartPage,
        },
        {
          path: "/products",
          component: ProductsPage,
        },
        {
          path: "/products/:productId",
          component: ProductDetailPage,
        },
        {
          path: "/",
          redirect: "/products",
        },
        {
          path: "/:pathMatch(.*)*",
          component: NotFoundPage,
        },
      ],
    })
  )
  .mount("#app");
