var main = function(){
    $("button").click(function(){
        $.ajax({url: "localhost:8081", success: function(result){
            $("#test").html(result);
        }});
    });
<div id= "test"><h2>Success</h2></div>
};

$(document).ready(main);