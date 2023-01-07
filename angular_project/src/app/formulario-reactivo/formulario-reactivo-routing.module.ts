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
