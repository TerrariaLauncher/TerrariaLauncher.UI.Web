export const HotBarSlots = 10;
export const MainInventorySlots = 40;
export const CoinSlots = 4;
export const AmmoSlots = 4;

export const CursorSlots = 1;

export const ArmorSlots = 3;
export const AccessorySlots = 7;

export const VanityArmorSlots = 3;
export const VanityAccessorySlots = 7;

export const ArmorDyeSlots = 3;
export const AccessoryDyeSlots = 7;

export const EquipmentSlots = 5;
export const EquipmentDyeSlots = 5;

export const PiggyBankSlots = 40;
export const SafeSlots = 40;

export const TrashSlots = 1;

export const DefenderForgeSlots = 40;
export const VoidVaultSlots = 40;

export const TotalSlots =
    HotBarSlots + MainInventorySlots + CoinSlots + AmmoSlots + CursorSlots +
    ArmorSlots + AccessorySlots + VanityArmorSlots + VanityAccessorySlots +
    ArmorDyeSlots + AccessoryDyeSlots +
    EquipmentSlots +
    EquipmentDyeSlots +
    PiggyBankSlots +
    SafeSlots +
    TrashSlots +
    DefenderForgeSlots +
    VoidVaultSlots;

export const HotBarIndex = Object.freeze({
    Start: 0,
    ExclusiveEnd: HotBarSlots
});
export const MainInventoryIndex = Object.freeze({
    Start: HotBarIndex.ExclusiveEnd,
    ExclusiveEnd: HotBarIndex.ExclusiveEnd + MainInventorySlots
});
export const CoinIndex = Object.freeze({
    Start: MainInventoryIndex.ExclusiveEnd,
    ExclusiveEnd: MainInventoryIndex.ExclusiveEnd + CoinSlots
});
export const AmmoIndex = Object.freeze({
    Start: CoinIndex.ExclusiveEnd,
    ExclusiveEnd: CoinIndex.ExclusiveEnd + AmmoSlots
});
export const CursorIndex = Object.freeze({
    Start: AmmoIndex.ExclusiveEnd,
    ExclusiveEnd: AmmoIndex.ExclusiveEnd + CursorSlots
});
export const ArmorIndex = Object.freeze({
    Start: CursorIndex.ExclusiveEnd,
    ExclusiveEnd: CursorIndex.ExclusiveEnd + ArmorSlots
});
export const AccessoryIndex = Object.freeze({
    Start: ArmorIndex.ExclusiveEnd,
    ExclusiveEnd: ArmorIndex.ExclusiveEnd + AccessorySlots
});
export const VanityArmorIndex = Object.freeze({
    Start: AccessoryIndex.ExclusiveEnd,
    ExclusiveEnd: AccessoryIndex.ExclusiveEnd + VanityArmorSlots
});
export const VanityAccessoryIndex = Object.freeze({
    Start: VanityArmorIndex.ExclusiveEnd,
    ExclusiveEnd: VanityArmorIndex.ExclusiveEnd + VanityAccessorySlots
});
export const ArmorDyeIndex = Object.freeze({
    Start: VanityAccessoryIndex.ExclusiveEnd,
    ExclusiveEnd: VanityAccessoryIndex.ExclusiveEnd + ArmorDyeSlots
});
export const AccessoryDyeIndex = Object.freeze({
    Start: ArmorDyeIndex.ExclusiveEnd,
    ExclusiveEnd: ArmorDyeIndex.ExclusiveEnd + AccessoryDyeSlots
});
export const EquipmentIndex = Object.freeze({
    Start: AccessoryDyeIndex.ExclusiveEnd,
    ExclusiveEnd: AccessoryDyeIndex.ExclusiveEnd + EquipmentSlots
});
export const EquipmentDyeIndex = Object.freeze({
    Start: EquipmentIndex.ExclusiveEnd,
    ExclusiveEnd: EquipmentIndex.ExclusiveEnd + EquipmentDyeSlots
});
export const PiggyBankIndex = Object.freeze({
    Start: EquipmentDyeIndex.ExclusiveEnd,
    ExclusiveEnd: EquipmentDyeIndex.ExclusiveEnd + PiggyBankSlots
});
export const SafeIndex = Object.freeze({
    Start: PiggyBankIndex.ExclusiveEnd,
    ExclusiveEnd: PiggyBankIndex.ExclusiveEnd + SafeSlots
});
export const TrashIndex = Object.freeze({
    Start: SafeIndex.ExclusiveEnd,
    ExclusiveEnd: SafeIndex.ExclusiveEnd + TrashSlots
});
export const DefenderForgeIndex = Object.freeze({
    Start: TrashIndex.ExclusiveEnd,
    ExclusiveEnd: TrashIndex.ExclusiveEnd + DefenderForgeSlots
});
export const VoidVaultIndex = Object.freeze({
    Start: DefenderForgeIndex.ExclusiveEnd,
    ExclusiveEnd: DefenderForgeIndex.ExclusiveEnd + VoidVaultSlots
});
