import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes'
})
export class ImagenesPipe implements PipeTransform {

  transform(imagenes: any[]): string {

    if (!imagenes) {
      return 'assets/img/nophoto.png';
    } else if(imagenes.length==0) {
      return 'assets/img/nophoto.png';
    }else{
      return imagenes[0].url;
    }

  }

}
