export class GalleryModalController {
    constructor($state, gallery, $uibModal, GalleryService) {
        this.$state = $state;
        this.gallery = gallery;
        this.$uibModal = $uibModal;
        this.galleryLookup = GalleryService;
        this.galleryToShow = this.galleryLookup[this.gallery];
    }
}

GalleryModalController.$inject = ['$state', 'gallery', '$uibModal', 'GalleryService'];