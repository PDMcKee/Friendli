import { Injectable } from '@angular/core';

@Injectable()
export class ProfileService {
    Name: String;
    Age: Number;
    Likes: Array<String>;
    Dislikes: Array<String>;
    Hobbies: Array<String>;
    Places: Array<String>;

    constructor(){}

    setName(name){
        this.Name = name;
    }

    setAge(age){
        this.Age = age;
    }

    setLikes(likes){
        this.Likes = likes;
    }

    setDislikes(dislikes){
        this.Dislikes = dislikes;
    }

    setHobbies(hobbies){
        this.Hobbies = hobbies;
    }

    setPlaces(places){
        this.Places = places;
    }
}