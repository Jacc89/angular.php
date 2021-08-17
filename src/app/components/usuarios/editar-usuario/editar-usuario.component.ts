import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  formUsers:FormGroup;
  idEdit:any;


  constructor( private ActivatRoute:ActivatedRoute,
               private service:UserService,
               public form: FormBuilder,
               public router: Router
              ) {

    this.idEdit =this.ActivatRoute.snapshot.paramMap.get('id');
    console.log(this.idEdit);

    this.service.consultUser(this.idEdit).subscribe(
    res=>{
      console.log(res);
      this.formUsers.setValue({
        nombre:res,
        correo:res
      });

    });
    this.formUsers =this.form.group({
        nombre:[''],
        correo:['']
      });

  }
    ngOnInit(): void {}

   updateDate(){
      console.log (this.idEdit);
      console.log(this.formUsers.value);
      this.service.editUser(this.idEdit, this.formUsers.value).subscribe(
        ()=>{
          this.router.navigateByUrl('/listUsers');
        })
    }
}
