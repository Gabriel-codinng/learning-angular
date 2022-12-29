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

# Guía 🗺

## 1. Configurar el entorno local y el espacio de trabajo 🛠.

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

## 2. Crear un espacio de trabajo y una aplicación inicial 🗃.

Para crear un nuevo espacio de trabajo y una aplicación inicial (un proyecto de Angular).

1.  Ejecute el comando CLI **ng new** y proporcione un nombre al proyecto:

    ```
    ng new my-app
    ```

    El comando **ng new **solicitará información sobre las características del proyecto, seleccione las que requiera con la tecla Enter o Return.

2.  Ejecutar la aplicación.

    El CLI de Angular incluye un servidor que permite desplegar localmente la aplicación:

    ```
    ng serve --open
    ```

    El comando **ng serve** inicia el servidor, a medida que se actualizan los archivos, construye la aplicación según los cambios aplicados.

    la opción **- -open** abre una nueva pestaña en el navegador hacia la dirección del servidor local: **http://localhost:4200/**

# Estructura de carpetas 📁.

La carpeta que hay que resaltar es la llamada **“src”**, contiene el código fuente de la aplicación**.**

📁src

- 📁app

        Este directorio almacena los distintos componentes que se desarrollen en la aplicación.

  - 📋 **app.component.css**

          Define los estilos a representar en la plantilla html por medio de las etiquetas, clases o identificadores.

  - 📋 **app.component.html**

          Define la estructura html del componente, a modo de plantilla.

  - 📋 **app.component.spec.ts**

          Sirve para realizar testing sobre el componente.

  - 📋 **app.component.ts**

          Este archivo define al componente (sus propiedades) que se renderizará en la página web.

  - 📋 **app.module.ts**

          Un archivo que agrupa la información de los archivos que necesita el componente.

- 📁 **assets**

        Directorio utilizado para almacenar todos los archivos estáticos de la aplicación, por ejemplo imágenes.

- 📋 **favicon.ico**

        Icono que aparece en la pestaña de la página.

- 📋 **index.html**

        Es el único punto de ingreso de la aplicación, cuando un usuario accede a la dirección del servidor, este devuelve como respuesta el archivo html que define la estructura de la aplicación.

- 📋 **main.ts**

        Junto al archivo html, inicializa la aplicación con el módulo (componente) indicado.

- 📋 **styles.css**

        Archivo que define los estilos globales de la aplicación.

# Creación de componentes 📦.

Para poder crear un componente con el CLI de Angular, debemos ejecutar el siguiente comando en consola.

```
ng generate component nombre_componente
```

O de forma abreviada

```
ng g c nombre_componente
```

Destacar que el componente app es el elemento raíz de nuestra aplicación, al generar un nuevo componente, Angular automáticamente importa el componente creado en el módulo del app componente para poder utilizarlo dentro de este mismo.

```
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# Interpolacion ↔.

La interpolación es la habilidad o capacidad de sustituir una ezpresión por un valor en la plantilla, cuando Angular encuentra "{{}}" en la plantilla, sustituye el contenido que hay en el interior de las llaves, por el valor de la propiedad del componente.

Un ejemplo sencillo dentro del componente recientemente creado:

```
export class ContadorComponent {
  nombre = "Gabriel Correia"
}
```

Dentro de la clase que define nuestro componente, generamos una variable con un valor por defecto.

```
<h1>Contador creado por: {{ nombre }}</h1>
```

Luego, en la plantilla html, referenciamos entre llaves, la variable que definimos previamente en la clase del componente.

Esto arrojará como resultado:

```
Contador creado por: Gabriel Correia
```

<div style="background-color:#F4F186; border-radius:10px; padding:10px; color:#EDAE0F">
        <strong>ADVERTENCIA: </strong>
        No se pueden acceder a las propiedades de otros componentes por interpolación, aun siendo estos los componentes padres.
</div>

# Enlace de Eventos 📞.

Los eventos nos permiten ejecutar una acción cuando un usuario realiza algún tipo de interacción con la aplicación.

Por ejemplo:

El componente contador es un componente simple que reflejara unas acciones claras:

- Sumar.
- Restar.
- Enseñar el valor.

Para mostrar el valor usaremos la interpolación, pero para incrementar o decrementar su valor según lo desea el usuario, el usuario deberá interactuar con dos botones.

```
<button>+</button>
<button>-</button>
```

Una vez definidos los botones en la plantilla html de nuestro componente, ingresaremos dentro de sus etiquetas un parentesis, consecuentemente podremos seleccionar varios eventos que Angular nos ofrece, en este caso solo deseamos saber si el usuario hace click a un botón.

```
<button (click)="">+</button>
<button (click)="">-</button>
```

Para mantener un código más limpio, haremos que los botones ejecuten un metódo definido en la clase del componente

```
export class ContadorComponent {
  nombre:string = "Gabriel Correia"
  value:number = 0

  // Métodos
  decrementar() {
    this.value--
  }

  incrementar(){
    this.value++
  }
}

```

Luego asociamos los evenetos a sus correspodientes metodos, y ahí lo tendríamos.

```
<button (click)="incrementar()">+</button>
<button (click)="decrementar()">-</button>
```

# Enlace de Clases 📞.

Hay circunstancias en donde precisaremos de editar la clase de un elemento HTML para **cambiar su estilo**.

Para eso, Angular ofrece una sintaxis particular para acceder a la clase de una etiqueta HTML con los corchetes "[]"

Por ejemplo, deseamos cambiar el color de un texto dependiendo del botón al que pulsemos, una variable "color" registrará mediante el enlace de eventos que botón se pulso, y por lo tantó, el color que se quiere aplicar al texto.

Para que la clase pueda ser manipulable, debemos agregar los siguientes elementos.

```
<p [class]="color">Texto que va cambiar de color</p>
```

Angular interpretará que **la clase del elemento "p" esta asociada al valor de la variable "color"**, posibilitando que la clase sea dinámica.

Habrá momentos en los que deseemos agregar más de una clase a la etiqueta.

Para ello, podemos resolverlo de dos maneras:

1. Concatenar con un "." en el "[class]" y añadiendo la clase que deseamos <br>

```
<p [class.fondo]="condicion" class="color">Texto que va cambiar de color</p>
```

2. Asignar un objeto con todas las clases que deseemos asignar

```
<p [class]="{
        'color1': condicion,
        'color2': condicion,
}" class="color">
        Texto que va cambiar de color
</p>
```

Otra sintaxis que se puede observar al acceder al atricuto clase a través de los corchetes es **"[ngClass]"**

# Enlace de Propiedades 📞.

Anteriomente observamos que para interactuar de manera dinámica a la propiedad "class" de una etiqueta, ponemos [].

Pues para acceder a cualquiera propiedad que deseamos sea dinámica, debemos agregar los [].

Por ejemplo:

Queremos que cuando la variable "button_disabled" sea verdadero, deshabilite el botón.

```
<button [disabled]="button_disabled">Acción</button>
```

# Variable de plantilla

Una variable de referencia de plantilla es una referencia a un elemento del DOM dentro de la plantilla, es equivalente a un "id" o a la propiedad "name".

Para declararlas se utiliza el prefijo **"#"** o **"ref-"**.

Ejemplo:

Necesitamos identificar un input para acceder a su valor cuando realicemos carguemos el formulario.

```
<input type="text" placeholder="Ingresa un nombre" #name />

<button (click)="metodo(name.value)">Submit</button>
```

# Directiva ngIf / Else

La directiva **"\*ngIf"** determina si un elemento se renderiza, hasta el punto en el que si su condición da como resultado "false", este no ocultará el elemento, lo eliminará del DOM.

Ejemplo:

Queremos renderizar un mensaje de alerta cuando alguién pulse el botón para enviar el formulario. En el método que que ejecuta el botón vamos a indicarle una variables "openAlert" booleano para que cambie su valor a true cuando se dispare el evento.

```
<div class="alert" *ngIf="openAlert">
    <p>El resultado se muestra por consola</p>
    <button class="cancel" (click)="openAlert = !openAlert">
        X
    </button>
  </div>
```

Evaluamos la condición si "openAlert" es verdadero, mostramos el contenido del contenedor.

Pero si queremos mostrar algo en caso de que "openAlert" sea falso, aplicamos el segundo condicional "else".

```
<div class="alert" *ngIf="openAlert; else mensaje">
    <p>El resultado se muestra por consola</p>
    <button class="cancel" (click)="openAlert = !openAlert">
        X
    </button>
</div>

<!-- Es un elemento de angular para renderizar HTML, nunca se despliega directamente -->
<ng-template #mensaje>
   Mensaje de prueba renderizado por "else"
</ng-template>
```

Si "openAlert" es falso, etonces muestra el mensage generado por el elemento de Angular.

# Directiva ngFor

Directiva que nos permite iterar una lista de elementos, bastante sencillo.

```
export class BuclesComponent {
  personas: Persona[] = [
    {nombre:'Ainhoa', edad: 19},
    {nombre:'Gabriel', edad: 25},
    {nombre:'Jorge', edad: 32},
    {nombre:'Paco', edad: 69},
  ]
}

<ul>
   <li *ngFor="let persona of personas; let i = index">
        <p>{{i + 1}} - Nombre: {{persona.nombre}}, edad: {{persona.edad}}</p>
   </li>
</ul>
```

A una variable local **"persona"** le asignamos el elemento del array **"personas"** que esta siendo iterado, ya que es un objeto, para acceder a la información debemos acceder a traves de sus propiedades.

Opcionalmente se puede asigar a una variable local, el indice del elemento actual si se desea.

# Directiva ngSwitch

La directiva ngSwitch compara un valor con una lista de opciones, pudiendo dejar un caso por defecto si no encuentra una opción disponible.

Ejemplo:

Se desea asociar el valor de la variable "dia", con un día de la semana, para eso establecemos un valor número para cada días (1 = Lunes, 2 = Martes, etc...)

Según el valor númerico asignado a "día", se mostrará un día de la semana en la pantalla. 

```
<div [ngSwitch]="dia">
        <span *ngSwitchCase="1">Lunes</span>
        <span *ngSwitchCase="2">Martes</span>
        <span *ngSwitchCase="3">Miércoles</span>
        <span *ngSwitchCase="4">Jueves</span>
        <span *ngSwitchCase="5">Viernes</span>
        <span *ngSwitchCase="6">Sabado</span>
        <span *ngSwitchCase="7">Domingo</span>
        <span *ngSwitchDefault>Valor no valido</span>
</div>
```

<div style="background-color:#F4F186; border-radius:10px; padding:10px; color:#EDAE0F">
        <strong>ADVERTENCIA: </strong>
        Para poder evaluar una cadena de texto (un string), se deben utilizar las comillas simples: '' 
</div>