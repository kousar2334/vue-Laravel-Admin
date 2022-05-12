import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import router from "../router";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sidebarShow: "responsive",
        sidebarMinimize: false,
        isLogin: !!localStorage.getItem("adminSessionToken"),
        user: null,
        loggedin_user: null
    },
    mutations: {
        toggleSidebarDesktop(state) {
            const sidebarOpened = [true, "responsive"].includes(state.sidebarShow);
            state.sidebarShow = sidebarOpened ? false : "responsive";
        },
        toggleSidebarMobile(state) {
            const sidebarClosed = [false, "responsive"].includes(state.sidebarShow);
            state.sidebarShow = sidebarClosed ? true : "responsive";
        },
        set(state, [variable, value]) {
            state[variable] = value;
        },
        LOGOUT_USER: (state, response) => {
            state.isLogin = false;
            localStorage.removeItem("adminSessionToken");
        },
        LOGIN_USER: (state, response) => {
            state.isLogin = true;
            state.user = response.data.user;
            localStorage.setItem("adminSessionToken", response.data.token);
        },
        IS_AUTHENTIC_USER: (state, response) => {
            state.isLogin = true;
            state.loggedin_user = response.data.user;
            if (response.data.is_refreshed) {
                localStorage.setItem("userToken", response.data.token);
                axios.defaults.headers.common = {
                    Authorization: `Bearer ${localStorage.getItem("userToken")}`
                };
            }
        },
        USER_PERMISSIONS: (state, response) => {
            state.user = response.data.user;
        }
    },
    actions: {
        login: ({ commit }, response) => {
            commit("LOGIN_USER", response);
        },
        isLogin: ({ commit }) => {
            axios.defaults.headers.common = {
                Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`
            };
            return axios
                .post("/api/is-admin-login")
                .then(response => {
                    let is_login = response.data.is_login;
                    if (is_login) {
                        commit("IS_AUTHENTIC_USER", response);
                    } else {
                        router.push({ name: "Login" });
                    }
                })
                .catch(response => {
                    router.push({ name: "Login" });
                });
        },
        logout: ({ commit }) => {
            return axios
                .post("/api/admin-logout")
                .then(response => {
                    let status = response.data.success;
                    if (status) {
                        return commit("LOGOUT_USER");
                    }
                })
                .catch(response => {
                    console.log(response);
                });
        },

        userPermissions: ({ commit }) => {
            axios.defaults.headers.common = {
                Authorization: `Bearer ${localStorage.getItem("adminSessionToken")}`
            };
            return axios
                .post("/api/get-user-task-permissions")
                .then(response => {
                    let status = response.data.success;
                    if (status) {
                        commit("USER_PERMISSIONS", response);
                    }
                })
                .catch(response => {
                    console.log(response);
                });
        }
    },
    getters: {
        has_permission: state => route_permission => {
            let permissions = state.user.permission_id;
            if (permissions !== "") {
                permissions = permissions.split(",");
            }
            for (let x = 0; x < permissions.length; x++) {
                if (permissions[x] + "" === route_permission + "") {
                    return true;
                }
            }
            return false;
        }
    },
    modules: {}
});
