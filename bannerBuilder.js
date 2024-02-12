let inputtedText = document.querySelectorAll(".inputtedText");
let edit = document.getElementById("edit");
let banner = document.getElementById("banner");
let marquee = document.querySelector(".marquee");
let colorpicker = document.getElementById('colorpicker');
let fontColorpicker = document.getElementById('fontColorpicker');
let scrollspeed = document.querySelectorAll(".scroll");
let divider = document.querySelectorAll(".divider");
let fontSelection = document.querySelector('#fonts')

//Sidebar
let xBtn = document.querySelector("#xBtn");
let sidebar = document.querySelector('.sidebar');
let controls = document.querySelector('.controls');
let openClose = document.querySelector('#closeOpen');
let open = true;

//collapse sidebar by setting a class to active
xBtn.onclick = function() {
    sidebar.classList.toggle('active');
    controls.classList.toggle('active');
    // change X to +
    if (open == true){
        closeOpen.innerHTML = "+";
        return open = false;
    } else {
        closeOpen.innerHTML = "X";
        return open = true;
    }
    
}


//Change text within banner
setInterval(()=>{
    input = document.getElementById("textInput").value
    if (input == ""){
        inputtedText.forEach((textbox) =>{
            textbox.innerHTML = "Sample Text"; 
        });
    } else{
        inputtedText.forEach((textbox) =>{
            textbox.innerHTML = input;  
        })
    }
}, 200);


//change divider
setInterval(()=>{
    let dividerValue = document.getElementById('divider').value;
    divider.forEach((textbox) => {
        textbox.innerHTML = dividerValue;
    })
},200)

//change color of banner
setInterval(()=>{
    let color = colorpicker.value;
    marquee.style.backgroundColor = color;
}, 200);

//change color of text
setInterval(()=>{
    let fontColor = fontColorpicker.value;
    marquee.style.color = fontColor;
}, 200);

//Slider for speed
let slider = document.getElementById("myRange");
let viewScrollSpeed = document.getElementById("viewScrollSpeed");

setInterval(()=>{
    let sliderSpeed = -(slider.value - 10000)/100
    viewScrollSpeed.innerHTML = "Scrolls across the page every " + sliderSpeed + " seconds";     
    scrollspeed.forEach((scrollvalue) => {
        scrollvalue.style.animation = "scroll " + sliderSpeed + "s linear infinite";
    })
}, 200);

// font slider
let fontSlider = document.getElementById("fontSlider");
let viewFontSize = document.getElementById("viewFontSize")
setInterval(()=>{
    let newFontSize = fontSlider.value/10;
    viewFontSize.innerHTML = newFontSize+ " em";
    marquee.style.fontSize = newFontSize + "em";
})

//font selection
setInterval(()=>{
    let newFontSelection = fontSelection.value;
    marquee.style.fontFamily = newFontSelection;
})