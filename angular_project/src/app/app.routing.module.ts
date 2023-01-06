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