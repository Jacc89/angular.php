import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';
import { EditarUsuarioComponent } from './components/usuarios/editar-usuario/editar-usuario.component';
import { AgregarUsuarioComponent } from './components/usuarios/agregar-usuario/agregar-usuario.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    UsuariosComponent,
    AgregarUsuarioComponent,
    ListarUsuariosComponent,
    EditarUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
