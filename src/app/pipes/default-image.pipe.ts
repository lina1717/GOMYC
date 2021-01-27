import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value:string) : string {
    if (value == ''){
      return  "../../assets/images/Aymenjpg.jpg"
    }
    else{
      return "000000000000";
    }
    }
 

}
