import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-findFriends',
  templateUrl: 'findFriends.html'
})
export class findFriends {
  name = "Ryan";
  age = "22";
  blurb = "Friendli is cool";
  likes = this.likes;
  dislikes = this.dislikes;
  hobbies = this.hobbies;
  places = this.places;
  constructor(public navCtrl: NavController) {

  }

}
