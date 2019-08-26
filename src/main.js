import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Tabbar, TabbarItem, List, Cell, PullRefresh, CellGroup, Row, Col, Tab, Tabs, Image } from 'vant'

Vue.use(Tabbar)
    .use(TabbarItem)
    .use(List)
    .use(Cell)
    .use(PullRefresh)
    .use(CellGroup)
    .use(Row)
    .use(Col)
    .use(Tab)
    .use(Tabs)
    .use(Image)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
