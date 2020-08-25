import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/services/auth.services';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logoff',
  templateUrl: './logoff.page.html',
  styleUrls: ['./logoff.page.scss'],
})
export class LogoffPage implements OnInit {

  constructor(private auth : AuthService,
    private navCtrl : NavController) { }

  ngOnInit() {
    this.auth.removeToken();
    this.navCtrl.navigateRoot(['login']);
  }


}
