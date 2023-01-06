import { HomeComponent } from './home/home.component';
import { Formulario2Component } from './formulario2/formulario2.component';
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { QueryIdComponent } from './query-id/query-id.component';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';
import { DetailsComponent } from './users/details/details.component';

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'formulario-reactivo', component: FormularioReactivoComponent},
    {path: 'formulario-plantilla', component: Formulario2Component},
    {path: 'query-id/:id', component: QueryIdComponent},
    {path: 'home', component: HomeComponent},
    {path: 'users', component:UserComponent, 
     children:
     [
        {path:'list', component: ListComponent},
        {path:'details', component: DetailsComponent}
     ]
    },
    {path: '**', component: PagenotfoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}