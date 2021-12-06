import VueRouter from "vue-router";

import About from '@/pages/About'
import Home from '@/pages/Home'
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

const Router = new VueRouter({
    routes: [
        {
            name: 'a',
            path: '/about',
            component: About
        },
        {
            name: 'h',
            path: '/home',
            component: Home,
            children: [
                {
                    name: 'n',
                    path: 'news',
                    component: News
                },
                {
                    name: 'm',
                    path: 'message',
                    component: Message,
                    children: [
                        {
                            name: 'd',
                            path: 'detail',
                            component: Detail,
                            props($route) {
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})
Router.beforeEach((to, from, next) => {
    if (to.name === "n" || to.name === "m") {
        if (localStorage.getItem('name') === 'xk') {
            next()
        } else {
            alert('用户名不对，无权限访问')
        }
    } else {
        next()
    }
})
export default Router