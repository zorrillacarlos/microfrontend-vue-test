# Microfrontend Test Project

This project is an example of a microfrontend architecture, where each microfrontend is developed, built, and deployed independently, and a layout project assembles them all together.

## Project Structure

The project is divided into several microfrontends and a main layout project that integrates them. Each resides in its own directory and has its own set of dependencies.

## Prerequisites

Before getting started, make sure you have [Node.js](https://nodejs.org/) and npm installed on your system. These tools are necessary for installing dependencies, building, and running the projects.

## Installation

To get the project up and running, follow these steps:

### 1. Install Dependencies

You'll need to install dependencies for each microfrontend and the layout project. Navigate to each directory and run:

```bash
npm install
```

Repeat this step for each microfrontend and for the layout project.

### 2. Build and Preview Microfrontends

To build and preview each microfrontend, navigate to the respective directory and execute:

```bash
npm run build
npm run preview
```

This will compile the microfrontend and make it available for preview.

### 3. Run the Layout Project

To start the layout project, which integrates all the microfrontends, navigate to the layout directory and run:

```bash
npm run dev
```

This will start a local development server, and you'll be able to see the complete project in action.

## Adding a New Microfrontend

To add a new microfrontend to the ecosystem, follow these steps:

1. **Create a New Microfrontend**: Generate a new project or directory for your microfrontend. Make sure it's configured to use Vite and `vite-plugin-federation`.

2. **Configure `vite-plugin-federation`**: In the `vite.config.js` file of your new microfrontend, configure `vite-plugin-federation` to expose the modules or components you want to share.

   ```typescript
   // vite.config.ts of the microfrontend
   import { defineConfig } from 'vite';
   import federation from 'vite-plugin-federation';

   export default defineConfig({
     plugins: [
       federation({
         name: 'your_microfrontend',
         filename: 'remoteEntry.js',
         exposes: {
           './Component': './src/Component.vue',
         },
         shared: ['vue'],
       }),
     ],
   });
   ```

### Change Ports

Define preview in the package.json of the microfrontend with your port.

```json
  "preview": "vite preview --port 5002 --strictPort"
```

(In this case, the microfrontend will run the preview on port 5003)

### Install Dependencies and Build

Navigate to your new microfrontend directory and execute `npm install` followed by `npm run build` and `npm run preview`.

### Update the Layout

Go to the layout project and update its configuration to include the new microfrontend. This usually involves updating the `vite.config.js` file to consume the new `remoteEntry.js`.

```typescript
// vite.config.ts of the layout
import { defineConfig } from 'vite';
import federation from 'vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      remotes: {
        your_microfrontend: 'http://localhost:5003/assets/remoteEntry.js',
      },
      shared: ['vue'],
    }),
  ],
});
```

### Run the Layout

Start the layout project with `npm run dev`. Now you should be able to use the components from the new microfrontend within the layout.

## Integrating Components into the Layout

To integrate components from other microfrontends into your layout, follow these steps:

### Import the Component

- Inside `remote.d.ts`

Declare the module for a new microfrontend.

```typescript
declare module "microfrontend-3/*" {}
```

- Inside the layout's `.vue` file

Import the new component.

```javascript
import NewComponent from "microfrontend-3/NewComponent";
```

### Use the Component

Once imported, you can use the component as you would with any other Vue component.

```html
<NewComponent msg="New message" />
```

### Run and Test

Start your layout project with `npm run dev` and verify that the component loads and functions correctly within your application.

Remember that the URLs and component names must match the configuration of your project and the ports on which your microfrontends run.