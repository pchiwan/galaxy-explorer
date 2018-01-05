# Galaxy explorer
A galaxy exploration Express API

## Exercise

Implement the following API endpoints:

### GET `/api/clusters/{clusterName}/systems`
Given a cluster name, returns a list with summarized info on its systems, i.e.
```javascript
System {
  name: string
  stellarMass: string
  stellarClass: string
  planets: number
}
```

### GET `/api/locate/{planetName}`
Given a planet name, return the full path to it in the galaxy, i.e. `Cluster -> System -> Planet`. Tip:
```javascript
Cluster {
  name: string
  systems: System[]
  ...
}

System {
  name: string
  planets: Planet[]
  ...
}
```

#### Examples
- `/api/locate/Thessia` => _Athena Nebula -> Parnitha -> Thessia_

- `/api/locate/Earth` => _Local Cluster -> Sol -> Earth_

**Note**: Keep case sensitivy in mind! ☝️

### GET `/api/gasgiants`
Get a list of all the gas giants in the galaxy. Gas giants have no surface temperature, so their `temp` is set to `N/A`.
