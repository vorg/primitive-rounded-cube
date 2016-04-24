![](thumb.png)

# primitive-cube

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

A rounded cube geometry for 3D rendering, including normals, UVs and cell indices (faces).

## Usage

[![NPM](https://nodei.co/npm/primitive-rounded-cube.png)](https://www.npmjs.com/package/primitive-rounded-cube)

#### `mesh = createRoundedCube([sx, sy, sz, nx, ny, nz, r])`

Parameters:  
`sx` - size x, defaults to 1  
`sy` - size y, defaults to `sx`  
`sz` - size z, defaults to `sx`
`nx` - num subdivisions on x axis, defaults to 1  
`ny` - num subdivisions on y axis, defaults to `sx`  
`nz` - num subdivisions on z axis, defaults to `sx`
`r`  - rounded corner/edge radius, defaults to 0

## Example

```javascript
var createRoundedCube = require('primtivie-rounded-cube');
var cube = createRoundedCube(1, 1, 1, 20, 20, 20, 0.1);
```

`cube` will have the following structure:

```
{
  positions: [ [x, y, z], [x, y, z], ... ],
  cells: [ [a, b, c], [a, b, c], ... ],
  uvs: [ [u, v], [u, v], ... ],
  normals: [ [x, y, z], [x, y, z], ... ]
}
```

## Demo

Download or clone this repo and run:

```
cd demo
npm install
npm start
```

## License

MIT, see [LICENSE.md](http://github.com/vorg/primitive-rounded-cube/blob/master/LICENSE.md) for details.
