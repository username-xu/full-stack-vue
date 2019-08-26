<template>
    <div class="page tabber-page">
        <div class="tab-box">
            <van-tabs v-model="active"
                @change="onTabsChange">
                <van-tab
                    v-for="item in tabArray"
                    :key="item.name"
                    :title="item.title"
                    :name="item.name">
                </van-tab>
            </van-tabs>
        </div>
        <van-pull-refresh v-model="canDownRefresh" :head-height="100" @refresh="onRefresh">
        <div class="content-box">
            <van-list
                v-model="canLoadMore"
                :finished="finished"
                :immediate-check="false"
                finished-text="没有更多了"
                @load="onLoadMore">
                <van-cell
                    v-for="item in newsList"
                    :title="item.title"
                    :url="item.url"
                    :key="item._id">
                    <template slot="label">
                        <div class="img-box">
                            <van-row>
                                <van-col span="8"><img :src="item.thumbnail_pic_s" alt=""></van-col>
                                <van-col v-if="item.thumbnail_pic_s02" span="8"><img :src="item.thumbnail_pic_s02" alt=""></van-col>
                                <van-col v-if="item.thumbnail_pic_s03" span="8"><img :src="item.thumbnail_pic_s03" alt=""></van-col>
                            </van-row>
                        </div>
                        <div class="footer">
                            <span>{{item.author_name}}</span><span>{{item.date}}</span>
                        </div>
                    </template>
                </van-cell>
            </van-list>
        </div>
        </van-pull-refresh>
    </div>
</template>

<script>
import axios from 'axios'
import { Toast } from 'vant'

export default {
    data () {
        return {
            pageNumber: 1,
            newsList: [],
            canLoadMore: false,
            finished: false,
            canDownRefresh: false,
            active: 'top',
            tabArray: [
                { title: '头条', name: 'top' },
                { title: '社会', name: 'shehui' },
                { title: '国内', name: 'guonei' },
                { title: '国际', name: 'guoji' },
                { title: '娱乐', name: 'yule' },
                { title: '体育', name: 'tiyu' },
                { title: '军事', name: 'junshi' },
                { title: '科技', name: 'keji' },
                { title: '财经', name: 'caijing' },
                { title: '时尚', name: 'shishang' }
            ]
        }
    },
    created () {
        this.getData(this.active)
    },
    methods: {
        // tab切换
        onTabsChange (name) {
            // tab切换时会造成滚动条不在顶部
            window.scrollTo(0, 0)
            this.pageNumber = 1
            this.finished = false
            this.getData(name)
        },
        // 下拉刷新
        onRefresh () {
            this.pageNumber = 1
            this.finished = false
            this.canDownRefresh = true
            this.getData(this.active)
        },
        // 上拉加载更多
        onLoadMore () {
            this.canLoadMore = true
            this.pageNumber += 1

            Toast.loading({ mask: true, message: '加载中...' })

            let url = '/api/news/' + this.active + '?pagenumber=' + this.pageNumber

            axios.get(url).then(res => {
                Toast.clear()
                this.canLoadMore = false

                if (!res.data.length) {
                    this.finished = true
                    return
                }

                this.newsList = this.newsList.concat(res.data)
            })
        },
        // 请求数据
        getData (name) {
            Toast.loading({ mask: true, message: '加载中...' })

            let url = '/api/news/' + name + '?pagenumber=' + this.pageNumber

            axios.get(url).then(res => {
                Toast.clear()
                this.canDownRefresh = false
                this.newsList = res.data
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.tab-box{
    position: fixed;
    z-index: 1;
}
.content-box{
    padding-top: 44px;
}
.img-box{
    padding: 8px 0;
    img{
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding-right: 5px;
    }
}
.footer{
    span{
        margin-right: 15px;
    }
}
</style>
