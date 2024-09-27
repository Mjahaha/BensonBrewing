

const fadeBackground = (theId) => {
    let opacityChangeElement = document.getElementById(theId);
    if (window.scrollY > 120) {
        opacityChangeElement.style.opacity = 0.8;
        //opacityChangeElement.style.color = "white";
    } else {
        opacityChangeElement.style.opacity = 0;
        //opacityChangeElement.style.color = "rgb(0, 80, 115)";

    }
}
addEventListener("scroll", function() {
    fadeBackground("opacityOnBackground");
});



//this gets the children of the element id with "showcase" and adds them to an array
const showcaseChildren = document.getElementById("showcase").children;
console.log(showcaseChildren);

//this runs a loop that adds a hover listener to each child of the showcase element
for (let i = 0; i < showcaseChildren.length; i++) {
    showcaseChildren[i].addEventListener("mouseover", function() {
        this.children[0].children[0].style.opacity = 0.8;
        this.children[1].style.opacity = 0.8;

        this.style.backgroudColor = "rgba(0,0,0,0.8)";
        console.log("hovered");
    });
    showcaseChildren[i].addEventListener("mouseout", function() {
        this.children[0].children[0].style.opacity = 0;
        this.children[1].style.opacity = 0;

        this.style.backgroudColor = "rgba(0,0,0,0)";
        console.log("mouse out");

    });
}