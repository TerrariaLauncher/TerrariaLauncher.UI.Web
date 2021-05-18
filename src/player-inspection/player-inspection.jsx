import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Divider, Dropdown, Image, Label, Popup } from 'semantic-ui-react';
import * as instanceThunks from '../instances/thunks.js';
import * as playerThunks from '../players/thunks.js';
import * as thunks from './thunks.js';
import * as constants from './constants.js';
import stylesheets from './stylesheets.module.scss';
import Slot from './slot.jsx';

/**
 * 
 * @param {Array} inventory
 */
function segmentInventory(inventory) {
    return {
        hotBar: inventory.slice(constants.HotBarIndex.Start, constants.HotBarIndex.ExclusiveEnd),
        mainInventory: inventory.slice(constants.MainInventoryIndex.Start, constants.MainInventoryIndex.ExclusiveEnd),
        coins: inventory.slice(constants.CoinIndex.Start, constants.CoinIndex.ExclusiveEnd),
        ammo: inventory.slice(constants.AmmoIndex.Start, constants.AmmoIndex.ExclusiveEnd),
        cursor: inventory.slice(constants.CursorIndex.Start, constants.CursorIndex.ExclusiveEnd),
        armor: inventory.slice(constants.ArmorIndex.Start, constants.ArmorIndex.ExclusiveEnd),
        accessories: inventory.slice(constants.AccessoryIndex.Start, constants.AccessoryIndex.ExclusiveEnd),
        vanityArmor: inventory.slice(constants.VanityArmorIndex.Start, constants.VanityArmorIndex.ExclusiveEnd),
        vanityAccessories: inventory.slice(constants.VanityAccessoryIndex.Start, constants.VanityAccessoryIndex.ExclusiveEnd),
        armorDye: inventory.slice(constants.ArmorDyeIndex.Start, constants.ArmorDyeIndex.ExclusiveEnd),
        accessoryDye: inventory.slice(constants.AccessoryDyeIndex.Start, constants.AccessoryDyeIndex.ExclusiveEnd),
        equipment: inventory.slice(constants.EquipmentIndex.Start, constants.EquipmentIndex.ExclusiveEnd),
        equipmentDye: inventory.slice(constants.EquipmentDyeIndex.Start, constants.EquipmentDyeIndex.ExclusiveEnd),
        piggyBank: inventory.slice(constants.PiggyBankIndex.Start, constants.PiggyBankIndex.ExclusiveEnd),
        safe: inventory.slice(constants.SafeIndex.Start, constants.SafeIndex.ExclusiveEnd),
        trash: inventory.slice(constants.TrashIndex.Start, constants.TrashIndex.ExclusiveEnd),
        defenderForge: inventory.slice(constants.DefenderForgeIndex.Start, constants.DefenderForgeIndex.ExclusiveEnd),
        voidVault: inventory.slice(constants.VoidVaultIndex.Start, constants.VoidVaultIndex.ExclusiveEnd)
    };
}

function HotBar(props) {
    const hotBar = useSelector(state => state.playerInspection.inventory.hotBar);

    return (
        <div>
            {hotBar.map(slot => (
                <Slot key={slot.slot} {...slot} />
            ))}
        </div>
    );
}

function MainInventory(props) {
    const mainInventory = useSelector(state => state.playerInspection.inventory.mainInventory);

    return [0, 1, 2, 3].map((row) => mainInventory.slice(row * 10, row * 10 + 10))
        .map((row, mainInventoryRowIndex) => (
            <div key={'mainInventory_row_' + mainInventoryRowIndex}>
                {row.map(slot => (
                    <Slot key={slot.slot} {...slot} />
                ))}
            </div>
        ));
}

function Coins(props) {
    const coins = useSelector(state => state.playerInspection.inventory.coins);

    return (
        <div>
            {coins.map((slot, index) => (
                <div key={'coin_row_' + index}>
                    <Slot key={slot.slot} {...slot} size='mini' />
                </div>
            ))}
        </div>
    );
}

function Ammo(props) {
    const ammo = useSelector(state => state.playerInspection.inventory.ammo);

    return (
        <div>
            {ammo.map((slot, index) => (
                <div key={'ammo_row_' + index}>
                    <Slot key={slot.slot} {...slot} size='mini' />
                </div>
            ))}
        </div>
    );
}

function ArmorDye(props) {
    const armorDye = useSelector(state => state.playerInspection.inventory.armorDye);
    return armorDye.map((slot, index) => (
        <div key={'armorDye_row_' + index}>
            <Slot key={slot.slot} {...slot} />
        </div>
    ));
}

function AccessoryDye(props) {
    const accessoryDye = useSelector(state => state.playerInspection.inventory.accessoryDye);
    return accessoryDye.map((slot, index) => (
        <div key={'accessory_dye_row_' + index} >
            <Slot key={slot.slot} {...slot} />
        </div>
    ));
}

function VanityArmor(props) {
    const vanityArmor = useSelector(state => state.playerInspection.inventory.vanityArmor);
    return vanityArmor.map((slot, index) => (
        <div key={'vanity_armor_row_' + index}>
            <Slot key={slot.slot} {...slot} />
        </div>
    ));
}

function VanityAccessories(props) {
    const vanityAccessories = useSelector(state => state.playerInspection.inventory.vanityAccessories);
    return vanityAccessories.map((slot, index) => (
        <div key={'vanity_accessory_row_' + index}>
            <Slot key={slot.slot} {...slot} />
        </div>
    ));
}

function Armor(props) {
    const armor = useSelector(state => state.playerInspection.inventory.armor);
    return armor.map((slot, index) => (
        <div key={'armor_row_' + index}>
            <Slot key={slot.slot} {...slot} />
        </div>
    ));
}

function Accessories(props) {
    const accessories = useSelector(state => state.playerInspection.inventory.accessories);
    return accessories.map((slot, index) => (
        <div key={'accessory_row_' + index} >
            <Slot key={slot.slot} {...slot} />
        </div>
    ));
}

function EquipmentDye(props) {
    const equipmentDye = useSelector(state => state.playerInspection.inventory.equipmentDye);
    return equipmentDye.map((slot, index) => (
        <div key={'equipment_dye_row_' + index}>
            <Slot key={slot.slot} {...slot} />
        </div>
    ));
}

function Equipment(props) {
    const equipment = useSelector(state => state.playerInspection.inventory.equipment);
    return equipment.map((slot, index) => (
        <div key={'equipment_row_' + index}>
            <Slot key={slot.slot} {...slot} />
        </div>
    ));
}

function Safe(props) {
    const safe = useSelector(state => state.playerInspection.inventory.safe);
    return [0, 1, 2, 3]
        .map((row) => safe.slice(row * 10, row * 10 + 10))
        .map((row, index) => (
            <div key={'safe_row_' + index}>
                {row.map(slot => (
                    <Slot key={slot.slot} {...slot} />
                ))}
            </div>
        ));
}

function PiggyBank(props) {
    const piggyBank = useSelector(state => state.playerInspection.inventory.piggyBank);
    return [0, 1, 2, 3]
        .map((row) => piggyBank.slice(row * 10, row * 10 + 10))
        .map((row, index) => (
            <div key={'piggy_bank_row_' + index}>
                {row.map(slot => (
                    <Slot key={slot.slot} {...slot} />
                ))}
            </div>
        ));
}

function DefenderForge(props) {
    const defenderForge = useSelector(state => state.playerInspection.inventory.defenderForge);
    const content = useMemo(() => {
        return [0, 1, 2, 3]
        .map((row) => defenderForge.slice(row * 10, row * 10 + 10))
        .map((row, index) => (
            <div key={'defender_forge_row_' + index}>
                {row.map(slot => (
                    <Slot key={slot.slot} {...slot} />
                ))}
            </div>
        ));
    });
    return content;
}

function VoidVault(props) {
    const voidVault = useSelector(state => state.playerInspection.inventory.voidVault);
    const content = useMemo(() => {
        return [0, 1, 2, 3]
            .map((row) => voidVault.slice(row * 10, row * 10 + 10))
            .map((row, index) => (
                <div key={'void_vault_row_' + index}>
                    {row.map(slot => (
                        <Slot key={slot.slot} {...slot} />
                    ))}
                </div>
            ));
    }, [voidVault]);
    return content;
}

export function PlayerInspection(props) {
    const dispatch = useDispatch();
    useEffect(function () {
        dispatch(instanceThunks.getInstancesThunk());
        return function () {
            dispatch(playerThunks.stopTrackingPlayerSessionThunk());
            dispatch(thunks.stopTrackingPlayerDataThunk());
        };
    }, []);

    const { instanceId: selectedInstanceId, playerName: selectedPlayerName } = useSelector(state => state.playerInspection);

    const { allIds: instanceIds, byId: instances } = useSelector(state => state.instances);
    const serverOptions = useMemo(() => {
        const serverOptions = [];
        instanceIds.forEach((id) => {
            const server = instances[id];
            serverOptions.push({
                key: server.id,
                text: server.name,
                value: server.id
            });
        });
        return serverOptions;
    }, [instanceIds]);

    /**
     * 
     * @param {React.SyntheticEvent<HTMLElement, Event>} event 
     * @param {import('semantic-ui-react').DropdownProps} args 
     */
    const handleInstanceDropdownChange = function (event, args) {
        dispatch(playerThunks.stopTrackingPlayerSessionThunk());
        dispatch(playerThunks.trackPlayerSessionRequestThunk({
            instanceId: args.value
        }));
    };

    const { allIds: playerIds, byId: players } = useSelector(state => state.players);
    const playerOptions = useMemo(() => {
        const playerOptions = [];
        playerIds.forEach(id => {
            const player = players[id];
            playerOptions.push({
                key: player.player.id,
                text: player.player.name,
                value: player.player.name
            });
        });
        return playerOptions;
    }, [playerIds]);

    const handlePlayerDropdownChange = function (event, args) {
        dispatch(thunks.stopTrackingPlayerDataThunk());
        dispatch(thunks.trackPlayerDataRequestThunk({
            serverId: selectedInstanceId,
            playerName: args.value
        }));
    };

    return (
        <div className={stylesheets.playerInspection}>
            <Dropdown
                placeholder='Select a Instance'
                search selection
                options={serverOptions}
                value={selectedInstanceId}
                onChange={handleInstanceDropdownChange} />
            <Dropdown
                placeholder='Select a Player'
                search selection
                options={playerOptions}
                value={selectedPlayerName}
                onChange={handlePlayerDropdownChange} />
            <Divider />

            <div className={stylesheets.inventoryViewer}>
                <div className={stylesheets.mainInventory}>
                    <HotBar />
                    <MainInventory />
                </div>
                <div className={stylesheets.coinsAndAmmo}>
                    <Coins />
                    <Ammo />
                </div>
                <div className={stylesheets.armorAndAccessories}>
                    <div>
                        <ArmorDye />
                        <AccessoryDye />
                    </div>
                    <div>
                        <VanityArmor />
                        <VanityAccessories />
                    </div>
                    <div>
                        <Armor />
                        <Accessories />
                    </div>
                </div>
                <div className={stylesheets.equipment}>
                    <div>
                        <EquipmentDye />
                    </div>
                    <div>
                        <Equipment />
                    </div>
                </div>
                <div className={stylesheets.portableStorage}>
                    <div className={stylesheets.safe}>
                        <Safe />
                    </div>
                    <div className={stylesheets.piggyBank}>
                        <PiggyBank />
                    </div>
                    <div className={stylesheets.defenderForge}>
                        <DefenderForge />
                    </div>
                    <div className={stylesheets.voidVault}>
                        <VoidVault />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PlayerInspection;
