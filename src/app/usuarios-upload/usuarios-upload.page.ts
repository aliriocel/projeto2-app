import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/services/usuario.service';

@Component({
  selector: 'app-usuarios-upload',
  templateUrl: './usuarios-upload.page.html',
  styleUrls: ['./usuarios-upload.page.scss'],
})
export class UsuariosUploadPage implements OnInit {

  toFile;
  usuario: Usuario = new Usuario();
  location: string = null;

  constructor(private actRoute: ActivatedRoute,
    private usuarioServ: UsuarioService) { }

  ngOnInit() {

    this.actRoute.paramMap.subscribe(resp => {

      let id = resp.get('id');
      this.usuarioServ.usuarioId(id).subscribe(data => {
        this.usuario = data as unknown as Usuario;
        this.location = this.usuarioServ.getImage(id);
      });
    });
  }

  submit() {
    const file = this.toFile.item(0);
    this.usuarioServ.fileUpload(file, "usuario" + this.usuario.id).then(data => {
      this.location = data.Location;
    });
  }

  onChange(event) {
    this.toFile = event.target.files;
    this.location = null;

    this.submit();
  }

}
