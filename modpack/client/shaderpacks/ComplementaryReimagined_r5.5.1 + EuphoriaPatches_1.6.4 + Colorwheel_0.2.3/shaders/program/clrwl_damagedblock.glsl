//////////////////////////////////
// Complementary Shaders by EminGT //
// With Euphoria Patches by SpacEagle17 //
//////////////////////////////////

//Common//
#include "/lib/common.glsl"

vec2 Flw_GetLightMapCoordinates(vec2 lm)
{
    return clamp(((lm * 16.0 / 15.0) - 0.03125) * 1.06667, 0.0, 1.0);
}

//////////Fragment Shader//////////Fragment Shader//////////Fragment Shader//////////
#ifdef FRAGMENT_SHADER

//Pipeline Constants//

//Common Variables//

//Common Functions//

//Includes//
#ifdef COLOR_CODED_PROGRAMS
    #include "/lib/misc/colorCodedPrograms.glsl"
#endif

//Program//
void main() {
    vec4 color = texture(_flw_crumblingTex, _flw_crumblingTexCoord) * flw_vertexColor;

    #ifdef COLOR_CODED_PROGRAMS
        ColorCodeProgram(color, -1);
    #endif

    /* DRAWBUFFERS:0 */
    gl_FragData[0] = color;
}

#endif

//////////Vertex Shader//////////Vertex Shader//////////Vertex Shader//////////
#ifdef VERTEX_SHADER

out vec2 texCoord;

flat out vec4 glColor;

//Attributes//

//Common Variables//
vec2 lmCoord;

//Common Functions//

//Includes//

#if defined MIRROR_DIMENSION || defined WORLD_CURVATURE
    #include "/lib/misc/distortWorld.glsl"
#endif

#ifdef WAVE_EVERYTHING
    #include "/lib/materials/materialMethods/wavingBlocks.glsl"
#endif

//Program//
void main() {
	ivec3 blockPos = ivec3(floor(flw_vertexPos.xyz));
	vec2 fetchedLight;

    lmCoord = flw_vertexLight;

	if (flw_lightFetch(blockPos, fetchedLight))
	{
		lmCoord = max(lmCoord, fetchedLight);
	}

    lmCoord = Flw_GetLightMapCoordinates(lmCoord);

    gl_Position = ftransform();
    #ifdef ATLAS_ROTATION
        flw_vertexTexCoord += flw_vertexTexCoord * float(hash33(mod(cameraPosition * 0.5, vec3(100.0))));
    #endif

    #if defined MIRROR_DIMENSION || defined WORLD_CURVATURE || defined WAVE_EVERYTHING
        vec4 position = flw_vertexPos - vec4(flw_cameraPos, 0.0);
    #ifdef MIRROR_DIMENSION
            doMirrorDimension(position);
    #endif
        #ifdef WORLD_CURVATURE
            position.y += doWorldCurvature(position.xz);
    #endif
        #ifdef WAVE_EVERYTHING
            DoWaveEverything(position.xyz);
    #endif
        gl_Position = flw_viewProjection * (position + vec4(flw_cameraPos, 0.0));
    #endif
}

#endif
