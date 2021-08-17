import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {
  users:any;

  constructor( private service:UserService) { }

  ngOnInit(): void {

    this.service.consultUsers().subscribe(respuesta =>{
      console.log(respuesta);
      this.users =respuesta;
    })
  }

  deleteUser(id:any, iControl: any ){
    console.log(id);
    console.log(iControl);
    if (window.confirm("¿Desea eliminar registro?")){
      this.service.DeleteUser(id).subscribe((res)=>{

        this.users.splice(iControl,1)
      });

    }


  }

}
