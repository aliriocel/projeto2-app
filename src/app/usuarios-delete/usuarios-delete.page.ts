import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/services/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-usuarios-delete',
  templateUrl: './usuarios-delete.page.html',
  styleUrls: ['./usuarios-delete.page.scss'],
})
export class UsuariosDeletePage implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(private actRoute: ActivatedRoute,
    private usuarioServ: UsuarioService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(resp => {
      let id = resp.get('id');
      this.usuarioServ.usuarioId(id).subscribe(data => {
        this.usuario = data as unknown as Usuario;
      });
    })
  }

  excluir() {
    this.usuarioServ.delete(this.usuario).subscribe(data => {
      this.navCtrl.navigateRoot(['usuarios-list']);
    })
  }
}
