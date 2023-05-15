import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateConocimientoYAptitudesComponent } from './componentes/create-conocimiento-y-aptitudes/create-conocimiento-y-aptitudes.component';
import { EditConocimientoYAptitudesComponent } from './componentes/edit-conocimiento-y-aptitudes/edit-conocimiento-y-aptitudes.component';
import { CreateCursosComponent } from './componentes/create-cursos/create-cursos.component';
import { EditCursosComponent } from './componentes/edit-cursos/edit-cursos.component';
import { CreateProyectosComponent } from './componentes/create-proyectos/create-proyectos.component';
import { EditProyectosComponent } from './componentes/edit-proyectos/edit-proyectos.component';
import { CreateEducacionComponent } from './componentes/create-educacion/create-educacion.component';
import { EditEducacionComponent } from './componentes/edit-educacion/edit-educacion.component';
import { CreateExperienciaComponent } from './componentes/create-experiencia/create-experiencia.component';
import { EditExperienciaComponent } from './componentes/edit-experiencia/edit-experiencia.component';


const routes: Routes = [

  { path: 'new-aptitudes', component: CreateConocimientoYAptitudesComponent},
  { path: 'edit-aptitudes/:id', component: EditConocimientoYAptitudesComponent},
  { path: 'new-cursos', component: CreateCursosComponent},
  { path: 'edit-cursos/:id', component: EditCursosComponent},
  { path: 'new-proyectos', component: CreateProyectosComponent},
  { path: 'edit-proyectos/:id', component: EditProyectosComponent},
  { path: 'new-educacion', component: CreateEducacionComponent},
  { path: 'edit-educacion/:id', component: EditEducacionComponent},
  { path: 'new-experiencia', component: CreateExperienciaComponent},
  { path: 'edit-experiencia/:id', component: EditExperienciaComponent}
  
 // { path: '', redirectTo: '/aptitudes/new', pathMatch: 'full' }

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
