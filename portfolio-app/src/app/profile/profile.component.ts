import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  profileItems = [{
    link: 'mailto:alejandroalarcon93@gmail.com',
    title: null,
    text: null,
    icon: 'fas fa-envelope',
    target: '_self'
  }, {
    link: 'https://www.linkedin.com/in/alejandroalarcon/',
    title: 'LinkedIn',
    text: 'LinkedIn',
    icon: 'fab fa-linkedin',
    target: '_blank'
  }, {
    link: 'https://github.com/alejandroav',
    title: 'GitHub',
    text: 'GitHub',
    icon: 'devicon-github-plain',
    target: '_blank'
  }, {
    link: 'https://www.visualcv.com/alejandro-alarcn/pdf/',
    title: null,
    text: null,
    icon: 'fas fa-file',
    target: '_blank'
  }];

  constructor(translate: TranslateService) {
    translate.get('profileSection')
      .subscribe((res) => {
        this.profileItems[0].title = res.emailTitle;
        this.profileItems[0].text = res.emailText;

        this.profileItems[3].title = res.cvTitle;
        this.profileItems[3].text = res.cvText;
      });
  }
}
