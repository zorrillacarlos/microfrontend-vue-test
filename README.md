# Proyecto Test de Microfrontend

Este proyecto es un ejemplo de arquitectura de microfrontend, donde cada microfrontend se desarrolla, construye y despliega de manera independiente, y un proyecto de layout los ensambla todos juntos.

## Estructura del Proyecto

El proyecto está dividido en varios microfrontends y un proyecto de layout principal que los integra. Cada uno reside en su propio directorio y tiene su propio conjunto de dependencias.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) y npm en tu sistema. Estas herramientas son necesarias para instalar dependencias, construir y ejecutar los proyectos.

## Instalación

Para poner en marcha el proyecto, sigue estos pasos:

### 1. Instalar Dependencias

Deberás instalar las dependencias de cada microfrontend y del proyecto de layout. Navega a cada directorio y ejecuta:

```bash
npm install
Repite este paso para cada microfrontend y para el proyecto de layout.

2. Construir y Visualizar Microfrontends
Para construir y visualizar cada microfrontend, navega al directorio correspondiente y ejecuta:

npm run build
npm run preview
Esto compilará el microfrontend y lo pondrá a disposición para ser visualizado.

3. Ejecutar el Proyecto de Layout
Para iniciar el proyecto de layout, que integra todos los microfrontends, navega al directorio del layout y ejecuta:

npm run dev
Esto iniciará un servidor de desarrollo local y podrás ver el proyecto completo en acción.
```

# Agregar un Nuevo Microfrontend

Para agregar un nuevo microfrontend al ecosistema, sigue estos pasos:

1. **Crear un nuevo Microfrontend**: Genera un nuevo proyecto o directorio para tu microfrontend. Asegúrate de que esté configurado para usar Vite y `vite-plugin-federation`.

2. **Configurar `vite-plugin-federation`**: En el archivo `vite.config.js` de tu nuevo microfrontend, configura `vite-plugin-federation` para exponer los módulos o componentes que desees compartir.

   ```typescript
   // vite.config.ts del microfrontend
   import { defineConfig } from 'vite';
   import federation from 'vite-plugin-federation';

   export default defineConfig({
     plugins: [
       federation({
         name: 'tu_microfrontend',
         filename: 'remoteEntry.js',
         exposes: {
           './Componente': './src/Componente.vue',
         },
         shared: ['vue'],
       }),
     ],
   });

## Cambiar Puertos: 
Definir preview en el package.json del microfrontend con tu puerto ej.

```json
"vite preview --port 5003 --strictPort"

(en este caso el microfrontend se ejecutara el preview en el puerto 5003)

## Instalar Dependencias y Construir: 
Navega al directorio de tu nuevo microfrontend y ejecuta npm install seguido de npm run build y npm run preview

## Actualizar el Layout: 

Ve al proyecto de layout y actualiza su configuración para incluir el nuevo microfrontend. Esto generalmente implica actualizar el archivo vite.config.js para consumir el nuevo remoteEntry.js.

```typescript
// vite.config.ts del layout
import { defineConfig } from 'vite';
import federation from 'vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      remotes: {
        tu_microfrontend: 'http://localhost:5003/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
});
```

## Ejecutar el Layout: 

Inicia el proyecto de layout con npm run dev. Ahora deberías poder utilizar los componentes del nuevo microfrontend dentro del layout.

Integrar Componentes en el Layout
Para integrar componentes de otros microfrontends en tu layout, sigue estos pasos:

## Importar el Componente:

- Dentro de remote.d.ts
En el archivo remote.d.ts se debe declarar el modulo para un nuevo microfrontend, ej.

declare module "microfrontend-3/*"{}

- Dentro del .vue del layout

import NuevoComponente from "microfrontend-3/NuevoComponente"; (en script)

## Usar el Componente: 

Una vez importado, puedes utilizar el componente como lo harías con cualquier otro componente Vue.

<NuevoComponente msg="Nuevo mensaje" /> (en template reciendo un props en caso lo requiera)

## Ejecutar y Probar: 

Inicia tu proyecto de layout con npm run dev y verifica que el componente se carga y funciona correctamente dentro de tu aplicación.

Recuerda que las URLs y nombres de los componentes deben coincidir con la configuración de tu proyecto y los puertos en los que se ejecutan tus microfrontends.