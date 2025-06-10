<template>
  <h4>a：{{ a }}</h4>
  <Child :a="a" v-bind="{x:100,y:200}" :updateA="updateA"/>
</template>

<script setup >
import {ref} from 'vue'
import Child from './vue-message4-1.vue'

let a = ref(1)

function updateA(value) {
a.value += value
}
</script>