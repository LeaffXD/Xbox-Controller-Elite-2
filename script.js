let cont = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    proxImagem();
}, 3000)

function proxImagem(){
    cont++;
    if (cont>5){
        cont = 1
    }
    document.getElementById("radio"+cont).checked = true
}
