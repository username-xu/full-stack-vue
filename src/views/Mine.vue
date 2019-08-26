<template>
    <div class="page">
        <div class="portrait">
            <img src="../assets/portrait.png" alt="">
            <div class="name">
                用户123456789
            </div>
        </div>
        <van-cell-group>
            <van-cell title="我的账户" is-link/>
            <van-cell title="我的收藏" is-link/>
            <van-cell title="历史纪录" is-link/>
            <van-cell title="设置" is-link/>
        </van-cell-group>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.portrait{
    display: flex;
    align-items: center;
    padding: 20px;
    background-color: #fff;
    margin-bottom: 10px;
    img{
        display: block;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
    }
    .name{
        padding-left: 20px;
    }
}
</style>
