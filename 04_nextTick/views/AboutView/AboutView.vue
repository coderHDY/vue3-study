<script setup lang="ts">
import { ref, watch, onMounted, nextTick } from "vue";

const count = ref(0);

const add = () => {
  count.value++;
  const c = document.getElementById("count")?.innerText;
  console.log(`总是慢一个状态：${c}`);
};
const del = async () => {
  count.value--;

  await nextTick();
  const c = document.getElementById("count")?.innerText;
  console.log(`正确的当前状态：${c}`);
};
</script>

<template>
  <div>
    <h1 id="count">{{ count }}</h1>
    <div class="transBtn">
      <div>
        <button @click="add">+1</button>
      </div>
      <div>
        <button @click="del">-1</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.transBtn {
  margin-top: 10px;
  button {
    margin-right: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #dbe4dc;
  }
}
</style>
