
$(document).ready(getWeather());

function getWeather(){
    $.ajax({
        method: "GET",
        url: "https://api.weatherbit.io/v2.0/current",
        data:{
            key: "59c4d3d2303d47b0b679301af7fcc802",
            city: "Los Angeles,CA"
        }
    })
    .done(function(results){
        receiveWeather(results);
    })
    .fail(function(){
        console.log("ERROR");
    });
};


function receiveWeather(results){
    console.log(results);
    var temp = results.data[0].temp;
    var weather = results.data[0].weather.description;
    var weatherText = "Today's weather in Los Angeles: " + temp + " C" + " " + weather + ".";
    $("#weather").text(weatherText);
}

// cross out the item
$("#list_section").on("click","p", function(){
    $(this).toggleClass("line_cross");
});



// enter a new item
$("#add_input").keypress(function(e){
    if(e.which == 13){
        var input_text = $(this).val();
        if(input_text != ""){
            $("#list_section ul").append("<li><i class=\"far fa-square\"></i><p>" + input_text + "</p></li>");
            $(this).val("");
        }
    }
});
// enter a new item using plus
$("#plus").on("click", function(){
    var input_text = $("#add_input").val();
    if(input_text != ""){
        $("#list_section ul").append("<li><i class=\"far fa-square\"></i><p>" + input_text + "</p></li>");
        $("#add_input").val("");
    }
});

// delte item
$("#list_section").on("click","ul i", function(){
    console.log("cccc");
    $(this).parent().slideUp(1000, function(){
        $(this).remove();
    });
});

