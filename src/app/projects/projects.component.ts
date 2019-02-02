import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      name: null,
      image: 'viajeuropa.png',
      description: null,
      link: 'https://viajeuropa.com/sorpresa'
    }
  ];

  constructor(translate: TranslateService) {
    translate.get('projectsSection.projects')
      .subscribe((res) => {
        this.projects.forEach((element, index) => {
          element.name = res[index].name;
          element.description = res[index].description;
        });
      });
  }
}
