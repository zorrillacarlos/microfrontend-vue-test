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
