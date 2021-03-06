import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from 'src/services/noticia.service';
import { Noticia } from 'src/model/noticia';

@Component({
  selector: 'app-noticias-upload',
  templateUrl: './noticias-upload.page.html',
  styleUrls: ['./noticias-upload.page.scss'],
})
export class NoticiasUploadPage implements OnInit {

  toFile;
  noticia: Noticia = new Noticia();
  location: string = null;

  constructor(private actRoute: ActivatedRoute,
    private noticiaServ: NoticiaService) { }

  ngOnInit() {

    this.actRoute.paramMap.subscribe(resp => {

      let id = resp.get('id');
      this.noticiaServ.noticiaId(id).subscribe(data => {
        this.noticia = data as unknown as Noticia;
        this.location = this.noticiaServ.getImage(id);
      });
    });
  }

  submit() {
    const file = this.toFile.item(0);
    this.noticiaServ.fileUpload(file, "noticia" + this.noticia.id).then(data => {
      this.location = data.Location;
    });
  }

  onChange(event) {
    this.toFile = event.target.files;
    this.location = null;

    this.submit();
  }
}
