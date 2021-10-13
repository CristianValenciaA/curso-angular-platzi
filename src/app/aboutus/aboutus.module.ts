import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutusComponent } from './components/aboutus.component';
import { SharedModule } from '../shared/shared.module';
import { AboutusRoutingModule } from './aboutus-routing.module';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [AboutusComponent],
  imports: [CommonModule, MaterialModule, SharedModule, AboutusRoutingModule],
})
export class AboutusModule {}
