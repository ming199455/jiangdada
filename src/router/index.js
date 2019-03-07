import Vue from "vue";
import Router from "vue-router";

import Index from "@/components/Index";

import Home from "@/components/Home";
import About from "@/components/About";
import Admin from "@/components/Admin";
import Login from "@/components/Login";
import Menu from "@/components/Menu";
import Registry from "@/components/Registry";

import History from "@/components/about/History";
import Activity from "@/components/about/Activity";
import Contact from "@/components/about/Contact";
import Delivery from "@/components/about/Delivery";

import Address from "@/components/about/contact/Address";
import Person from "@/components/about/contact/Person";
import Telphone from "@/components/about/contact/Telphone";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Index,
      redirect:'home',
      children: [
        {
          path: "home",
          component: Home
        },
        {
          path: "about",
          component: About,
          redirect:'/about/contact',
          children: [
            {
              path: "/about/activity",
              component: Activity
            },
            {
              path: "/about/contact",
              component: Contact,
              redirect:'/about/contact/address',
              children: [
                {
                  path: "/about/contact/address",
                  component: Address
                },
                {
                  path: "/about/contact/person",
                  component: Person
                },
                {
                  path: "/about/contact/telphone",
                  component: Telphone
                }
              ]
            },
            {
              path: "/about/delivery",
              component: Delivery
            },
            {
              path: "/about/history",
              component: History
            }
          ]
        },
        {
          path: "admin",
          component: Admin,
          beforEnter:(to,from,next)=>{
            alert('进去是不可能进去的啦')
            if(from.path=='/login'){
              next()
             
            }else{
              alert('滚去登录')
            }
          }
        },
        {
          path: "login",
          component: Login
        },
        {
          path: "menu",
          component: Menu
        },
        {
          path: "registry",
          component: Registry
        }
      ]
    }
  ],
  mode: "history"
});
