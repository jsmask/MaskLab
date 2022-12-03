<template>
  <div class="header">
      <img class="icon" src="@/assets/image/icon.svg" @click="handleBackHome" />
      <div class="title">{{title}}</div>

      <div>
        <a href="https://github.com/jsmask" target="_blank"><img src="@/assets/image/github.svg" /></a>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter()
let title = ref("MaskLab")
let back = ref(false)
if (route.name == "home") {
  title.value = "MaskLab"
  back.value = false;
} else {
  title.value = String(route.name);
  back.value = true;
}
function handleBackHome() {
  if (back.value) {
    router.back();
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 60px;
  background-color: black;
  position: relative;
  display: flex;
  box-sizing: border-box;
  padding: 0 15px;
  align-items: center;
  box-shadow: 0px 2px 25px rgba(0, 0, 0, 0.1);

  .icon {
    margin-right: 5px;
    cursor: url("@/assets/image/Ghost.cur"), auto;
  }

  .title {
    font-family: "Lunacy", sans-serif;
    font-size: 32px;
    color: #ff6d00;
    margin-right: auto;
    vertical-align: middle;
    position: relative;
    top: 7px;
    cursor: default;
  }
}
</style>