<template>
  <h2 class="title-card">Ficha de Unidad</h2>
  <div class="base-card">
    <div v-if="isLoading" class="loader">
      <span>Loading...</span>
    </div>
    <article v-else :class="{ 'fade-in': !isLoading }">
      <header class="base-card__header">
        <h4 class="base-card__title" v-if="hasTitleSlot">
          <!-- @slot Title: Set card title -->
          <slot name="title"></slot>
        </h4>
      </header>
      <div class="base-card__body" v-if="hasBodySlot">
        <!-- @slot Text: Set card text -->
        <slot name="body"></slot>
      </div>
    </article>
  </div>
</template>

<script setup lang="ts">
import { ref, useSlots } from 'vue'

const isLoading = ref(true)
const { title, body } = useSlots()

// Simulación de carga de datos
setTimeout(() => {
  isLoading.value = false
}, 500)

const hasTitleSlot = !!title
const hasBodySlot = !!body
</script>

<style lang="scss" src="./BaseCard.scss" />
