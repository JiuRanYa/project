<template>
  <main class="p-4 border border-indigo-600 m-4">
    <StyleProvider hashPriority="high">
      <router-view></router-view>
    </StyleProvider>
  </main>
</template>

<script setup lang="ts">
import { StyleProvider } from "ant-design-vue/es/_util/cssinjs";
</script>
