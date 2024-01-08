/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image
       
       2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
        let data = document.getElementById("image");
        data.innerHTML = previewPic.alt;
        data.style.backgroundImage = "url('" + previewPic.src;
       }
   
       function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was
       
       2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
        let data = document.getElementById("image");
        data.innerHTML = "Hover over an image to display here.";
        data.style.backgroundImage = "url(''";
       }

       function setImages(){
        options = ["daisy-chair.jpeg", "daisy-family.jpeg", "daisy-sleep.jpeg", "mac-bandana.jpeg", "mac-family.jpeg","mac-ok.jpeg"]
        
        currentImages = document.querySelectorAll("img")
        for (var i = 0; i < currentImages.length; i++) {
            console.log("Image "+ i)
            currentImages[i].setAttribute("tabindex","0")
        }
    
    }    