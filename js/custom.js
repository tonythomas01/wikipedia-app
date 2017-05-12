$( "#search_button" ).click(function() {
    var searhcedvalue = $("#term").val().replace(/ /g,"_");;
    var searchedLang =  $("#selected_lang").val();
    $.get( "https://" + searchedLang + ".wikipedia.org/api/rest_v1/page/html/"+ searhcedvalue +"?redirect=true", function (data) {
        $("#searched_term").html("<h3>"+ searhcedvalue + "</h3>")
    }).done(function (data) {
        $("#result_text").html(data);
        $('link[href="//en.wikipedia.org/w/load.php?modules=mediawiki.legacy.commonPrint%2Cshared%7Cmediawiki.skinning.' +
            'content.parsoid%7Cmediawiki.skinning.interface%7Cskins.vector.styles%7Csite.styles%7Cext.cite.style%7Cmediawiki.page.' +
            'gallery.styles&only=styles&skin=vector').remove();
    }).fail(function () {
        $("#searched_term").html("<h3>No results found</h3>")
        $("#result_text").html("No results Found");
    });
});