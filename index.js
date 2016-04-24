var createCube = require('primitive-cube');
var computeNormals = require('normals').vertexNormals;
var Vec3 = require('pex-math/Vec3');

function createRoundedCube(sx, sy, sz, nx, ny, nz, radius) {
    if (sx === undefined) sx = 1.0;
    if (sy === undefined) sy = sx;
    if (sz === undefined) sz = sx;

    if (nx === undefined) nx = 1.0;
    if (ny === undefined) ny = nx;
    if (nz === undefined) nz = nx;

    if (radius == undefined) radius = 0;

    var rx = sx / 2.0;
    var ry = sy / 2.0;
    var rz = sz / 2.0;

    var cube = createCube(sx, sy, sz, nx, ny, nz);

    var positions = cube.positions;
    var normals = cube.normals;

    var tmp = [0,0,0];
    for(var i=0; i<positions.length; i++) {
        var pos = positions[i];
        var normal = normals[i];
        var inner = Vec3.copy(pos);

        if (pos[0] < -rx + radius) {
            inner[0] = -rx + radius;
        }
        else if (pos[0] > rx - radius) {
            inner[0] = rx - radius;
        }

        if (pos[1] < -ry + radius) {
            inner[1] = -ry + radius;
        }
        else if (pos[1] > ry - radius) {
            inner[1] = ry - radius;
        }

        if (pos[2] < -rz + radius) {
            inner[2] = -rz + radius;
        }
        else if (pos[2] > rz - radius) {
            inner[2] = rz - radius;
        }

        Vec3.set(normal, pos);
        Vec3.sub(normal, inner);
        Vec3.normalize(normal);

        Vec3.set(pos, inner);
        Vec3.set(tmp, normal);
        Vec3.scale(tmp, radius);
        Vec3.add(pos, tmp);
    }

    cube.normals = computeNormals(cube.cells, cube.positions);

    return cube;
}

module.exports = createRoundedCube;
