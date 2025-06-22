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
  securityJsCode:"46c9ed4e2d25a0e0ee7c883fd5b1a0c8"
})

</script>
