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
            component: About,
            meta: {title: '关于'}
        },
        {
            name: 'h',
            path: '/home',
            component: Home,
            meta: {title: '主页'},
            children: [
                {
                    name: 'n',
                    path: 'news',
                    component: News,
                    meta: {isAuth: true, title: '新闻'}
                },
                {
                    name: 'm',
                    path: 'message',
                    component: Message,
                    meta: {isAuth: true, title: '消息'},
                    children: [
                        {
                            name: 'd',
                            path: 'detail',
                            component: Detail,
                            meta: {title: '详情'},
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
//全局前置路由守卫-初始化时被调用，每次路由切换之前被调用
Router.beforeEach((to, from, next) => {
    // if (to.name === "n" || to.name === "m") {
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'xk') {
            next()
        } else {
            alert('用户名不对，无权限访问')
        }
    } else {
        next()
    }
})
//全局后置路由守卫-初始化时被调用、每次路由切换之后被调用
Router.afterEach((to, from) => {
    document.title = to.meta.title
})
export default Router