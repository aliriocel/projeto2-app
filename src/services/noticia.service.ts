import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from 'src/model/noticia';
import { Message } from 'src/model/message';
import { environment } from 'src/environments/environment';
import * as S3 from 'aws-sdk/clients/s3';


@Injectable({
  providedIn: 'root',
})

export class NoticiaService {

  api: string = environment.apiNoticias + "/noticia/";
  s3Config = environment.awsAcess;
  bucketName = 'imagem-app';

  constructor(private http: HttpClient) {

  }

  novo(obj: Noticia): Observable<Message> {
    return this.http.post<Message>(`${this.api}`, obj);
  }

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${this.api}`);
  }

  noticiaId(id): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(`${this.api}/${id}`);
  }

  atualiza(obj: Noticia): Observable<any> {
    return this.http.put<any>(`${this.api}/${obj.id}`, obj);
  }

  delete(obj: Noticia): Observable<any> {
    return this.http.delete<any>(`${this.api}/${obj.id}`);
  }

  fileUpload(file, fileName) : Promise<any> {

    const contentType = file.type;

    //gera o nome do arquivo
    let name: string = file.name;
    let arrayFileName = name.split('.');
    let finalName = fileName + '.' + arrayFileName[1];

    const params = {
      Bucket: this.bucketName,
      Key: finalName,
      Body: file,
      ACL: 'public-read',
      contentType: contentType
    };

    const bucket = new S3(this.s3Config);

    return bucket.upload(params).promise().then(data=>{
      return data;
    })
  }

  getImage(id) {
    return `${environment.bucketNoticia}/noticia${id}.jpg`;
  }
}