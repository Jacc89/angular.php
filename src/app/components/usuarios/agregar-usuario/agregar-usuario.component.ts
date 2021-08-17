import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {
  formUser:FormGroup;

  constructor( public form: FormBuilder,
               private userService:UserService,
               public router: Router) {


    this.formUser = this.form.group({
      nombre:[''],
      correo:['']

    });
   }

  ngOnInit(): void {
  }

  addDate(){
    console.log("holaaa")
    console.log(this.formUser.value);
    this.userService.addUser(this.formUser.value).subscribe(res=>{
      this.router.navigateByUrl('/listUsers');

    });




  }

}
