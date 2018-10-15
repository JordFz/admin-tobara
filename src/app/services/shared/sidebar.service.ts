import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [{
    titulo: 'Administrador',  
    type: 'admin', 
    icon: '',
    submenu: [
      {state: 'dashboard', type: 'admin', name: 'Buttons', icon: 'crop_7_5'},
      {state: 'graficas1', type: 'admin', name: 'Lists', icon: 'view_list'},
      {state: 'progress', type: 'admin', name: 'Expansion Panel', icon: 'vertical_align_center'}
    ]

  }];

  constructor() { }
}
