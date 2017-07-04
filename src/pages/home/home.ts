import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	name = "Kevin Love";
	chats = [
		{
			message: "Yeah it depends",
			name: "Lebron James",
			time: "9:42 PM"
		},
		{
			message: "Sometimes I'll go around 10am or like 6pm",
			name: "Lebron James",
			time: "9:42 PM"
		},
		{
			message: "I can come after maghrib on a daily basis",
			name: "Jr Smith",
			time: "9:44 PM"
		},
		{
			message: "Ok see you there insha Allah",
			name: "Lebron James",
			time: "9:44 PM"
		},
		{
			message: "I probably won't be able to make it today",
			name: "Kevin Love",
			time: "9:45 PM"
		},
		{
			message: "I can pick you up if you need a ride",
			name: "Kyrie Irving",
			time: "9:46 PM"
		},
		{
			message: "Pick me up too",
			name: "Richard Jefferson",
			time: "9:44 PM"
		},
		{
			message: "Ok ill be ready by 11",
			name: "Kevin Love",
			time: "9:45 PM"
		},
		{
			message: "Lets go!",
			name: "Lebron James",
			time: "9:46 PM"
		}
	]

	constructor(public navCtrl: NavController) {

	}

	isMe(chat) {
		return chat.name === this.name;
	}

}
