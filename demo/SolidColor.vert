attribute vec4 aPosition;

uniform mat4 uProjectionMatrix;
uniform mat4 uViewMatrix;
uniform mat4 uModelMatrix;

varying vec2 vTexCoord0;

void main() {
    gl_Position = uProjectionMatrix * uViewMatrix * uModelMatrix * aPosition;
}
