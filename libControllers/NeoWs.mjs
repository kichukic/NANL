import dotenv from "dotenv";
import axios from "axios";
dotenv.config();

export const NeoWselementcount = async (startDate, endDate) => {
  try {
    let NeoData = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.key}`
    );
    return { element_count: NeoData.data.element_count };
  } catch (error) {
    console.log(error);
  }
};

export const near_earth_objects = async (startDate, endDate) => {
  try {
    let Sd = startDate;
    let Ed = endDate;
    let NeoData = await axios.get(
      `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${process.env.key}`
    );
    let data = NeoData.data.near_earth_objects;
    let flattenedData = [];

    let [startdata, enddate] = [data[Sd], data[Ed]];

  
    for (let d of startdata) {
      let asteroid = {
        links: {
          self: `http://api.nasa.gov/neo/rest/v1/neo/${d.id}?api_key=${process.env.key}`,
        },
        id: d.id,
        neo_reference_id: d.neo_reference_id,
        name: d.name,
        nasa_jpl_url: `https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${d.id}`,
        absolute_magnitude_h: d.absolute_magnitude_h,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: d.estimated_diameter.kilometers.estimated_diameter_min,
            estimated_diameter_max: d.estimated_diameter.kilometers.estimated_diameter_max,
          },
          meters: {
            estimated_diameter_min: d.estimated_diameter.meters.estimated_diameter_min,
            estimated_diameter_max: d.estimated_diameter.meters.estimated_diameter_max,
          },
          miles: {
            estimated_diameter_min: d.estimated_diameter.miles.estimated_diameter_min,
            estimated_diameter_max: d.estimated_diameter.miles.estimated_diameter_max,
          },
          feet: {
            estimated_diameter_min: d.estimated_diameter.feet.estimated_diameter_min,
            estimated_diameter_max: d.estimated_diameter.feet.estimated_diameter_max,
          },
        },
        is_potentially_hazardous_asteroid: d.is_potentially_hazardous_asteroid,
        close_approach_data: d.close_approach_data.map((approach) => ({
          close_approach_date: approach.close_approach_date,
          close_approach_date_full: approach.close_approach_date_full,
          epoch_date_close_approach: approach.epoch_date_close_approach,
          orbiting_body: approach.orbiting_body,
        })),
        is_sentry_object: d.is_sentry_object,
      };

      flattenedData.push(asteroid);
    }


    for (let d of enddate) {
      let asteroid = {
        links: {
          self: `http://api.nasa.gov/neo/rest/v1/neo/${d.id}?api_key=${process.env.key}`,
        },
        id: d.id,
        neo_reference_id: d.neo_reference_id,
        name: d.name,
        nasa_jpl_url: `https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=${d.id}`,
        absolute_magnitude_h: d.absolute_magnitude_h,
        estimated_diameter: {
          kilometers: {
            estimated_diameter_min: d.estimated_diameter.kilometers.estimated_diameter_min,
            estimated_diameter_max: d.estimated_diameter.kilometers.estimated_diameter_max,
          },
          meters: {
            estimated_diameter_min: d.estimated_diameter.meters.estimated_diameter_min,
            estimated_diameter_max: d.estimated_diameter.meters.estimated_diameter_max,
          },
          miles: {
            estimated_diameter_min: d.estimated_diameter.miles.estimated_diameter_min,
            estimated_diameter_max: d.estimated_diameter.miles.estimated_diameter_max,
          },
          feet: {
            estimated_diameter_min: d.estimated_diameter.feet.estimated_diameter_min,
            estimated_diameter_max: d.estimated_diameter.feet.estimated_diameter_max,
          },
        },
        is_potentially_hazardous_asteroid: d.is_potentially_hazardous_asteroid,
        close_approach_data: d.close_approach_data.map((approach) => ({
          close_approach_date: approach.close_approach_date,
          close_approach_date_full: approach.close_approach_date_full,
          epoch_date_close_approach: approach.epoch_date_close_approach,
          orbiting_body: approach.orbiting_body,
        })),
        is_sentry_object: d.is_sentry_object,
      };

      flattenedData.push(asteroid);
    }

    return flattenedData;

  } catch (error) {
    console.log(error);
  }
};


near_earth_objects("2015-09-07","2015-09-08").then((data)=>{
 data.forEach((dat)=>{
    console.log(dat);
    
 })
})
