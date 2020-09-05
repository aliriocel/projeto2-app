import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/model/noticia';
import { NoticiaService } from 'src/services/noticia.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-noticias-detalhe',
  templateUrl: './noticias-detalhe.page.html',
  styleUrls: ['./noticias-detalhe.page.scss'],
})
export class NoticiasDetalhePage implements OnInit {

noticia : Noticia = new Noticia();

constructor(private actRoute : ActivatedRoute,
  private router : Router,
  private noticiaServ : NoticiaService,
  private navCtrl : NavController) { }
  
  
    ngOnInit() {
      
    }

    ionViewWillEnter(){
      this.noticia.imagem = null;
      this.actRoute.paramMap.subscribe(resp=>{
  
        let id = resp.get('id');
        this.noticiaServ.noticiaId(id).subscribe(data=>{
          this.noticia = data as unknown as Noticia;
          this.noticia.imagem = this.noticiaServ.getImage(id);
        })
      })
    }
  

  

  atualizar(noticiaObj){
    this.navCtrl.navigateForward(['noticias-update',noticiaObj.id]);
  }

  deletar(noticiaObj){
    this.navCtrl.navigateForward(['noticias-delete',noticiaObj.id]);
  }

  upload(noticiaObj){
    this.navCtrl.navigateForward(['noticias-upload',noticiaObj.id]);
  }
}
