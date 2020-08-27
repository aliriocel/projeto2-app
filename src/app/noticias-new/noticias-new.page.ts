import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NoticiaService } from 'src/services/noticia.service';
import { TemplateService } from 'src/services/templates';

@Component({
  selector: 'app-noticias-new',
  templateUrl: './noticias-new.page.html',
  styleUrls: ['./noticias-new.page.scss'],
})
export class NoticiasNewPage implements OnInit {

  formGroup : FormGroup;
  msg : string = null;

  

  constructor(private noticiaServ : NoticiaService,
    private formBuilder : FormBuilder,
    public templateServ: TemplateService) { 
    this.iniciarForm();
  }

  ngOnInit() {

  }

  iniciarForm() {
    this.formGroup = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.minLength(5)]],
      conteudo: ['', [Validators.required, Validators.minLength(5)]],
      imagem: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  cadastrar(){
    
    this.templateServ.loading.then(load =>{
      load.present();

      this.noticiaServ.novo(this.formGroup.value).subscribe(data=>{
        
        this.formGroup.reset();
        load.dismiss();

        this.templateServ.exibirMensagem("Cadastrado com Sucesso");
      })
    })
    
    
   
    
  }
}
