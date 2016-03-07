export class HomeController {
	constructor($state) {
		this.$state = $state;
	}
}

HomeController.$inject = ['$state'];