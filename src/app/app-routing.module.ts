import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// components
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AgregarUsuarioComponent } from './components/usuarios/agregar-usuario/agregar-usuario.component';
import { EditarUsuarioComponent } from './components/usuarios/editar-usuario/editar-usuario.component';
import { ListarUsuariosComponent } from './components/usuarios/listar-usuarios/listar-usuarios.component';

const routes: Routes = [

  { path: '**', pathMatch: 'full', redirectTo:' usuarios' },
  { path: 'user', component: UsuariosComponent},
  { path: 'nav', component: NavbarComponent},
  { path: 'addUser', component: AgregarUsuarioComponent},
  { path: 'editUser/:id', component: EditarUsuarioComponent},
  { path: 'listUsers', component: ListarUsuariosComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
