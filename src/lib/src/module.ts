import { NgModule } from '@angular/core';

import { LibComponent } from './component/lib.component';
import { LibService } from './service/lib.service';

import { MdToolbarModule } from '@angular/material';


@NgModule({
  declarations: [LibComponent],
  providers: [LibService],
  exports: [LibComponent],
  imports: [MdToolbarModule]
})
export class LibModule { }
