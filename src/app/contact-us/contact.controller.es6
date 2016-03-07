export class ContactController {
	constructor($state, $firebaseArray) {
		this.$state = $state;
		this.dbRef = new Firebase("https://wedding-app-ff.firebaseio.com/");// "bar"
		this.list = $firebaseArray(this.dbRef);
		this.complete = false;
		
	}
	sendData(){
		this.isLoading = true;
		let payload = {
			name: this.username, 
			email: this.email, 
			question: this.question
		}

		this.list.$add(payload).then(() => {
  			console.log("saved");
			this.isLoading = false;
			this.complete = true;
		});
	}
}

ContactController.$inject = ['$state', '$firebaseArray'];