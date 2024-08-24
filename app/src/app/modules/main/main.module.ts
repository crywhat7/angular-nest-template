import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { DialogService } from 'primeng/dynamicdialog';
import { MainComponent } from './views/main/main.component';
import { MainRoutingModule } from './main.module.routing';

@NgModule({
  declarations: [MainComponent],
  imports: [CommonModule, PrimeNgModule, MainRoutingModule],
  providers: [DialogService],
})
export class MainModule {}
