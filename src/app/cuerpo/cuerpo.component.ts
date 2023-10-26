import { FormsModule } from '@angular/forms';
import { Component, OnDestroy } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { hamburguesa } from '../Hamburguesa';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Observable, Subscribable, Subscriber, Subscription, interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { timeout } from 'rxjs';



@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.scss'], 
  providers: [ServicioService],
})
export class CuerpoComponent implements OnDestroy {

  hamburguesas : hamburguesa[] = []
  carritohamburguesas: hamburguesa[] = []
  useForm: FormGroup;
  ok: boolean = true;
  seVe: boolean = true;
  horaSuscripta :Subscription ;
  horasTRING : String= ` `;


  constructor(private userService:ServicioService, private formBuilder: FormBuilder  ){
    this.useForm= this.formBuilder.group({
      mail:this.formBuilder.control(''),
      apellido:this.formBuilder.control(''),
      nombre:this.formBuilder.control(''),
      nacionalidad:this.formBuilder.control('Argentina'),
      edad:this.formBuilder.control(1)
    })

    if (this.hamburguesas.length =0 ){
      this.seVe= true
    }
    this.obtenerHamburguesas().then((result)=> {
      this.seVe= false
    })
    
    const horaObservable = this.obtenerObservableHora();
    this.horaSuscripta = horaObservable.subscribe((hora) => {
    this.horasTRING= hora
    complete:()=>{

    }
})
  }





  obtenerHamburguesas(): Promise<hamburguesa[]> {
    return new Promise((resolve, reject) => { 
      setTimeout(() => {
        this.hamburguesas = this.userService.gethamburguesas()
        resolve(this.hamburguesas);
      }, 2000); 
    });
  }
  generarResultado(){


  }
  cambioDeMenu(){
    this.ok = false


  }
  ngOnDestroy(): void {
    this.horaSuscripta.unsubscribe
  }

  
  onButtonClick(burga: hamburguesa){
    this.carritohamburguesas.push(burga)
    console.log(this.carritohamburguesas)

  }
  obtenerObservableHora(): Observable<string> {
    return interval(1000).pipe(
      map(() => {
        const ahora = new Date();
        const horas = ahora.getHours().toString().padStart(2, '0');
        const minutos = ahora.getMinutes().toString().padStart(2, '0');
        const segundos = ahora.getSeconds().toString().padStart(2, '0');
        return `${horas}:${minutos}:${segundos}`;
      })
    );
  }
  
  // Uso de la función

}
  

