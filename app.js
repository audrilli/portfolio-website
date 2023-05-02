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

var videoFlower = document.getElementById("videoFlower");
var positions = document.getElementById("container-intro");

			positions.addEventListener("mousemove", function(event) {
				var x = event.clientX-50;
				var y = event.clientY-10
				var width = videoFlower.clientWidth;
				var height = videoFlower.clientHeight;
				var duration = videoFlower.duration;

				var scrubTime = (x / width) * duration/2;
				videoFlower.currentTime = scrubTime;
			});

