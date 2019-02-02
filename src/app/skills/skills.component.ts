import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  frontEndSkills = [{
    name: 'HTML 5',
    icon: 'devicon-html5-plain',
  }, {
    name: 'CSS 3',
    icon: 'devicon-css3-plain',
  }, {
    name: 'JavaScript',
    icon: 'devicon-javascript-plain',
  }, {
    name: 'Bootstrap',
    icon: 'devicon-bootstrap-plain',
  }, {
    name: 'Angular',
    icon: 'devicon-angularjs-plain',
  }, {
    name: 'jQuery',
    icon: 'devicon-jquery-plain',
  }];

  backEndSkills = [{
    name: 'JavaScript',
    icon: 'devicon-javascript-plain',
  }, {
    name: 'PHP',
    icon: 'devicon-php-plain',
  }, {
    name: 'Java',
    icon: 'devicon-java-plain',
  }, {
    name: 'Node.js',
    icon: 'devicon-nodejs-plain',
  }, {
    icon: 'devicon-express-original',
    name: 'Express',
  }, {
    icon: 'devicon-wordpress-plain',
    name: 'WordPress',
  }, {
    icon: 'devicon-mysql-plain',
    name: 'MySQL',
  }, {
    name: 'Oracle DB',
    icon: 'devicon-oracle-original',
  }, {
    name: 'MongoDB',
    icon: 'devicon-mongodb-plain',
  }];
}
