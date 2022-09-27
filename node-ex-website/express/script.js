$(document).ready(function(){
    $("p").dblclick(function(){
        $(this).slideUp();
    });

    // Toggles paragraphs display with fading
    $(".toggle-btn").click(function(){
        $("p").fadeToggle();
    });

    $(".btn-one").click(function(){
        alert("Aleksejs");
    });
});