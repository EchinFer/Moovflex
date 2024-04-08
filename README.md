# Moovflex

Este proyecto utiliza varias optimizaciones en React para mejorar el rendimiento y la eficiencia. A continuación se detallan algunas de las optimizaciones utilizadas:

## useMemo

La función `useMemo` se utiliza para memorizar el resultado de una función costosa en términos de rendimiento. Esto ayuda a evitar cálculos innecesarios en cada renderizado.

## Code Splitting

El code splitting es una técnica utilizada en React para dividir el código de la aplicación en partes más pequeñas y cargar solo lo necesario en cada momento. Esto mejora el tiempo de carga de la aplicación y la experiencia del usuario al reducir el tamaño inicial del archivo JavaScript.

React proporciona varias formas de implementar el code splitting, como el uso de la función `React.lazy` mencionada anteriormente, o utilizando herramientas como Webpack o Parcel.

En el proyecto Moovflex, se utiliza el code splitting de React para cargar los componentes de forma diferida y optimizar el rendimiento de la aplicación.

## React Lazy

`React.lazy` es una función que permite cargar componentes de forma diferida (lazy loading). Esto mejora el tiempo de carga inicial de la aplicación al cargar solo los componentes necesarios cuando se requieren.

## Tanstack Query

Tanstack Query es una biblioteca que proporciona una solución completa para la gestión del estado y las solicitudes de datos en aplicaciones React. Se utiliza para optimizar las solicitudes de datos y mejorar la experiencia del usuario.

## Material-UI (MUI)

Material-UI es una biblioteca de componentes de interfaz de usuario (UI) que se utiliza para crear una interfaz de usuario atractiva y coherente en el proyecto. Proporciona componentes predefinidos y estilos personalizables.

## Vite y React

Vite es un entorno de desarrollo rápido y optimizado para aplicaciones web. Se utiliza junto con React para mejorar el tiempo de compilación y el rendimiento general del proyecto.

## Instalación y ejecución

Sigue estos pasos para instalar y ejecutar el proyecto:

1. Ejecuta `npm install` para instalar las dependencias.
2. Luego, ejecuta `npm run build` para compilar el proyecto.
3. Finalmente, ejecuta `npm run preview` para previsualizar la aplicación.

¡Listo! Ahora puedes disfrutar de las optimizaciones de React en el proyecto Moovflex.
