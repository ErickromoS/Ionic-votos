import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioGraficasService {

  
  public votosPanSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public votosMorenaSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public votosMCSubject: BehaviorSubject<number> = new BehaviorSubject<number>(2);
  public votosOtro: BehaviorSubject<number> = new BehaviorSubject<number>(2);
  public votosVerde: BehaviorSubject<number> = new BehaviorSubject<number>(2);
  public votosPT: BehaviorSubject<number> = new BehaviorSubject<number>(2);


    //Actualizar candidato




  constructor() { }


  votarPan(){
    this.votosPanSubject.next(this.votosPanSubject.value + 1)
    console.log("votos en el servicio " + this.votosPanSubject.value)
  }

  votarMorena(){
    this.votosMorenaSubject.next(this.votosMorenaSubject.value + 1)
    console.log("votos en el servicio " + this.votosMorenaSubject.value)

  }
  votarMC(){
    this.votosMCSubject.next(this.votosMCSubject.value + 1)
    console.log("votos en el servicio " + this.votosMCSubject.value)
  }
  votarOtro(){
    this.votosOtro.next(this.votosOtro.value + 1)
    console.log("votos en el servicio " + this.votosOtro.value)
  }
  votarVerde(){
    this.votosVerde.next(this.votosVerde.value + 1)
    console.log("votos en el servicio " + this.votosVerde.value)
  }
  votarPT(){
    this.votosPT.next(this.votosPT.value + 1)
    console.log("votos en el servicio " + this.votosPT.value)
  }
  //Actualizar candidato

}
