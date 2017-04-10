import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-matches',
  templateUrl: 'matches.html'
})
export class MatchesPage {

   matches = [
    'Jim',
    'Alice',
    'Bob'
  ];

  matchSelected(match: string) {
    console.log("Selected Match", match);
  }

  constructor(public navCtrl: NavController) {

  }

}
