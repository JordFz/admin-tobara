import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  constructor() { }
  color = 'primary';
  mode = 'determinate';
  value1:number = 30;
  value2:number = 60;
  bufferValue = 75;

  ngOnInit() {
  }

   actualiza(event:number){
     console.log('Evento: ', event );
   }

}
