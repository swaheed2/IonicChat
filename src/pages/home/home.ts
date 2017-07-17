import { Component, ViewChild } from '@angular/core';
import { NavController, Content, AlertController } from 'ionic-angular';
import * as moment from 'moment';
import { Moment } from 'moment';
import { DatabaseProvider } from '../../providers/database';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	name: string;
	chatMessage: string = "";

	@ViewChild(Content) content: Content;

	chats: FirebaseListObservable<any> = this.database.getChats();
	constructor(private alertCtrl: AlertController, public database: DatabaseProvider) {
		this.name = localStorage.getItem("name");

		this.chats.subscribe(()=>{
			this.scrollToBottom();
		})
	}

	sendChat() {

		if (!this.name) {
			return this.changeName();
		}

		this.chats.push({
			message: this.chatMessage,
			name: this.name,
			time: moment().toISOString()
		});
		this.chatMessage = "";
		this.scrollToBottom();
	}

	isMe(chat) {
		return chat.name === this.name;
	}

	scrollToBottom() {
		setTimeout(() => {
			this.content.scrollToBottom();
		});
	}

	changeName() {
		let alert = this.alertCtrl.create({
			title: 'Change Name',
			inputs: [
				{
					name: 'name',
					placeholder: 'Full Name'
				}
			],
			buttons: [
				{
					text: 'Ok',
					handler: data => {
						this.name = data.name;
						localStorage.setItem("name", this.name);
					}
				}
			]
		});
		alert.present();
	}

	getTime(isoString) {
		return moment(isoString).format("h:mm A");
	}

}
