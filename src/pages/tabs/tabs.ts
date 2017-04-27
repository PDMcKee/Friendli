import { Component } from '@angular/core';

import { myProfile, NamePage, AgePage, createdProfile } from '../myProfile/myProfile';
import { MatchesPage } from '../matches/matches';
import { findFriends } from '../findFriends/findFriends';
import { SettingsPage } from '../settings/settings';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = myProfile;
  tab2Root = createdProfile;
  tab3Root = MatchesPage;
  tab4Root = findFriends;
  tab5Root = SettingsPage;

  constructor() {

  }
}
