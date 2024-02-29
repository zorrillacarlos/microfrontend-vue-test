<template>
  <div>
    <p>SOY LA VISTA PRNCIPAL DEL LAYOUT</p>
    <NuevoComponente msg="Nuevo mensaje" />
    <ButtonCounter />
  </div>
</template>

<script setup lang="ts">
import NuevoComponente from "microfrontend-1/NuevoComponente";
import ButtonCounter from "microfrontend-2/ButtonCounter";
</script>

<style scoped></style>
