import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';
//import { AutentificarService } from '../services/autentificar.service';
import { ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { PermisosService } from '../services/permisos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  result: string;
  cordova;
  tipoUsuario:any;
  constructor(private permisos:PermisosService, private httpClient: HttpClient, private toastController: ToastController, private actionSheetCtrl: ActionSheetController, private router: Router) { 
    
  } 

   async ngOnInit() {
    this.tipoUsuario=await this.permisos.getTipoUsuario();
    console.log("tipo:"+this.tipoUsuario);
  }
  
  logout() {
    localStorage.clear();
    this.router.navigate(['/home']);
  }


  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      position: 'middle',
      duration: 3000
    });
    toast.present();
  }

  // ACTIONSHEET
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Historial de Pedidos',
      buttons: [
        {
          text: 'Pedidos Vendedor',
          icon: 'pricetag',
          role: 'destructive',
          handler: () => {
             this.router.navigate(['/pvendedor']);

            },
        },
        {
          text: 'Pedidos Comerciante',
          icon: 'pricetags',
          handler: () => {
            this.router.navigate(['/psubdistribuidor']);

           },
        },
        {
          text: 'Cancelar',
          icon: 'close-circle',
          role: 'cancel',          
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }
  // CIERRE DE ACTION SHEET



}
