console.log("supi");

$("#button-professional-projects").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section-projects").offset().top
    }, 1500);
});

$("#button-personal-projects").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#section-projects").offset().top
    }, 1500);
});

$("#icon-showreel").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#container-showreel").offset().top
    }, 2000);
});

// mouseinteraction
var videoFlower = document.getElementById("videoFlower");
var positions = document.getElementById("container-intro");

			positions.addEventListener("mousemove", function(event) {
				var x = event.clientX-5;
				var y = event.clientY-1;
				var width = videoFlower.clientWidth;
				var height = videoFlower.clientHeight;
				var duration = (videoFlower.duration/2);

				var scrubTime = (x / width) * duration/2;
				videoFlower.currentTime = scrubTime;
			});


 function scrollbegin () {
                $(document).ready(function(){
                    $("html, body").animate({scrollTop:0},(1080*3));
                    setTimeout(scrollbegin(),500);
                    
                })  
                }
                
                
                // const text = intro.querySelector('h1');
                function scrolling(){
                
                //scrollmagic
                const controller = new ScrollMagic.Controller();
                
                //scene
                const scene = new ScrollMagic.Scene({
                    duration: 8000,
                    triggerElement: positions,
                    triggerHook: 0,
                
                })
                .addIndicators()
                .setPin(positions)
                .addTo(controller);
                // console.log("outoffunc");
                
                console.log(positions);
                
                //videoanimation
                let accelAmount = 0.1;
                let scrollpos = 0;
                let delay = 0;
                
                scene.on('update', e => {
                    scrollpos = e.scrollPos/500;
                    
                
                });
                
                setInterval(() =>{
                    delay+= (scrollpos-delay)* accelAmount;
                    // console.log(scrollpos, delay);
                    videoFlower.currentTime = delay
                }, 16.66);
                }
                $(window).one('scroll',function() {
                    scrolling();
                    $(window).one('scroll');
                    
                 });
                