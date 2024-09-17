/*-----------------------------nav bar responsive------------------------------*/


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    }else{
        x.className = "topnav";
    }
  }

/*----------------------------------------------------------------------- */
/*
$(document).ready(function() {

    var counters = $(".count");
    var countersQuantity = counters.length;
    var counter = [];

for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
}

var count = function(start, value, id) {
    var localStart = start;
    setInterval(function() {
        if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
        }
    }, 50);
    }

for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
}
});
*/
/*-------------------------------------------------------*/ 

const project=document.querySelector(".preview");
const preview=document.querySelector(".preview");
const previewImg=document.querySelector("preview-img");

let isInside=false;

const bgPosition={
  p1:"0 0",
  p2:"0 25%",
  p3:"0 50%",
  p4:"0 75%",
  p5:"0 100%",
}

const movestuff=(e)=>{
  const mouseInside=isMouseInsideContainer(e);
  if(mouseInside!==isInside){
    isInside=mouseInside;
    if(isInside){
      gsap.to(preview,0.3,{scale:1,});
    }else{
      gsap.to(preview,0.3,{scale:0,});
    }
  }
};


const moveProject=(e)=>{
  const previewReact=preview.getBoundingClientRect();
  const offsetX=previewReact.width/2;
  const offsetY=previewReact.height/2;

  preview.style.left=e.pageX-offsetX+"px";
  preview.style.right=e.pageY-offsetY+"px";
};

const moveProjectImg=(project)=>{
  const projectImg=project.id;
  gsap.to(previewImg,0.4,{
    backgroundPosition:bgPositions[projectId] ||"0 0",
  });
};

const isMouseInsideContainer=(e)=>{
  const constainerReact=project.getBoundingClientRect();
  return (
    e.pageX >= containerRect.left &&
    e.pageX <= containerRect.right &&
    e.pageY >= containerRect.top &&
    e.pageY <= containerRect.bottom
    );
  };
    window.addEventListener("mousemove", moveStuff);

    Array.from(projects.children).forEach((project) => {
    project.addEventListener("mousemove", moveProject);
    project.addEventListener("mousemove", moveProjectImg.bind(null, project));
});






