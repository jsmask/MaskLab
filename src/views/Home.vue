<script setup lang="ts">
import Head from "@/components/Head.vue";
import CardItem from "@/components/CardItem.vue";
import { reactive } from "vue";
const navList = reactive([
  {
    name: "Img2Gif",
    link: "/Img2Gif",
    icon: "Cauldron.png"
  }
]);
</script>

<template>
  <div class="home-page">
    <Head />
    <div class="content">
      <CardItem v-for="(item,index) in navList" :key="index" :link="item.link" :title="item.name"></CardItem>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content{
    display: flex;
}
</style>
