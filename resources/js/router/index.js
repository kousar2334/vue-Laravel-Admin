import Vue from "vue";
import Router from "vue-router";
import store from "../store/index";
import config from "../config";
Vue.use(Router);

const router = new Router({
    mode: "history", // https://router.vuejs.org/api/#mode
    linkActiveClass: "active",
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        //Main layout
        {
            path: "/",
            redirect: "/dashboard",
            name: "Home",
            component: () => import(/* webpackChunkName: "mainLayout" */ "../layouts/Main.vue"),
            meta: {
                required_authentication: true,
                module_permission_id: config.permissions.dashboard
            },
            children: [
                {
                    path: "dashboard",
                    name: "Dashboard",
                    component: () => import(/* webpackChunkName: "dashboard" */ "../views/Dashboard"),
                    meta: {
                        required_authentication: true,
                        module_permission_id: config.permissions.dashboard
                    }
                },
                {
                    path: "colors",
                    name: "colors",
                    component: () => import(/* webpackChunkName: "colors" */ "../views/theme/Colors"),
                    meta: {
                        required_authentication: true,
                        module_permission_id: config.permissions.colors
                    }
                },
                {
                    path: "register",
                    name: "Register",
                    component: () => import(/* webpackChunkName: "register" */ "../views/pages/Register"),
                    meta: {
                        required_authentication: true,
                        module_permission_id: config.permissions.register
                    }
                },
                {
                    path: "/users",
                    name: "Users",
                    component: () => import(/* webpackChunkName: "users" */ "../views/users/Users.vue"),
                    meta: {
                        required_authentication: true,
                        module_permission_id: config.permissions.users
                    }
                },
                {
                    path: "/manage-account",
                    name: "Manage Account",
                    component: () => import(/* webpackChunkName: "ManageAccount" */ "../views/users/User.vue"),
                    meta: {
                        required_authentication: true,
                        module_permission_id: config.permissions.profile
                    }
                }
            ]
        },
        //End Main layout
        {
            path: "/",
            name: "Default",
            component: () => import(/* webpackChunkName: "Default" */ "../views/pages/Login"),
            meta: {
                required_authentication: false,
                module_permission_id: config.permissions.pages
            },
            children: [
                {
                    path: "login",
                    name: "Login",
                    component: () => import(/* webpackChunkName: "login" */ "../views/pages/Login"),
                    meta: {
                        required_authentication: false,
                        module_permission_id: config.permissions.dashboard
                    }
                }
            ]
        }
    ]
});
router.beforeEach((routeTo, routeFrom, next) => {
    if (routeTo.meta.required_authentication) {
        if (store.state.isLogin) {
            next();
        } else {
            next("/login");
        }
    } else {
        if (routeTo.name === "/login") {
            next();
        } else {
            next();
        }
    }
});
export default router;
