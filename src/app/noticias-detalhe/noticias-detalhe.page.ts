import { Component, OnInit } from '@angular/core';
import { NOTICIAS } from 'src/environments/mock-noticias';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/model/noticia';

@Component({
  selector: 'app-noticias-detalhe',
  templateUrl: './noticias-detalhe.page.html',
  styleUrls: ['./noticias-detalhe.page.scss'],
})
export class NoticiasDetalhePage implements OnInit {

noticia : Noticia = new Noticia();

  constructor(private actRoute : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.actRoute.paramMap.subscribe(resp=>{

      let id = resp.get('id');
      this.getNoticias(id);
    })
  }

  getNoticias(id){

    let noticias : Noticia[] = NOTICIAS;
    
    noticias.forEach(n=>{
      if(n.id === id){
        this.noticia = n;

      }

    })
  }

}
