import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileItems = [{
    title: null,
    text: null,
    link: 'mailto:alejandroalarcon93@gmail.com',
    icon: 'fas fa-envelope',
    target: '_self'
  }, {
    title: null,
    text: null,
    link: 'https://www.linkedin.com/in/alejandroalarcon/',
    icon: 'fab fa-linkedin',
    target: '_blank'
  }, {
    title: null,
    text: null,
    link: 'https://github.com/alejandroav',
    icon: 'devicon-github-plain',
    target: '_blank'
  }, {
    title: null,
    text: null,
    link: 'https://www.visualcv.com/alejandro-alarcn/pdf/',
    icon: 'fas fa-file',
    target: '_blank'
  }];

  constructor(translate: TranslateService) {
    translate.get('profileSection.links')
      .subscribe((res) => {
        this.profileItems.forEach((element, index) => {
          element.title = res[index].title;
          element.text = res[index].text;
        });
      });
  }
}
