/**
 * Created by aronthomas on 11/2/15.
 */
$(document).ready(function(){
    console.log("Lets get some animals!");
    $("#search").submit(function(event){
        event.preventDefault();
        var values = {};
        $.each($(this).serializeArray(),function(i,field){
            values[field.name] = field.value;
        });
        console.log(values);
        console.log($(this).serializeArray());

        $("#search").find("input[type=text]").val("");

        $.ajax({
            type: "GET",
            url: "/data",
            data: values,
            success: function(data){
                console.log(data);
                appendDom(data);
            }
        });
    });

});

function appendDom(data){
    var $el = $("#display");
    $el.empty();
    for(var entry= 0; entry<data.length; entry++){
        console.log(entry);
        var person = data[entry];
        $el.append("<div class='person well col-lg-3 col-md-4 col-sm-6 col-xs-12'></div>");
        $el.children().last().hide();
        $el.children().last().append("<p>Name: " + person.name + "</p>");
        $el.children().last().append("<p>Spirit Animal: " + person.animal + "</p>");
        $el.children().last().delay(200*entry).fadeIn();
    }
}