//Javascript file for Dark Patterns Game
var dataArray = [];

$(document).ready(function(){
    
//Timer countdown function
var timeleft = 10;
    var downloadTimer = setInterval(function(){
        timeleft--;
        document.getElementById("countdowntimer").textContent = timeleft;
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        if(timeleft == 0)
            null
    },1000);

//Buttion click to About page
$(".about").click(function(){
    window.location.href='about.html';
})

//Button click to Play
$(".play").click(function(){
    window.location.href='misinformation_Intro.html';
})

//Button click to get monster intro modal 
$("#engage").click(function(){
    window.location.href='subscribe_Start.html';
})

//Button within monster intro modal to begin gameplay
$("#Ok").click(function(){
    window.location.href='subscribe_Start.html';
})

//Button click to continue to the Subscription gameplay
$("#go").click(function(){
    window.location.href='subscribe_Play.html';
})

//button within modal leading to fail screen
$("#Ok2").click(function(){
    window.location.href='fail_Screen.html';
})

//button within modal leading to success screen 1
$(".none").click(function(){
    window.location.href='success_Screen1.html';
})

//button within monster modal leading to Game Over
$("#Ok3").click(function(){
    window.location.href='game_Over.html';
})
    
//button from Game End page back to start
$("#endCont").click(function(){
    window.location.href='game_Start.html';
})

});

