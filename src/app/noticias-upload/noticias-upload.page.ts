import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NoticiaService } from 'src/services/noticia.service';
import { Noticia } from 'src/model/noticia';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-noticias-upload',
  templateUrl: './noticias-upload.page.html',
  styleUrls: ['./noticias-upload.page.scss'],
})
export class NoticiasUploadPage implements OnInit {

  tofile;
  noticia: Noticia = new Noticia();
  location : string = "";

  constructor(private actRoute: ActivatedRoute,
    private noticiaServ: NoticiaService) { }

  ngOnInit() {

    this.actRoute.paramMap.subscribe(resp => {

      let id = resp.get('id');
      this.noticiaServ.noticiaId(id).subscribe(data => {
        this.noticia = data as unknown as Noticia;
        this.getImage();
      });
    });

  }

  getImage(){
    this.location = `${environment.bucketNoticia}/noticia${this.noticia.id}.jpg`;
  }

  submit(event){
    
    const file = this.tofile.item(0);
    this.noticiaServ.fileUpload(file,"noticia"+this.noticia.id);
    this.getImage();
  }

  onChange(event){
    this.tofile = event.target.files;

  }
}
