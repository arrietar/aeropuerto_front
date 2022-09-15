import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  lista = [
    {'marca':'Chevrolet','modelos':[
        {'linea':'Captiva','version':'Lts'},
        {'linea':'Spark GT','version':'Lts'},
        {'linea':'Spark Go','version':'Lts'},
      ],'Disponibilidad':[
        {'ciudad':'Medellin'},
        {'ciudad':'Pasto'},
        {'ciudad':'Bogota'},
        {'ciudad':'Cali'},
      ]
    },
    {'marca':'Volkswagen','modelos':[
        {'linea':'Gol','version':'Trendline'},
        {'linea':'Jetta','version':'Confortline'},
        {'linea':'Fox','version':'Trendline'},
      ],'Disponibilidad':[
        {'ciudad':'Pereira'},
        {'ciudad':'Manizales'},
        {'ciudad':'Bogota'},
        {'ciudad':'Cali'},
      ]
    },
    {'marca':'Renault','modelos':[
        {'linea':'Duster','version':'Dynamique'},
        {'linea':'Sandero','version':'Dynamic'},
        {'linea':'Logan','version':'Authentique'},
      ],'Disponibilidad':[
        {'ciudad':'Medellin'},
        {'ciudad':'Pasto'},
        {'ciudad':'Bogota'},
        {'ciudad':'Cali'},
      ]
    },
    {'marca':'Mazda','modelos':[
        {'linea':'Mazda 2','version':'Dynamique'},
        {'linea':'Mazda 3','version':'Dynamic'},
        {'linea':'CX5','version':'Authentique'},
      ],'Disponibilidad':[
        {'ciudad':'Pereira'},
        {'ciudad':'Manizales'},
        {'ciudad':'Bogota'},
        {'ciudad':'Cali'},
      ]
    },

  ]
  marcaSeleccionada: any;

  adicionar_marca(marca:string){

  }

}
