const data_stores =[{
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
    "id": 10,
    "name": "Bata",
    "adress": "Av. La Mar 2275, San Miguel",
    "latitude": -12.0749941,
    "longitude": -77.08168979999999
}]
AFRAME.registerComponent('card_places', {
    init: function() {
        //this.loaded = false;
        for (const store of data_stores) {
            const adress = store['adress']
            
            const entity = document.createElement('a-text');
            entity.setAttribute('look-at', '[gps-projected-camera]');
            entity.setAttribute('value', store.name);
            entity.setAttribute('scale', {
                x: scale,
                y: scale,
                z: scale
            });
            entity.setAttribute('gps-projected-entity-place', {
                latitude: peak.geometry.coordinates[1],
                longitude: peak.geometry.coordinates[0]
            });
        }
    }
});