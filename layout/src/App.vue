<template>
  <div class="main-layout">
    <div class="main-layout__sidebar">
      <Header />
    </div>
    <div class="main-layout__header">
      <h4>Header Layout</h4>
    </div>
    <div class="main-layout__content">
      <router-view> </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView, RouterLink } from "vue-router";
import Header from "./components/Header.vue";

export default defineComponent({
  components: {
    RouterLink,
    RouterView,
    Header,
  },
});
</script>

<style lang="scss">
.main-layout {
  display: grid;
  grid-template-columns: 2fr 10fr;
  grid-template-rows: 80px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar content";

  height: 100vh;
  &__sidebar {
    grid-area: sidebar;
    background-color: var(--color-primary-10, #000);
    padding: 2rem;
    padding-top: 6rem;
  }

  &__header {
    grid-area: header;
    background-color: var(--color-primary-20, #000);
    display: flex;
    padding: 2rem;
    align-items: center;
    justify-content: end;
  }

  &__content {
    grid-area: content;
    background-color: #ffffff;
    padding: 2rem;
  }
}
</style>
