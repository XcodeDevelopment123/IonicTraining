import { Component } from '@angular/core';

import { Camera ,CameraResultType , CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}

  imageUrl : any;

  async takePhoto(){

    const image = await Camera.getPhoto({
      quality : 90,
      allowEditing : false,
      resultType : CameraResultType.Uri,
      source: CameraSource.Camera
    })

    this.imageUrl = image.webPath;
  }

  async uploadPhoto(){

    const image = await Camera.getPhoto({
      quality : 90,
      allowEditing : true,
      resultType : CameraResultType.Uri,
      source : CameraSource.Prompt
    })

    this.imageUrl = image.webPath;
  }

}
