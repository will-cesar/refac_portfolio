import { Component, OnInit } from '@angular/core';

import { ISkills } from '../../models/skills.model';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills: ISkills[] = [
    { src: "../../../../assets/imgs/png/html5.png", alt: "html5.png", desc: "HTML5" },
    { src: "../../../../assets/imgs/png/css.png", alt: "css.png", desc: "CSS" },
    { src: "../../../../assets/imgs/png/sass.png", alt: "sass.png", desc: "SASS" },
    { src: "../../../../assets/imgs/png/javascript.png", alt: "javascript.png", desc: "JavaScript" },
    { src: "../../../../assets/imgs/png/angular.png", alt: "angular.png", desc: "Angular 2-10" },
    { src: "../../../../assets/imgs/png/angular.png", alt: "angular.png", desc: "AngularJS" },
    { src: "../../../../assets/imgs/png/typescript.png", alt: "typescript.png", desc: "TypeScript" },
    { src: "../../../../assets/imgs/png/JQuery.png", alt: "JQuery.png", desc: "JQuery" },
    { src: "../../../../assets/imgs/png/gulp.png", alt: "gulp.png", desc: "Gulp" },
    { src: "../../../../assets/imgs/png/responsive-design.png", alt: "responsive-design.png", desc: "Design Responsivo" },
    { src: "../../../../assets/imgs/png/wordpress.png", alt: "wordpress.png", desc: "Wordpress" },
    { src: "../../../../assets/imgs/png/bootstrap.png", alt: "bootstrap.png", desc: "Bootstrap" },
    { src: "../../../../assets/imgs/png/git.png", alt: "git.png", desc: "Git" },
    { src: "../../../../assets/imgs/png/shopify.png", alt: "shopify.png", desc: "Liquid" },
    { src: "../../../../assets/imgs/png/shopify.png", alt: "shopify.png", desc: "Shopify" },
    { src: "../../../../assets/imgs/png/scrum.png", alt: "scrum.png", desc: "Metodologia ágil" },
  ]

  constructor(
    public readonly sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

}
