$( "#search_button" ).click(function() {
    var searhcedvalue = $("#term").val();
    $.get( "https://en.wikipedia.org/api/rest_v1/page/html/"+ searhcedvalue +"?redirect=true", function (data) {
        $("#searched_term").html("<h3>"+ searhcedvalue + "</h3>")
    }).done(function (data) {
        $("#result_text").html(data);
    }).fail(function () {
         $("#searched_term").html("<h3>No results found</h3>")
        $("#result_text").html("No results found");
    });
});