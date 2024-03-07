<template>
  <section class="base-table">
    <header class="base-table__header">
      <h2 class="base-table__title" v-if="title">
        <!-- @slot Title: Define table section title -->
        <slot name="title"></slot>
      </h2>
    </header>
    <section class="base-table__overflow">
      <table class="base-table__display">
        <thead class="base-table__head">
          <tr>
            <th v-for="key in head" :key="key">
              <!-- @slot Head: Set table heading -->
              <slot :property="key" name="head"></slot>
            </th>
          </tr>
        </thead>
        <tbody class="base-table__body">
          <tr v-for="row in body" :key="row.id">
            <td v-for="{ value, id } in row.values" :key="id">
              <!-- @slot Cell: Set table cells contents -->
              <slot :property="{ value }" name="cell"></slot>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </section>
</template>
<script setup lang="ts">
import { useSlots } from "vue";
import type { IRowValues } from "./interfaces";

const { title } = useSlots();

export interface ITableHead {
  head: string[];
  body: IRowValues[];
}

withDefaults(defineProps<ITableHead>(), {
  /**
   * Set table heading
   */
  head: () => [],
  /**
   * Set table body content
   */
  body: () => [],
});
</script>
<style lang="scss" src="./BaseTable.scss" />
