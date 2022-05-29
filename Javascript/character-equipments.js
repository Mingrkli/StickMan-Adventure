/*
    All the character imgs / equipments are here

    Author: Ming Li
    Date: 5/22/2022
    File: character-equipments.js
*/

/* Variables
======================================================================================================================*/
// For Player Character Img
let playerMainEquipped;
let playerOffEquipped;
let playerArmorEquipped;

let playerImgMain = document.querySelector("#player-character-main-hand");
let playerImgOff = document.querySelector("#player-character-off-hand");
let playerImgBody = document.querySelector("#player-character-body");

/* Functions
======================================================================================================================*/
function characterRefresh() {
    playerMainEquipped = document.querySelector(".player-equipment-main-hand li.equipped").textContent;
    playerOffEquipped = document.querySelector(".player-equipment-off-hand li.equipped").textContent;
    playerArmorEquipped = document.querySelector(".player-equipment-armor li.equipped").textContent;

    // Sets your character img depending on the user's equipped slot
    // For each object in the array
    for(let i = 0; i < equipmentMain.length; i++) {
        // if the index has the same name as the equipped name
        if(equipmentMain[i].name === playerMainEquipped) {
            // Change the src attribute to the object location key value
            playerImgMain.src=equipmentMain[i].location;
        }
    }

    for(let i = 0; i < equipmentOff.length; i++) {
        if(equipmentOff[i].name === playerOffEquipped) {
            playerImgOff.src=equipmentOff[i].location;
        }
    }

    for(let i = 0; i < equipmentArmor.length; i++) {
        if(equipmentArmor[i].name === playerArmorEquipped) {
            playerImgBody.src=equipmentArmor[i].location;
        }
    }

    playerStatsRefresh();
}

/* Array and Objects
======================================================================================================================*/
let equipmentMain = [
    {
        name: "Starter Knife",
        location: "images/character/weapons/Starter Knife.png",
        core: {
            damage: 5,
            damageType: "melee",
            elementalType: "none",
            buy: 0,
            sell: 1
        },
        requirement: {
            level: 1,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intellect: 0,
            wisdom: 0,
            luck: 0
        },
        extraAttributes: {
            critChance: 0,
            critDamage: 0,
            speed: 0,
            dodge: 0,
            block: 0,
            parry: 0
        },
        extraDamage: {
            melee: 0,
            range: 0,
            magic: 0
        },
        other: {
            burningDamage: 0,
            burningChance: 0,
            burningTurn: 0,
            bleedDamage: 0,
            bleedChance: 0,
            bleedTurn: 0,
            poisonDamage: 0,
            poisonChance: 0,
            poisonTurn: 0
        }
    },

    {
        name: "Bow",
        location: "images/character/weapons/Bow.png",
        core: {
            damage: 5,
            damageType: "range",
            elementalType: "none",
            buy: 0,
            sell: 1
        },
        requirement: {
            level: 1,
            strength: 0,
            dexterity: 0,
            constitution: 0,
            intellect: 0,
            wisdom: 0,
            luck: 0
        },
        extraAttributes: {
            critChance: 0,
            critDamage: 0,
            speed: 0,
            dodge: 0,
            block: 0,
            parry: 0
        },
        extraDamage: {
            melee: 0,
            range: 0,
            magic: 0
        },
        other: {
            burningDamage: 0,
            burningChance: 0,
            burningTurn: 0,
            bleedDamage: 0,
            bleedChance: 0,
            bleedTurn: 0,
            poisonDamage: 0,
            poisonChance: 0,
            poisonTurn: 0
        }
    }
];

let equipmentOff = [
    {
        name: "Starter Shield",
        location: "images/character/off-hand/Starter Shield.png"

    },

    {
        name: "Flaming Arrow",
        location: "images/character/off-hand/Flaming Arrow.png"
    }
];

let equipmentArmor = [
    {
        name: "Base Form",
        location: "images/character/stickman-base/Base Form.png"
    },

    {
        name: "Angry",
        location: "images/character/stickman-base/Angry.png"
    }
];