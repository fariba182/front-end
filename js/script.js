/*	------------------------------------------- image carousel --------------------------------------------	*/

/* an array with all the URL's of the images to have in the slideshow.*/
var image = new Array("images/IMG_05.jpg", "images/IMG_06.jpg", "images/IMG_10.jpg", "images/IMG_11.jpg")

/* number used to refer to a value of the Array and to know what image should be shown next. */
var imgNumber=1

/* the total amount of images used. */
var numberOfImg = image.length

/* functions for the next and previous buttons */

function previousImage(){
    /* if statement to know if already at the first image, because if yes, imgNumber may not decrease. */
    if(imgNumber > 1){
        imgNumber--
    }
	
        /* If already at the first image, and click the previous button, the slideshow must show the last image. */
    else{
        imgNumber = numberOfImg
    }
	
    /* load the image into the document. write imgNumber-1, since an array always starts from 0! */
    document.slideImage.src = image[imgNumber-1]
  
}
function nextImage(){
    /* if statement to know if you already at the last image, because if yes, imgNumber may not increase. */
    if(imgNumber < numberOfImg){
        imgNumber++
    }

        /* If already at the last image, and click the next button, the slideshow must show the first image. */
    else{
        imgNumber = 1
    }

    /* load the image into the document. write imgNumber-1, since an array always starts from 0! */
    document.slideImage.src = image[imgNumber-1]

}
  
/* code that preloads the images. */
/* Check if browser supports the Image Object. */

if(document.images){

    /* create a new Image Object. */
    var image1 = new Image()
   
    /* give the source of the image to the Image Object. */
    image1.src = "images/IMG_05.jpg"
   
    /* repeat this for all the images to be preloaded.	*/
    var image2 = new Image()
    image2.src = "images/IMG_06.jpg"
    var image3 = new Image()
    image3.src = "images/IMG_10.jpg"
    var image4 = new Image()
    image4.src = "images/IMG_11.jpg"
}
/*	------------------------------------------- image carousel end --------------------------------------------	*/

/*	-------------------- Auto Complete -----------------------------------------	*/
	$(function() {
	    var availableTags = [
			"ActionScript",
			"AppleScript",
			"Asp",
			"BASIC",
			"C",
			"C++",
			"Clojure",
			"COBOL",
			"ColdFusion",
			"Erlang",
			"Fortran",
			"Groovy",
			"Haskell",
			"Java",
			"JavaScript",
			"Lisp",
			"Perl",
			"PHP",
			"Python",
			"Ruby",
			"Scala",
			"Scheme"
	    ];
	    $( "#tags" ).autocomplete({
	        source: availableTags
	    });
	});
/*	---------------------------------- Auto Complete end -------------------------------------------------	*/