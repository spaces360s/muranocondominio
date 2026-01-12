import { Viewer } from '@photo-sphere-viewer/core';
import { GyroscopePlugin } from '@photo-sphere-viewer/gyroscope-plugin';
import { CompassPlugin } from '@photo-sphere-viewer/compass-plugin';
import { VirtualTourPlugin } from '@photo-sphere-viewer/virtual-tour-plugin';
import { GalleryPlugin } from '@photo-sphere-viewer/gallery-plugin';
import { MarkersPlugin } from '@photo-sphere-viewer/markers-plugin';



$(window).on("load", function () {

    const nodes = [
        {
            id: '1',
            panorama: 'img/foto1.jpg',
            thumbnail: 'img/foto1_thumb.jpg',
            name: 'Exterior',
            caption: 'Puerta principal',
            links: [{ nodeId: '2', position: { textureX: -287, textureY: -2040 } }],
            sphereCorrection: { pan: '-10deg' }
        },
        {
            id: '2',
            panorama: 'img/foto2.jpg',
            thumbnail: 'img/foto2_thumb.jpg',
            name: 'Interior',
            caption: 'Entrada principal',
            links: [{ nodeId: '1', position: { textureX: 1200, textureY: -2000 } }, { nodeId: '3', position: { textureX: 4100, textureY: -2000 } }],
            sphereCorrection: { pan: '190deg' }
        },
        {
            id: '3',
            panorama: 'img/foto3.jpg',
            thumbnail: 'img/foto3_thumb.jpg',
            name: 'Sala',
            caption: 'Sala Principal',
            links: [{ nodeId: '2', position: { textureX: -50, textureY: -2000 } }, { nodeId: '4', position: { textureX: 3900, textureY: -2000 } }, { nodeId: '5', position: { textureX: -1950, textureY: -2000 } }, { nodeId: '7', position: { textureX: -600, textureY: -2000 } }],
            sphereCorrection: { pan: '190deg' }
        },
        {
            id: '4',
            panorama: 'img/foto4.jpg',
            thumbnail: 'img/foto4_thumb.jpg',
            name: 'Mirador',
            caption: 'Mirador Principal',
            links: [{ nodeId: '3', position: { textureX: 4100, textureY: -2300 } }],
            sphereCorrection: { pan: '15deg' }
        },
        {
            id: '5',
            panorama: 'img/foto5.jpg',
            thumbnail: 'img/foto5_thumb.jpg',
            name: 'Hall',
            caption: 'Hall Principal',
            links: [{ nodeId: '3', position: { textureX: 100, textureY: -2000 } }, { nodeId: '4', position: { textureX: 1150, textureY: -2000 } }, { nodeId: '6', position: { textureX: 4050, textureY: -2000 } }, { nodeId: '7', position: { textureX: -1600, textureY: -2000 } }, { nodeId: '9', position: { textureX: 4800, textureY: -2000 } }],
            sphereCorrection: { pan: '95deg' }
        },
        {
            id: '6',
            panorama: 'img/foto6.jpg',
            thumbnail: 'img/foto6_thumb.jpg',
            name: 'Estudio',
            caption: 'Estudio Principal',
            links: [{ nodeId: '5', position: { textureX: 2000, textureY: -2000 } }, { nodeId: '10', position: { textureX: 3800, textureY: -2000 } }, { nodeId: '11', position: { textureX: -2700, textureY: -2000 } }, { nodeId: '12', position: { textureX: -2000, textureY: -2000 } }],
            sphereCorrection: { pan: '250deg' }
        },
        {
            id: '7',
            panorama: 'img/foto7.jpg',
            thumbnail: 'img/foto7_thumb.jpg',
            name: 'Cocina',
            caption: 'Cocina Principal',
            links: [{ nodeId: '8', position: { textureX: -300, textureY: -2000 } }, { nodeId: '3', position: { textureX: 3200, textureY: -2000 } }, { nodeId: '5', position: { textureX: -3500, textureY: -2000 } }],
            sphereCorrection: { pan: '170deg' }
        },
        {
            id: '8',
            panorama: 'img/foto8.jpg',
            thumbnail: 'img/foto8_thumb.jpg',
            name: 'Lavaropas',
            caption: 'Lavaropas Principal',
            links: [{ nodeId: '7', position: { textureX: -3000, textureY: -2000 } }],
            sphereCorrection: { pan: '170deg' }
        },
        {
            id: '9',
            panorama: 'img/foto9.jpg',
            thumbnail: 'img/foto9_thumb.jpg',
            name: 'Baño',
            caption: 'Baño Auxiliar',
            links: [{ nodeId: '5', position: { textureX: -200, textureY: -2000 } }],
            sphereCorrection: { pan: '-50deg' }
        },
        {
            id: '10',
            panorama: 'img/foto10.jpg',
            thumbnail: 'img/foto10_thumb.jpg',
            name: 'Habitación',
            caption: 'Habitación Auxiliar #1',
            links: [{ nodeId: '6', position: { textureX: 1600, textureY: -2000 } }],
            sphereCorrection: { pan: '-50deg' }
        },
        {
            id: '11',
            panorama: 'img/foto11.jpg',
            thumbnail: 'img/foto11_thumb.jpg',
            name: 'Habitación',
            caption: 'Habitación Auxiliar #2',
            links: [{ nodeId: '6', position: { textureX: -3550, textureY: -2000 } }],
            sphereCorrection: { pan: '-50deg' }
        },
        {
            id: '12',
            panorama: 'img/foto12.jpg',
            thumbnail: 'img/foto12_thumb.jpg',
            name: 'Habitación',
            caption: 'Habitación Principal',
            links: [{ nodeId: '6', position: { textureX: -3250, textureY: -2300 } }, { nodeId: '13', position: { textureX: 3200, textureY: -2300 } }],
            sphereCorrection: { pan: '-50deg' }
        },
        {
            id: '13',
            panorama: 'img/foto13.jpg',
            thumbnail: 'img/foto13_thumb.jpg',
            name: 'Baño',
            caption: 'Baño Principal',
            links: [{ nodeId: '12', position: { textureX: 3800, textureY: -2000 } }],
            sphereCorrection: { pan: '-20deg' }
        },
    ];


    const viewer = new Viewer({
        container: document.querySelector('#viewer'),
        //panorama: 'img/habitacion1a.jpg',
        moveInertia: 0.9,
        navbar: 'caption gallery gyroscope fullscreen',
        plugins: [
            GyroscopePlugin,
            CompassPlugin,
            MarkersPlugin,
            [VirtualTourPlugin, {
                positionMode: 'manual',
                renderMode: '2d',
                nodes: nodes,
                startNodeId: '1',
            }],
            [GalleryPlugin, {
                thumbnailSize: { width: 100, height: 100 },
            }],
        ],
    });





});