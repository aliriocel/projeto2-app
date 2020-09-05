import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Interceptor } from 'src/services/auth.interceptor';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { AuthService } from 'src/services/auth.services';
import { NoticiaService } from 'src/services/noticia.service';
import { TemplateService } from 'src/services/templates';
import { UsuarioService } from 'src/services/usuario.service';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    Interceptor
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthGuardService,
    AuthService,
    NoticiaService,
    UsuarioService,
    TemplateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
