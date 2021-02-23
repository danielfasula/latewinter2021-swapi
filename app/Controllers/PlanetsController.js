import { ProxyState } from "../AppState.js";
import { planetsService } from '../Services/PlanetsService.js'


function _draw() {
    let planets = ProxyState.planets;
    let template = ''
    planets.forEach(v => template += v.Template)
    document.getElementById("planets").innerHTML = /*html*/`
  <div className="card-columns planets">
      ${template}
      </div>
  <button class="btn btn-danger" onclick="app.planetsController.previous()">Previous</button>
  <button class="btn btn-primary" onclick="app.planetsController.next()">Next</button>
  `
}

export default class PlanetsController {
    constructor() {
        ProxyState.on('planets', _draw)
        _draw()
    }

    next() {
        planetsService.next()
    }
}