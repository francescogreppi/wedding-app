export class AreaController {
	constructor($state, $uibModal) {
		this.$state = $state;
		this.$uibModal = $uibModal;
	}
}

AreaController.$inject = ['$state', '$uibModal'];