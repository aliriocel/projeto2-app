import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { Noticia } from 'src/model/noticia';
import { NoticiaService } from 'src/services/noticia.service';
import { TemplateService } from 'src/services/templates';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.page.html',
  styleUrls: ['./noticias-list.page.scss'],
})
export class NoticiasListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public noticias : Noticia[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private route: Router,
    private navCtrl: NavController,
    private noticiaServ: NoticiaService,
    private templateServ: TemplateService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.noticias = [];
    this.templateServ.loading.then(load=>{
      
      load.present();
      this.noticiaServ.getNoticias().subscribe(data=>{
        this.noticias = data;
        load.dismiss();
      });
      
    })
  }

  buscaPorId(noticiaObj: Noticia) {
    this.navCtrl.navigateForward(['noticias-detalhe', noticiaObj.id]);
  }

  loadData(event) {

    this.noticiaServ.getNoticias().subscribe(data=> {
     
      data.forEach(item=>{
        this.noticias.push(item);
      })

      setTimeout(() => {
        console.log('Done');
        event.target.complete();
  
        if (data.length == 1000) {
          event.target.disabled = true;
        }
      }, 500);  
    });
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
