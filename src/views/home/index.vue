<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner />
        <!-- 新鲜好物 -->
        <HomeNew />
        <!-- 人气推荐 -->
        <HomeHot />
        <!-- 热门品牌 -->
        <HomeBrand />
        <!-- 商品区域 -->
        <HomeProduct />
        <!-- 最新专题 -->
        <HomeSpecial />
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from "./components/home-category";
import HomeBanner from "./components/home-banner";
import HomeNew from "./components/home-new";
import HomeHot from "./components/home-hot";
import HomeBrand from "./components/home-brand.vue";
import HomeProduct from "./components/home-product.vue";
import HomeSpecial from "./components/home-special.vue";
export default {
  name: "HomePage",
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial,
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
