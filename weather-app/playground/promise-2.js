const request = require('request');

var geocodeAddress  = (address) => {
    return new Promise((resolve, reject) => {
        var encodedAddress = encodeURIComponent(address);   
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body) => {
         if (body.status === 'OK') {
            resolve({
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longtitude: body.results[0].geometry.location.lng
            });
            } else {
                reject('Unable to find that address.');
            } 
        });
    })
};

geocodeAddress('00000').then((location) => {
    console.log(JSON.stringify(location, undefined, 2)); 
},(errorMessage) => {
    console.log(errorMessage);
});