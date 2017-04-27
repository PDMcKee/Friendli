import { Component } from '@angular/core';
import { NavController, ViewController, App } from 'ionic-angular';
import { ProfileService } from '../../pages/myProfile/ProfileService';

@Component({
  selector: 'page-createdProfile',
  templateUrl: 'myProfile.html',
})

export class createdProfile{

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public pService: ProfileService){

    }

  name = this.pService.Name;
  age = this.pService.Age;
  blurb = "Down with that sort of thing";
  likes = this.pService.Likes;
  dislikes = this.pService.Dislikes;
  hobbies = this.pService.Hobbies;
  places = this.pService.Places;
}


@Component({
  selector: 'page-myProfile',
  templateUrl: 'myProfile.html',

    template: `
    <ion-content>
      <h1>Welcome to Friendli!</h1>
      <button ion-button (click)="createAccount()">Create an account</button>
     </ion-content>
    `
})

export class myProfile {

  template;
    
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App
    ) {}

  createAccount(){
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(NamePage);
  }

}

import { NavParams } from 'ionic-angular';

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Friendli</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content> 
    <h1>What is your name?</h1>
    <ion-item>
       <ion-input type="text" placeholder="Name" [(ngModel)]="name"></ion-input>
       
    </ion-item>
    <button ion-button (click)="getAge()">Next</button>
    </ion-content>`
})
export class NamePage {

  public name: String;

  constructor(private navParams: NavParams, public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public pService: ProfileService) {
     
  }

  getAge(){
    this.pService.setName(this.name);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));
    this.appCtrl.getRootNav().push(AgePage, name);
  }
}

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Friendli</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content> 
  
    <button ion-button (click)="getName()">Back</button>
    {{ this.pService.Name }}
    <h1>How old are you?</h1>
    <ion-item>
       <ion-input type="text" placeholder="Age" [(ngModel)]="age"></ion-input>
    </ion-item>
    <button ion-button (click)="getLikes()">Next</button>
    </ion-content>`
})
export class AgePage {
  public age: Number;

  constructor(private navParams: NavParams, 
  public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App,
    public pService: ProfileService) {
     
  }

  getLikes(){
    this.pService.setAge(this.age);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(LikePage);
  }

    getName(){
    this.pService.setAge(this.age);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(NamePage);
  }
}


@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Friendli</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content class="Likes">
  <button ion-button (click)="getAge()">Back</button>
  <h2>What do you like?</h2>
    <ion-item>
     <ion-input type="text" placeholder="The Office" [(ngModel)]="Like"></ion-input>
  </ion-item>
   <button ion-button (click)="save()"><ion-icon name="add"></ion-icon></button>
    <ion-list>
        <ion-item-sliding *ngFor="let like of Likes; let i = index">
            <ion-item>
                <h2>{{ like }}</h2>
            </ion-item>
            <ion-item-options>
                <button danger (click)="delete(i)">
                    <ion-icon name="trash"></ion-icon>
                    Delete
                </button>
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>
    <button ion-button (click)="getDislikes()">Next</button>
</ion-content>`
})
export class LikePage {
  public Likes: Array<String>;
  public Like: String;

    onPageDidEnter() {
        this.Likes = JSON.parse(localStorage.getItem("likes"));
        if(!this.Likes) {
            this.Likes = [];
        }   
    }

    delete(index: number) {
        this.Likes.splice(index, 1);
        localStorage.setItem("likes", JSON.stringify(this.Likes));
    }

    add() {
    }

  constructor(private navParams: NavParams, public navCtrl: NavController,
    public viewCtrl: ViewController, public pService: ProfileService,
    public appCtrl: App) {
    this.Likes = JSON.parse(localStorage.getItem("like"));
        if(!this.Likes) {
            this.Likes = [];
        }
        this.Like = "";    
  }

    save() {
        if(this.Like != "") {
            this.Likes.push(this.Like);
            localStorage.setItem("likes", JSON.stringify(this.Likes));
            //this.navCtrl.pop();
        }
    }

  getDislikes(){
    this.pService.setLikes(this.Likes);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(DislikePage);
  }

  getAge(){
    this.pService.setLikes(this.Likes);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(LikePage);
  }
}

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Friendli</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content class="Likes">
  <button ion-button (click)="getLikes()">Back</button>
  <h2>What do you dislike?</h2>
    <ion-item>
     <ion-input type="text" placeholder="Puppies" [(ngModel)]="Dislike"></ion-input>
  </ion-item>
   <button ion-button (click)="save()"><ion-icon name="add"></ion-icon></button>
    <ion-list>
        <ion-item-sliding *ngFor="let dislike of Dislikes; let i = index">
            <ion-item>
                <h2>{{ dislike }}</h2>
            </ion-item>
            <ion-item-options>
                <button danger (click)="delete(i)">
                    <ion-icon name="trash"></ion-icon>
                    Delete
                </button>
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>
    <button ion-button (click)="getHobbies()">Next</button>
</ion-content>`
})

export class DislikePage {
  public Dislikes: Array<String>;
  public Dislike: String;

    onPageDidEnter() {
        this.Dislikes = JSON.parse(localStorage.getItem("dislikes"));
        if(!this.Dislikes) {
            this.Dislikes = [];
        }   
    }

    delete(index: number) {
        this.Dislikes.splice(index, 1);
        localStorage.setItem("dislikes", JSON.stringify(this.Dislikes));
    }

    add() {
    }

  constructor(private navParams: NavParams, public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App, public pService: ProfileService) {
    this.Dislikes = JSON.parse(localStorage.getItem("dislike"));
        if(!this.Dislikes) {
            this.Dislikes = [];
        }
        this.Dislike = "";    
  }

    save() {
        if(this.Dislike != "") {
            this.Dislikes.push(this.Dislike);
            localStorage.setItem("dislikes", JSON.stringify(this.Dislikes));
            //this.navCtrl.pop();
        }
    }

  getLikes(){
    this.pService.setDislikes(this.Dislikes);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(LikePage);
  }

  getHobbies(){
    this.pService.setDislikes(this.Dislikes);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(HobbyPage);
  }
}

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Friendli</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content class="Hobbies">
  <button ion-button (click)="getDislikes()">Back</button>
  <h2>Do you have any hobbies?</h2>
    <ion-item>
     <ion-input type="text" placeholder="Watching Netflix" [(ngModel)]="Hobby"></ion-input>
  </ion-item>
   <button ion-button (click)="save()"><ion-icon name="add"></ion-icon></button>
    <ion-list>
        <ion-item-sliding *ngFor="let hobby of Hobbies; let i = index">
            <ion-item>
                <h2>{{ hobby }}</h2>
            </ion-item>
            <ion-item-options>
                <button danger (click)="delete(i)">
                    <ion-icon name="trash"></ion-icon>
                    Delete
                </button>
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>
    <button ion-button (click)="getHangouts()">Next</button>
</ion-content>`
})

export class HobbyPage {
  public Hobbies: Array<String>;
  public Hobby: String;

    onPageDidEnter() {
        this.Hobbies = JSON.parse(localStorage.getItem("hobbies"));
        if(!this.Hobbies) {
            this.Hobbies = [];
        }   
    }

    delete(index: number) {
        this.Hobbies.splice(index, 1);
        localStorage.setItem("hobbies", JSON.stringify(this.Hobbies));
    }

    add() {
    }

  constructor(private navParams: NavParams, public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App, public pService: ProfileService) {
    this.Hobbies = JSON.parse(localStorage.getItem("hobby"));
        if(!this.Hobbies) {
            this.Hobbies = [];
        }
        this.Hobby = "";    
  }

    save() {
        if(this.Hobby != "") {
            this.Hobbies.push(this.Hobby);
            localStorage.setItem("hobbies", JSON.stringify(this.Hobbies));
            //this.navCtrl.pop();
        }
    }

  getDislikes(){
    this.pService.setHobbies(this.Hobbies);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(DislikePage);
  }

  getHangouts(){
    this.pService.setHobbies(this.Hobbies);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(HangoutPage);
  }
}

@Component({
  template: `
  <ion-header>
    <ion-navbar>
      <ion-title>Friendli</ion-title>
    </ion-navbar>
  </ion-header>
  <ion-content class="places">
  <button ion-button (click)="getHobbies()">Back</button>
  <h2>Where do you like to hang out?</h2>
    <ion-item>
     <ion-input type="text" placeholder="Center of the Universe" [(ngModel)]="Place"></ion-input>
  </ion-item>
   <button ion-button (click)="save()"><ion-icon name="add"></ion-icon></button>
    <ion-list>
        <ion-item-sliding *ngFor="let place of Places; let i = index">
            <ion-item>
                <h2>{{ place }}</h2>
            </ion-item>
            <ion-item-options>
                <button danger (click)="delete(i)">
                    <ion-icon name="trash"></ion-icon>
                    Delete
                </button>
            </ion-item-options>
        </ion-item-sliding>
    </ion-list>
    <button ion-button (click)="createProfile()">Complete Profile</button>
</ion-content>`
})

export class HangoutPage {
  public Places: Array<String>;
  public Place: String;

    onPageDidEnter() {
        this.Places = JSON.parse(localStorage.getItem("places"));
        if(!this.Places) {
            this.Places = [];
        }   
    }

    delete(index: number) {
        this.Places.splice(index, 1);
        localStorage.setItem("places", JSON.stringify(this.Places));
    }

    add() {
    }

  constructor(private navParams: NavParams, public navCtrl: NavController,
    public viewCtrl: ViewController,
    public appCtrl: App, public pService: ProfileService) {
    this.Places = JSON.parse(localStorage.getItem("place"));
        if(!this.Places) {
            this.Places = [];
        }
        this.Place = "";    
  }

    save() {
        if(this.Place != "") {
            this.Places.push(this.Place);
            localStorage.setItem("places", JSON.stringify(this.Places));
            //this.navCtrl.pop();
        }
    }

  getHobbies(){
    this.pService.setPlaces(this.Places);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(HobbyPage);
  }

  createProfile(){
    this.pService.setPlaces(this.Places);
    this.viewCtrl.dismiss().catch(() => console.log('view was not dismissed'));;
    this.appCtrl.getRootNav().push(createdProfile);
  }
}