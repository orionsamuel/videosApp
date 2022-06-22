import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Vídeos App';

  listaVideos: IFilme[] = [
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '04/15/2021',
      duracao: '1h 50m',
      classificacao: 76,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg',
      generos: ['Action', 'Fantasy', 'Adventure']
    },
    {
      nome: 'Justice League (2021)',
      lancamento: '03/18/2021',
      duracao: '4h 2m',
      classificacao: 83,
      cartaz: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg',
      generos: ['Action', 'Adventure', 'Fantasy', 'Science Fiction']
    }
  ];

  constructor(public alertController: AlertController, public toastController: ToastController) {}

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          id: 'confirm-button',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success '
    });
    toast.present();
  }

}
