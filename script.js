$(document).ready(function() {
    for (var i = 1; i <= 151; i++) {
        $('#pokemon').append("<img id ='" + i + "'src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + i + ".png'/>");
    }
        $('img').click(function()
        {
            var pokeid = $(this).attr('id');

            $.get("https://pokeapi.co/api/v2/pokemon/" +pokeid+ "/", function(res) {
                var name_str = "";
                var types_str = "";
                var height_str = "";
                var weight_str = "";
                var name = res.name.charAt(0).toUpperCase() + res.name.slice(1);

                name_str += "<center><h1>" + name + "</h1></center>";
                name_str += "<center><img style = 'height:200px'src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/" + pokeid+".png'/></center>";
                types_str += "<h2>Types</h2>";
                types_str += "<ul>"; 
                for(var i = 0; i < res.types.length; i++) {
                    var type = res.types[i].type.name.charAt(0).toUpperCase() + res.types[i].type.name.slice(1);
                    types_str += "<li><h4>" + type + "</h4></li>";
                }
                types_str += "</ul>";
                height_str += "<h2>Height</h2>";
                height_str += "<h4>" + res.height/10 + "m</h4>"
                weight_str += "<h2>Weight</h2>";
                console.log(res.weight)
                weight_str += "<h4>" + res.weight/10 + "kg</h4>"
                $("#left-info").html(name_str);
                $("#types").html(types_str);
                $("#height").html(height_str);
                $("#weight").html(weight_str);
        }, "json");
        });       
});