let navicon=document.getElementById("navicon");let nav_items=document.getElementsByClassName("nav_items");let nav=document.getElementsByTagName("nav")[0];let dropdown=document.getElementsByClassName("dropdown");let myslides=document.getElementsByClassName("mySlides");let dots=document.getElementsByClassName("dot");nav_items[0].style.backgroundColor="rgba(46, 169, 173, 0.7)";navicon.addEventListener('click',function(){if(navicon.innerHTML=='☰'){console.log("navicon was clicked");for(let i=0;i<nav_items.length;i++){nav_items[i].style.display="block"}
navicon.innerHTML='×'}else{console.log("cross was clicked");for(let i=0;i<nav_items.length;i++){nav_items[i].style.display="none"}
navicon.innerHTML='☰';nav.style.background="none"}});function open_fullscreendropdown(section,button){for(let i=0;i<dropdown.length;i++){dropdown[i].style.height="0%"}
for(let i=0;i<nav_items.length;i++){nav_items[i].style.backgroundColor=""}
section.style.height="100em";button.style.backgroundColor="rgba(46, 169, 173, 0.7)"}
function close_fullscreendropdown(button){for(let i=0;i<dropdown.length;i++){dropdown[i].style.height="0%"}
for(let i=0;i<nav_items.length;i++){nav_items[i].style.backgroundColor=""}
button.style.backgroundColor="";nav_items[0].style.backgroundColor="rgba(46, 169, 173, 0.7)"}
let currentslide=0;showSlides(currentslide);function plusSlide(n){showSlides(currentslide+=n)}
function currentSlide(n){showSlides(currentslide=n)}
function showSlides(slide_to_display){if(slide_to_display>=myslides.length){currentslide=0}
if(slide_to_display<0){currentslide=myslides.length-1}
for(let i=0;i<myslides.length;i++){myslides[i].style.display="none";dots[i].style.backgroundColor=""}
myslides[currentslide].style.display="block";dots[currentslide].style.backgroundColor="rgba(46, 169, 173)"}
setInterval(()=>{document.getElementsByClassName("next")[0].click()},2000);function sendEmail(){Email.send({SecureToken:"a99b3bd0-b780-4ba8-87c1-bab4268712e4",To:'iampikachu138@gmail.com',From:'iampikachu138@gmail.com',Subject:"Feedback from portfolio",Body:"Name: "+document.getElementById("name").value+"<br> Email : "+document.getElementById("email").value+"<br>Feedback : "+document.getElementById("feedback").value}).then(message=>{if(message=="OK"){alert("Thank you for your feedback")}else{alert(message)}})}
