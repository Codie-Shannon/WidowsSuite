//#region Show Link

//Variables
var isWindows;
var pageName = location.href.split("/").slice(-1);

//Detect Operating System
function detectWindows() {
  if (window.navigator.userAgent.indexOf("Windows NT 10.0") != -1)
    isWindows = true;

  if(pageName == "Page%203.html")
    appLink();
  else if(pageName == "Page%204.html")
    bundleLink();
}

//Wallpaper Engine Application Link
function appLink() {
  //Get Elements
  var applink = document.getElementById("engine-link");
  var downloadNA = document.getElementById("engine-link-na");

  //Application Link
  applink.style.display = isWindows ? "inline-block" : "none";

  //Download Not Applicable
  downloadNA.style.display = isWindows ? "none" : "inline-block";
}

//Wallpaper Bundle Link
function bundleLink() {
  //Get Elements
  var caption = document.getElementById("caption");
  var captionP1 = document.getElementById("caption-P1");
  var captionP2 = document.getElementById("caption-P2");

  //Caption
  caption.style.display = isWindows ? "flex" : "unset";
  caption.style.justifyContent = isWindows ? "space-between" : "none";

  //Caption Part 1
  captionP1.style.textAlign = isWindows ? "left" : "center";

  //Caption Part 2
  captionP2.style.display = isWindows ? "block" : "none";
}

//#endregion Show Link

//#region Video Gallery

//Show Video
function showVideo(videoIndex) {
    //Variables
    var overlay = document.getElementById("overlay");
    var captionText = document.getElementById("caption-P1");
    var wallpaperVideo = document.getElementById("wallpaper-video");
    var wallpapers = ["Goku", "Mazda RX7", "Spider Man", "Storm King", "Venom", "War Machine"];

    //Show Overlay
    overlay.style.display = "flex";

    //Set Caption Text
    captionText.innerHTML = wallpapers[videoIndex];

    //Set Wallpaper Video Source
    wallpaperVideo.src = "wallpapers/Storm King.mp4"; //"wallpapers/" + wallpapers[videoIndex] + ".mp4";
}

//Hide Video
function hideVideo() {
    document.getElementById("overlay").style.display = "none";
}

//#endregion Video Gallery

//#region Form

function validateEmail() {
    var backupemail = document.getElementById("backupemail");
    
    if (backupemail.value == document.getElementById("email").value) 
    {
        //Inform the user that the emails must be different
        backupemail.setCustomValidity("Please enter a different email than your primary email.");
    } 
    else 
    {
        //Input is valid, reset the error message
        backupemail.setCustomValidity("");
    }
}

function resetForm(){
    document.getElementById("form").reset();
}

function showOverlay() {
    document.getElementById("overlay").style.display = "flex";
}

function hideOverlay() {
    document.getElementById("overlay").style.display = "none";
}

//#endregion Form

//#region Map

//Variables
var companyLocation = { lat: -37.732012, lng: 176.145908 }
let map;

//Load Map
function initMap() {
    //Create Map and Set Settings
    map = new google.maps.Map(document.getElementById("map"), {
    mapId: '7bc9ea4963fa1e1b',
    mapTypeControl: false,
    center: companyLocation,
    zoom: 17.5
    });

    //Create Marker
    new google.maps.Marker({
    position: companyLocation,
    map: map,
    title: 'Widows Suite'
    });

    //Position Buttons DIV
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(document.getElementById("mapbtns"));
}

//Button Functions
function setSatellite(){
    map.setMapTypeId("hybrid");
}

function setRoadmap(){
    map.setMapTypeId("roadmap");
}

//#endregion Map

//#region Scroll

//Enable Vertical Scrolling
function enableScroll() {
    document.body.style.overflow = null;
}

//Disable Vertical Scrolling
function disableScroll() {
    document.body.style.overflow = "hidden";
    document.querySelector("html").scrollTop = window.scrollY;
}

//#endregion Scroll