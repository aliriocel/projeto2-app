import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from 'src/model/noticia';
import { Message } from 'src/model/message';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn:'root',
})

export class NoticiaService{

    api: string = environment.apiNoticias + "/noticia/";

    constructor(private http: HttpClient){

    }

    novo(obj : Noticia) : Observable<Message>{
        return this.http.post<Message>(`${this.api}`,obj);
    }

    getNoticias() : Observable<Noticia[]>{
        return this.http.get<Noticia[]>(`${this.api}`);
    }

    noticiaId(id) : Observable<Noticia>{
      return this.http.get<Noticia>(`${this.api}/${id}`);
    }
}