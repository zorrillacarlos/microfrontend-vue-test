<template>
  <div>
    <BaseTable :head="tableHead" :body="tableBody">
      <!-- Define el título de la tabla -->
      <template v-slot:title>
        {{ title }}
      </template>
      
      <!-- Define el encabezado de la tabla -->
      <template v-slot:head="{ property }">
        {{ property }}
      </template>
      
      <!-- Define el contenido de las celdas de la tabla -->
      <template v-slot:cell="{ property }">
        {{ property.value }}
      </template>
    </BaseTable>
  </div>
</template>

<script setup lang="ts">
import BaseTable from './BaseTable.vue'; // Asegúrate de que la ruta del archivo sea correcta
import { ref } from 'vue';

// Datos de ejemplo para la tabla
const tableHead = ref(['Nombre', 'Correo', 'Edad']);
const tableBody = ref([
  { id: '1', values: [
      { id: 'name', value: 'Juan' }, 
      { id: 'email', value: 'juan@example.com' }, 
      { id: 'age', value: '30' }
    ]
  },
  { id: '2', values: [
      { id: 'name2', value: 'Carlos' }, 
      { id: 'email', value: 'carlos@example.com' }, 
      { id: 'age', value: '20' }
    ]
  },
  { id: '3', values: [
      { id: 'name3', value: 'Pedro' }, 
      { id: 'email', value: 'pedro@example.com' }, 
      { id: 'age', value: '35' }
    ]
  },
  { id: '4', values: [
      { id: 'name4', value: 'Andrea' }, 
      { id: 'email', value: 'andrea@example.com' }, 
      { id: 'age', value: '26' }
    ]
  },
  { id: '5', values: [
      { id: 'name5', value: 'Mariany' }, 
      { id: 'email', value: 'mariany@example.com' }, 
      { id: 'age', value: '32' }
    ]
  }
]);
const title = ref('Tabla Maestro');
</script>
