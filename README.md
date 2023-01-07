# learning-angular

First project to learn how to develop a frontend project with angular

# <span style="text-decoration:underline;">Aprendiendo Angular</span>

## Versiones

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

## Descripción de angular

Angular se define como un marco de trabajo (framework) para el diseño de aplicaciones y una plataforma de desarrollo para crear aplicaciones de una sola página (SPA).

Una SPA es una forma de desarrollo web en la que la página web es una sola página, carga una única vez un archivo HTML, y posterior a eso, renderiza y actualiza su contenido sin necesidad de cargar el nuevo contenido o solicitar un nuevo archivo del servidor.

Angular está construido sobre **TypeScript** (lenguaje de programación altamente tipado basado en JavaScript).

Angular incluye:

- **Un marco de trabajo basado en componentes** para crear aplicaciones web escalables.
- Una gran cantidad de bibliotecas que cubren varias funciones, como: **enrutamiento, gestión de formularios, comunicación cliente-servidor** y más.
- Un conjunto de herramientas para compilar, probar y actualizar el código.

---

## Guía 🗺

## 1. Configurar el entorno local y el espacio de trabajo 🛠

Para configurar el entorno de trabajo para el desarrollo de Angular, es conveniente utilizar la herramienta **Angular CLI.**

La **CLI de Angular** es un herramienta de interfaz de línea de comandos utilizada para: **inicializar, desarrollar, montar y mantener** aplicaciones de angular desde un shell de comandos.

Para instalar el CLI mediante el administrador de paquetes, se utiliza el comando:

```bash
npm install -g @angular/cli
```

Para invocar la herramienta en línea de comandos, se utiliza el ejecutable **ng.**

Si se está trabajando sobre el sistema operativo Windows, la ejecución de scripts en está por defecto, deshabilitada, para poder ejecutar scripts de configurar la siguiente de ejecución:

```bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

---

## 2. Crear un espacio de trabajo y una aplicación inicial 🗃

Para crear un nuevo espacio de trabajo y una aplicación inicial (un proyecto de Angular).

1. Ejecute el comando CLI **ng new** y proporcione un nombre al proyecto:

    ```bash
    ng new my-app
    ```

    El comando **ng new**solicitará información sobre las características del proyecto, seleccione las que requiera con la tecla Enter o Return.

2. Ejecutar la aplicación.

    El CLI de Angular incluye un servidor que permite desplegar localmente la aplicación:

    ```bash
    ng serve --open
    ```

    El comando **ng serve** inicia el servidor, a medida que se actualizan los archivos, construye la aplicación según los cambios aplicados.

    la opción **- -open** abre una nueva pestaña en el navegador hacia la dirección del servidor local: **<http://localhost:4200/>**

---

## Estructura de carpetas 📁

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

---

## Creación de componentes 📦

Para poder crear un componente con el CLI de Angular, debemos ejecutar el siguiente comando en consola.

```bash
ng generate component nombre_componente
```

O de forma abreviada

```bash
ng g c nombre_componente
```

Destacar que el componente app es el elemento raíz de nuestra aplicación, al generar un nuevo componente, Angular automáticamente importa el componente creado en el módulo del app componente para poder utilizarlo dentro de este mismo.

```js
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

---

## Interpolacion ↔

La interpolación es la habilidad o capacidad de sustituir una ezpresión por un valor en la plantilla, cuando Angular encuentra "{{}}" en la plantilla, sustituye el contenido que hay en el interior de las llaves, por el valor de la propiedad del componente.

Un ejemplo sencillo dentro del componente recientemente creado:

```js
export class ContadorComponent {
  nombre = "Gabriel Correia"
}
```

Dentro de la clase que define nuestro componente, generamos una variable con un valor por defecto.

```html
<h1>Contador creado por: {{ nombre }}</h1>
```

Luego, en la plantilla html, referenciamos entre llaves, la variable que definimos previamente en la clase del componente.

Esto arrojará como resultado:

```text
Contador creado por: Gabriel Correia
```

ADVERTENCIA:
No se pueden acceder a las propiedades de otros componentes por interpolación, aun siendo estos los componentes padres.

## Enlace de Eventos 📞

Los eventos nos permiten ejecutar una acción cuando un usuario realiza algún tipo de interacción con la aplicación.

Por ejemplo:

El componente contador es un componente simple que reflejara unas acciones claras:

- Sumar.
- Restar.
- Enseñar el valor.

Para mostrar el valor usaremos la interpolación, pero para incrementar o decrementar su valor según lo desea el usuario, el usuario deberá interactuar con dos botones.

```html
<button>+</button>
<button>-</button>
```

Una vez definidos los botones en la plantilla html de nuestro componente, ingresaremos dentro de sus etiquetas un parentesis, consecuentemente podremos seleccionar varios eventos que Angular nos ofrece, en este caso solo deseamos saber si el usuario hace click a un botón.

```html
<button (click)="">+</button>
<button (click)="">-</button>
```

Para mantener un código más limpio, haremos que los botones ejecuten un metódo definido en la clase del componente

```js
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

```html
<button (click)="incrementar()">+</button>
<button (click)="decrementar()">-</button>
```

También es posible que quieras acceder al objeto "event".

```html
<!-- En el template HTML del componente -->

<button (click)="onClick($event)" class="boton">
  Escuchando el evento click
</button>
```

```js
<!-- En la clase del componente -->

export class ContadorComponent {

  //Escuchando el evento
  onClick(event:Event): void{
    console.log('Event -> ', event)
  }
}
```

## Enlace de Clases 📞

Hay circunstancias en donde precisaremos de editar la clase de un elemento HTML para **cambiar su estilo**.

Para eso, Angular ofrece una sintaxis particular para acceder a la clase de una etiqueta HTML con los corchetes "[]"

Por ejemplo, deseamos cambiar el color de un texto dependiendo del botón al que pulsemos, una variable "color" registrará mediante el enlace de eventos que botón se pulso, y por lo tantó, el color que se quiere aplicar al texto.

Para que la clase pueda ser manipulable, debemos agregar los siguientes elementos.

```html
<p [class]="color">Texto que va cambiar de color</p>
```

Angular interpretará que **la clase del elemento "p" esta asociada al valor de la variable "color"**, posibilitando que la clase sea dinámica.

Habrá momentos en los que deseemos agregar más de una clase a la etiqueta.

Para ello, podemos resolverlo de dos maneras:

1. Concatenar con un "." en el "[class]" y añadiendo la clase que deseamos

   ```html
   <p [class.fondo]="condicion" class="color">Texto que va cambiar de color</p>
   ```

2. Asignar un objeto con todas las clases que deseemos asignar

```html
<p [class]="{
        'color1': condicion,
        'color2': condicion,
}" class="color">
        Texto que va cambiar de color
</p>
```

Otra sintaxis que se puede observar al acceder al atricuto clase a través de los corchetes es **"[ngClass]"**

---

## Enlace de Propiedades 📞

Anteriomente observamos que para interactuar de manera dinámica a la propiedad "class" de una etiqueta, ponemos [].

Pues para acceder a cualquiera propiedad que deseamos sea dinámica, debemos agregar los [].

Por ejemplo:

Queremos que cuando la variable "button_disabled" sea verdadero, deshabilite el botón.

```html
<button [disabled]="button_disabled">Acción</button>
```

---

## Variable de plantilla

Una variable de referencia de plantilla es una referencia a un elemento del DOM dentro de la plantilla, es equivalente a un "id" o a la propiedad "name".

Para declararlas se utiliza el prefijo **"#"** o **"ref-"**.

Ejemplo:

Necesitamos identificar un input para acceder a su valor cuando realicemos la carga del formulario.

```html
<input type="text" placeholder="Ingresa un nombre" #name />

<button (click)="metodo(name.value)">Submit</button>
```

---

## Directiva ngIf / Else

La directiva **"\*ngIf"** determina si un elemento se renderiza, hasta el punto en el que si su condición da como resultado "false", este no ocultará el elemento, lo eliminará del DOM.

Ejemplo:

Queremos renderizar un mensaje de alerta cuando alguién pulse el botón para enviar el formulario. En el método que que ejecuta el botón vamos a indicarle una variables "openAlert" booleano para que cambie su valor a true cuando se dispare el evento.

```html
<div class="alert" *ngIf="openAlert">
    <p>El resultado se muestra por consola</p>
    <button class="cancel" (click)="openAlert = !openAlert">
        X
    </button>
  </div>
```

Evaluamos la condición si "openAlert" es verdadero, mostramos el contenido del contenedor.

Pero si queremos mostrar algo en caso de que "openAlert" sea falso, aplicamos el segundo condicional "else".

```html
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

---

## Directiva ngFor

Directiva que nos permite iterar una lista de elementos, bastante sencillo.

```js
export class BuclesComponent {
  personas: Persona[] = [
    {nombre:'Ainhoa', edad: 19},
    {nombre:'Gabriel', edad: 25},
    {nombre:'Jorge', edad: 32},
    {nombre:'Paco', edad: 69},
  ]
}
```

```html
<ul>
   <li *ngFor="let persona of personas; let i = index">
        <p>{{i + 1}} - Nombre: {{persona.nombre}}, edad: {{persona.edad}}</p>
   </li>
</ul>
```

A una variable local **"persona"** le asignamos el elemento del array **"personas"** que esta siendo iterado, ya que es un objeto, para acceder a la información debemos acceder a traves de sus propiedades.

Opcionalmente se puede asigar a una variable local, el indice del elemento actual si se desea.

---

## Directiva ngSwitch

La directiva ngSwitch compara un valor con una lista de opciones, pudiendo dejar un caso por defecto si no encuentra una opción disponible.

Ejemplo:

Se desea asociar el valor de la variable "dia", con un día de la semana, para eso establecemos un valor número para cada días (1 = Lunes, 2 = Martes, etc...)

Según el valor númerico asignado a "día", se mostrará un día de la semana en la pantalla.

```html
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

ADVERTENCIA:
Para poder evaluar una cadena de texto (un string), se deben utilizar las comillas simples: ''

---

## Formularios 📋

Angular tiene dos enfoques para trabajar con formularios.

1. Basados en Plantillas.

   Toda la lógica del formulario va dentro de la plantilla. (Para formularios pequeños)

   Para poder trabajar con formularios basados en plantillas, debemos importar en **app.module.ts** un módulo de Angular: **FormsModule**.

   ```js
   import { FormsModule } from '@angular/forms';
   ```

   Y dentro de la propiedad "import" del decorador **@NgModule** agregamos en nuevo módulo.

   ```js
   @NgModule({
    declarations: [
      AppComponent,
      ContadorComponent,
      BotonesComponent,
      FormularioComponent,
      BuclesComponent,
      SwitchComponent,
      Formulario2Component
    ],
    imports: [
      BrowserModule,
      FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
   })

   export class AppModule { }
   ```

   Este nuevo módulo también integra la capacidad de deshabilitar automáticamente, el comportamiento por defecto de un formulario, evitando así que cuando pulsemos un botón no envíe el formulario y no refresque la pantalla.

   En el componente donde alojaremos el formulario, dentro de su plantilla html, definiremos un formulario.

   Para enlazar una variable con el valor de un input, utilizamos la directiva **ngModel**, en la propiedad "name" de los campos del formulario, asignaremos el identificador de dicho campo.

   En la etiqueta form crearemos una variable de plantilla _"#contactForm"_ y la asignaremos a la directiva _ngForm_

   ```html
   <form (ngSubmit)="onSubmit(contactForm.value)" #contactForm="ngForm" class="card">
    <pre>{{ contactForm.value | json }}</pre>
    <div class="input-container">
      <label class="label" for="nombre">Nombre:</label>
      <!-- Es importante que si utilizamos la directiva ngModel, definamos la propiedad "name" en el input -->
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese un nombre"
        ngModel
        required
      />
    </div>

    <div class="input-container">
      <label class="label" for="edad">Edad:</label>
      <input
        type="text"
        name="edad"
        placeholder="Ingrese una edad"
        ngModel
        required
      />
    </div>

    <div class="input-container">
      <label class="label2" for="checkWork"
        ><p style="width: 50%">¿Estas trabajando actualmente?</p>
        <!-- Es importante que si utilizamos la directiva ngModel, definamos la propiedad "name" en el input -->
        <input
          required
          class="check"
          type="checkbox"
          name="checkWork"
          ngModel
          required
        />
      </label>
    </div>

    <div class="input-container">
      <label class="label" for="ciudad">¿En que ciudad vives?</label>
      <select required class="select" name="ciudad" id="ciudad" ngModel>
        <option value="NYC">NYC</option>
        <option value="Madrid">Madrid</option>
        <option value="Barcelona">Barcelona</option>
      </select>
    </div>

    <div class="input-container">
      <label class="label" for="textarea">Dejanos tu opinión</label>
      <textarea
        class="textarea"
        name="opinion"
        id="opinion"
        cols="30"
        rows="10"
        ngModel
      ></textarea>
    </div>

    <button type="submit">Enviar</button>
   </form>
   ```

   Por su parte, la directiva **ngSubmit**, nos permite alterar el comportamiento por defecto del formulario, siendo este un evento que se acciona cuando el usuario presiona un botón dentro del formulario.

   Cuando el botón es pulsado, la directiva determina que acción se ejecuta, siendo esta acción un metodó que en el caso mostrado se denomina "onSubmit()".

   ---

   Existirán casos en donde hagamos una petición a una API y requerira editar la información dada, para eso necesitamos enlazar la información dada con los campos del formulario.

   Inicializando un objeto que almacene la información dada en sus propiedades, permitiría acceder a estas propiedades enlazandolas con la directiva _"ngModel"_

   ```html
      <form (ngSubmit)="onSubmit(contactForm.value)" #contactForm="ngForm" class="card">
    <pre>{{ contactForm.value | json }}</pre>
    <div class="input-container">
      <label class="label" for="">Nombre:</label>
      <!-- Es importante que si utilizamos la directiva ngModel, definamos la propiedad "name" en el input -->
      <input
        type="text"
        name="nombre"
        placeholder="Ingrese un nombre"
        [(ngModel)]="persona.nombre"
        required
      />
    </div>

    <div class="input-container">
      <label class="label" for="">Edad:</label>
      <input
        type="text"
        name="edad"
        placeholder="Ingrese una edad"
        [(ngModel)]="persona.edad"
        required
      />
    </div>

    <div class="input-container">
      <label class="label2" for="checkWork"
        ><p style="width: 50%">¿Estas trabajando actualmente?</p>
        <input
          required
          class="check"
          type="checkbox"
          name="checkWork"
          [(ngModel)]="persona.checkWork"
          required
        />
      </label>
    </div>

    <div class="input-container">
      <label class="label" for="ciudad">¿En que ciudad vives?</label>
      <select required class="select" name="ciudad" id="ciudad" [(ngModel)]="persona.ciudad">
        <option value="NYC">NYC</option>
        <option value="Madrid">Madrid</option>
        <option value="Barcelona">Barcelona</option>
      </select>
    </div>

    <div class="input-container">
      <label class="label" for="textarea">Dejanos tu opinión</label>
      <textarea
        class="textarea"
        name="opinion"
        id="opinion"
        cols="30"
        rows="10"
        [(ngModel)]="persona.opinion"
      ></textarea>
    </div>

    <button type="submit">Enviar</button>
   </form>
   ```

2. Reactivos.

   Esencialmente separa la lógica de la vista.

   Hay distintas directivas que se usan en los formularios reactivos:

   - FormGroup (x).
   - FormGroupName.
   - FormControl.
   - FormControlName (x).
   - FormArrayName.

   Para trabajar en los formularios reactivos debemos importar el módulo necesario en el app-module.

   ```js
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { DecoradorInputComponent } from './decorador-input/decorador-input.component';
    import { DecoradorOutputComponent } from './decorador-output/decorador-output.component';
    import { FormOutputComponent } from './form-output/form-output.component';
    import { PipesComponent } from './pipes/pipes.component';
    import { FilterPipe } from './helper-pipes/filter.pipe';
    import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
    
    @NgModule({
      declarations: [
        AppComponent,
        ContadorComponent,
        BotonesComponent,
        FormularioComponent,
        BuclesComponent,
        SwitchComponent,
        Formulario2Component,
        DecoradorInputComponent,
        DecoradorOutputComponent,
        FormOutputComponent,
        PipesComponent,
        FilterPipe,
        FormularioReactivoComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [],
      bootstrap: [AppComponent]
    })
    export class AppModule { }
   ```

   En el componente que aloje nuestro formulario reactivo, detallar una serie de directivas sobre el formulario.

   En la etiqueta formulario se especifica la directiva **[formGroup]** y se le asocia algún identificador, mientras que en los campos se define la directiva **"formControlName"** y se le asocia un identificador

   ```html
    <form (ngSubmit)="onSubmit()" [formGroup]="persona" class="card">
      <div class="input-container">
       <label class="label" for="">Nombre:</label>
       <!-- Es importante que si utilizamos la directiva ngModel, definamos la propiedad "name" en el input -->
       <input
         type="text"
         name="nombre"
         placeholder="Ingrese un nombre"
         required
         formControlName="name"
       />
      </div>
 
      <div class="input-container">
       <label class="label" for="">Edad:</label>
       <input
         type="text"
         name="edad"
         placeholder="Ingrese una edad"
         required
         formControlName="age"
       />
      </div>
 
      <div class="input-container2">
       <label class="label2" for="checkWork">
         ¿Estas trabajando actualmente?
       </label>
       <div class="check">
         <input
         required
         class="input-check"
         type="checkbox"
         name="checkWork"
         required
         formControlName="checkWork"
       />
       </div>
      </div>
 
      <div class="input-container">
       <label class="label" for="ciudad">¿En que ciudad vives?</label>
       <select
         required
         class="select"
         name="ciudad"
         id="ciudad"
         formControlName="city"
       >
         <option value="NYC">NYC</option>
         <option value="Madrid">Madrid</option>
         <option value="Barcelona">Barcelona</option>
       </select>
      </div>
 
      <div class="input-container">
       <label class="label" for="textarea">Dejanos tu opinión</label>
       <textarea
         class="textarea"
         name="opinion"
         id="opinion"
         cols="30"
         rows="10"
         formControlName="opinion"
       ></textarea>
      </div>
 
     <button type="submit" [disabled]="persona.invalid">Enviar</button>
    </form>
   ```

   Mientras que en la clase que define el componente, el archivo ts, agregamos lo siguiente:

   ```js
    persona!: FormGroup;
   ```

   El identificador del formulario lo inicializamos y determinamos que su tipo es el **FormGroup**.

   Luego, en el contructor de la clase, inicializamos una propiedad del tipo **FormBuildeR**

   ```js
    constructor(private readonly fb: FormBuilder) { }
   ```

   En un método cualquiera, a través de la propiedad del tipo FormBuilder, contruimos con el método group, un objeto que define las propiedades (campos) del formulario, asignandoles un array, podemos definir en el primer elemento, su valor inicializador, y en el segundo, su validación o validaciones.

   ```js
    initForm(): FormGroup { 
    // Aquí declaramos las propiedades que tendrá el formulario con FormBuilder.
    // Y sus distintas validaciones.
      return this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        age: ['', [Validators.required]],
        checkWork: ['', [Validators.required]],
        city: ['', [Validators.required]],
        opinion: ['', [Validators.maxLength(300)]]
      })
    }
   ```

   En el ciclo de vida que ejecuta los métodos requeridos para contruir un componente, utilizaremos el método que inicializa el formulario y así finalizariamos el formulario reactivo.

   ```js
    ngOnInit(): void {
     this.persona = this.initForm();
    }
   ```

   Existen dos métodos relevantes para los formularios que deberían presenciarse.

   ```js
    onPathValue():void {
      // El método patchValue nos permite escoger determinadas propiedades y pasarles unos valores.
      this.persona.patchValue({
        name: 'Hola'
      })
    }

    onSetValue():void {
      // El método setValue nos permite settear todas las propiedades.
      this.persona.setValue({
        opinion: 'Hola mundo'
      })
    }
   ```

   Ambos métodos se utilizan para cargar las propiedades del formulario en el momento en el que se contruye el componente. Ambos métodos se ejecutan en el método **ngOnInit** para rellenar los formularios.

   Un ejemplo podría ser la petición de una API para editar una información dada.

   Los metodos de la propiedad que aloja el objeto del formulario son:
    - PatchValue: Permite determinar que propiedades son inicializadas y cuales no.
    - SetValue: Todas las propiedades del formulario bajo este método deben ser inicializados.

---

## Validaciones ✔

Al agregar una variable de plantilla a los inputs, podemos acceder a todas sus características, siendo una de esta **"valid"**.

La característica **valid** determina si todos los requerimientos estan satisfechos devolviendo un booleano dependiendo de si estan satisfechos (true) y si no lo están (false).

Además, podemos encontrar que Angular, agrega una serie de clases a nuestros inputs, que definen características de estos mismo, como por ejemplo:

- ng-untouched -> ng-touched

  Indican que un input no ha sido seleccionado por el usuario y posteriormente lo ha seleccionado.

- ng-pristine -> ng-dirty

  Indican cuando un input pasa de estar vacío, a tener algún tipo de valor.

- ng-invalid -> ng-valid

  Determina si un input cumple todas las reglas de validación.

Ejemplo de validación:

A un input, le agregamos la propiedad "required" para hacerlo un campo obligatorio, también le asignaremos una varible de plantilla para poder acceder a las propiedades del elemento.

```html
<input
  type="text"
  name="nombre"
  placeholder="Ingrese un nombre"
  [(ngModel)]="persona.nombre"
  required
  #name="ngModel"
/>
```

Resulta que a través de la variable de plantilla, puedo acceder a los errores del input mediante la interpolación.

```html
{{ name.errors | json }}
```

También puedo acceder a la clases que Angular asigna dentro de los inputs para definer sus estados.

```html
 {{ name.valid }}
  <br />
  {{ name.touched }}
  <br />
  {{ name.pristine }}
```

Por lo tanto, puedo también definir en que momento deseo mostrar en pantalla un error de la siguiente forma:

```html
<div [hidden]="name.valid === true || (name.pristine === true && name.touched === false)" class="danger">
  El nombre es obligatorio
</div>
```

Accediendo a la propiedad "hidden", puede definir una condición para que mantenga oculto el error.

En caso de que el input este vacío, y de que haya sido tocado, muestra el error.

O si existe la validación y es correcta.

---

### Formularios reactivos y validaciones

Con los formularios reactivos comprobamos que al definir un formulario podemos asociarle una serie de validaciones.

```js
  initForm(): FormGroup { 
  // Aquí declaramos las propiedades que tendrá el formulario con FormBuilder.
  // Y sus distintas validaciones.
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      age: ['', [Validators.required]],
      checkWork: ['', [Validators.required]],
      city: ['', [Validators.required]],
      opinion: ['', [Validators.maxLength(300)]]
    })
  }
```

Para gestionar en las plantillas las validaciones se realiza de la siguiente manera.

Ejemplo para el caso del campo "name":

```html
<input
  type="text"
  name="nombre"
  placeholder="Ingrese un nombre"
  required
  formControlName="name"
/>

<div *ngIf="persona.get('name')?.touched && persona.get('name')?.errors?.['required']" class="danger">
  Este campo es requerido
</div>

<div *ngIf="persona.get('name')?.touched && persona.get('name')?.errors?.['minlength']" class="danger">
  El nombre debe ser más largo que {{persona.get('name')?.errors?.['minlength'].requiredLength}} caracteres
</div>
```

Se puede acceder a las clases dadas por Angular a traves de los métodos que nos proveen las directivas.

---

## Ciclos de vida 🔄

Los ciclos de vida definen los distintos estados de un componente desde su creación hasta su destrucción.

Angular nos permite a través de ciertos métodos, acceder a estos ciclos de vida.

<table>
  <tr>
    <td>
        Interfaz
    </td>
    <td>
        Método
    </td>
    <td>
        Descripción
    </td>
  </tr>
  <tr>
    <td>
        OnChanges
    </td>
    <td>
        ngOnChanges
    </td>
    <td>
        Es llamado cuando el valor de un enlace input o output cambía
    </td>
  </tr>
  <tr>
    <td>
        OnInit
    </td>
    <td>
        ngOnInit
    </td>
    <td>
        Va justo después de ngOnChanges.
        Suelen hacerse penticiones a una API.
        Iniciar métodos que se requieren antes de cargar el componente.
    </td>
  </tr>
  <tr>
    <td>
        DoCheck
    </td>
    <td>
        ngDoCheck
    </td>
    <td>
        Sirve para detectar los cambios personalizados.
    </td>
  </tr>
  <tr>
    <td>
        AfterContentInit
    </td>
    <td>
        ngAfterContentInit
    </td>
    <td>
        Después de que el contenido del componente se ha inicializado.
    </td>
  </tr>
  <tr>
    <td>
        AfterContentChecked
    </td>
    <td>
        ngAfterContentChecked
    </td>
    <td>
        Después de cada comprobación del contenido del componente.
    </td>
  </tr>
  <tr>
    <td>
        AfterViewInit
    </td>
    <td>
        ngAfterViewInit
    </td>
    <td>
        Después de que las vistas del componente son inicializadas.

        Este ciclo de vida se suele trabajar con el decorador ViewChild.
    </td>

  </tr>
  <tr>
    <td>
        AfterViewChecked
    </td>
    <td>
        ngAfterViewChecked
    </td>
    <td>
        Después de comprobar las vistas del componente.
    </td>
  </tr>
  <tr>
    <td>
        OnDestroy
    </td>
    <td>
        ngOnDestroy
    </td>
    <td>
        Se ejecuta justo antes de que la directiva sea destruida.
    </td>
  </tr>
</table>

Ejemplo:

```js
export class AppComponent implements OnChanges, OnInit, OnDestroy {
  title = 'angular_project';

  // No se ejecuta porque no hay ni input ni output
  ngOnChanges(changes: SimpleChanges):void {
    console.log('Change ->', changes)
  }

  ngOnInit(): void {
    console.log('OnInit ->')
  }

  ngOnDestroy(): void {
    console.log('Destroy')
  }
}
```

Con los métodos, podremos acceder a los distintos estados del componente.

## Decorador @Input()

Un decorador es un tipo especial de declaración que se puede adjuntar a una:

- Clase.
- Método.
- Descriptor de acceso.
- Propiedad.
- Parámetro.

El decorador módifica el comportamiento a través de una configuración que se le pueda pasar.

Los decoradores se invocan añadiendo el prefijo "@" + nombre del decorador ().

Un ejemplo es el decorador @Input().

---

## Definición

El decorador @Input() en un componente hijo (incluso en una directiva) **indica que la propiedad recibirá un valor del padre**.

---

## Decorador @Output()

El decorador @Output() es un componente (o directiva) hijo que permite **pasar datos del componente hijo al padre**.

Ejemplo práctico:

Dado un array que representa una lista de ciudades y se renderiza en bucle, agregemos un método que introduzca una nueva ciudad a partir de un formulario.

```js
export class DecoradorOutputComponent {
  cities: Array<string> = ['NYC', 'Madrid', 'Barcelona']

  addNewCity(city: string): void{
    this.cities.push(city);
  }
}
```

El metódo para añadir una nueva ciudad lo definimos en el componente que renderiza la lista.

Pero el formulario será un componente independiente.

```html
<!-- HTML -->
<form action="">
    <label for="newCity">Nombre de la Ciudad: </label>
    <input class="input" id="newCity" type="text" #newCity>
    <button class="submit" (click)="onAddnewCity(newCity.value)" type="button" >Añadir nueva ciudad</button>
</form>
```

```js
<!-- COMPONENTE FORMULARIO -->

import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-output',
  templateUrl: './form-output.component.html',
  styleUrls: ['./form-output.component.css']
})

export class FormOutputComponent {

  @Output() newCityEvent = new EventEmitter<string>();

  onAddnewCity(city: string): void{
    console.log('Item ->', city)
    this.newCityEvent.emit(city)
  }
}
```

Para emitir un dato desde el componente hijo, debemos importar el decorador **Output** y la clase **EventEmitter**.

Definimos una variable con el decorador **@Output()**, esta variable la emitiremos al componente padre.

```js
  @Output() newCityEvent = new EventEmitter<string>();
```

Luego de definir la variable que vamos a emitir, ejecutamos la emisión de esta misma con el método **emit()** pasando el valor de la ciudad.

```js
onAddnewCity(city: string): void{
  console.log('Item ->', city)
  this.newCityEvent.emit(city)
}
```

En el componente padre que renderiza la lista, **definimos un evento con el nombre de la variable al que se le aplico el decorador @Output()**, en nuestro caso, le indicamos que cuando escuche la emisión, ejecute el método que añadira la nueva ciudad a la lista.

**$event** solo contiene el string que se recoge en el input del formulario.

```html
<app-form-output (newCityEvent)="addNewCity($event)" ></app-form-output>
```

---

## Change Detection (Mecanismo de detección de cambio)

Es el mecanismo o estrategia de detección de cambios que utiliza Angular para saber cuando debe actualizar un componente o toda la vista en caso de que la información haya cambiado.

## Lo que produce estos cambios

- Eventos del ratón.
- Llamadas Ajax.
- setInterval.
- setTimeOut.

## 2 estrategias

**OnePush**: establece la estrategia en CheckOnce (bajo demanda).

- Con esta estrategia se determina cuando se desea realizar el cambio.

**Default**: establce la estrategia en CheckAlways.

- Revisa cuando la vista o el modelo cambian para actualizarse, haciendo que Angular revise constantemente si se han producido cambios.

Ejemplo:

El problema esta en que Angular aplica la estrategia en la que por defecto, cuando este interpreta que se produce un pequeño cambio, actualiza todo los componentes desde su raíz.

Es nuestra labor por ende, definir e indicar a Angular cuando debe actualizar el modelo o la vista, básicamente **nosotros trabajaremos con la estrategia OnePush**.

Para ello, **debemos fijarnos en los componentes que reciben un input o un output**.

ADVERTENCIA: Si tu componente el cual recibe inputs o outpus o los dos, es un componente hijo de uno padre que no recibe ni inputs ni outputs o sí lo hace, entonces debes aplicarle el cambió de estrategía también al padre.

Para cambiar la estrategia de renderizado, es tan sencillo como aplicarle una directiva en la clase componente:

```js
import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-decorador-output',
  templateUrl: './decorador-output.component.html',
  styleUrls: ['./decorador-output.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
```

```js
changeDetection: ChangeDetectionStrategy.OnPush
```

## Pipes

Los pipes reciben un dato y su objetivo es transformar ese dato.

Pueden ser:

- Puros (por defecto): Hasta que el dato de entrada no cambia, Angular no realiza la tranformación.
- Impuros: Cada vez que Angular ejecuet el _"changeDetection"_ volvere a tranformar ese dato.

Para crear un pipe a través del CLI, utilizamos el comando:

```bash
ng g p nombre_pipe
```

Esto generará un directorio llamado "pipes" que almacenará dos archivos, uno para el testing y otro que almacenará la lógica del pipe.

El archivo que almacena la lógica de nuestro pipe sería así:

```js
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {

  transform(values: any, arg: any) {
  }

}
```

Dentro del método "tranform" recibimos los valores que queremos transformar y el argumento que condiciona la transformación.

```js
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})

export class FilterPipe implements PipeTransform {

  transform(values: string[], arg: string): string[] {

    if(!arg || arg?.length < 3) return values

    const result = values.map((element) => {
      return element.toLowerCase().indexOf(arg.toLowerCase()) > -1 ? element : ''
    })

    return result
  }

}
```

El siguiente código recibe un array de strings y toma como argumento otro string. Recorremos el array con el método "map", si el argumento esta vacío o su longitud es menor de 3 caracteres rentornara el array.

En caso contrario, realizará una búsqueda del elemento a partir del arugmento dado y devolverá el resultado.

```html
<div>
  <input class="input" type="text" placeholder="filter" [(ngModel)]="criteria">
</div>

<ul>
  <li *ngFor="let nombre of (nombres | filter:criteria)">
    {{nombre}}
  </li>
</ul>
```

Aplicamos el pipe como cualquier otro, en este caso, determinamos el nombre del pipe como "filter", a través de la variable "criteria" enlazada con un input.

El resultado es un array filtrado.

## Rutas

Hay varias funciones que pueden cumplir las rutas, además de tener varias características:

- Encargarse de la navegación entre componentes.

- Pueden pasarse parámetros.

- Redireccionar al cliente.

- Se pueden proteger las rutas(guards).

Los más conveniente para crear las rutas es utilizar un módulo a parte.

Ejemplo:

En un archivo llamado "app.routing.module.ts" definir las rutas.

```js
import { HomeComponent } from './home/home.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'formulario-reactivo', component: FormularioReactivoComponent},
    {path: 'formulario-plantilla', component: Formulario2Component},
    {path: 'home', component: HomeComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
```

Exportamos una clase llamada: **"AppRoutingModule"** e importamos la directiva **@NgModule**, en el () definimos un objeto que tendrá dos propiedades:

- **imports:** Dentro de un array, importamos el módulo **RouterModule**, gracias a la propiedad imports, podemos tener acceso a todas las caracteristas del módulo de rutas y a su vez, podemos exportarlas junto a nuestro módulo.

   En este caso invocamos un método **forRoot()** del módulo de rutas, que permite crear y configurar un módulo con todos los proveedores de las rutas y sus directivas.

   Se define un array de objeto con todas las rutas, el tipo del array debe ser **Routes**.

  ```js
    const routes: Routes = [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'formulario-reactivo', component: FormularioReactivoComponent},
      {path: 'formulario-plantilla', component: Formulario2Component},
      {path: 'home', component: HomeComponent},
    ]
  ```

   En las propiedades de los objetos, definimos unas propiedades concretas:
  - path (string): Define la cadena de texto que será la ruta de acceso al componente.

  - component (class aunque define el tipo any o undefined): Define el componente al que hacemos referencia.

  - redirectTo (string): En ciertas ocasiones (ejemplo: dejar la url en blanco) necesitaremos redirigir al usuario a algún componente, esa es la función de la propiedad.

  - pathMatch (string):  Busca coincidencias dadas en el path para ejecutar algo.

   Angular evalua las rutas dadas desde arriba hasta abajo, si alguna de las rutas dadas coincide con las rutas, finaliza la búsqueda.

- **exports:** Propiedad donde exportamos el módulo.

Una vez definido el módulo, lo importamos en **app.module.ts**

```js
@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    Formulario2Component,
    DecoradorInputComponent,
    DecoradorOutputComponent,
    FormOutputComponent,
    PipesComponent,
    FilterPipe,
    FormularioReactivoComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Para mostrar el componente dependiendo de la ruta seleccionada, utilizamos en la plantilla de app el selector:

```html
<router-outlet></router-outlet>
```

Por como se definio previamente, el componente "home" muestra en su plantilla todos los componentes a través de sus selectores.

Para poder definir un acceso a una ruta, dentro de la plantilla, utilizamos el tag:

```html
 <a></a>
```

Consecuentemente, utilizaremos un selector para la directiva **RouterLink** que convierte los clicks en navegación del enrutador.

```html
<ul>
    <!-- [routerLinkActiveOptions]="{exact: true}" -->
    <li><a routerLinkActive="active" routerLink="/home">Home</a></li>
    <li><a routerLinkActive="active" routerLink="/formulario-reactivo">Formulario Reactivo</a></li>
    <li><a routerLinkActive="active" routerLink="/formulario-plantilla">Formulario Plantilla</a></li>
</ul>
```

El selector **routerLinkActive** permite agregar una clase en caso de que la ruta seleccionada sea la misma que la especificada.

## Rutas hijas, parámetros y QueryParams

Es una buena decisión integrar una ruta que redireccione al usuario a un página con el error 404 si la ruta dada no existe.

Para ello, solo debemos agreagar una nueva ruta a la lista de rutas:

```js
{path: '**', component: PagenotfoundComponent}
```

## QueryParams

En algún momento necesitarás pasar **QueryParams** para poder obtener cierta información.

Ejemplo:

Deseo pasarle al formulario reactivo, el parametro "name" por la url, y que el componente recoja dicha información y la muestre.

```js
export class NavbarComponent {
  
  constructor(private readonly router: Router) {}

  goToReactive(): void{
    this.router.navigate(['formulario-reactivo'], {queryParams: {name: 'Gabriel'}})
  }
}
```

Dentro del componente de navegación, crearemos una nueva propiedad de la clase y determinaremos que su tipo sera el de **"Router"**.

Luego, en algún método, accederemos a esa propiedad y a su método **navigate**, el método nos permitirá pasarle la ruta como primer parámetro dentro de un array (ya que podríamos concatenar con otros elementos), y como segundo parámetro, podremos definir un objeto con la propiedad **queryParams**, al cual le asginaremos a su vez un objeto con la propiedad "name y un valor".

```text
http://localhost:4200/formulario-reactivo?name=Gabriel
```

Para recoger el valor del parámetro, crearemos una nueva propiedad del objeto, inyectando **ActivatedRoute** como el tipo, para en el ciclo de vida de creación del componente, poder substraer la información de la ruta actuva actualmente.

```js
constructor(private readonly fb: FormBuilder, private readonly route: ActivatedRoute) { }

  ngOnInit(): void {

    // Un observable nos permite recopilar los cambios de su condición a lo largo del tiempo, a diferencia de las promesas pueden cambiar infinitas veces su valor.
    this.route.queryParams.subscribe(
      (params: Params) => {
        this.name = params['name']
      } 
    )
  }
```

**subscribe** es un observable que nos permite realizar un seguimiento de los cambios realizados a un valor.

---

## Parámetros

Es posible que necesitemos pasar parámetros directamente en la ruta.

Para ello debemos definir una ruta que defina el parámetro.

```js
{path: 'query-id/:id', component: QueryIdComponent},
```

**:id** es un valor dinámico, id es solo un identificador, puede ser cualquier nombre.

De la misma manera que accedemos a las queryParams, accedemos al parámetro definido en la ruta.

```js
export class QueryIdComponent implements OnInit {
  id!: string

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
  }
}
```

---

## Rutas hija

Para crear rutas hija, es tan sencillo como definir una ruta cualquiera, con una nueva propiedad **"childre"**.

```js
{path: 'users', component:UserComponent, 
  children:
  [
    {path:'list', component: ListComponent},
    {path:'details', component: DetailsComponent}
  ]
},
```

Esto nos indicará que el acceso a los componentes, tiene que ser por la parte de "users".

Por ejemplo

```text
http://localhost:4200/users/details
http://localhost:4200/users/list
```

Y para mostrar los resultados en HTML como ejemplo:

```html
<div class="container">
    <div class="row">
        <div>
            <a routerLink="list">Users list</a>
        </div>
        <div>
            <a routerLink="details">Details</a>
        </div>
    </div>
</div>
<router-outlet></router-outlet>
```

En este caso, indicamos al componente que pinte el componente de la ruta hija seleccionada.

## Guards

Protegen las rutas, evitando que un usuario ingrese a estas, por ejemplo, sin tener los permisos apropiados o la autorización.

El comando para crear un guar en el CLI usamos el comando:

```js
ng g guard nombre_guard
```

Dentro de los archivos, definiremos la lógica para la protección de las rutas requeridas.

```js
export class PermissionsGuard implements CanActivate {
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.hasUser()){
      return true;
    }

    alert('No tienes los permisos requeridos');
    return false
  }

  hasUser(): boolean{
    return false
  }
  
}
```

El siguiente código ejecuta un método que siempre retornará false, para proteger una ruta dada.

```js
{
        path: 'users', component: UserComponent, canActivate: [PermissionsGuard],
        children:
            [
                { path: 'list', component: ListComponent },
                { path: 'details', component: DetailsComponent }
            ]
    },
```

La propiedad dada en el objeto **canActivate** asignado a un array con los guards asociados al array, determina si un usuario tiene los requerimientos para poder cargar un componente.

Otra interfaz sería la siguiente.

```js
export class WithoutSaveGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.hasUser()) {
      return true;
    }

    return confirm('Tienes cambios sin guardar')

  }

  hasUser(): boolean {
    return false
  }
}
```

```js
{ path: 'formulario-reactivo', component: FormularioReactivoComponent, canDeactivate:[WithoutSaveGuard] }
```

El método **canDeactivate** determina si un usuario puede "desactivar" un componente.

Aclarar que existen más interfaces, en total serían estas:

- CanActivateChild.
- CanLoad.
- Resolve.
- CanDeactivate.
- CanActive.

---

## Resolver

Se define como una **"Interface"** que las clases pueden implementar para ser un proveedor de datos.

Una especie de middleware que en el momento de navegar por la aplicación, se encargará de gestionar la renderización de los componentes solicitando la información que se necesita para su renderizado.

Este se debe usar con el router para resolver datos durante la navegación.

Se implmenta el método **resolve()** que se invoca a su vez cuando comienza la navegación.

Y para que se active la ruta, el router espera a resolver (conseguir) los datos que necesita.

---

Para crear un resolver a través de la CLI, podemos utilizar el comando

```bash
ng generate resolver [name]
```

o

```bash
ng generate r [name]
```

---

Ejemplo de uso:

Queremos hacer una petición a una API para obtener todas las ciudades disponibles en la base de datos.

Cuando tengamos esa información, cargaremos el componente (un formulario) con dicha información para que sea seleccionable por el usuario como una de las opciones disponibles.

Primero exportamos una clase, segundo, importamos el decorador **"Injectable"**.

### Inyeccción de dependecias(ID)

Se trata de "inyectar" **servicios**(lógica que puede ser un valor, una función, objeto, etc..., típicamente es una clase de propósito limitado que sirve para abstraer la lógica del componente) en los componentes para que estos los consuman.

Con @Injectable({ providedIn: 'root' }) estamos definiendo la siguiente clase como un servicio.

```js
// Decordador Injectable
import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { Observable, of } from "rxjs";

const cities = ['NYC', 'Madrid', 'Barcelona', 'Sevilla']

@Injectable({ providedIn: 'root' })

// Interfaz Resolve
export class DataResolverService implements Resolve<any>{
    resolve(): Observable<any> {
        //TODO: CALL SERVICE

        // Convierte el dato del argumento y retorna un tipo observable.
        return of(cities)
    }
}
```

Como no vamos a consumir una API, definimos un array con los valores.

Implementamos la interfaz **"Resolve"** para identificar a la clase como un proveedor de datos. Este tipo de clases se pueden utilizar con el enrutador para resolver la información durante la navegación.

La interfaz define un método **resolve()** que es invocado justo después de **ResolveStart""**, un evento del router.

El router esperará por la información para resolverse antes de que la ruta se active.

Dentro de la clase, definiremos un método que retornará un tipo "Observable" retornando el array transformado en un tipo "Observable".

```js
{
  path: 'formulario-reactivo',
  component: FormularioReactivoComponent,
  canDeactivate: [WithoutSaveGuard],
  resolve: { cities: DataResolverService }
},
```

Dentro de la definición de la ruta, agregamos el parametro **resolve** y le asignamos un objeto con la propiedad, que a su vez se asignara al respñver creado.

```js
//Resolvers
  cities: string[] = []

  constructor(
    private readonly fb: FormBuilder, 
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {

    //Resolvers
    this.cities = this.route.snapshot.data['cities']
  }
```

Es necesario, recoger la información antes de que se renderice el componente.

La propiedad **snapshot** nos permite saber la información sobre la ruta asociada al componente cargado en un punto en concreto, utiliza la interfaz **"ActivatedRoute"** para ese cometido.

Y la siguiente propiedad **data** nos provee un observable de los datos resultos y estáticos de la ruta.

En el caso del HTML podemos realizar lo siguiente, y nos presentaría las opciones disponibles.

```html
<option *ngFor="let city of cities" [value]="city">{{city}}</option>
```

---

