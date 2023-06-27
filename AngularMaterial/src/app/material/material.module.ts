import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggle, MatDividerModule, MatIconModule } from '@angular/material';
 export const MaterialComponent = [
  MatButtonModule, 
  MatButtonToggle, 
  MatDividerModule, 
  MatIconModule
];

@NgModule({
  imports: [MaterialComponent ],
  exports: [MaterialComponent ]
})
export class MaterialModule { }
