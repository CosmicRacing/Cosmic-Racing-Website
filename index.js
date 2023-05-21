function scrollArrowClicked(){
    var element = document.getElementById("infoSlide");
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
}

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

function videoClicked(){
    var element = document.getElementById("thumbnail");
    element.style.display = "none";
    var videoplayer = document.getElementById("teamvideo").src += "?autoplay=1";
}

/*var container = document.getElementsByClassName("sponsor-image-container")[0];
let i = 0;
setInterval(function() {
	i += 0.1
    if (i >= 50){
        i = 0;
    }
    container.style.left =  ((-i / 100) * container.offsetWidth)+ "px";
}, 1);*/