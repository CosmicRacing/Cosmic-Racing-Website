var memberNames = ["Michalis Eufstathiadis", "Constantinos Charalambous", "Charalambos Charalambous", "Giorgos Christofi", "Michalis Evangelidis", "Andreas Sketsios", "Solomis Solomou"];
var memberText = ["As the Sponsorships and Mocial Media Manager, I held responsibility for overseeing and managing all social media platforms. At the same time, I cultivated relationships and raised funds through sponsorships, enabling the team to reach its full potential.", "As the Team Leader, my duty was to coordinate, inspire and monitor the team. Communicating and resolving issues between team members was a key factor to our success. ", "As the Design Engineer, I was tasked with conceptualizing and designing the car using CAD and CFD/FEA programs. I had the privilege  to interact with industry experts in universities whose expertise played a vital role in advancing the evolution of the car. ", "As the Resource Manager, I kept track of all of all the cash inflows and outflows within the team. Ensuring that all the deadlines were met and at the same time keeping a healthy cash balance played a vital role during the preparations of the team for the world finals. Managing and rationalizing each individual expenditure was of equal importance, ensuring the efficient allocation of our resources. ", "As the Graphic Designer, I held the creative reins of the team. Creating the logo, determining the color pallet and creating eye-catching designs for our products and social media pages were my responsibility. Using my skills, I made sure all the designs were cohesive and aligned with the team's image. ", "Support ", "As the Manufacturing Engineer, I collaborated with experts in their field to source and manufacture each individual component of the car. Testings and simulations supplied me with sufficient information to improve and perfect our car. "];
var memberImages = ["./mike.png","./kostoubmtz.png", "./pambos.png", "./giorkotz.png", "./me.png", "./skets", "./soumis.png"] 
var currentMember = 0;
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
async function loadMember(index){
    if (index != currentMember){
        var memberContainer = document.getElementById("member-container");
        memberContainer.classList.remove("transform-second");
        memberContainer.classList.add("transform-first");
        await sleep(500)

        document.getElementById("member-name").innerText = memberNames[index];
        document.getElementById("member-text").innerText = memberText[index];
        document.getElementById("image-container").src = memberImages[index];
        memberContainer.classList.remove("transform-first");
        memberContainer.classList.add("transform-second");
        currentMember = index;
    }
}