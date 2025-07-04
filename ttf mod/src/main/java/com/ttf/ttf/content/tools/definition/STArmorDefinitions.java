package com.ssakura49.sakuratinker.content.tools.definition;

import com.ssakura49.sakuratinker.SakuraTinker;
import slimeknights.tconstruct.common.Sounds;
import slimeknights.tconstruct.library.tools.definition.ModifiableArmorMaterial;

public class STArmorDefinitions {
    public STArmorDefinitions() {
    }

    public static final ModifiableArmorMaterial EMBEDDED;

    static {
        EMBEDDED = ModifiableArmorMaterial.create(SakuraTinker.location("embedded"), Sounds.EQUIP_PLATE.getSound());
    }
}
