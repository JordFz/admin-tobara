import { Component, OnInit, ChangeDetectorRef, NgZone, OnDestroy, ViewChild, HostListener, Directive, AfterViewInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { HeaderComponent } from './header/header.component';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-fullcomponent',
  templateUrl: './fullcomponent.component.html',
  styles: []
})
export class FullcomponentComponent implements OnInit {

  titulo: string;
  descripcion: string;

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, 
                private router: Router, 
                private title: Title,
                private meta:Meta) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    
      this.getDataRoute().subscribe(data =>{
        console.log(data);
        this.titulo = data.titulo;
        this.descripcion = data.descripcion;
        this.title.setTitle( this.titulo);
        const metTag: MetaDefinition = {
          name: 'descripcion',
          content: this.titulo
        };
        this.meta.updateTag(metTag);
      })
     }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map( (evento:ActivationEnd ) => evento.snapshot.data )
    )
  }

}
