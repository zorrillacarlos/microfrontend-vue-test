<template>
  <div>
    <p>SOY LA VISTA PRNCIPAL DEL LAYOUT</p>
    <Microfrontend1 msg="Nuevo mensaje" />
    <ButtonMicrofrontend2 />
  </div>
</template>

<script setup lang="ts">
import Microfrontend1 from "microfrontend-1/NuevoComponente";
import ButtonMicrofrontend2 from "microfrontend-2/ButtonCounter";
</script>

<style scoped></style>
