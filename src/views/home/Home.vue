/* eslint-disable vue/valid-v-for */
/* eslint-disable vue/valid-v-for */
<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view/>
    <ul>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
      <li>i</li>
    </ul>
  </div>
</template>

<script>
import NavBar from 'common/navbar/NavBar'
import HomeSwiper from './childrenComponent/HomeSwiper'
import RecommendView from './childrenComponent/RecommendView'
import FeatureView from './childrenComponent/FeatureView'

import { getHomeData } from 'network/home'

export default {
  name: 'Home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data () {
    return {
      banners: [],
      recommends: []
    }
  },
  created () {
    getHomeData().then(res => {
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
  #home {
    margin-top: 44px;
  }
  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
</style>
