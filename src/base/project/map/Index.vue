<template>
  <div id="map">
    <GaoDeMap :statrAddress="[113.539333, 22.242564]" />
  </div>
</template>

<script lang="ts" setup>
import GaoDeMap from "./GaoDeMap.vue";
import { provide } from 'vue'
provide('config', {
  KEY: "d9cf1aecd24ace311610b32cabceae98",
  sid: "1050136",
  securityJsCode:""
})

</script>
