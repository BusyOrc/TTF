package com.ssakura49.sakuratinker.register;

import com.mojang.blaze3d.platform.InputConstants;
import net.minecraft.client.KeyMapping;
import net.minecraftforge.client.event.RegisterKeyMappingsEvent;
import net.minecraftforge.client.settings.KeyConflictContext;
import org.jetbrains.annotations.Nullable;
import org.lwjgl.glfw.GLFW;

import java.util.HashMap;
import java.util.Map;

public class STKeys {
    public static final Map<String, KeyMapping> KEY_MAPPINGS = new HashMap<>();

    public static final String SUMMON_KEY_ID = "key.sakuratinker.summon";

    public static void registerKeyBindings() {
        registerKey(
                SUMMON_KEY_ID,
                GLFW.GLFW_KEY_G,
                "key.categories.sakuratinker"
        );
    }

    private static void registerKey(String id, int defaultKey, String category) {
        KEY_MAPPINGS.put(id, new KeyMapping(
                id,
                KeyConflictContext.IN_GAME,
                InputConstants.Type.KEYSYM,
                defaultKey,
                category
        ));
    }

    @Nullable
    public static KeyMapping getKeyMappingById(String id) {
        return KEY_MAPPINGS.get(id);
    }

    public static KeyMapping getSummonKey() {
        return KEY_MAPPINGS.get(SUMMON_KEY_ID);
    }
}
