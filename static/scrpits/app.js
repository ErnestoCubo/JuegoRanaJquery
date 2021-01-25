$(document).ready(function () {
    var pos = -1;
    var tipoRana = -1;
    $('#0').click(function () { 
        pos = $('#0');
        tipoRana = pos.children();
        if(tipoRana.hasClass("itemB")){
        alert('La blanca no se puede mover');
        }
        else{
            moverRana(pos, 0, tipoRana);
        }
    });
    $('#1').click(function () { 
        pos = $('#1');
        tipoRana = pos.children();
        if(tipoRana.hasClass("itemB")){
        alert('La blanca no se puede mover');
        }
        else{
            moverRana(pos, 1, tipoRana);
        }
    });
    $('#2').click(function () { 
        pos = $('#2');
        tipoRana = pos.children();
        if(tipoRana.hasClass("itemB")){
        alert('La blanca no se puede mover');
        }
        else{
            moverRana(pos, 2, tipoRana);
        }
    });
    $('#3').click(function () { 
        pos = $('#3');
        tipoRana = pos.children();
        if(tipoRana.hasClass("itemB")){
        alert('La blanca no se puede mover');
        }
        else{
            moverRana(pos, 3, tipoRana);
        }
    });
    $('#4').click(function () { 
        pos = $('#4');
        tipoRana = pos.children();
        if(tipoRana.hasClass("itemB")){
        alert('La blanca no se puede mover');
        }
        else{
            moverRana(pos, 4, tipoRana);
        }
    });
    $('#5').click(function () { 
        pos = $('#5');
        tipoRana = pos.children();
        if(tipoRana.hasClass("itemB")){
        alert('La blanca no se puede mover');
        }
        else{
            moverRana(pos, 5, tipoRana);
        }
    });
    $('#6').click(function () { 
        pos = $('#6');
        tipoRana = pos.children();
        if(tipoRana.hasClass("itemB")){
        alert('La blanca no se puede mover');
        }
        else{
            moverRana(pos, 6, tipoRana);
        }
    });
});

function moverRana(idPosicion, posicion, tipoRana) {
    if(tipoRana.hasClass("itemL")){
        if(probarPosicionDerecha(posicion + 1)){
            var source = tipoRana.attr('src');
            posicion = posicion + 1;
            var salto = $('#' + posicion).children();
            idPosicion.children().attr("src", salto.attr('src'));
            salto.attr("src", source);
            idPosicion.children().toggleClass('itemL itemB');
            salto.toggleClass('itemB itemL');
            comprobarVictoria();
        }
        else if(probarPosicionDerecha(posicion + 2)){
            var source = tipoRana.attr('src');
            posicion = posicion + 2;
            var salto = $('#' + posicion).children();
            idPosicion.children().attr("src", salto.attr('src'));
            salto.attr("src", source);
            idPosicion.children().toggleClass('itemL itemB');
            salto.toggleClass('itemB itemL');
            comprobarVictoria();
        }
        else{
            alert("no se puede mover la rana");
        }
    }
    else{
        if(probarPosicionIzquierda(posicion - 1)){
            var source = tipoRana.attr('src');
            posicion = posicion - 1;
            var salto = $('#' + posicion).children();
            idPosicion.children().attr("src", salto.attr('src'));
            salto.attr("src", source);
            idPosicion.children().toggleClass('itemR itemB');
            salto.toggleClass('itemB itemR');
            comprobarVictoria();
        }
        else if(probarPosicionIzquierda(posicion - 2)){
            var source = tipoRana.attr('src');
            posicion = posicion - 2;
            var salto = $('#' + posicion).children();
            idPosicion.children().attr("src", salto.attr('src'));
            salto.attr("src", source);
            idPosicion.children().toggleClass('itemR itemB');
            salto.toggleClass('itemB itemR');
            comprobarVictoria();
        }
        else{
            alert("no se puede mover la rana");
        }
    }
}

function probarPosicionDerecha(posicionRana){

    if($('#' + posicionRana).children().hasClass("itemB")) {
        return true;
    }
    else{
        return false;
    }
}

function probarPosicionIzquierda(posicionRana){

    if($('#' + posicionRana).children().hasClass("itemB")) {
        return true;
    }
    else{
        return false;
    }
}

function comprobarVictoria() {
    if(($('#0').children().hasClass('itemR'))&&($('#1').children().hasClass('itemR'))&&($('#2').children().hasClass('itemR'))&&($('#4').children().hasClass('itemL'))&&($('#5').children().hasClass('itemL'))&&($('#5').children().hasClass('itemL'))){
        alert('Victoria');
    }
}