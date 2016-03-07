export class DiscoverController {
	constructor($state, $uibModal) {
		this.$state = $state;
		this.$uibModal = $uibModal;
	}

	showGalleryModal(gallery) {
		let gallerySel = gallery;
		let modalInstance = this.$uibModal.open({
			templateUrl: 'app/discover/gallery-modal.tmpl.html',
			controller: 'GalleryModalController',
			controllerAs: 'galleryModalCtrl',
			resolve: {
                gallery: ['$q', ($q) => {
                    return $q.when(gallerySel);
                }]
            }
		});
	}
}

DiscoverController.$inject = ['$state', '$uibModal'];