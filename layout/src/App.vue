<template>
  <div>
    <Header />
    <router-view> </router-view>
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
