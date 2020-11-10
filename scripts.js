$(document).ready(function(){
    $(".item").click(function(){
        if($(this).attr("id").startsWith("H")){
            
        }
    });
    $(".boton").on({
        click: function(){
            if($(this).attr("id")==$("#refresh").attr("id")){
                location.reload();
            }
        }
    });
});