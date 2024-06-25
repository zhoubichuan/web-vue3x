<template>
  <div>{{ car.brand + car.price }}</div>
</template>

<script setup >
import { inject } from "vue";

let { money, updateMoney } = inject("moneyContext", {
  money: 0,
  updateMoney: (param) => {},
});
let car = inject("car", { brand: "未知", price: 0 });
</script>