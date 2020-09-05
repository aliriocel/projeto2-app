import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, IonInfiniteScroll } from '@ionic/angular';
import { Usuario } from 'src/model/usuario';
import { UsuarioService } from 'src/services/usuario.service';
import { TemplateService } from 'src/services/templates';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.page.html',
  styleUrls: ['./usuarios-list.page.scss'],
})
export class UsuariosListPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public usuarios : Usuario[] = [];

  constructor(private activatedRoute: ActivatedRoute,
    private route: Router,
    private navCtrl: NavController,
    private usuarioServ: UsuarioService,
    private templateServ: TemplateService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {

    this.usuarios = [];
    this.templateServ.loading.then(load=>{
      
      load.present();
      this.usuarioServ.getUsuarios().subscribe(data=>{
        this.usuarios = data;
        load.dismiss();
      });
      
    })
  }

  buscaPorId(usuarioObj: Usuario) {
    this.navCtrl.navigateForward(['usuarios-detalhe', usuarioObj.id]);
  }

  loadData(event) {

    this.usuarioServ.getUsuarios().subscribe(data=> {
     
      data.forEach(item=>{
        this.usuarios.push(item);
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
