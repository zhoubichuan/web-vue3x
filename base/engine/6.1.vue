<template>
    <ul>
      <li
        v-for="(item, index) in nav"
        :key="index"
        @click="goNav(item)"
        v-text="item.name"
      ></li>
    </ul>
  </template>
  <script>
  export default {
    data() {
      return {
        nav: [
          {
            name: "首页",
            route: "index",
            type: "index",
          },
          {
            name: "文章",
            route: "article",
            type: "article",
          },
          {
            name: "关于",
            route: "about",
            type: "about",
          },
        ],
      }
    },
    methods: {
      goNav(item) {
        this.$emit("count", item) // 触发回调
      },
    },
  }
  </script>