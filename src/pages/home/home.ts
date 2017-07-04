import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	name = "Amir Khan";
	chats = [
		{
			message: "Yeah it depends",
			name: "Sumama Waheed",
			time: "9:42 PM"
		},
		{
			message: "Sometimes I'll go around 10am or like 6pm",
			name: "Sumama Waheed",
			time: "9:42 PM"
		},
		{
			message: "I can come after maghrib on a daily basis",
			name: "Talha Waheed",
			time: "9:44 PM"
		},
		{
			message: "Ok see you there insha Allah",
			name: "Sumama Waheed",
			time: "9:44 PM"
		},
		{
			message: "I probably won't be able to make it today",
			name: "Amir Khan",
			time: "9:45 PM"
		},
		{
			message: "I can pick you up if you need a ride",
			name: "Hashim",
			time: "9:46 PM"
		},
		{
			message: "Ok see you there insha Allah",
			name: "Sumama Waheed",
			time: "9:44 PM"
		},
		{
			message: "I probably won't be able to make it today",
			name: "Amir Khan",
			time: "9:45 PM"
		},
		{
			message: "I can pick you up if you need a ride",
			name: "Hashim",
			time: "9:46 PM"
		}
	]

	constructor(public navCtrl: NavController) {

	}

	isMe(chat) {
		return chat.name === this.name;
	}

}
