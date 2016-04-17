export class GalleryModalController {
    constructor($state, gallery, $uibModal, $uibModalInstance, GalleryService) {
        this.$state = $state;
        this.gallery = gallery;
        this.$uibModal = $uibModal;
        this.galleryLookup = GalleryService;
        this.$uibModalInstance = $uibModalInstance;
        this.galleryToShow = this.galleryLookup[this.gallery];
    }

    close(){
    	this.$uibModalInstance.dismiss();
    }
}

GalleryModalController.$inject = ['$state', 'gallery', '$uibModal', '$uibModalInstance', 'GalleryService'];