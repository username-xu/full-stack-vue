<template>
    <div id="app">
        <keep-alive>
            <router-view/>
        </keep-alive>
        <van-tabbar v-model="active" @change="tabbarChange">
            <van-tabbar-item name="news" icon="newspaper-o">新闻头条</van-tabbar-item>
            <van-tabbar-item name="mine" icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data () {
        return {
            active: 'news'
        }
    },
    created () {
        this.tabbarChange(this.active)
    },
    methods: {
        tabbarChange (active) {
            this.active = active
            this.$router.push({ path: active })
        }
    }
}
</script>

<style lang="scss">
html,
body {
    width: 100%;
    height: 100%;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    height: 100%;
    color: #2c3e50;
}
.page {
    width: 100%;
    min-height: 100%;
    background-color: #f5f5f5;
}
.tabber-page {
    box-sizing: border-box;
    padding-bottom: 50px;
}
</style>
