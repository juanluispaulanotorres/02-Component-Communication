import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CommunicationService {

  constructor() { }

  // Los Subjects son Observables que manejan múltiples suscripciones a un único flujo y son capaces de emitir eventos.

  private subjectPadre = new Subject<string>();
  private subjectHijo = new Subject<string>();

  enviarAlHijo() {
    return this.subjectPadre;
  }

  enviarAlPadre() {
    return this.subjectHijo;
  }

}