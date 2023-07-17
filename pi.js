var currentMember = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function loadMember(index){
    if (index != currentMember){
        var memberContainer = document.getElementsByClassName("member-container")[currentMember];
        memberContainer.classList.remove("transform-second");
        memberContainer.classList.add("transform-first");


        
        memberContainer = document.getElementsByClassName("member-container")[index];
        memberContainer.classList.remove("hidden");
        memberContainer.classList.remove("transform-first");
        memberContainer.classList.add("transform-second");
        //await sleep(500)
        memberContainer = document.getElementsByClassName("member-container")[currentMember];
        memberContainer.classList.add("hidden");
        currentMember = index;
    }
}