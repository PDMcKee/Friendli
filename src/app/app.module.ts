import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Friendli } from './app.component';

import { findFriends } from '../pages/findFriends/findFriends';
import { MatchesPage } from '../pages/matches/matches';
import { myProfile } from '../pages/myProfile/myProfile';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    Friendli,
    findFriends,
    myProfile,
    MatchesPage,
    SettingsPage,
    TabsPage
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
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
