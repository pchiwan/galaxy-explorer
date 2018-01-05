export function Cluster (data = {}) {
  this.name = data.name;
  this.systems = data.systems.map((system) => new System(system));
  this.nSystems = () => this.systems.length;
}

export function System (data = {}) {
  this.name = data.name;
  this.stellarMass = data.stellarMass;
  this.stellarClass = data.stellarClass;
  this.planets = data.planets.map((planet) => new Planet(planet));
  this.nPlanets = () => this.planets.length;
}

export function Planet (data = {}) {
  this.name = data.name;
  this.dayLength = data.dayLength;
  this.orbitalPeriod = data.orbitalPeriod;
  this.temp = data.temp;
  this.radius = data.radius;
  this.isGasGiant = () => this.temp === 'N/A';
}
