let burg = $(".menu");
let close = $(".modal_menu");

$(burg).on('click', function(){
    $(".nav").hide();
    $(".hed_content").hide();
    $(".foto_container").hide();
    $(".modal").show();
});

$(close).on('click', function(){
    $(".modal").hide();
    $(".nav").show();
    $(".hed_content").show();
    $(".foto_container").show();
});


