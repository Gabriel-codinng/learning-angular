import { AppRoutingModule } from './app.routing.module';
/**
 * 
 *  Este archivo define un Módulo que agrupa las herramientas para definir los distintos componentes de la aplicación
 * 
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { Formulario2Component } from './formulario2/formulario2.component';

//Este módulo también deshabilita el envio de formularios.
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecoradorInputComponent } from './decorador-input/decorador-input.component';
import { DecoradorOutputComponent } from './decorador-output/decorador-output.component';
import { FormOutputComponent } from './form-output/form-output.component';
import { PipesComponent } from './pipes/pipes.component';
import { FilterPipe } from './helper-pipes/filter.pipe';
// import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QueryIdComponent } from './query-id/query-id.component';
import { UserComponent } from './users/user/user.component';
import { DetailsComponent } from './users/details/details.component';
import { ListComponent } from './users/list/list.component';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component'
import { SpinnerInterceptor } from './shared/spinner/spinner.interceptor';

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
    ListComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    // Multi indica que se puede utilizar más de un interceptor.
    {provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
