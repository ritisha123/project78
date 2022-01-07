var images = ["mom.jpg","dad.jpg","girl.webp","family.gif"];
var names = ["Mom", "Dad", "Me", "Us"];
var i = 0;

function changing(){
  document.getElementById("family_book_image").src =images[i];
  document.getElementById("name").innerHTML = names[i];
  i++;
  if(i>3){
    i = 0;               
  }
}