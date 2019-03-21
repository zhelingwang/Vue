import Vue from "vue";
import VueRouter from "vue-router";

import HelloComponent from "./components/HelloComponent"
import HelloWorld from "./components/HelloWorld"

Vue.use(VueRouter);

export default new VueRouter({
    routes:[{
        path:"/",
        component:HelloWorld
    },{
        path:"/hello",
        component:HelloComponent
    }]
})
