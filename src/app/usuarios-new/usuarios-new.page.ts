import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from 'src/services/usuario.service';
import { TemplateService } from 'src/services/templates';

@Component({
  selector: 'app-usuarios-new',
  templateUrl: './usuarios-new.page.html',
  styleUrls: ['./usuarios-new.page.scss'],
})
export class UsuariosNewPage implements OnInit {

  formGroup: FormGroup;
  msg: string = null;

  constructor(private usuarioServ: UsuarioService,
    private formBuilder: FormBuilder,
    public templateServ: TemplateService) {
    this.iniciarForm();
  }

  ngOnInit() {
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      cidade: ['', [Validators.required, Validators.minLength(5)]],
      estado: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.minLength(5)]],
      foto: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  cadastrar() {

    this.templateServ.loading.then(load => {
      load.present();

      this.usuarioServ.novo(this.formGroup.value).subscribe(data => {

        this.formGroup.reset();
        load.dismiss();

        this.templateServ.exibirMensagem("Usuário Cadastrado com Sucesso");
      })
    })
  }
}
