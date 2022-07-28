import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Subject, takeUntil, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommunicationService {

  constructor() { }

  // Los Subjects son Observables que manejan múltiples suscripciones a un único flujo y son capaces de emitir eventos.

  private subject = new Subject<string>();        // child using subject

  mensajePadre: string = "parent using service";
  mensajeHijo: string = "child using service";

  enviarAlHijo() {
    return this.mensajePadre;
  }

  enviarAlPadre() {
    return this.mensajeHijo;
  }


  // Observables
  sendSubject() {
    return this.subject;
  }

}