<template>
  <div id="app">
    <BaseCard>
      <template #title>
        Titulo de la Ficha
        <IconInfo />
      </template>
      <template #body>
        <p>Este es el contenido de la Ficha</p>
      </template>
    </BaseCard>
  </div>
</template>

<script setup lang="ts">
import BaseCard from './BaseCard.vue'
import IconInfo from '../../icons/IconFeedbackInfo.vue'
</script>
