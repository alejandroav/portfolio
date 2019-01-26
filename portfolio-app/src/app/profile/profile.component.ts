import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileItems = [{
    link: 'https://www.linkedin.com/in/alejandroalarcon/',
    title: 'LinkedIn',
    title_es: 'LinkedIn',
    text: 'LinkedIn',
    text_es: 'LinkedIn',
    icon: 'fab fa-linkedin'
  }, {
    link: 'https://github.com/alejandroav',
    title: 'GitHub',
    title_es: 'GitHub',
    text: 'GitHub',
    text_es: 'GitHub',
    icon: 'devicon-github-plain'
  }, {
    link: 'https://www.visualcv.com/alejandro-alarcn/pdf/',
    title: 'Download my resume',
    title_es: 'Descarga mi currículum',
    text: 'Resume',
    text_es: 'Currículum',
    icon: 'fas fa-file'
  }];

  constructor() { }

  ngOnInit() {
  }

}
