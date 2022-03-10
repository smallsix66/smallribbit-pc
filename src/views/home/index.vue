<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from "./components/home-category";
import HomeBanner from "./components/home-banner";
export default {
  name: "HomePage",
  components: {
    HomeCategory,
    HomeBanner,
  },
};
</script>

<style scoped lang="less">
// 覆盖轮播图组件样式
.xtx-carousel {
  ::v-deep .carousel-btn.prev {
    left: 270px;
  }
  ::v-deep .carousel-indicator {
    padding-left: 250px;
  }
}
</style>
