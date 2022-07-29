import { Component, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnDestroy {

  constructor(private service: CommunicationService) { }

  private subject = new Subject<string>();

  @Input() mensaje: string = "";

  @Output() emisor = new EventEmitter<string>();

  servicioHijo() {
    this.service.enviarAlPadre().subscribe(mensaje => {
      this.emisor.emit(mensaje);
    });

    this.service.enviarAlPadre().next("child using service");
  }

  outputHijo() {
    this.emisor.emit("child using output event");
  }

  observableHijo() {
    this.subject.subscribe(mensaje => {
      this.emisor.emit(mensaje);
    });

    this.subject.next("child using subject");
  }

  ngOnDestroy(): void {
    this.subject.complete();
    this.subject.unsubscribe();
  }

}
