import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimarySectionComponent } from './components/primary-section/primary-section.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SharedService } from './shared.service';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    PrimarySectionComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrimarySectionComponent,
    AboutMeComponent,
    SkillsComponent,
    ProjectsComponent,
    FooterComponent
  ],
  providers: [
    SharedService
  ]
})
export class SharedModule { }
