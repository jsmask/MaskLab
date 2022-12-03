<template>
  <div class="card-item" @click="handleOpenLink">
    <div class="card-back card-face">
      <img class="cobweb" src="@/assets/image/Cobweb.png" v-for="item in 4" :key="item" />
      <img class="spider" src="@/assets/image/Spider.png" />
      <h3>{{title}}</h3>
    </div>
    <!-- <audio ref="openRef" src="@/assets/audio/Assets_Audio_flip.wav"></audio> -->
    <!-- <div class="card-front card-face"></div> -->
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import { Router, useRouter } from "vue-router";
const props = defineProps<{ title: string; link: string }>();
const router:Router = useRouter();
// const openRef = ref(null)
function handleOpenLink(){
    // console.log(openRef.value)
    // openRef.value.play()
    router.push(`${props.link}`)
}
</script>

<style lang="scss" scoped>
.card-item {
  position: relative;
  height: 175px;
  width: 125px;
  overflow: hidden;
  box-sizing: border-box;
  margin: 5px 7px;
  .card-face {
    position: absolute;
    background-color: black;
    border-color: #ff6d00;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    backface-visibility: hidden;
    border-radius: 12px;
    border-width: 1px;
    border-style: solid;
    h3 {
      position: relative;
      z-index: 9;
      margin-top: 10px;
      font-family: "Lunacy", sans-serif;
      color: #ff6d00;
      font-size: 32px;
      transition: all 200ms ease-in-out;
    }
    .spider {
      width: 37%;
      position: absolute;
      left: 50%;
      top: -15%;
      transform: translateX(-50%);
      z-index: 2;
      transition: top 200ms ease-in-out;
    }
    .cobweb {
      width: 30%;
      position: absolute;
      transition: width 200ms ease-in-out;
      &:nth-of-type(1) {
        left: -1px;
        top: -1px;
        transform: rotate(270deg);
      }
      &:nth-of-type(2) {
        transform: rotate(0deg);
        right: -1px;
        top: -1px;
      }
      &:nth-of-type(3) {
        transform: rotate(180deg);
        left: -1px;
        bottom: -1px;
      }
      &:nth-of-type(4) {
        transform: rotate(90deg);
        right: -1px;
        bottom: -1px;
      }
    }
  }
  &:hover {
    cursor: url("@/assets/image/Ghost.cur"), auto;
    .cobweb {
      width: 45%;
    }
    .spider {
      top: 0;
    }
    h3 {
      transform: scale(1.01);
      font-weight: bold;
    }
  }
}
</style>