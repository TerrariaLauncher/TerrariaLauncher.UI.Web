import { combineReducers } from "redux"
import * as actions from './actions.js';
import * as constants from './constants.js';
import * as playerActions from '../players/actions.js';

function createDefaultInventorySegment(numSlots) {
    let segment = [];
    for (let i = 0; i < numSlots; ++i) {
        segment.push({
            slot: i,
            item: 0,
            prefix: 0,
            stack: 0
        });
    }
    return segment;
};

const defaultState = {
    instanceId: -1,
    playerName: '',
    inventory: {
        hotBar: createDefaultInventorySegment(constants.HotBarSlots),
        mainInventory: createDefaultInventorySegment(constants.MainInventorySlots),
        coins: createDefaultInventorySegment(constants.CoinSlots),
        ammo: createDefaultInventorySegment(constants.AmmoSlots),
        cursor: createDefaultInventorySegment(constants.CursorSlots),
        armor: createDefaultInventorySegment(constants.ArmorSlots),
        accessories: createDefaultInventorySegment(constants.AccessorySlots),
        vanityArmor: createDefaultInventorySegment(constants.VanityArmorSlots),
        vanityAccessories: createDefaultInventorySegment(constants.VanityAccessorySlots),
        armorDye: createDefaultInventorySegment(constants.ArmorDyeSlots),
        accessoryDye: createDefaultInventorySegment(constants.AccessorySlots),
        equipment: createDefaultInventorySegment(constants.EquipmentSlots),
        equipmentDye: createDefaultInventorySegment(constants.EquipmentDyeSlots),
        piggyBank: createDefaultInventorySegment(constants.PiggyBankSlots),
        safe: createDefaultInventorySegment(constants.SafeSlots),
        trash: createDefaultInventorySegment(constants.TrashSlots),
        defenderForge: createDefaultInventorySegment(constants.DefenderForgeSlots),
        voidVault: createDefaultInventorySegment(constants.VoidVaultSlots)
    },
    health: {
        current: 0,
        base: 0,
        max: 0
    },
    mana: {
        current: 0,
        base: 0,
        max: 0
    },
    buff: []
}

function instanceIdReducer(state = defaultState.instanceId, action) {
    switch (action.type) {
        case playerActions.TRACK_PLAYER_SESSION_REQUEST:
            return action.payload.instanceId;
        default:
            return state;
    }
}

function playerNameReducer(state = defaultState.playerName, action) {
    switch (action.type) {
        case actions.TRACK_PLAYER_DATA_REQUEST:
            return action.payload.playerName;
        default:
            return state;
    }
}

function inventorySegmentReducerCreator(defaultState, segmentIndex) {
    return function (state = defaultState, action) {
        switch (action.type) {
            case actions.TRACK_PLAYER_DATA_RECEIVE:
                if (action.payload.event === 'slot' &&
                    action.payload.data.details.slot >= segmentIndex.Start &&
                    action.payload.data.details.slot < segmentIndex.ExclusiveEnd) {
                    const internalIndex = action.payload.data.details.slot - segmentIndex.Start;
                    return state.map((item, index) => {
                        if (index !== internalIndex) {
                            return item;
                        } else {
                            return action.payload.data.details;
                        }
                    });
                }
                else {
                    return state;
                }
            default:
                return state;
        }
    }
}

const inventoryReducer = combineReducers({
    hotBar: inventorySegmentReducerCreator(defaultState.inventory.hotBar, constants.HotBarIndex),
    mainInventory: inventorySegmentReducerCreator(defaultState.inventory.mainInventory, constants.MainInventoryIndex),
    coins: inventorySegmentReducerCreator(defaultState.inventory.coins, constants.CoinIndex),
    ammo: inventorySegmentReducerCreator(defaultState.inventory.ammo, constants.AmmoIndex),
    cursor: inventorySegmentReducerCreator(defaultState.inventory.cursor, constants.CursorIndex),
    armor: inventorySegmentReducerCreator(defaultState.inventory.armor, constants.ArmorIndex),
    accessories: inventorySegmentReducerCreator(defaultState.inventory.accessories, constants.AccessoryIndex),
    vanityArmor: inventorySegmentReducerCreator(defaultState.inventory.vanityArmor, constants.VanityArmorIndex),
    vanityAccessories: inventorySegmentReducerCreator(defaultState.inventory.vanityAccessories, constants.VanityAccessoryIndex),
    armorDye: inventorySegmentReducerCreator(defaultState.inventory.armorDye, constants.ArmorDyeIndex),
    accessoryDye: inventorySegmentReducerCreator(defaultState.inventory.accessoryDye, constants.AccessoryDyeIndex),
    equipment: inventorySegmentReducerCreator(defaultState.inventory.equipment, constants.EquipmentIndex),
    equipmentDye: inventorySegmentReducerCreator(defaultState.inventory.equipmentDye, constants.EquipmentDyeIndex),
    piggyBank: inventorySegmentReducerCreator(defaultState.inventory.piggyBank, constants.PiggyBankIndex),
    safe: inventorySegmentReducerCreator(defaultState.inventory.safe, constants.SafeIndex),
    trash: inventorySegmentReducerCreator(defaultState.inventory.trash, constants.TrashIndex),
    defenderForge: inventorySegmentReducerCreator(defaultState.inventory.defenderForge, constants.DefenderForgeIndex),
    voidVault: inventorySegmentReducerCreator(defaultState.inventory.voidVault, constants.VoidVaultIndex)
});

function healthReducer(state = defaultState.health, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function manaReducer(state = defaultState.mana, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function buffReducer(state = defaultState.buff, action) {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({
    instanceId: instanceIdReducer,
    playerName: playerNameReducer,
    inventory: inventoryReducer,
    health: healthReducer,
    mana: manaReducer,
    buff: buffReducer
});
