var title = document.querySelector('.result');
title.innerHTML = 'start X';
var player = 'X';
var playerid = [];

function winner() {
    'use strict';  
    var i;
    for (i = 1; i < 10; i += 1) {
        playerid[i] = document.getElementById('item' + i).innerHTML;
    }
    
    if (playerid[1] === playerid[2] && playerid[2] === playerid[3] && playerid[3] !== '') {
        title.innerHTML = playerid[1] + ' ' + "Winner";
        
        document.getElementById('item' + 1).style.backgroundColor = "black";
        document.getElementById('item' + 1).style.color = "white";
        
        document.getElementById('item' + 2).style.backgroundColor = "black";
        document.getElementById('item' + 2).style.color = "white";
        
        document.getElementById('item' + 3).style.backgroundColor = "black";
        document.getElementById('item' + 3).style.color = "white";
        
        setInterval(function () {location.reload(); }, 3000);
        
        
        
    } else if (playerid[4] === playerid[5] && playerid[5] === playerid[6] && playerid[6] !== '') {
        title.innerHTML = playerid[4] + ' ' + "Winner";
        document.getElementById('item' + 4).style.backgroundColor = "black";
        document.getElementById('item' + 4).style.color = "white";
        
        document.getElementById('item' + 5).style.backgroundColor = "black";
        document.getElementById('item' + 5).style.color = "white";
        
        document.getElementById('item' + 6).style.backgroundColor = "black";
        document.getElementById('item' + 6).style.color = "white";
        
        setInterval(function () {location.reload(); }, 3000);
        
        
    } else if (playerid[7] === playerid[8] && playerid[8] === playerid[9] && playerid[9] !== '') {
        title.innerHTML = playerid[7] + ' ' + "Winner";
        document.getElementById('item' + 7).style.backgroundColor = "black";
        document.getElementById('item' + 7).style.color = "white";
        
        document.getElementById('item' + 8).style.backgroundColor = "black";
        document.getElementById('item' + 8).style.color = "white";
        
        document.getElementById('item' + 9).style.backgroundColor = "black";
        document.getElementById('item' + 9).style.color = "white";
        
        setInterval(function () {location.reload(); }, 3000);
        
        
    } else if (playerid[1] === playerid[4] && playerid[4] === playerid[7] && playerid[7] !== '') {
        title.innerHTML = playerid[1] + ' ' + "Winner";
        document.getElementById('item' + 1).style.backgroundColor = "black";
        document.getElementById('item' + 1).style.color = "white";
        
        document.getElementById('item' + 4).style.backgroundColor = "black";
        document.getElementById('item' + 4).style.color = "white";
        
        document.getElementById('item' + 7).style.backgroundColor = "black";
        document.getElementById('item' + 7).style.color = "white";
        
        setInterval(function () {location.reload(); }, 3000);
        
    } else if (playerid[2] === playerid[5] && playerid[5] === playerid[8] && playerid[8] !== '') {
        title.innerHTML = playerid[2] + ' ' + "Winner";
        document.getElementById('item' + 2).style.backgroundColor = "black";
        document.getElementById('item' + 2).style.color = "white";
        
        document.getElementById('item' + 5).style.backgroundColor = "black";
        document.getElementById('item' + 5).style.color = "white";
        
        document.getElementById('item' + 8).style.backgroundColor = "black";
        document.getElementById('item' + 8).style.color = "white";
        
        setInterval(function () {location.reload(); }, 3000);
        
        
        
    } else if (playerid[3] === playerid[6] && playerid[6] === playerid[9] && playerid[9] !== '') {
        title.innerHTML = playerid[3] + ' ' + "Winner";
        document.getElementById('item' + 3).style.backgroundColor = "black";
        document.getElementById('item' + 3).style.color = "white";
        
        document.getElementById('item' + 6).style.backgroundColor = "black";
        document.getElementById('item' + 6).style.color = "white";
        
        document.getElementById('item' + 9).style.backgroundColor = "black";
        document.getElementById('item' + 9).style.color = "white";
        
        setInterval(function () {location.reload(); }, 3000);
        
    } else if (playerid[1] === playerid[5] && playerid[5] === playerid[9] && playerid[9] !== '') {
        title.innerHTML = playerid[1] + ' ' + "Winner";
        document.getElementById('item' + 1).style.backgroundColor = "black";
        document.getElementById('item' + 1).style.color = "white";
        
        document.getElementById('item' + 5).style.backgroundColor = "black";
        document.getElementById('item' + 5).style.color = "white";
        
        document.getElementById('item' + 9).style.backgroundColor = "black";
        document.getElementById('item' + 9).style.color = "white";
        
        setInterval(function () {location.reload(); }, 3000);
        
    } else if (playerid[3] === playerid[5] && playerid[5] === playerid[7] && playerid[7] !== '') {
        title.innerHTML = playerid[3] + ' ' + "Winner";
        document.getElementById('item' + 3).style.backgroundColor = "black";
        document.getElementById('item' + 3).style.color = "white";
        
        document.getElementById('item' + 5).style.backgroundColor = "black";
        document.getElementById('item' + 5).style.color = "white";
        
        document.getElementById('item' + 7).style.backgroundColor = "black";
        document.getElementById('item' + 7).style.color = "white";
        
        setInterval(function () {location.reload(); }, 3000);
    } 
    
    
    
}



function clickgame(id) {
    'use strict'; 
    var element = document.getElementById(id);
    if (player === 'X' && element.innerHTML == '') {
        element.innerHTML = 'X';
        player = 'O';
        title.innerHTML = 'O';
    } else if (player === 'O' && element.innerHTML == '') {
        element.innerHTML = 'O';
        player = 'X';
        title.innerHTML = 'X';
        
    }
    
    winner();
   
   
                   
}