//Javascript file for Dark Patterns Game
var dataArray = [];

$(document).ready(function(){
    
//Timer countdown function
var timeleft = 10;
    var downloadTimer = setInterval(function(){
        console.log('downloadTimer');
        timeleft--;
        var element = document.getElementById("countdowntimer");
        if (element) {
             element.textContent = timeleft;
        }
        if(timeleft <= 0)
            clearInterval(downloadTimer);
        if(timeleft == 0)
            null
//            window.location.href='fail_Screen.html';
    },1000);

//Buttion click to About page
$(".about").click(function(){
    window.location.href='about.html';
})

//Button click to Play
$(".play").click(function(){
    $(".dpftext").toggleClass('exitDown');
})
$(".play").click(function() {
    $(".play").toggleClass('exitDown');
})
$(".play").click(function(){
    $("#monAnim").toggleClass('exitDown')
})
$(".play").click(function(){
    $("#butAnim").toggleClass('exitDown')
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

//button within monster modal leading to Success Screen 2
$("#Ok3").click(function(){
    window.location.href='success_Screen2.html';
})

//button within monster modal leading to Success Screen 3
$("#Ok4").click(function(){
    window.location.href='success_Screen3.html';
})

//button within monster modal leading to Fail Screen
$("#Ok5").click(function(){
    window.location.href='fail_Screen.html';
})
    
//button within monster modal leading to Game Over
$("#Ok6").click(function(){
    window.location.href='game_Over.html';
})

//button that destroys monster + local storage action
$("#defMon").click(function(){
    $(".monster").attr("src", "images/explosion.png");
    setTimeout(function() {
      window.location.href='success_Screen4.html'
    }, 1500);
    addToDataArray();
    numItemsInCart();
})

//button from post-new treasure chest item to Game End page
$("#goOn").click(function(){
    window.location.href='game_End.html';
})
    
//button from Game End page back to start
$("#endCont").click(function(){
    window.location.href='game_Start.html';
})

});

