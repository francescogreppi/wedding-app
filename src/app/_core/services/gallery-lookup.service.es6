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
                        }
                    ],                
                title: 'Mount Galbiga',
                url: 'http://www.visitlakecomo.it/en/itinerario-monte-di-tremezzo-1700m-galbiga-1698m-crocione-1641m/'
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
                url: 'http://www.isola-comacina.it/en/'
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
                url: 'https://www.youtube.com/watch?v=jKeE7dgKWB4'
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
                url: 'https://www.youtube.com/watch?v=5vj4V6ZAT4Y'
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
                url: 'https://www.youtube.com/watch?v=EPShKx9IjLw'
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
                url: 'https://www.youtube.com/watch?v=-Hno6IVBTzk'
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
                url: 'https://www.youtube.com/watch?v=YGPURvKIWuQ'
            },
            menaggio: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "menaggio1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "menaggio2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "menaggio3.jpg"
                        },
                        {
                            id: 3,
                            active: false,
                            name: "menaggio4.jpg"
                        },
                        {
                            id: 4,
                            active: false,
                            name: "menaggio5.jpg"
                        },
                        {
                            id: 5,
                            active: false,
                            name: "menaggio6.jpg"
                        }
                    ],                
                title: 'Menaggio',
                url: 'https://www.youtube.com/watch?v=vMRr49ReDo4'
            },
            como: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "como1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "como2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "como3.jpg"
                        },
                        {
                            id: 3,
                            active: false,
                            name: "como4.jpg"
                        }
                    ],                
                title: 'Como',
                url: 'https://www.youtube.com/watch?v=pNmTw5u1zew'
            },
            parmesan: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "parmesan1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "parmesan2.jpg"
                        }
                    ],                
                title: 'Parmesan Grana Padano',
                url: 'https://www.youtube.com/watch?v=HNyOSmsQVlA'
            },
            polenta: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "polenta1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "polenta2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "polenta3.jpg"
                        }
                    ],                
                title: 'Polenta',
                url: 'http://www.lifeinitaly.com/food/polenta.asp'
            },
            pizzoccheri: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "pizzoccheri1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "pizzoccheri2.jpg"
                        }
                    ],                
                title: 'Pizzoccheri',
                url: 'http://www.deliciousdays.com/archives/2007/02/16/pizzoccheri-della-valtellina-embracing-comfort-food/'
            },
            vino: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "vino1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "vino2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "vino3.jpg"
                        }
                    ],                
                title: 'Valtellina Wine',
                url: 'https://www.youtube.com/watch?v=1UnAtY0vXcI'
            },
            grappa: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "grappa1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "grappa2.jpg"
                        }
                    ],                
                title: 'Grappa',
                url: 'https://www.youtube.com/watch?v=yLafIQ1Xd9E'
            },
            limoncello: {
                image: [
                        {
                            id: 0,
                            active: true,
                            name: "limoncello1.jpg"
                        },
                        {
                            id: 1,
                            active: false,
                            name: "limoncello2.jpg"
                        },
                        {
                            id: 2,
                            active: false,
                            name: "limoncello3.jpg"
                        }
                    ],                
                title: 'Limoncello',
                url: 'https://www.youtube.com/watch?v=AWZlnMmnE3I'
            }
    }

    return galleryLookup;
}