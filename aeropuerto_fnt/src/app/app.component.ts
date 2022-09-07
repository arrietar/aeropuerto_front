import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado:number = 0;
  resultado2:number = 0;
  resultado3:number = 0;

  sumar(num1:string,num2:string){
    if(parseInt(num1)&&parseInt(num2)){
      this.resultado = parseInt(num1) + parseInt(num2);
    }else{
      alert("Por favor digite dor números diferentes a 0. ")
    }
  }

  restar(num3:string,num4:string){
    if(parseInt(num3)&&parseInt(num4)){
      this.resultado2 = parseInt(num3) - parseInt(num4);
    }else{
      alert("Por favor digite dor números diferentes a 0. ")
    }
  }

  multiplicar(num5:string,num6:string){
    if(parseInt(num5)&&parseInt(num6)){
      this.resultado3 = parseInt(num5) * parseInt(num6);
    }else{
      alert("Por favor digite dor números diferentes a 0. ")
    }
  }
}
