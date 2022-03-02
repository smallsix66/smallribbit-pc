<template>
  <!-- 顶部组件 -->
  <nav>顶部组件</nav>
  <!-- 头部组件 -->
  <header>头部组件</header>
  <div>
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <footer>底部组件</footer>
</template>

<script>
export default {
  name: "LayoutPage",
};
</script>
