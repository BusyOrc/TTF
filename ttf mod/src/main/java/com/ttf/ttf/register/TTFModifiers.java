package com.ssakura49.sakuratinker.register;

import com.ttf.ttf.TTF;
import slimeknights.tconstruct.library.modifiers.Modifier;
import slimeknights.tconstruct.library.modifiers.impl.NoLevelsModifier;
import slimeknights.tconstruct.library.modifiers.util.ModifierDeferredRegister;
import slimeknights.tconstruct.library.modifiers.util.StaticModifier;

public class STModifiers {

    public STModifiers() {
    }

    public static ModifierDeferredRegister MODIFIERS = ModifierDeferredRegister.create(TTF.MODID);

    public static StaticModifier<SolidModifier> Solid;
    

    static {
        Solid = MODIFIERS.register("solid", SolidModifier::new);
    }
}
