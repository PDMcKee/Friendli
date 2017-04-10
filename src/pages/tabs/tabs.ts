import { Component } from '@angular/core';

import { myProfile } from '../myProfile/myProfile';
import { MatchesPage } from '../matches/matches';
import { findFriends } from '../findFriends/findFriends';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = myProfile;
  tab2Root = MatchesPage;
  tab3Root = findFriends;
  tab4Root = SettingsPage;

  constructor() {

  }
}
