function showMessage(){
    alert("Admissions Open! Visit ITI Karad office.");
}

function slideShow(){
    document.getElementById("slide").src=images[i];
    i++;
    if(i==images.length){ i=0; }
}
setInterval(slideShow,3000);
function submitForm(){
    alert("Form Submitted Successfully!");
    return false;
}