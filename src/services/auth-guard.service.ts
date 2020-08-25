import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.services';
import { NavController } from '@ionic/angular';



@Injectable()
export class AuthGuardService implements CanActivate{

constructor (public auth : AuthService, public navCtrl: NavController){}

    canActivate() : boolean {
        if(!this.auth.isLogg()){
            this.navCtrl.navigateRoot(['/login']);
            return false;
            
        
    }
}
}