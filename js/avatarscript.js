//PromptBox for player name
let name = prompt(`Please enter your name`);
//Converting the entered variable to Uppercase
let nameConverted = name.toUpperCase();
//Getting the element ID
let dsplname = document.getElementById(`name`);
dsplname.innerHTML = nameConverted;
//Array for images
let avatars = ["avatar1.png", "avatar2.png", "avatar3.png", "avatar4.png", "avatar5.png", "avatar6.png", "avatar7.png", "avatar8.png"];
//Assign the button
let btnGen = document.getElementById(`btnGen`);

btnGen.addEventListener(`click` , displayavatar);
function displayavatar() {
    //Random function
    rand = Math.floor(Math.random()* avatars.length);
    var avatar = document.getElementById("avatar");
    //Display the avatar
    avatar.innerHTML = `<img src="images/${avatars[rand]}">`;
}
