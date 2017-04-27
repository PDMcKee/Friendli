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
  likes = ["like", "like"];
  dislikes = ["dislike", "dislike"];
  hobbies = ["hobby", "hobby"];
  places = ["place", "place"]
  constructor(public navCtrl: NavController) {

  }

}
