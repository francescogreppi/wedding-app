export class AreaController {
	constructor($state, $uibModal, $location, $anchorScroll) {
		this.$state = $state;
		this.$uibModal = $uibModal;
		this.$location = $location;
		this.$anchorScroll = $anchorScroll;
	}
	
	scrollTo(id) {
	      this.$location.hash(id);
	      this.$anchorScroll();
	}
}

AreaController.$inject = ['$state', '$uibModal', '$location','$anchorScroll'];