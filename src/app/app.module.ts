import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Friendli } from './app.component';

import { findFriends } from '../pages/findFriends/findFriends';
import { MatchesPage } from '../pages/matches/matches';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { myProfile, NamePage, AgePage, LikePage, DislikePage, HobbyPage, HangoutPage, createdProfile } from '../pages/myProfile/myProfile';
import { ProfileService } from '../pages/myProfile/ProfileService'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    Friendli,
    findFriends,
    myProfile,
    MatchesPage,
    SettingsPage,
    TabsPage,
    NamePage,
    AgePage,
    LikePage,
    DislikePage,
    HobbyPage,
    HangoutPage,
    createdProfile

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(Friendli)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Friendli,
    findFriends,
    MatchesPage,
    myProfile,
    SettingsPage,
    TabsPage,
    NamePage,
    AgePage,
    LikePage,
    DislikePage,
    HobbyPage,
    HangoutPage,
    createdProfile,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    [ProfileService]
  ]
})
export class AppModule {}
