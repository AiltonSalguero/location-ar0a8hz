window.onload = () => {
    let method = 'dynamic';

    // if you want to statically add places, de-comment following line
    method = 'static';

    if (method === 'static') {
        let places = staticLoadPlaces();
        renderPlaces(places);
    }
};

function staticLoadPlaces() {
    return [
        /*{
            "id": 1,
            "name": "Victors Nombre Comercial",
            "adress": "Av. Agustin Gamarra 140",
            "latitude": -12.0641762,
            "longitude": -77.1525624
        },
        {
            "id": 2,
            "name": "Kayser",
            "adress": "Av Agustin Gamarra 650",
            "latitude": -12.0665232,
            "longitude": -77.01325109999999
        },
        {
            "id": 3,
            "name": "Mya Line",
            "adress": "Av. Agustin Gamarra 1103",
            "latitude": -12.0695634,
            "longitude": -77.0128069
        },
        {
            "id": 4,
            "name": "Mya Line",
            "adress": "Av Agustin Gamarra 1105",
            "latitude": -12.0694625,
            "longitude": -77.0127509
        },
        {
            "id": 5,
            "name": "Pioner",
            "adress": "Av Agustin Gamarra 445",
            "latitude": -12.0652889,
            "longitude": -77.154501
        },
        {
            "id": 6,
            "name": "Bata",
            "adress": "Av. Agustin Gamarra 1017",
            "latitude": -12.0684229,
            "longitude": -77.0128529
        },
        {
            "id": 7,
            "name": "Kayser",
            "adress": "Av. La Mar 2225 - San Miguel",
            "latitude": -12.0750562,
            "longitude": -77.08071819999999
        },
        {
            "id": 8,
            "name": "Bata",
            "adress": "Av. La Marina 2000, San Miguel",
            "latitude": -12.0761542,
            "longitude": -77.083643
        },
        {
            "id": 9,
            "name": "Bata",
            "adress": "Jiron Jose Galvez 522 - B",
            "latitude": -12.0903509,
            "longitude": -77.07283799999999
        },
        {
            "id": 10,
            "name": "Bata",
            "adress": "Av. La Mar 2275, San Miguel",
            "latitude": -12.0749941,
            "longitude": -77.08168979999999
        },
        {
            "id": 11,
            "name": "Victors Nombre Comercial",
            "adress": "Av. Las Carmelias 234",
            "latitude": -12.0931147,
            "longitude": -77.0293717
        },
        {
            "id": 12,
            "name": "Angelas Flowers",
            "adress": "Av. Las Carmelias 234",
            "latitude": -12.0931147,
            "longitude": -77.0293717
        },
        {
            "id": 13,
            "name": "Victors Nombre Comercial",
            "adress": "Av. Las Carmelias 234",
            "latitude": -12.0931147,
            "longitude": -77.0293717
        },
        
        {
            "id": 14,
            "name": "Victors Nombre Comercial",
            "adress": "Av. Las Carmelias 234",
            "latitude": -12.0931147,
            "longitude": -77.0293717
        },
        {
            "id": 15,
            "name": "Angelas Flowers",
            "adress": "Av. Las Carmelias 234",
            "latitude": -12.0931147,
            "longitude": -77.0293717
        },
        */
        {
            "id": 16,
            "name": "Develogers",
            "adress": "Av Wiesse",
            "latitude": -11.9654429,
            "longitude": -76.9942375
        },
        {
            "id": 17,
            "name": "Abraham Store",
            "adress": "Av. Universitaria",
            "latitude": -12.0751071,
            "longitude": -77.0803832
        }
    ];
}
function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        const latitude = place.latitude;
        const longitude = place.longitude;
        console.log(place)
        // add place icon
        const icon = document.createElement('a-image');
        icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
        icon.setAttribute('name', place.name);
        icon.setAttribute('src', './map-marker.png');

        // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
        icon.setAttribute('scale', '1, 1');

        icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

        const clickListener = function (ev) {
            ev.stopPropagation();
            ev.preventDefault();

            const name = ev.target.getAttribute('name');

            const el = ev.detail.intersection && ev.detail.intersection.object.el;

            if (el && el === ev.target) {
                const label = document.createElement('span');
                const container = document.createElement('div');
                container.setAttribute('id', 'place-label');
                label.innerText = name;
                container.appendChild(label);
                document.body.appendChild(container);

                setTimeout(() => {
                    container.parentElement.removeChild(container);
                }, 1500);
            }
        };

        icon.addEventListener('click', clickListener);

        scene.appendChild(icon);
    });
}