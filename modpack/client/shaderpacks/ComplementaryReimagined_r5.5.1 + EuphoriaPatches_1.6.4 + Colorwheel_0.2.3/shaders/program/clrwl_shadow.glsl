/*
const int clrwl_shadowOpaque0Target = 0;
*/

#if SHADOW_QUALITY >= 1
/*
const int clrwl_shadowOpaque1Target = 1;
*/

#endif
/////////////////////////////////////
// Complementary Shaders by EminGT //
// With Euphoria Patches by SpacEagle17 //
/////////////////////////////////////

//Common//
#include "/lib/common.glsl"
#include "/lib/shaderSettings/wavingBlocks.glsl"
#define WATER_CAUSTIC_STRENGTH 1.0 //[0.7 0.8 0.9 1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2.0]
#define SHADOW_SATURATION 1.0 //[0.5 0.6 0.7 0.8 0.9 1.0 1.1 1.2 1.3 1.4 1.5 1.6 1.7 1.8 1.9 2.0]

vec2 Flw_GetLightMapCoordinates(vec2 lm)
{
    return clamp(((lm * 16.0 / 15.0) - 0.03125) * 1.06667, 0.0, 1.0);
}

//////////Fragment Shader//////////Fragment Shader//////////Fragment Shader//////////
#ifdef FRAGMENT_SHADER

flat in vec3 sunVec, upVec;

in vec4 position;

#ifdef CONNECTED_GLASS_EFFECT
    in vec2 signMidCoordPos;
    flat in vec2 absMidCoordPos;
#endif

//Pipeline Constants//

//Common Variables//
float SdotU = dot(sunVec, upVec);
float sunVisibility = clamp(SdotU + 0.0625, 0.0, 0.125) / 0.125;

//Common Functions//
void DoNaturalShadowCalculation(inout vec4 color1, inout vec4 color2) {
    color1.rgb *= flw_vertexColor.rgb;
    color1.rgb = mix(vec3(1.0), color1.rgb, pow(color1.a, (1.0 - color1.a) * 0.5) * 1.05);
    color1.rgb *= 1.0 - pow(color1.a, 64.0);
    color1.rgb *= 0.2; // Natural Strength

    color2.rgb = normalize(color1.rgb) * 0.5;
}

vec2 texCoord = flw_vertexTexCoord;

//Includes//

//Program//
void main() {
    vec4 color1 = texture2DLod(tex, texCoord, 0); // Shadow Color

    #if SHADOW_QUALITY >= 1
        vec4 color2 = color1; // Light Shaft Color

        color2.rgb *= 0.25; // Natural Strength

        #if defined LIGHTSHAFTS_ACTIVE && LIGHTSHAFT_BEHAVIOUR == 1 && defined OVERWORLD
            float positionYM = flw_vertexPos.y;
        #endif

        DoNaturalShadowCalculation(color1, color2);
    #endif

    /* DRAWBUFFERS:0 */
    gl_FragData[0] = vec4(saturateColors(color1.rgb, SHADOW_SATURATION), color1.a); // Shadow Color

    #if SHADOW_QUALITY >= 1
        #if defined LIGHTSHAFTS_ACTIVE && LIGHTSHAFT_BEHAVIOUR == 1 && defined OVERWORLD
            color2.a = 0.25 + max0(positionYM * 0.05); // consistencyMEJHRI7DG
        #endif

        /* DRAWBUFFERS:01 */
        gl_FragData[1] = vec4(saturateColors(color2.rgb, pow(SHADOW_SATURATION, 0.8)), color2.a); // Light Shaft Color
    #endif
}

#endif

//////////Vertex Shader//////////Vertex Shader//////////Vertex Shader//////////
#ifdef VERTEX_SHADER

flat out vec3 sunVec, upVec;

#ifdef CONNECTED_GLASS_EFFECT
    out vec2 signMidCoordPos;
    flat out vec2 absMidCoordPos;
#endif

//Pipeline Constants//
#if COLORED_LIGHTING_INTERNAL > 0 || END_CRYSTAL_VORTEX_INTERNAL > 0 || DRAGON_DEATH_EFFECT_INTERNAL > 0 || defined END_PORTAL_BEAM_INTERNAL
    #extension GL_ARB_shader_image_load_store : enable
#endif

//Attributes//

//Common Variables//
vec4 position;
vec2 lmCoord;
vec2 texCoord;

//Common Functions//

//Includes//
#include "/lib/util/spaceConversion.glsl"

#if defined WAVING_ANYTHING_TERRAIN || defined WAVE_EVERYTHING || defined WAVING_WATER_VERTEX
    #include "/lib/materials/materialMethods/wavingBlocks.glsl"
#endif

#if defined MIRROR_DIMENSION || defined WORLD_CURVATURE
    #include "/lib/misc/distortWorld.glsl"
#endif

//Program//
void main() {
	ivec3 blockPos = ivec3(floor(flw_vertexPos.xyz));
	vec2 fetchedLight;

    texCoord = flw_vertexTexCoord;
    lmCoord = flw_vertexLight;

	if (flw_lightFetch(blockPos, fetchedLight))
	{
		lmCoord = max(lmCoord, fetchedLight);
	}

    lmCoord = Flw_GetLightMapCoordinates(lmCoord);

    sunVec = GetSunVector();
    upVec = normalize(flw_view[1].xyz);

    #if defined WORLD_CURVATURE || defined MIRROR_DIMENSION
        position = shadowModelViewInverse * flw_view * flw_vertexPos;
    #else
        position = shadowModelViewInverse * shadowProjectionInverse * ftransform();
    #endif

    #ifdef WORLD_CURVATURE
        position.y += doWorldCurvature(position.xz);
    #endif

    #ifdef MIRROR_DIMENSION
        doMirrorDimension(position);
    #endif

    #if defined WAVING_ANYTHING_TERRAIN || defined WAVING_WATER_VERTEX || defined WAVE_EVERYTHING
        #ifdef WAVE_EVERYTHING
            DoWaveEverything(position.xyz);
        #endif
    #endif

    #ifdef CONNECTED_GLASS_EFFECT
        vec2 midCoord = flw_vertexMidTexCoord;
        vec2 texMinMidCoord = texCoord - midCoord;
        signMidCoordPos = sign(texMinMidCoord);
        absMidCoordPos  = abs(texMinMidCoord);
    #endif

    vec3 normal = mat3(shadowModelViewInverse) * clrwl_normal * flw_vertexNormal;

    gl_Position = shadowProjection * shadowModelView * position;

    float lVertexPos = sqrt(gl_Position.x * gl_Position.x + gl_Position.y * gl_Position.y);
    float distortFactor = lVertexPos * shadowMapBias + (1.0 - shadowMapBias);
    gl_Position.xy *= 1.0 / distortFactor;
    gl_Position.z = gl_Position.z * 0.2;
}

#endif
