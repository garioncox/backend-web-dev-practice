async function getLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            console.log("Fetching geoLocation");
            navigator.geolocation.getCurrentPosition(
                (position) => { resolve(position); },
                (error) => { reject(error); }
            );
        } else {
            console.warn("Geolocation not supported");
            alert("Geolocation not supported");
            resolve();
        }
    });
}


async function reportError(error) {
    console.warn(error);
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("Geolocation access denied");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred");
            break;
    }
}