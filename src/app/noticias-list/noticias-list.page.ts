import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NOTICIAS } from 'src/environments/mock-noticias';
import { Noticia } from 'src/model/noticia';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.page.html',
  styleUrls: ['./noticias-list.page.scss'],
})
export class NoticiasListPage implements OnInit {

  public noticias : Noticia[] = NOTICIAS;

  constructor(private activatedRoute : ActivatedRoute,
    private route : Router,
    private navCtrl : NavController) { }

  ngOnInit() {
  }

  buscaPorId(noticiaObj : Noticia){
    this.navCtrl.navigateForward(['noticias-detalhe',noticiaObj.id]);
  }

}
