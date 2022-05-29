/*
    Battle Events Scripts for the Player's Action Bar

    Author: Ming Li
    Date: 5/22/2022
    File: battle_event_action_bar.js
*/
// Start Up
characterRefresh();
playerStatsRefresh();

/* Variables
======================================================================================================================*/
// Player Health & Mana
let playerStats = document.querySelector(".player-stats");
let playerBar = document.querySelector(".player-bar");
let enemyStats = document.querySelector(".enemy-stats");
let enemyBar = document.querySelector(".enemy-bar");
// Action Bars
let actionBar = document.querySelector(".action-bar");
let actionSkin = document.querySelector(".action-skin");
// Action Bars Popups
let actionMagic = document.querySelector(".action-magic");
let playerMagic = document.querySelector(".player-magic");
let playerMagicSlots = document.querySelectorAll(".player-magic li");

let actionEquipment = document.querySelector(".action-equipment");
let playerEquipment = document.querySelector(".player-equipment");
let playerEquipmentSlots = document.querySelectorAll(".player-equipment li");

let actionItems = document.querySelector(".action-items");
let playerItems = document.querySelector(".player-items");
let playerItemsSlots = document.querySelectorAll(".player-items li");

let actionPet = document.querySelector(".action-pet");
let playerPet = document.querySelector(".player-pet");
let playerpetSlots = document.querySelectorAll(".player-pet li");

// Equippment Types
let playerEquipmentTypeMainSlots = document.querySelectorAll(".player-equipment-main-hand li");
let playerEquipmentTypeOffSlots = document.querySelectorAll(".player-equipment-off-hand li");
let playerEquipmentTypeArmorSlots = document.querySelectorAll(".player-equipment-armor li");

/* Event Listeners
======================================================================================================================*/
// Shows and hides when mouse is over and out depending on player or enemy
playerBar.addEventListener("mouseover", function () {
        playerStats.classList.remove("hidden");
})

playerBar.addEventListener("mouseout", function () {
    playerStats.classList.add("hidden");
})

enemyBar.addEventListener("mouseover", function () {
    enemyStats.classList.remove("hidden");
})

enemyBar.addEventListener("mouseout", function () {
    enemyStats.classList.add("hidden");
})

// Allows the user to change the skin of there action bar
let count = 0;
actionSkin.addEventListener("click", function() {
    actionBar.classList.remove("action-bar-skin-" + count);
    count++;
    if(count > 4) {
        count = 0;
    }
    actionBar.classList.add("action-bar-skin-" + count);
});

/* Functions
======================================================================================================================*/
// Show/Hide the action bar button popup if there is one
actionBarPopup(actionMagic, playerMagic, playerMagicSlots);
actionBarPopup(actionEquipment, playerEquipment, playerEquipmentSlots);
actionBarPopup(actionItems, playerItems, playerItemsSlots);
actionBarPopup(actionPet, playerPet, playerpetSlots);

// User equipping weapons
userEquipSelect(playerEquipmentTypeMainSlots);
userEquipSelect(playerEquipmentTypeOffSlots);
userEquipSelect(playerEquipmentTypeArmorSlots);

// Shows your list when pressed on action bar button & hides your list when you press on a list item
function actionBarPopup(actionBarButton, actionBarButtonWPopup, actionBarButtonWPopupItems) {
    actionBarButton.addEventListener("click", function () {
        actionBarButtonWPopup.classList.toggle("hidden");
    })

    for(let i = 0; i < actionBarButtonWPopupItems.length; i++)
    {
        actionBarButtonWPopupItems[i].addEventListener("click", function () {
            if(actionBarButtonWPopupItems[i].classList.contains("equipped")) {

            } else {
                actionBarButtonWPopup.classList.add("hidden");
            }
        })
    }
}

function userEquipSelect(equipmentTypeSlots) {
    for(let i = 0; i < equipmentTypeSlots.length; i++) {
        // When the user presses a equipment slot
        equipmentTypeSlots[i].addEventListener("click",function () {
            // Sees if the selected slot is empty or not
            if(!equipmentTypeSlots[i].textContent.includes("-----")) {
                // Removes equipped class and adds it to user select slot
                for(let remove = 0; remove < equipmentTypeSlots.length; remove++) {
                    equipmentTypeSlots[remove].classList.remove("equipped");
                }

                // Adds equipped class
                equipmentTypeSlots[i].classList.add("equipped");

                characterRefresh();
            }
        })
    }
}