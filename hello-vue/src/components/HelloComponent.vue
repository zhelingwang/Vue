<template>
    <div class="hello">
        This is hello component!!!
        <router-link to="/">back to index</router-link>
        <p>state moduleB state</p>
        <span>{{$store.state.moduleB.test}}</span>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scoped>
    .hello{
        text-align: center;
        padding: 30px;
        font-size: 26px;
    }
    span{
        color: aqua
    }
</style>
