MonsterAI = function() 
{   
	//variables
	var monster = $('.monster').first();
    var screenwidth = $("body").width();
    var nextJumpTime = 3000;
    
    //continual jumps
    continualJumps();
    
    function continualJumps()
    {
        setTimeout(function() {
        	//random next jump time between 2000 - 15000
            nextJumpTime = randRange(2000, 15000);
            console.log();
            
            //random amount (between 50 - 600)
            var amount = randRange(50, 600);
            
            //jump
            jump(amount);
            
            //start next jump
            continualJumps();
        }, nextJumpTime);
    }
    
    //jump
    function jump(amount, direction) 
    {        
    	//make sure amount and direction have a default value
        amount = typeof amount !== 'undefined' ? amount : 100;
   		direction = typeof direction !== 'undefined' ? direction : 'random';
        
        //if jumping off screen set direction to correct
        if(monster.position().left - amount <= 0 ) {
        	direction = "right";
        }
        
        if((monster.position().left + monster.outerWidth() + amount) >= screenwidth) {
        	direction = "left";
        }
   
    	//set amount and direction to move
    	if(direction == "left") {
        	amount = "-=" + amount;
        } 
        
        if(direction == "right") {
        	amount = "+=" + amount;
        } 
        
        if (direction == "random") {
        	if(Math.random() >= 0.5) {
            	amount = "-=" + amount;
            } else {
        		amount = "+=" + amount;
            }
        }
        
    	//move in direction
        setTimeout(function() {
        	monster.animate({
                left: amount
            }, 600, "linear");
        }, 450);
        
        //add jump animation
    	monster.addClass("jump");
        
        //remove jump class once complete
        setTimeout(function() {
        	monster.removeClass("jump");
        }, 2000);
    }
    
    //get random number in a range
    function randRange(minNum, maxNum) {
    	return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
    }
};

$(function()
{
    var monsterAI = new MonsterAI();
});