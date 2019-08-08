//Check off Specific Todos by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on("click", "span", function (e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    e.stopPropagation();
});

$('input[type=text]').keypress(function (e) {
    if (e.which === 13) {
        //grab text
        var todoTxt = $(this).val();
        $(this).val("");
        //create new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoTxt + "</li>");
    }
});

$(".fa-plus").click(function() {
    $("input[type=text]").fadeToggle();
});