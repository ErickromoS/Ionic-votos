import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, NavController, IonButtons, IonIcon, IonButton } from '@ionic/angular/standalone';
import { HomePage } from '../home/home.page';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
  standalone: true,
  imports: [IonButton, IonIcon, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ModalInfoPage implements OnInit {
  title: string ='';
  propuestas: string [] = [];
  ImagePath : string = '';
  descripcion: string = '';

  constructor(private route: ActivatedRoute, private navCtrl : NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.title= params["title"];
      this.propuestas= params["propuestas"];
      this.ImagePath = params['imagePath'];
      this.descripcion = params['descripcion'];
    });
  }

  cerrar(){
    this.navCtrl.back();
  }

}
