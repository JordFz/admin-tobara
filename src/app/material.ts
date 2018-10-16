import {MatButtonModule, MatCheckboxModule
      ,MatToolbarModule
      ,MatSidenavModule
      ,MatListModule
      ,MatCardModule
      ,MatGridListModule
      ,MatProgressBarModule
      ,MatSliderModule,
      MatExpansionModule
    } from '@angular/material';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  imports: [MatButtonModule, 
            MatCheckboxModule, 
            MatToolbarModule,
            MatIconModule,
            MatMenuModule,
            MatInputModule, 
            MatSidenavModule, 
            MatListModule,
            MatCardModule,
            MatGridListModule,
            MatProgressBarModule,
            MatSliderModule,
            MatExpansionModule
          ],
  exports: [MatButtonModule, 
            MatCheckboxModule, 
            MatToolbarModule,
            MatIconModule,
            MatMenuModule,
            MatInputModule, 
            MatSidenavModule, 
            MatListModule,
            MatCardModule,
            MatGridListModule,
            MatProgressBarModule,
            MatSliderModule,
            MatExpansionModule
          ],
})
export class MaterialComponent { }