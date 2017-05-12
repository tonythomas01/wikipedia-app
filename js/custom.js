// Once the page is loaded
$(window).on('load', function() {
    if($(window).width() <= 480){
        $('#search_menu').hide();
        $('#show_menu_button').show();
    } else {
        $('#search_menu').show();
        $('#show_menu_button').hide();
    }
});

// On a resize event
$(window).on( 'resize', function() {
    if($(window).width() <= 480){
        $('#search_menu').hide();
        $('#show_menu_button').show();
    } else {
        $('#search_menu').show();
        $('#show_menu_button').hide();
    }
});

$( "#search_button" ).click(function() {
    var searhcedvalue = $("#term").val().replace(/ /g,"_");;
    var searchedLang =  $("#selected_lang").val();
    $.get( "https://" + searchedLang + ".wikipedia.org/api/rest_v1/page/html/"+ searhcedvalue +"?redirect=true", function (data) {
        $("#searched_term").html(searhcedvalue)
    }).done(function (data) {
        $("#result_text").html(data);
        $('link[href="//' + searchedLang + '.wikipedia.org/w/load.php?modules=mediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.skinning.' +
            'content.parsoid%7Cmediawiki.skinning.interface%7Cskins.vector.styles%7Csite.styles%7Cext.cite.style%7Cmediawiki.page.' +
            'gallery.styles&only=styles&skin=vector').remove();
    }).fail(function () {
        $("#searched_term").html("No results found")
        $("#result_text").html("No results Found");
    });
});

// Trigger on clicking hamburger icon
$('#show_menu_button').on('click', function(){
    $('#search_menu').toggle();
});