/*
    Player's Status Screen

    Author: Ming Li
    Date: 5/24/2022
    File: player-stats.js
*/

/* Variables
======================================================================================================================*/
let playerStatsMainSpan = document.querySelector("#player-stats-main span");
let playerStatsOffSpan = document.querySelector("#player-stats-off span");
let playerStatsArmorSpan = document.querySelector("#player-stats-armor span");

/* Functions
======================================================================================================================*/
// Shows what your character has equipped in the Equipment Section in your player's Status screen
function playerStatsRefresh() {
    playerStatsMainSpan.innerHTML = playerMainEquipped;
    playerStatsOffSpan.innerHTML = playerOffEquipped;
    playerStatsArmorSpan.innerHTML = playerArmorEquipped;
}