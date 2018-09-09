import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  @Input() value: number = 50;
  @Input() leyenda: string = "Leyenda";

  @Output() cambioValue: EventEmitter<number> = new EventEmitter();

  bufferValue = 75;
  
  constructor() { }

  ngOnInit() {
    console.log('progreso', this.value);
  }

  cambiarValor(valor:number){
    this.cambioValue.emit( this.value);
    console.log('progreso', this.value);
  }
  
}
