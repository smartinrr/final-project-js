/*Name this external file gallery.js*/
let x = document.getElementById(`image`);

function upDate(previewPic){
 
  x.style.backgroundImage = `url(${previewPic.src})`;
  
  x.innerHTML = previewPic.alt;

  previewPic.classList.add("imageUpDate");

}
    function unDo(previewPic){
  
   x.style.backgroundImage = ""; 
    
   x.style.backgroundColor = "";
    
   x.innerHTML = "Hover over an image below to display here.";	

   previewPic.classList.remove("imageUpDate");
}

function setClasses() {
    let images = document.querySelectorAll("img");
    for (let i=0; i<images.length; i++) {
        console.log("event for runs");
        images[i].setAttribute("tabindex","0");
        images[i].setAttribute("onfocus","upDate(this)");
        images[i].setAttribute("onblur","unDo(this)");
    }
}