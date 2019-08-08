$("button").on("click", function() {
    /* $("div").fadeToggle(1000); */
    $("div").slideToggle(1000, function() {
        console.log("SLIDE DONE");
    });
});
