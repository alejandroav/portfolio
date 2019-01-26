import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileItems = [{
    link: 'https://www.linkedin.com/in/alejandroalarcon/',
    title: 'LinkedIn',
    text: 'LinkedIn',
    icon: 'fab fa-linkedin'
  }, {
    link: 'https://github.com/alejandroav',
    title: 'GitHub',
    text: 'GitHub',
    icon: 'devicon-github-plain'
  }, {
    link: 'https://www.visualcv.com/alejandro-alarcn/pdf/',
    title: null,
    text: null,
    icon: 'fas fa-file'
  }];

  constructor(translate: TranslateService) {
    translate.get('profileSection')
      .subscribe((res) => {
        this.profileItems[2].title = res.cvTitle;
        this.profileItems[2].text = res.cvText;
      });
  }
}
