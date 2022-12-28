# learning-angular

First project to learn how to develop a frontend project with angular

# <span style="text-decoration:underline;">Aprendiendo Angular</span>

## Versiones:

<table>
  <tr>
   <td>
<ul>
<li>
    Angular CLI: 15.0.4
</li>
<li>
    Node: 18.10.0
</li>
<li>
    Package Manager: npm 8.12.1
</li>
</ul>
   </td>
   <td style="display:flex; align-items:center">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" width="100" alt="" title="image_tooltip">
    <img src="https://midu.dev/images/tags/node.png" width="90" alt="alt_text" title="image_tooltip">
    <img style="margin-left:10px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" width="100" alt="alt_text" title="image_tooltip">

   </td>
  </tr>
</table>

<table>
  <tr>
   <td>Paquetes
   </td>
   <td>Versiones
   </td>
  </tr>
  <tr>
   <td>@angular-devkit/architect
   </td>
   <td>0.1500.4
   </td>
  </tr>
  <tr>
   <td>@angular-devkit/build-angular
   </td>
   <td>15.0.4
   </td>
  </tr>
  <tr>
   <td>@angular-devkit/core
   </td>
   <td>15.0.4
   </td>
  </tr>
  <tr>
   <td>@angular-devkit/schematics
   </td>
   <td>15.0.4
   </td>
  </tr>
  <tr>
   <td>@schematics/angular
   </td>
   <td>15.0.4
   </td>
  </tr>
  <tr>
   <td>rxjs
   </td>
   <td>7.5.7
   </td>
  </tr>
  <tr>
   <td>typescript
   </td>
   <td>4.8.4
   </td>
  </tr>
</table>

---

## Descripción de angular:

Angular se define como un marco de trabajo (framework) para el diseño de aplicaciones y una plataforma de desarrollo para crear aplicaciones de una sola página (SPA).

Una SPA es una forma de desarrollo web en la que la página web es una sola página, carga una única vez un archivo HTML, y posterior a eso, renderiza y actualiza su contenido sin necesidad de cargar el nuevo contenido o solicitar un nuevo archivo del servidor.

Angular está construido sobre **TypeScript** (lenguaje de programación altamente tipado basado en JavaScript).

Angular incluye:

- **Un marco de trabajo basado en componentes** para crear aplicaciones web escalables.
- Una gran cantidad de bibliotecas que cubren varias funciones, como: **enrutamiento, gestión de formularios, comunicación cliente-servidor** y más.
- Un conjunto de herramientas para compilar, probar y actualizar el código.

---

# Guía

## 1.  Configurar el entorno local y el espacio de trabajo.

Para configurar el entorno de trabajo para el desarrollo de Angular, es conveniente utilizar la herramienta **Angular CLI.**

La **CLI de Angular** es un herramienta de interfaz de línea de comandos utilizada para: **inicializar, desarrollar, montar y mantener** aplicaciones de angular desde un shell de comandos.

Para instalar el CLI mediante el administrador de paquetes, se utiliza el comando:

```
npm install -g @angular/cli
```

Para invocar la herramienta en línea de comandos, se utiliza el ejecutable **ng.**


Si se está trabajando sobre el sistema operativo Windows, la ejecución de scripts en está por defecto, deshabilitada, para poder ejecutar scripts de configurar la siguiente de ejecución:

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

## 2.  Crear un espacio de trabajo y una aplicación inicial.

Para crear un nuevo espacio de trabajo y una aplicación inicial (un proyecto de Angular).

1.  Ejecute el comando CLI **ng new** y proporcione un nombre al proyecto:

    ```
    ng new my-app
    ````
    El comando **ng new **solicitará información sobre las características del proyecto, seleccione las que requiera con la tecla Enter o Return.

2.  Ejecutar la aplicación.

    El CLI de Angular incluye un servidor que permite desplegar localmente la aplicación:
    ```
    ng serve --open
    ````

    El comando **ng serve** inicia el servidor, a medida que se actualizan los archivos, construye la aplicación según los cambios aplicados.


    la opción **- -open** abre una nueva pestaña en el navegador hacia la dirección del servidor local: **http://localhost:4200/**
