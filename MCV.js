srcs = ["./Assets/submitted/1.png","./Assets/submitted/2.jpg","./Assets/submitted/3.jpg","./Assets/submitted/4.jpg","./Assets/submitted/5.jpg","./Assets/submitted/6.jpg","./Assets/submitted/7.jpg","./Assets/submitted/8.jpg","./Assets/submitted/9.jpg","./Assets/submitted/10.jpg","./Assets/submitted/11.jpg","./Assets/submitted/12.jpg","./Assets/submitted/13.jpg","./Assets/submitted/14.jpg","./Assets/submitted/15.jpg","./Assets/submitted/16.png"]
titles = ["DID HE WIN OR LOSE?","Hope","Peace in the Sky","Moonshot","Golden Hour","Neighbour's Little Flower","Food for Mental Health","Crepuscule","The Blue Sky Walk","The Peaceful Beach","Dusk's Rose","A Rose Swaying In A Sea of Flames","Life goes on","Love yourself","Tide","从万丈深渊 自己治愈自己 (Saving myself from the abyss)"]
authors = ["SCOOB DAUG","Yoong Hui Hui","Lily C","Anonymous","Low Wei Lun","YüJun :)","Low Wei Lun","Sisyphus7","Low Wei Lun","Anonymous","YY","YüJun :)","Isuann L.","Spring breeze","Anonymous","Liu Wei Zi"]

menuicon = document.getElementById("menu-icon")
menudiv = document.getElementById("menu")

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

document.getElementById("closedisplay").onclick=function(){
    document.getElementById("display").classList.remove("active");
    // document.getElementById("display").style.display="none";
}

window.onload=function(){
    document.getElementById("description1").style.display="block";
    if(window.innerWidth>800){proceed(1)}
}

var contents = document.getElementsByClassName("content");

var titlestag = document.getElementsByTagName("h4");
var authorstag = document.getElementsByTagName("p");
var pieces = document.getElementsByClassName("piece");

for(var x=0;x<contents.length;x++){
    titlestag[x].innerHTML=titles[x]
    authorstag[x].innerHTML="By: "+authors[x];
    pieces[x].setAttribute("src",srcs[x]);
}

menuicon.onclick=function(){
    let contacts = document.getElementById("contacts");
    if(contacts.style.display=="block"){
        contacts.style.display="none";
        menuicon.setAttribute("src","./Assets/menu.svg");
    }else{
        contacts.style.display="block";
        menuicon.setAttribute("src","./Assets/close.svg");
        document.getElementById("display").classList.remove("active");
    }
}

function proceed(x){
    document.getElementById("display").classList.add("active");
    document.getElementById("displaypiece").setAttribute("src",srcs[x-1]);
    document.getElementById("displaytitle").innerHTML=titles[(x-1)];
    document.getElementById("displayauthor").innerHTML="By: "+authors[(x-1)];
    for(var i=1;i<=contents.length;i++){
        document.getElementById("description"+i).style.display="none";
    }
    document.getElementById("description"+x.toString()).style.display="block"  
}

for(var x=0;x<contents.length;x++){
    contents[x].addEventListener('click', (event) => proceed(event.target.classList.item(event.target.classList.length-1)))
}

window.onresize = function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); 
    if(window.innerWidth>800){
        document.getElementById("display").style.display= "block";
        document.getElementById("display").style.left = document.getElementById("contentcontainer").offsetWidth + 20; 
        contacts.style.display="block";
    }else{
        // document.getElementById("display").style.display= "none";
        contacts.style.display="none";
    }
}