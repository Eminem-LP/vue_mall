<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends" :key="item.link">
      <a :href="item.link">
        <img :src="item.image"/>
      </a>
      <div>{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 15px;
  font-size: 14px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
}
.recommend-item img{
  height: 80px;
  width: 80px;
  margin-bottom: 5px;
}
</style>
