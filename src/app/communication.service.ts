import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommunicationService {

  constructor() { }

  // Los Subjects son Observables que manejan múltiples suscripciones a un único flujo y son capaces de emitir eventos.

  mensajePadreObs: string = "parent using subject";
  mensajeHijoObs: string = "child using subject";
  private subjectPadre: BehaviorSubject<string> = new BehaviorSubject<string>(this.mensajePadreObs);        // BehaviorSubject: Permite establecer un valor inicial
  private subjectHijo: BehaviorSubject<string> = new BehaviorSubject<string>(this.mensajeHijoObs);

  mensajePadre: string = "parent using service";
  mensajeHijo: string = "child using service";
  
  enviarAlHijo() {
    return this.mensajePadre;
  }

  enviarAlPadre() {
    return this.mensajeHijo;
  }


  // Observables
  sendFromPadre() {
    return this.subjectPadre.asObservable();
  }

  sendFromChild() {
    return this.subjectHijo.asObservable();
  }

}
