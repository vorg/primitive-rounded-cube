#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTexCoord0;

uniform sampler2D uTexture;

void main() {
    gl_FragColor = texture2D(uTexture, vTexCoord0 * 5.0);
    gl_FragColor *= vec4(vTexCoord0, 0.0, 1.0);
}
