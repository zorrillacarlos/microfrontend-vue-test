<script setup lang="ts">
import NuevoComponente from './components/NuevoComponente.vue'
</script>

<template>
  <NuevoComponente msg="HOLA SOY EL MICROFRONTEND 1 y estoy haciendo un cambio" /> 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
