import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
import { pipe } from '@angular/core/src/render3/pipe';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subs: Subscription;

  constructor() { 
    

    this.subs = this.regresaObs()
    .subscribe( 
      numero => console.log('subs, ', numero),
      error => console.error('Error en el obs', error),
      () => console.log('El observador termino')
    );

  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('La pagina se va a cerrar');
    this.subs.unsubscribe();
  }

  regresaObs(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 0;

      let intervalo = setInterval( ()=> {
        contador += 1;

        const salida = {
          valor: contador
        };

        observer.next( salida );
        // if( contador === 3){
        //   clearInterval(intervalo);
        //   observer.complete();
        // }

        // if( contador === 2){
        //   //clearInterval(intervalo);
        //   observer.error(' Error en el obs');
        // }
      },1000);
    }).pipe(
      map( resp =>resp.valor ),
      filter((valor, index) => {
        //console.log('Filter ', valor, index);
        if((valor %2) === 1){
          return true;
        }else {
          return false;
        }
        
      })
    )
  }

}
