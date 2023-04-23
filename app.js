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

