import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  constructor() { } // en el constructor es la manera de inyectar el servicio en el componente
  miPortfolio:any;
  ngOnInit(): void {
    // y de esta forma podemos acceder en cualquier momento
   // this.datosPortfolio.obtenerDatos(); // para probar desde la web inspeccionamos el codigo, y observamos que el metodo se esta invocando al iniciar el componente,
                                        // en este caso de encabezado
   
  }

  /*
  Ahora nos queda ver como enlazar de alguna manera o como mostrar los datos que obtenemos del servicio en nuestro componente para que no queden hacordeados,
  para eso Angular introduce el concepto de Data Binding en el cual nos permite insertar, actualizar valores en el html de una forma sencilla.
  Angular nos provee 4 formas de binding:
  1) Interpolacion: es la que se usa ahora en este practico, es un mecanismo a fin de sustituir una expresion por un valor de cadena en el template es
                    decir en la vista, permite el flujo de datos desde el componente, desde el archivo ts hacia el dom que seria el template,
  2) Propiety binding: se usa por ejemplo para el caso de las imagenes  
  
  */

}
