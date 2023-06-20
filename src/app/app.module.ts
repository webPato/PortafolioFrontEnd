import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ConocimientoYAptitudesComponent } from './componentes/conocimiento-y-aptitudes/conocimiento-y-aptitudes.component';
import { CursosComponent } from './componentes/cursos/cursos.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { HttpClientModule } from '@angular/common/http';
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
import { EditAcercaDeComponent } from './componentes/edit-acerca-de/edit-acerca-de.component';
import { HomeComponent } from './componentes/home/home.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { EditPersonaComponent } from './componentes/edit-persona/edit-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    ConocimientoYAptitudesComponent,
    CursosComponent,
    ProyectosComponent,
    CreateConocimientoYAptitudesComponent,
    EditConocimientoYAptitudesComponent,
    CreateCursosComponent,
    EditCursosComponent,
    CreateProyectosComponent,
    EditProyectosComponent,
    CreateEducacionComponent,
    EditEducacionComponent,
    CreateExperienciaComponent,
    EditExperienciaComponent,
    EditAcercaDeComponent,
    HomeComponent,
    PersonaComponent,
    BannerComponent,
    EditPersonaComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
