var offset = 0;
var elements = document.getElementsByClassName("members-moving-text");
setInterval(function() {
    offset+= 0.2;
    if (offset >= 100){
        offset = 0;
    }
    
    
    for (var i = 0; i<elements.length;i++){
        element=elements[i];
        element.style.transform = "translate(" + (offset * -1) + "%, " + "0)";
    }
    
}, 10); 