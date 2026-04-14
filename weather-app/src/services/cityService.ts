import axios from "axios";

class CityService {

    public async getAllCities() {
        const response = await axios.get(
            "https://data.gov.il/api/3/action/datastore_search?resource_id=8f714b6f-c35c-4b40-a0e7-547b675eee0e"
        );

        return response.data.result.records;
    }

}

const cityService = new CityService();

export default cityService;