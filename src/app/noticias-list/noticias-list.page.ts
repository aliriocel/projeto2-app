import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NOTICIAS } from 'src/environments/mock-noticias';
import { Noticia } from 'src/model/noticia';
import { NoticiaService } from 'src/services/noticia.service';
import { TemplateService } from 'src/services/templates';
import { loadavg } from 'os';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.page.html',
  styleUrls: ['./noticias-list.page.scss'],
})
export class NoticiasListPage implements OnInit {

  public noticias : Noticia[] = [];

  constructor(private activatedRoute : ActivatedRoute,
    private route : Router,
    private navCtrl : NavController,
    private noticiaServ : NoticiaService,
    private templateServ : TemplateService) { }

  ngOnInit() {

    this.templateServ.loading.then(load=>{

      load.present();

    this.noticiaServ.getNoticias().subscribe(data=>{

      this.noticias = data;

      load.dismiss();
    })
  })
  }

  buscaPorId(noticiaObj : Noticia){
    this.navCtrl.navigateForward(['noticias-detalhe',noticiaObj.id]);
  }

}
