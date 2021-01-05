import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimarySectionComponent } from './components/primary-section/primary-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SharedService } from './shared.service';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    PrimarySectionComponent,
    AboutMeComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimarySectionComponent,
    AboutMeComponent,
    SkillsComponent
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
