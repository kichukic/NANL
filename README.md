NOTE: 
------
```
in .env use "key=DEMO_KEY" for the test purpose
```

APOD and Near-Earth Asteroid Information - NASA API

This repository utilizes NASA's API to fetch two sets of data:
1. Astronomy Picture of the Day (APOD)
2. Near-Earth Asteroid Information (NeoWs)

Installation
------------
To use the APOD and Near-Earth Asteroid functionalities, install the `aerolib` package from npm:

```bash
npm i aerolib
```

[Link to aerolib package on npm](https://www.npmjs.com/package/aerolib)

Example Usage
-------------
1. Astronomy Picture of the Day (APOD)
   The APOD function retrieves data related to NASA's Astronomy Picture of the Day, including the image, explanation, and other metadata.

   Using `async/await`

   ```javascript
   const aerolib = require('aerolib');

   async function getAPOD() {
       const data = await aerolib.getAPODdata();
       console.log(data.copyright);
       console.log(data.date);
       console.log(data.explanation);
   }

   getAPOD();
   ```

   Using Promises

   ```javascript
   aerolib.getAPODdata().then((data) => {
       console.log(data.copyright);
       console.log(data.date);
       console.log(data.explanation);
   });
   ```

   Available Data:
   - `copyright`: Copyright signature for the image.
   - `date`: Date of the photography.
   - `explanation`: A brief explanation of the picture.
   - `hdurl`: The URL for the HD version of the image.
   - `media_type`: Type of media (image, video, etc.).
   - `service_version`: Version of the service.
   - `title`: Title of the image.
   - `url`: URL for the image.

2. Near-Earth Asteroid Information (NeoWs)
   The Near-Earth Object Web Service (NeoWs) allows you to fetch data on asteroids that are near Earth.

   Fetch Asteroid Count for a Date Range

   ```javascript
   aerolib.NeoWselementcount("2015-09-07", "2015-09-08")
       .then((count) => {
           console.log(count);
       });
   ```

   Fetch Near-Earth Objects for a Date Range

   ```javascript
        aerolib.near_earth_objects("2015-09-07", "2015-09-08").then((data) => {
            data.forEach((d) => {
                console.log(d.links)
                console.log(d.id)
                console.log(d.neo_reference_id)
                console.log(d.name)
                console.log(d.nasa_jpl_url)
            })
        })
   ```

   Example Data:

   ```json
   {
     "links": {
       "self": "http://api.nasa.gov/neo/rest/v1/neo/54393994?api_key=FOc8xoEW6vTQSTbSt4ZegBsELglcpQS5Hqkcn7fd"
     },
     "id": "54393994",
     "neo_reference_id": "54393994",
     "name": "(2023 TP16)",
     "nasa_jpl_url": "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=54393994",
     "absolute_magnitude_h": 29.78,
     "estimated_diameter": {
       "kilometers": {
         "estimated_diameter_min": 0.002941406,
         "estimated_diameter_max": 0.0065771838
       },
       "meters": {
         "estimated_diameter_min": 2.9414060178,
         "estimated_diameter_max": 6.5771838053
       },
       "miles": {
         "estimated_diameter_min": 0.0018277044,
         "estimated_diameter_max": 0.0040868713
       },
       "feet": {
         "estimated_diameter_min": 9.6502825195,
         "estimated_diameter_max": 21.5786877156
       }
     },
     "is_potentially_hazardous_asteroid": false,
     "close_approach_data": [
       {
         "close_approach_date": "2015-09-08",
         "close_approach_date_full": "2015-Sep-08 09:00",
         "epoch_date_close_approach": 1441702800000,
         "orbiting_body": "Earth"
       }
     ]
   }
   ```

   ### Explanation of Data Fields:
   - **links.self**: URL to access detailed information about this specific asteroid from NASA's Near-Earth Object (NEO) API.
   - **id**: The unique identifier for this asteroid in the NASA database.
   - **neo_reference_id**: A reference ID, often identical to the `id`.
   - **name**: The name of the asteroid (usually based on the year of discovery).
   - **nasa_jpl_url**: URL to NASA's JPL Small Body Database for more detailed information.
   - **absolute_magnitude_h**: The asteroid's brightness, with lower values indicating a brighter object.
   - **estimated_diameter**: Estimated size of the asteroid in multiple units (kilometers, meters, miles, feet).
   - **is_potentially_hazardous_asteroid**: Boolean value indicating whether the asteroid is potentially hazardous to Earth.
   - **close_approach_data**: Array of objects with details about the asteroid's closest approach to Earth.



Mars Rover Photos
------------------
