import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Usuario } from 'src/model/usuario';
import { ActivatedRoute } from '@angular/router';
import { TemplateService } from 'src/services/templates';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-usuarios-update',
  templateUrl: './usuarios-update.page.html',
  styleUrls: ['./usuarios-update.page.scss'],
})
export class UsuariosUpdatePage implements OnInit {

  usuario: Usuario = new Usuario();
  formGroup: FormGroup;

  constructor(private actRoute: ActivatedRoute,
    private usuarioServ: UsuarioService,
    private formBuilder: FormBuilder,
    private templateServ: TemplateService) {
    this.iniciarForm();
  }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(resp => {
      let id = resp.get('id');
      this.usuarioServ.usuarioId(id).subscribe(data => {
        this.usuario = data as unknown as Usuario;
        this.iniciarForm();
      });
    })
  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      id: [this.usuario.id, [Validators.required, Validators.minLength(5)]],
      nome: [this.usuario.nome, [Validators.required, Validators.minLength(5)]],
      cidade: [this.usuario.cidade, [Validators.required, Validators.minLength(5)]],
      estado: [this.usuario.estado, [Validators.required, Validators.minLength(5)]],
      email: [this.usuario.email, [Validators.required, Validators.minLength(5)]],
      foto: [this.usuario.foto, [Validators.required, Validators.minLength(5)]]
    })
  }

  atualizar() {
    this.templateServ.loading.then(load => {
      load.present();
      this.usuarioServ.atualiza(this.formGroup.value).subscribe(data => {
        load.dismiss();
        this.templateServ.exibirMensagem("Atualizado com sucesso")
      })
    })
  }
}
