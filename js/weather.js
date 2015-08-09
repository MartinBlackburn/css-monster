Weather = function() 
{  
	//pick random weather every 5mins
    setRandomWeater();
    
    //pick random weather
    function setRandomWeater() {
    	hideWeather();
        
        //rain, snow or sun (not any combination)
    	if(Math.random() <= 0.2) {
        	//20% chance to rain or snow
            if(Math.random() <= 0.7) {
            	//70% chance of rain
                createRain();
            } else {
            	//30% chance of snow
            	createSnow();
            }
        } else {
        	//50% chance of sun
            if(Math.random() <= 0.5) {
                createSun();
            }
        }
        
        //40% chance of clouds, on top of other weather
        if(Math.random() <= 0.4) {
            createClouds();
        }
    }
    
    //make it sunny
    function createSun() {
    	$(".sun").fadeIn(500);
    }
    
    //make it cloudy
    function createClouds() {
        $(".cloud").fadeIn(500);
    }
    
	//make it rain
    function createRain()
    {
        for(i=1; i < 200; i++)
        {
            var dropLeft = randRange(0, 2000);
            var dropTop = randRange(-2000, 1000);
        
            $('.background').append('<div class="drop" id="drop'+i+'"></div>');
            $('#drop'+i).css('left', dropLeft + "px");
            $('#drop'+i).css('top', dropTop + "px");
        }
    }
    
    //make it snow
    function createSnow()
    {
        for(i=1; i < 200; i++)
        {
            var snowLeft = randRange(0, 2000);
            var snowTop = randRange(-2000, 1000);
        
            $('.background').append('<div class="snow" id="snow'+i+'"></div>');
            $('#snow'+i).css('left', snowLeft + "px");
            $('#snow'+i).css('top', snowTop + "px");
        }
    }
    
    //hide all weather
    function hideWeather() {
    	$(".drop, .snow").remove();
        $(".sun, .cloud").fadeOut(500);
    }
    
    //get random number in a range
    function randRange(minNum, maxNum) {
    	return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
};

$(function()
{
    var weather = new Weather();
});