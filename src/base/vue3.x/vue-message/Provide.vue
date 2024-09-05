<template>
  <div>{{ parentData }}</div>
  <ChildComponent></ChildComponent>
</template>

<script setup>
import {ref, reactive, provide} from 'vue'
import ChildComponent from './ProvideChildCompone.vue';
let money = ref(100)
let car = reactive({
  brand: '宝马',
  price: 10
})
function updateMoney(value) {
  money.value -= value
}
// 向后代提供数据
provide('moneyContext', {money, updateMoney})
provide('car', car)
</script>