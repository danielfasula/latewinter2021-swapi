import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";
import Planet from '../Models/Planet.js';

class PlanetsService {
    constructor() {
        this.getPlanets()
    }

    getPlanets() {

        api.get('planets/').then(res => {
            ProxyState.planets = res.data.results.map(rawPlanetData => new Planet(rawPlanetData))
            ProxyState.planetNext = res.data.next
            ProxyState.planetPrev = res.data.prev
            console.log(ProxyState.planets)
        }).catch(err => console.error(err))
    }
}

export const planetsService = new PlanetsService();