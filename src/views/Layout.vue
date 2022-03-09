<template>
  <!-- 顶部组件 -->
  <app-topnavx></app-topnavx>
  <!-- 头部组件 -->
  <app-header></app-header>
  <!-- 吸顶头部组件 -->
  <app-header-sticky></app-header-sticky>
  <div>
    <p v-for="i in 100" :key="i">11</p>
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>

<script>
import AppTopnavx from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { useStore } from 'vuex'
export default {
  name: "LayoutPage",
  components:{
    AppTopnavx,
    AppHeader,
    AppHeaderSticky
  },
  setup(){
    const store = useStore()
    store.dispatch('category/getList')
  }
};
</script>
