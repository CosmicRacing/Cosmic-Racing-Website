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
gsap.from(".info-div", {duration: 1.5, opacity:'0' , scrollTrigger:".info-div", ease:CustomEase.create("custom", "M0,0,C0.212,0.368,0.514,0.042,0.565,0.775,0.581,1.018,0.78,1,1,1")});
gsap.from(".first-container", {duration: 2, y:'50%' , scrollTrigger:".first-container", ease: "power4.out"});
gsap.from(".second-container", {duration: 2, y:'50%' , scrollTrigger:".second-container", ease: "power4.out"});
gsap.from(".third-container", {duration: 2, y:'50%' , scrollTrigger:".third-container", ease: "power4.out"});
gsap.from(".sponsor-image-container-outer", {duration: 2, x:'50%' , scrollTrigger:".sponsor-image-container-outer", ease: "power4.out"});
/*var container = document.getElementsByClassName("sponsor-image-container")[0];
let i = 0;
setInterval(function() {
	i += 0.1
    if (i >= 50){
        i = 0;
    }
    container.style.left =  ((-i / 100) * container.offsetWidth)+ "px";
}, 1);*/