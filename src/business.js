import db from './db'

function toLower (string) {
  return string.toLowerCase()
}

function getAllPlanets () {
  return db.reduce(
    (value, cluster) => [...value, ...getAllClusterPlanets(cluster)],
    []
  )
}

function getAllClusterPlanets (cluster) {
  return cluster.systems.reduce(
    (value, system) => [...value, ...system.planets],
    []
  )
}

function findCluster (clusterName) {
  return db.find(cluster => toLower(cluster.name) === toLower(clusterName))
}

function traverseGalaxy (planetName, i = 0) {
  if (i === db.length) return null

  const system = traverseCluster(planetName, db[i])
  return system !== null
    ? Object.assign({}, db[i], { systems: [system] })
    : traverseGalaxy(planetName, ++i)
}

function traverseCluster (planetName, cluster, i = 0) {
  if (i === cluster.nSystems()) return null

  const planet = traverseSystem(planetName, cluster.systems[i])
  return planet !== null
    ? Object.assign({}, cluster.systems[i], { planets: [planet] })
    : traverseCluster(planetName, cluster, ++i)
}

function traverseSystem (planetName, system, i = 0) {
  if (i === system.nPlanets()) return null

  return toLower(system.planets[i].name) === toLower(planetName)
    ? system.planets[i]
    : traverseSystem(planetName, system, ++i)
}

function flattenGalaxy (iteratorFn) {
  return db.reduce((value, cluster) => [...value, ...iteratorFn(cluster)], [])
}

export function getClusterSummary (clusterName) {
  const cluster = findCluster(clusterName)
  return cluster.systems.map(system => ({
    name: system.name,
    stellarMass: system.stellarMass,
    stellarClass: system.stellarClass,
    planets: system.nPlanets()
  }))
}

export function locatePlanet (planetName) {
  const cluster = traverseGalaxy(planetName)
  return cluster !== null
    ? `${cluster.name} -> ${cluster.systems[0].name} -> ${cluster.systems[0]
        .planets[0].name}`
    : 'Planet not found!'
}

export function getGasGiants () {
  return getAllPlanets().filter(planet => planet.isGasGiant())
}
