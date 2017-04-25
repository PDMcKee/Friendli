import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-myProfile',
  templateUrl: 'myProfile.html'
})
export class myProfile {
  name = "Pamela";

  age = 20;

  blurb = "Down with that sort of thing";

  likes = [
      'first like',
      'second like',
      'third like'
      ];

  dislikes = [
    'first dislike',
   'second dislike',
    'third dislike'
    ];

  hobbies = [
    'first hobby',
    'second hobby',
    'third hobby'
  ];

  places = [
    'first place',
    'second place',
    'third place'
  ];  

  constructor(public navCtrl: NavController) {

  }


}