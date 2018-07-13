
$(document).on("click", '.animalSearch' , function () {
    var animal = $(this).attr("data-animal");
    var APIkey = '&api_key='+'';
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
      animal + APIkey + "&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
        $('#imageHolder').empty();
      
      var results = response.data;

      for (var i = 0; i < results.length; i++) {
        var animalDiv = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);
        var top = $('<h3>').text(`${results[i].title.toUpperCase()}`)
        var p2 = $("<p>").text("Title:");
        var animalImage = $("<img>");
        animalImage.attr("src", results[i].images.fixed_height.url);
        animalDiv.addClass('results')
        animalDiv.prepend(animalImage);
        animalDiv.prepend(p);
        animalDiv.prepend(top);
        animalDiv.prepend(p2);
        
        $("#imageHolder").prepend(animalDiv);
      
      }
    });
});
$('#submit').on('click', function(){
    var animalInput = $('#newButtonInput').val().trim();
    var newButton=$(`<button data-animal='${animalInput}'></button>`);
    newButton.addClass('animalSearch');
    newButton.text(animalInput);
    $('#buttons').append(newButton);
    $('#newButtonInput').val('');
})