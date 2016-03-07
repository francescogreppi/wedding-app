export let GalleryService = function GalleryService() {
	let galleryLookup = {
            hiking: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "hiking1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "hiking2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "hiking3.jpg"
                        },
                        {
                            id: 3,
                            active: false,
                            name: "hiking4.jpg"
                        },
                        {
                            id: 4,
                            active: false,
                            name: "hiking5.jpg"
                        }
                    ],                
                title: 'Mount Galbiga',
                url: 'http://www.mountain.com'
            },
            comacina: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "comacina1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "comacina2.jpg"
                        }
                    ],                
                title: 'Isola Comacina',
                url: 'http://www.isola-comacina.it/'
            },
            sighignola: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "sighignola1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "sighignola2.jpg"
                        }
                    ],                
                title: 'Sighignola',
                url: 'https://en.wikipedia.org/wiki/Sighignola'
            },
            balbianello: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "balbianello1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "balbianello2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "balbianello3.jpg"
                        }
                    ],                
                title: 'Villa Balbianello',
                url: 'https://en.wikipedia.org/wiki/Villa_del_Balbianello'
            },
            carlotta: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "carlotta1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "carlotta2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "carlotta3.jpg"
                        }
                    ],                
                title: 'Villa Carlotta',
                url: 'http://www.villacarlotta.it/home.php?lang_id=2'
            },
            lenno: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "lenno1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "lenno2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "lenno3.jpg"
                        },
                        {
                            id: 3,
                            active: false,
                            name: "lenno4.jpg"
                        },
                        {
                            id: 4,
                            active: false,
                            name: "lenno5.jpg"
                        }
                    ],                
                title: 'Lenno',
                url: 'https://en.wikipedia.org/wiki/Sighignola'
            },
            bellagio: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "bellagio1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "bellagio2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "bellagio3.jpg"
                        }
                    ],                
                title: 'Bellagio',
                url: 'https://en.wikipedia.org/wiki/Bellagio,_Lombardy'
            }
    }

    return galleryLookup;
}