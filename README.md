# learning-angular

Un primer vistazo a Angular

## Aprendiendo Angular

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

| Paquetes  | Versiones  |
| --- | --- |
| @angular-devkit/architect  | 0.1500.4  |
| @angular-devkit/build-angular  | 15.0.4  |
| @angular-devkit/core  | 15.0.4  |
| @angular-devkit/schematics  | 15.0.4  |
| @schematics/angular  | 15.0.4  |
| rxjs  | 7.5.7  |
| typescript  | 4.8.4  |

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

   En este tipo de formularios tenemos un acceso explicito al formulario subyacente, estos son formularios más
   robustos, más escalables, reutilizables y comprobables.

   Si los formularios son una parte importante de la aplicación o usamos patrones reactivos, es mejor siempre
   utilizar formularios reactivos.

   - **FormGroup:**
     Realiza un seguimiento del los mismos valores y estado para una colección de controles de formulario.
   - FormGroupName.
   - **FormControl:**
     Realiza un seguimiento del valor y el estado de validación de un control de formulario.

     Administra el valor y el estado de validez de un control de formulario individual. Corresponde a un control de formulario HTML como:

     ```html
      <input>o <select>
     ```

   - **FormControlName:**
     Directiva que voncula cada entrada individual al control de formulario definido en FormGroup.
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

   Luego, en el contructor de la clase, inyectamos el servicio **FormBuilder**

   ```js
    constructor(private readonly fb: FormBuilder) { }
   ```

   Este sercivicio cuenta con tres métodos: **control(), group(), array()**.

   En un método cualquiera, a través de la propiedad del tipo FormBuilder, contruimos con el método group, un objeto que define las propiedades (campos) del formulario, asignandoles un array, podemos definir en el primer elemento, su valor inicializador, y en el segundo, su validación o validaciones.

   ```js
    initForm(): FormGroup { 
    // Aquí declaramos las propiedades que tendrá el formulario con FormBuilder.
    // Iniciando una mátriz, cuyo primer valor es precisamente el valor del campo y el segundo sería una matríz con sus distintas validaciones.
      return this.fb.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        age: ['', [Validators.required]],
        checkWork: ['', [Validators.required]],
        city: ['', [Validators.required]],
        opinion: ['', [Validators.maxLength(300)]]
        /*
          address: this.fb.group({
            street: [''],
            state: [''],
            zip: ['']
          }),
        */
      })
    }
   ```

   Es posible definir grupos de formularios dentro de grupos de formularios.

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

3. En resumen.

| |Reactivos| Plantilla|
|-----------|----------|----------|
|Configuración del modelo de formulario|Explícito, creado en la clase de componente| Implícito, creado por directivas
|Modelo de datos|Estructurado e inmutable|Desestructurado y mutable
|Flujo de datos| Sincrónico | Asincrónico
|Validación de formulario| Funciones | Directivas
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

|  Interfaz  |  Método  |  Descripción  |
| --- | --- | --- |
|  OnChanges  |  ngOnChanges  |  Es llamado cuando el valor de un enlace input o output cambía  |
|  OnInit  |  ngOnInit  |  Va justo después de ngOnChanges. Suelen hacerse penticiones a una API. Iniciar métodos que se requieren antes de cargar el componente.  |
|  DoCheck  |  ngDoCheck  |  Sirve para detectar los cambios personalizados.  |
|  AfterContentInit  |  ngAfterContentInit  |  Después de que el contenido del componente se ha inicializado.  |
|  AfterContentChecked  |  ngAfterContentChecked  |  Después de cada comprobación del contenido del componente.  |
|  AfterViewInit  |  ngAfterViewInit  |  Después de que las vistas del componente son inicializadas. Este ciclo de vida se suele trabajar con el decorador ViewChild.  |
|  AfterViewChecked  |  ngAfterViewChecked  |  Después de comprobar las vistas del componente.  |
|  OnDestroy  |  ngOnDestroy  |  Se ejecuta justo antes de que la directiva sea destruida.  |

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

## Change Detection (Mecanismo de detección de cambio) 💱

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

---

## Pipes 🚇

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

---

## Rutas 🛣

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

---

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

Dentro del componente de navegación, crearemos una nueva propiedad de la clase y determinaremos que su tipo sera el de **"Router"** (estamos inyectando el router).

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

## Rutas hija 👧

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

---

## Guards 👮‍♂️

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

## Resolver 📩📮

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

### Inyección de dependecias(ID) 💉

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

## Lazy loaging 🦥

O **carga diferida**, el opbjetivo es retrasar la carga de un módulo concreto para mejorar el rendimiento de la aplicación, solo cargaremos el módulo o módulos cuando realmente lo necesitamos.

La estretagía es modularizar independientemente los componentes para que carguen todos los recursos necesarios cuando se les invoque, y no hacerlo directamente en un módulo princioal, cargando módulos que a su vez no se usan.

Para ello, necesitamos generar un **"featureModule"** y un módulo de rutas.

Para ello crearemos los módulos correspondientes con el CLI de Angular a través del siguiente comando.

```bash
ng g m [nombre] --routing true
```

Esto nos creará dos módulos, uno para las rutas y otro para el **"featureModule"** que independizará del módulo principal.

Esto generará dos archivos:

- nombre-routing.module.ts (Routing).
- nombre.module.ts (featureModule).

El el módulo de routing especificaremos toda la información dada en el módulo principal sobre el componente.

```js
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioReactivoComponent } from './formulario-reactivo.component';
import { WithoutSaveGuard } from '../guards/without-save.guard';
import { DataResolverService } from '../resolvers/data.resolver.service';

const routes: Routes = [
  {
    //La ruta ya viene dada por el módulo de rutas principal.
    path: '',
    component: FormularioReactivoComponent,
    canDeactivate: [WithoutSaveGuard],
    resolve: { cities: DataResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormularioReactivoRoutingModule { }
```

El módulo principal debemos especificar el módulo que debe cargar cuando el usuario accede a una determinada ruta.

```js
// Utilizamos la técnica de la importación dinámica
    {path: 'formulario-reactivo', loadChildren: () => 
      // A través de la promesa, obtenemos "m" que es el módulo
      import('./formulario-reactivo/formulario-reactivo.module').then(m => m.FormularioReactivoModule)
    },
```

El objeto **loadChildren** especifica las rutas secundarias con carga diferida, es por esa razón que solo se declara una ruta en uno de los dos sitios.

En el módulo del componente:

```js
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormularioReactivoRoutingModule } from './formulario-reactivo-routing.module';
import { FormularioReactivoComponent } from './formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FormularioReactivoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormularioReactivoRoutingModule
  ]
})

export class FormularioReactivoModule { }
```

El el módulo del componente importamos en la declaración el módulo con el que trabajamos.

Y en "imports" agregamos todos los módulos que necesita el componente, en este caso, al ser un formulario reactivo, necesita del "ReactiveFormsModule".

En el módulo principal retiramos de la declaración el componente y en mi caso, también retirariamos en el "imports" el módulo para formularios reactivos.

---

## forRoot & forChild 👨‍👦

Son métodos estáticos proporcionados por Angular para poder por ejemplo, hacer una librería.

- **forRoot**: Angular lo utiliza para poner todas las rutas en el módulo principal o raíz, todo lo que no sería considerado "lazy loading" se precisa de que cargue de manera inmediata.
- **forChild**: Es el indicador de que un módulo debe cargarse bajo demanda (cuando se requiera), lo que omite que pertenezca a la carga inicial de módulos.

## HTTP Client de Angular

Métodos propios de una solicitud a una API:

- GET: Para la obtención de la información de la API.
- POST: Para el ingreso de un nuevo dato en la API.
- PUT: Para la actualización de un registro o varios registros.
- DELETE: Para la eliminación de un registro o registros.

### Service

En Angular para consumir una API y trabajar con la información dada, utilizamos los **"services"**, para crear un servicio con el CLI utilizamos el comando:

```bash
ng g s [nombre]
```

o

```bash
ng generate services [nombre]
```

Un servicio es por lo general, una clase que abstrae de toda lógica al componente, a excepción de la lógica que va intrinseca a la vista.

En este caso, puede abstraer a un componente de definir los métodos para realizar peticiones a la API.

```js
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Item {
  _id:string;
  name:string;
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private readonly API = 'https://crudcrud.com/api/0d7bad28f5304503b4cfc4a865054479/cities'

  constructor(private readonly http: HttpClient) { }

  // POST
  addNewCity(item: string): Observable<City>{
    const body = {name: item}
    return this.http.post<Item>(this.API, body)
  }

  //GET
  getCities(): Observable<Item[]>{
    return this.http.get<Item[]>(this.API)
  }

  //PUT
  updateCity(item: Item):Observable<void>{
    const body = {name: city.name}
    return this.http.put<void>(`${this.API}/${city._id}`, body)
  }

  //DELETE
  deleteCity(id: string):Observable<void>{
    return this.http.delete<void>(`${this.API}/${id}`)
  }
}
```

@Injectable, es una clase anotada como decorador (identificado por el "@"), esto nos indica que el service que estamos creando forma parte del sistema de inyección de dependencias **(Es inyectable)**.

**"HttpClient"** es una clase inyectable, con métodos para realizar solicitudes HTTP. Cada método de solicitud tiene varias firmas y tipos de devolución (mayormente "observe" [observadores, observables])

El constructor definimos una propiedad que se le asigene el tipo **"HttpClient"** (lo inyectamos).

En un serie de métodos, accedemos a partir de la propiedad asignada a la clase **HttpClient** a los distintos tipos de solicitudes.

Para hacer funcional la clase **"Httpclient"** necesitarás de importar en el módulo donde lo apliques, el módulo **HttpClientModule**.

```js
import { HttpClientModule} from '@angular/common/http'

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
    // FormularioReactivoComponent,
    HomeComponent,
    NavbarComponent,
    PagenotfoundComponent,
    QueryIdComponent,
    UserComponent,
    DetailsComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

En el contructor de la clase del componente, debemos hacer la inyección del "service".

```js
import { Component, OnInit } from '@angular/core';
import { City, DataService } from '../services/data.service';

@Component({
  selector: 'app-decorador-output',
  templateUrl: './decorador-output.component.html',
  styleUrls: ['./decorador-output.component.css'],
})
export class DecoradorOutputComponent implements OnInit {
  cities: City[] = []
  selection!: City

  // Inyección del service
  constructor(private readonly dataSVc: DataService) { }

  ngOnInit(): void {
    this.dataSVc.getCities().subscribe(cities => {
      this.cities = [...cities]
      console.log(this.cities)
    })
  }
}
```

Luego podremos acceder a las propiedades y a los métodos del "service".

El método "subscribe" es para resolver el tipo "observe".

Esa es la base para consumir una API en Angular, lo demás es agregar lógica según como desees mostrar la información.

---

## HTTP Interceptor 🛡

El objetivo es interceptar una petición HTTP y modificarla.

Ejemplo:

Probablemente, para hacerle una petición a la API, necesitarás de colocarle unos parámetros en las peticiones HTTP.

Para no tener que ponerle a cada petición unos parámetros, puedes utilizar un interceptor que coloque esos parametros por ti.

Para generar un interceptor por el CLI, utilizamos el comando:

```bash
ng g interceptor [nombre]
```

Esto generará un archivo que contiene lo siguiente.

```js
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';

@Injectable()

export class SpinnerInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
  }
}
```

En mi caso particular, quiero cargar un componente con un spinner hasta que cargue la información de la API, envie las solicitudes y reciba respuestas.

En un "SpinnerService" tengo todos los métodos necesarios. Desde el interceptor solo le indico a través de métodos, cuando la propiedad de visibilidad es true o false.

```js
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable()
// Implementa la interfaz HttpInterceptor
export class SpinnerInterceptor implements HttpInterceptor {

  //Inyectamos el service del spinner
  constructor(private readonly spinnerSvc: SpinnerService) {}

  /* 
    HttInterceptor identifica y maneja una solicitud HTTP determinada.
    @param req: es el objeto de solicitud saliente a manejar (nuestros get, post, etc..., hacía el servidor)
    @param next: identifica el próximo interceptor en la cadena, o el backend.

    Si no hay interceptores @return genera un observable del flujo de eventos y finaliza el proceso.

    handle() es un método de la clase HttHandler que recibe la request y devuelve el observable del tipo HttpEvent 
    que a su vez es del tipo "any".
  */
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerSvc.show()

    /*
      pipe permite agregar operadores (en este caso la función finalize()) al flujo de procesamiento del stream.

      Si pusieramos más operadores, se irían procesando uno tras otro, el resultado del observable pasaría al primero opreador,
      el resultado del primero saltaría al segundo, etc..

      El resultado final se retorna a los suscriptores (por lo tanto, estamos devolviendo un observable)
    */

    /*
      finalize() es un método que se invoca cuando finaliza la fuente, la función devuelve un observable que refleja la fuente, 
      a su vez llamará a un callback al terminar.
    */
    return next.handle(request).pipe(
      finalize(() => this.spinnerSvc.hide())
    );
  }
}
```

---

## **Observables.** 👁

---

### **Programación Reactiva**

La programación Reactiva es la **programación orientada  al manejo de stremas de datos asíncronos y la propagación de los cambios.**

---

### ***RxJS**

Se trata de **una libreria para componer programas asíncronos y basados en eventos usando secuencias observables.**

Esto nos permite hacer programación reactiva. Esta libreria no es especifica de Angular.

Observables, Operators, Subscription, Subjects, son algunos de las características de la liberia.

Los más usados son los **Observables y los operadores(operators)**, nos permiten el manejo de eventos asíncronos.

- **Observable**: es un **"stream" de datos**, estos streams **pueden ser colecciones o secuencias de eventos continuos ordenados en el tiempo.**
  - **Stream**:
   Pueden ser:
    - Eventos de la UI.
    - HTTP Request.
    - Web Sockets.
    - Estado de una App.

   Representa una relación 1 -> ♾.

   Esto se basa en el **patrón observer**:
  - **Observable**
  - **Observadores**
  - **Suscripciones**

- **Subject**: Es como in observable, pero a su vez **puede compartir información con varios observadores u observers**

  - **Subject**
  - **Behavior Subject**
  - **Replay Subject**
  - **Async Subject**

---

### Observable VS Promise

- **Promise**:
  1. Se ejecuta inmediatamente.
  2. Emite un solo valor.
  3. Envía los errores a las promesas hijas.

- **Observable**:
  1. No comienza hasta la suscripción.
  2. Múltiples valores a lo largo del tiempo.
  3. Observable proporciona operadores.

**Ejemplos de Observables en la aplicación:**

(data.service.ts)

```js
  addNewCity(city: string): Observable<City>{
    const body = {name: city}
    // Este observable viene dado por el módulo http (HttpClient) a través del método POST (que devuelve el observable)
    return this.http.post<City>(this.API, body)
  }
```

ADVERTENCIA: Este tipo de observables no hace falta desuscribirse, estos se completan de manera automática (y no causa memory leaks).

```js
addNewCity(city: string): void {
  this.dataSVc.addNewCity(city).subscribe( res => {
    this.cities.push(res)
  })
}
```

Hasta que no se realice el método **subscribe()**, el observable no empieza a realizar el costo computacional, simplemente existe y esta ahí.

Cuando se realiza la suscripción empezamos a consumir ese observable.

**Ejemplos de Subject:**

```js
export class SpinnerService {
  // El signo de "$" indica que es un observable, es una convención.
  // Declaramos una propiedad del tipo Subject que en este caso, es como un observable normal
  isLoading$ = new Subject<boolean>(); 

  show():void {
    this.isLoading$.next(true);
  }

  hide():void {
    this.isLoading$.next(false);
  }
}
```

---

## Content Project

Es un patrón que nos ayuda a insertar o proyectar contenido en otros componentes.

Ejemplo:

Un componente "Card" que se repite pero varia su contenido.

Las implementaciones del "content projection" en Angular, incluyen:

- Single-slot: De esta manera, el componente acepta el contenido solo de un origen o fuente
- Multi-slot: En este caso, acepta varios origenes o fuentes.
- Conditional: Este utiliza el contenido de manera condicional.

Ejemplo:

Creamos un componente card:

```html
<div class="card">
    <div class="header">
        <ng-content select="[card-header]"></ng-content>
    </div>
    <div class="body">
        <ng-content select="[card-body]"></ng-content>
    </div> 
</div>
```

La etiqueta ```html <ng-content select="[identificación]"></ng-content>``` a través de atributos podemos identificar el contenedor donde irá el contenido.

En el componente padre donde se aloja el componente "card", identificamos el selector y lo definimos con el elemento html que deseamos.

```html
<app-card>
  <h2 card-header>
    Soy Header
  </h2>
  <p card-body>
    Body
  </p>
</app-card>
```

---

## NG-CONTAINER & NG-TEMPLATE  🏗

- NG-CONTAINER: Un elemento qe nos permite tener directivas estructurales sin añadir ningún elemento al DOM.

Ejemplo:

```html
<ng-container *ngIf="cities.length > 0; else templateEmpty">
    <li (click)="onSelectedCity(city)" class="city" [ngClass]="{'active': city?._id === selection._id}" *ngFor="let city of cities">
        <p>{{city.name | titlecase}}</p> <button (click)="onCityDelete(city._id)" *ngIf="city?._id === selection?._id" class="delete">Delete</button>
    </li>
</ng-container>
```

Esto no indica que si la longitud del array NO es superior a 0, no renderiza el tag "li" en el DOM.

- NG-TEMPLATE: DEfine un plantilla que no se renderiza por defecto, si no que nosotros definimos el cuando.

Ejemplo:

En el ejemplo del ng-container, hemos señalado como alternativa de no cumplir la condición, añadir el elemento "templateEmpty"

```html
<ng-template #templateEmpty>
    <div style="margin-top:20px">
        No hay ciudades en la lista.
    </div>
</ng-template>
```

Hasta que no se le indique, Angular no renderizara el elemento "div" en el DOM.

---

## Decorador ViewChild

Se trata de un decorador de propiedades, que configura una consulta de vista.

El detectos buscará el primer elemento o directiva que coincida con el selector en el DOM.

Consulta en el DOM un elemento (que nosotros determinemos), este selecionará el primero que detecte, algunos selectores admitidos:

- **@Component**
- **@Directive**
- **Variables de plantilla**
- **TemplateRef**
- **NgModel**

Ejemplo

Con una directiva:

```js
@Directive({selector: 'child-directive'})
class ChildDirective {}

@Component({selector: 'myComponent', templateUrl: 'myComponent.html'})
class MyComponent implements AfterViewInit{

  /*
    Usamos el decordador ViewChild, definimos el selector ChildDirective, y la renombramos como childDirective, 
    tipandola del tipo del selector
  */

  @ViewChild(ChildDirective) childDirective!: ChildDirective;

  ngAfterViewInit(): void {
    // child is set
  }
}
```

Con un componente:

```js
@Component({
  selector: "myComponent",
  templateUrl: "myComponent.html"
})

class myComponent {}

@ViewChild(MyComponent) myComponent: MyComponent;
```

Con variables de plantilla, con NgModel:

```html
<my-component #cmp></my-component>
@ViewChild('cmp') myCmp!: ElementRef;

<input type="text" #myInput>
@ViewChild('myInput') myInput!: ElementRef;

<input type="text" [(ngModel)]="filterInput">
@ViewChild(NgModel) filterInput!: NgModel;

<ng-template></ng-template>
@ViewChild(TemplateRef) myTemplate!: TemplateRef<ElementRef>
```

Ejemplo práctico:

En el formulario de plantilla, seleccionamos el elemento formulario que tenía asignada la variable de plantilla "contactForm", con el decorador y asignandole el tipo adecuado (NgForm por ser formulario de plantilla), podemos acceder a las propiedades del formulario.

En el método onSubmit(), mostramos por consola los valores del formulario

```js
export class Formulario2Component {
  @ViewChild('contactForm') contactForm!: NgForm
  persona: PersonaForm = {
    "nombre": '',
    "edad": '',
    "checkWork": false,
    "ciudad": '',
    "opinion": '',  
  }

  onSubmit(): void {
    // alert('Form values ' + JSON.stringify (values))
    console.log('Form values template-driven', this.contactForm.value)
  }
}
```

```html
<!--
    Anteriormente
  -----------------------
  (ngSubmit)="onSubmit(contactForm)"

    Con ViewChild
  -----------------------
  (ngSubmit)="onSubmit()"
  -->
  <form
    (ngSubmit)="onSubmit()"
    #contactForm="ngForm"
    class="card"
  >
```

**ADVERTENCIA:** Para poder hacer referencia a un elemento del DOM, este debe propiamente existir, lo que quiere decir que durante el ciclo de vida _**OnInit**_ (La vista no se ha renderizado), el elemento al que hagamos referencia no existe, arrojando como resultado un "undefined".

Es más correcto manejar los selectores durante el ciclo de vida _**AfterViewInit**_, ya que Angular en este ciclo, ya ha renderizado la vista y por lo tanto, el elemento existe.

---

## Comunicación entre componentes 📞

En este caso, se trata de comunicación entre siblings, o sea, que no tienen una relación padre e hijo.

El siguiente artículo resume los [métodos de comunicación entre componentes](https://www.danywalls.com/how-to-share-data-between-components-in-angular).

### ¿Qué es un Subject?

Son un tipo de Observabel especial, que nos permite realizar diversas tareas, son como EventEmitters.

No mantiene el último valor emitido, sino que obtiene el valor que actualmente recibe el observador.

### ¿Qué es un BehaviorSubject?

Emite el último valor a todas las nuevas suscripciones.

- Requiere de un valor por defecto.
- Devuelve el último valor, inmediatamente hay una suscripción.
- Puedes recuperar el último valor emitido con el _getValue()_

Ejemplo:

Queremos que la ciudad seleccionada este disponible en el componente de formulario reactivo.

En el data service que provee los métodos CRUD y que conecta con la API, definimos un objeto del tipo "City".

```js
const initCity: City = {
  _id: '',
  name: '',
}

```

Luego de eso, creamos una propiedad privada "city$", a la que se le asignara una nueva instancia de la clase "BehaviorSubject", obligatoriamente necesita un argumento por defecto (initCity).

```js
@Injectable({
  providedIn: 'root'
})

export class DataService {

  // Una diferencia sustancial entre Subject y BehaviorSubject es que al Behavior siempre hay que pasarle un valor por defecto
  private city$ = new BehaviorSubject<City>(initCity);

  private readonly API = 'https://crudcrud.com/api/448bb1e1d3854d19ad65af3859deb4a9/cities'

  constructor(private readonly http: HttpClient) { }

  // Getter
  get selectedCity$():Observable<City> {
    return this.city$.asObservable()
  }

  setCity(city: City): void {
    this.city$.next(city)
  }
}
```

El método getter devolverá públicamente la ciudad seleccionada.

El método setter registrará una nueva ciudad, el método next() de la clase "BehaviorSubject" asignará un nuevo valor, a la propiedad con la que inicializamos el objeto.

Luego de inyectar el servicio, suscribimos el observable "selectedCity$", y en la propiedad que utilizabamos para guardar la selección de la ciudad, le asignamos la ciudad que obtenemos de la suscripción.

```js
  ngOnInit(): void {
    this.dataSvc.selectedCity$.subscribe((city:City) => this.selection = city)

    this.dataSvc.getCities().subscribe(cities => {
      this.cities = [...cities]
      console.log(this.cities)
    })
  }
```

Para asignar la ciudad que seleccionemos al observable para su posterior uso, debemos utilizar el método setCity().

```js
onSelectedCity(city: City): void {
  // this.selection = city;
  this.dataSvc.setCity(city);
}
```

Vamos al componente del formulario rectivo, e inyectamos el servicio en la clase del componente.

Definimos una nueva propieadad llamada "selectedCity$" y le asignamos el observable.

```js
export class FormularioReactivoComponent implements OnInit {
  persona!: FormGroup;
  
  //QueryParams
  name!: string
  
  //Resolvers
  cities: string[] = []

  selectedCity$ = this.dataSvc.selectedCity$;

  constructor(
    private readonly fb: FormBuilder, 
    private readonly route: ActivatedRoute,
    //Inyectamos el service
    private readonly dataSvc: DataService
    ) { }
}
```

De la siguiente manera, con el pipe async, podremos devolver a la vista, el objeto city, al poder ser null le agregamos el "?" y luego accedemos a su propiedad "name".

```html
{{(selectedCity$ | async)?.name}}
```

---

## Angular Animations 🎉🎊

Angular se basa en la funcionalidad CSS para poder animar la página web, lo que significa que se podrá animar cualquier cosa que el navegador considere animable.

Y para ello utiliza fundamentalmente dos módulos:

- **@angular/animations**
- **@angular/platform-browser**

Y para poder trabajar con estos módulos, necesitamos importar en nuestro módulo principal, el ngModule **BrowserAnimationsModule**.

```js
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ ],
  bootstrap: [ ]
})
export class AppModule { }
```

Es posible que solo queramos algunas funciones de animación en cierto componente, para ello las importamos desde **@angular/animations**.

```js
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
```

En el archivo ts del componente, debemos agregar en el decorador **@Component** una propiedad llamada **animations:**, dentro defines los triggers que definiran las animaciones dentro de la propiedad.

```js
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  animations: [
    // los triggers van aquí.
  ]
})
```

Ejemplo:

```js
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations:[
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: '#ffe65d'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'gray'
      })),
      transition('* => closed', [
        animate('1s')
      ]),
      transition('* => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})

export class OpenCloseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
```

El método **state()** define los distintos estados para llamar en cada transicion: open -> close, close -> open, el método **style()** define los estilos CSS de cada uno de los estados anteriores.

Si queremos, podemos acentuar el cambio de estado durante un periodo de tiempo determinado:

```js
transition('* => closed', [
  animate('1s')
]),
transition('* => open', [
  animate('0.5s')
]),
```

**transition()** es un método que define una transición, el primer parametro acepta una expresión que en nuestro caso, sirve para definir los distintos estados. El segundo parametro acepta uno o varios métodos **animate()**.

**animate()** es una función que nos permite definir una duración, retraso o aceleración de una transición. Con este método podemos definir los **keyframes()** para animaciones con varios pasos y se colocan como segundo argumento del método animate().

Ejemplos con los keyframes:

```js
animate("5s", keyframes([
  style({ backgroundColor: "red", offset: 0 }),
  style({ backgroundColor: "blue", offset: 0.2 }),
  style({ backgroundColor: "orange", offset: 0.3 }),
  style({ backgroundColor: "black", offset: 1 })
]))
```

  1. 1º Parámetro;
    Puede tomar un número o una cadena definida en tres partes:

   ```js
    animate(duración)
   ```

   o

   ```js
    animate('duration delay easing')
   ```

  la primera parte es obligatoria y se puede expresar en milisegundos como un número sin comillas o en segundos con comillas y un especificador de tiempo.

  Ejemplos:
    - 100
    - '100ms'
    - '0.1s'

  El segundo argumento tiene la mismas base que el anterior
    - '0.2s 100ms', Espere 100ms y luego ejecute durante 200ms.

  El tercer argumento **easing** controla como se acelera y desacelera la animación durante un tiempo de ejecución. **ease-in** hace que la animación comience lentamente y aumente la velocidad a medida que avanza.

- Espere 100 ms, ejecute durante 200 ms. Use una curva de desaceleración para comenzar rápido y desacelere lentamente hasta un punto de descanso: '0.2s 100ms ease-out'

- Ejecutar durante 200 ms, sin demora. Use una curva estándar para comenzar lento, acelerar en el medio y luego desacelerar lentamente al final: '0.2s ease-in-out'

- Comience inmediatamente, corra durante 200 ms. Use una curva de aceleración para comenzar lento y terminar a toda velocidad: '0.2s ease-in'

Para activar la animación necesitamos un disparador, **trigger()** es una función que recopila estados y transiuciones, identificando la animación por un nombre, para poder asginarselo al elemento HTML.

Esta misma función describe el nombre de la propiedad para observar los cambios. Cuando ocurre el cambio, el disparador acciona o ejecuta todas las funciones que hemos definido.

En nuestro caso definimos lo siguiente:

```js
export class OpenCloseComponent {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
}
```

Un booleano que alterará el estado del elemento HTML.

```html
<div [@openClose]="isOpen ? 'open' : 'closed' " class="open-close-container">
  <p>La caja esta {{ isOpen ? 'Abierta' : 'Cerrada' }}!</p>
</div>
```

Vinculamos el disparador con una variable de plantilla, y cuando se desencadene un cambio en el valor "isOpen", se definira un nuevo estado para el elemento HTML.

Cuando sucede el cambio de valor, el disparador **openClose** se activa y luego el disparador maneja el cambio según como este definido

Para los elementos que ingresan o salen de una página (insertados o eliminados del DOM), puede hacer que las animaciones sean condicionales. Por ejemplo, utilícelo con el disparador de animación en la plantilla HTML.*ngIf

---

## Internacionalización Angular 🌎

Es el proceso de diseño y preparación del proyecto para su uso en diferentes lugares del mundo, esto incluye las siguientes acciones:

### **Internacionalizacion(i18n)**

- Extraer texto para traducir a diferentes idiomas
- Dar formato a los datos para una configuración regional específica.
  
### **Localización**

- Unidades de medida que incluyen fecha y hora, números y monedas.
- Nombres traducidos que incluyens zonas horarias, idiomas y países.

1. **Instalar dependencias**

   Ejecutamos el siguiente comando para instalar las dependencias que necesitamos

   ```bash
    ng add @angular/localize
   ```

   Luego necesitamos [actualizar el json](https://angular.io/guide/i18n-common-merge#define-locales-in-the-build-configuration).

   ```json
    "angular_project": {
      "i18n": {
        "sourceLocale": "en-US",
        "locales": {
          "es": {
            "translation": "src/locale/messages.es.xlf"}
        }
      },
    }
   ```

   Y dentro de la sección **architect**, dentro de su sección **build**, y respectivamente en su **options**, especificamos lo siguiente:

   ```json
    "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "localize": ["es", "en-US"],
          }
        }
    }
   ```

2. OTI (Opportunity to Internationalize)

Oportunidades para internacionalizar.

Ahora seleccionamos todos esos elementos que deseamos traducir.

```html
<h2 i18n>Hello world</h2>
```

Creamos el archivo que alojara las traducciones:

```bash
ng extract-i18n --output-path src/locale
```

Luego hacemos una copia del archivo dado con la asginación que le dimos en la configuración del "i18n".

Colocamos el siguienete comando en el terminal.

```bash
cp src/locale/messages.xlf src/locale/messages.es.xlf
```

Esto nos copiara el archivo "messages" con el siguiente formato

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
  <file source-language="es-ES" datatype="plaintext" original="ng2.template">
    <body>
      <trans-unit id="2023484548631819319" datatype="html">
        <source>Hello world</source>
        <target>Hola mundo</target>
        <context-group purpose="location">
          <context context-type="sourcefile">src/app/app.component.html</context>
          <context context-type="linenumber">23</context>
        </context-group>
      </trans-unit>
    </body>
  </file>
</xliff>
```

La etiqueta "source" indica el texto de origen, mientras que "target" indica la traducción.

---

## Angular 15 nuevas características

- ### **Standalone components**

  Antes:

  ![Componente en Angular 14](img-content/Standalone_components(14-1).png)

  ![Componente en Angular 14](img-content/Standalone_components(14-1).png)

  ![Componente en Angular 15](img-content/Standalone_components(15).png)

  Angular trabajaba con módulos, una agrupación de componentes, servicios y pipes.

  **Problemas:**

  - A la larga, los módulos podrían crear cierta dependencia o concurrencia ya que, es posible que en módulo, se necesite utilizar alguna cosa en una tarea concreta, pero como esta dentro del módulo, entonces todo el módulo debe ser importado. Esto daba problema de rendimientos sobre todo.

    Eso a su vez va en contra del estandar actual, pues los otro frameworks de forma opcional te permiten modularizar o no (sobre todo para que puedas hacer aplicaciones pequeñas, Angular no permite eso).

  Son componentes que no necesitan módulos, lo que nos permite trabajar con arquitecturas de software mantenibles y sostenibles, tenemos la capacidad de crear aplicaciones basadas en componentes pequeños, pero con el potencial de expandirlos con módulos.

- ### **TypedForms**

  Problema:

  Si bien los formularios nos permiten guardar los valores de una muy buena manera, existe el problema de castearlos con tipos (null -> string ->objeto), Angular no lo trabajaba muy bien.

  ![Formularios tipados](img-content/TypedForms.png)
  
  ![Formularios tipados](img-content/TypedForms2.png)

  De esta manera, si el tipo asignado a la propiedad del objeto no es el que tenía el tipo original, typeScript se quejará.

- ### **TitleStrategy**

  Se basa en la capacidad de aumentar la accesibilidad de la aplicación.

  Problema:

  En las SPAs el título no cambia, de seguir explorando la aplicación, el título no cambiará, eso es un problema a la hora de identificar a un usuario en que lugar de la aplicación se encuentra.

  De esta manera, Angular ofrece el TitleStrategy, para poder cambiar el título de manera dinámica, para identificar en que página se encuentra.

  ![Formularios tipados](img-content/TitleStrategy.png)

- ### **Standalone Router & HTTP**

  Tanto Router como HTTP también estan capacitados para existir sin necesidad de crear módulos.

  Para crear rutas:

  ![Formularios tipados](img-content/RouteStandAloneCreate.png)

  Agregar LazyLoading:

  ![Formularios tipados](img-content/LazyLoadingStandAlone.png)

  Si queremos un provider para que cargue todo:

  ![Formularios tipados](img-content/ProvideStandAloneRoute.png)

- ### **Directive Composition API**

  La directiva es una forma en la que Angular nos permite modificar elementos del DOM y poder darle funcionalidad (NgIf, NgFor, etc...).

  Ahora podemos realizar una unión de distintas directivas, combinar el comportamiento de directivas.

  ![Formularios tipados](img-content/Directive_Composition_API.png)

  En la imagen estariamos utilizando una directiva denominada **"mat-menu"**, con **"HasColor"**, utilizando a su vez la directiva del **"CdkMenu"** para los inputs, poniendole el menú disable, y para los outputs menú close.

  Aquí realizamos la composición, se esta agreagando código para cambiar el comportamiento sin modificar el comportamiento del código existente.

- ### **Image directive**

  Angular ahora nos provee de una directiva para ponerlo a las imagenes para optimizar su carga.

  Indirectamente proyectando un lazyloading para que se carguen solo cuando los requerimos.

  ![Formularios tipados](img-content/Image_directive.png)

  Para aplicarlo en el HTML, debemos reemplazar el atributo src por  **ngSrc**.

  ```html
    <img ngSrc="cat.jpg">
  ```

  Es posible que se necesite priorizar la carga de la imagen.

  Para ello debemos marcar el elemento img como **priority**.

  ```html
    <img ngSrc="cat.jpg" priority>
  ```

  Esto aplica las siguientes optimizaciones:
  - fetchpriority=high.
  - loading=eager.
  - Genera un elemento de enlace precargado si renderiza en el servidor.

  Para evitar cambios de diseño relacionacos con la imagen, NgOptimizedImage necesita que se especifique la altura y la anchura de la imagen.

  ```html
    <img ngSrc="cat.jpg" width="400" height="200">
  ```

  Es importante que dependiendo de tipo de imagen, utilicemos o un tamaño fijo (el tamaño que queremos para la imagen) o si es una imagen sensible (width y height deben tener el tamaño intrínseco del archivo de imagen).

  En caso de queramos que la imagen rellenen un contenedor, debemos utilizar el atributo **fill**.

  ```html
    <img ngSrc="cat.jpg" fill>
  ```

  en caso de que los atributos width y height modifiquen el estilo de imagen distorsionando el aspecto, puede usar los valores **auto**.

  ```html
   <img ngSrc="cat.jpg" width="auto" height="auto">
  ```

  Para solicitar una imagen, que posteriormente queremos que sus dimesiones se puedan acoplar con las características de la ventana gráfica del usuario, utilizamos el atributo **srcset**, este se basará en el atributo **size** (permite especificar el ancho de una imagen, para cada condición de una lista de medios).

  Esto nos evita descargar una imagen muy grande.

  - Imagenes de tamaño fijo.

    Y podemos moldearlo según deseamos. Si queremos un tamaño fijo (el mismo tamaño en todos los dispositivos), no es necesario establecer un **size** atributo

    ```html
      <img ... srcset="image-400w.jpg 1x, image-800w.jpg 2x">
    ```

  - Imagenes receptivas.
    Si queremos un tamaño freceptivo (variar tamaño según la ventana gráfica), necesitamos definir un atributo **size**.

  ```html
   <img ngSrc="hero.jpg" ngSrcset="100w, 200w, 300w" sizes="50vw">
  ```

- ### **Functional router guards**

  Se agrega una nueva metodología, el **inject()**, nos permite prescindir el inyectar dependencias por medio de constructor.

  ![Formularios tipados](img-content/Functional_router_guards.png)

- ### **Better stack traces**

  Los errores de angular eran muy verbosos

  ![Formularios tipados](img-content/Better_stack_traces.png)

  Ahora los errores son más legibles

---

## Referencias, agradecimientos y recursos

La siguiente documentación ha sido realizada tomando como base:

- [Reto 28 días aprendiendo Angular (Dominicode)](https://www.youtube.com/watch?v=8Fwwhjt3jjE&list=PL_9MDdjVuFjFBed4Eor5qj1T0LLahl4z0)
- [Curso Angular de Coders Free (Victor Arana)](https://www.youtube.com/watch?v=X0LVIKRwWBs&list=PLZ2ovOgdI-kWDh3jDh-GvgToRlVfwIUFw)
- [Kevin Davila (Google Developer Expert)](https://www.youtube.com/@KevinDavilaDev/videos)
