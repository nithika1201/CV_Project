/* ==========================================
   CURRENT DATE
========================================== */

const today = new Date();

document.getElementById("currentDate").innerHTML =
today.toDateString();


/* ==========================================
   DIGITAL CLOCK
========================================== */

function showClock(){

    const now = new Date();

    document.getElementById("digitalClock").innerHTML =
    now.toLocaleTimeString();

}

setInterval(showClock,1000);

showClock();


/* ==========================================
   WELCOME MESSAGE USING LOCAL STORAGE
========================================== */

let visitor = localStorage.getItem("visitorName");

if(visitor==null){

    visitor = prompt("Enter Your Name");

    localStorage.setItem("visitorName",visitor);

}

document.getElementById("welcomeMessage") ;

/* ==========================================
   DARK MODE
========================================== */

const themeButton =
document.getElementById("themeBtn");

themeButton.addEventListener("click",function(){

    document.body.classList.toggle("dark-mode");

});


/* ==========================================
   DOWNLOAD RESUME
========================================== */

function downloadResume(){

    window.print();

}


/* ==========================================
   DYNAMIC PROJECT CARDS
========================================== */

const projects=[

{
title:"AI Solar Powered EV Charging Station",

description:"Predicts solar power generation using AI and weather data."
},

{
title:"Blood Donor Management System",

description:"Java and MySQL web application for blood donor management."
},

{
title:"AI Crime Prevention Dashboard",

description:"Dashboard to monitor crime hotspots and emergency alerts."
},

{
title:"AI Agent Task Delegation Dashboard",

description:"AI system that automatically assigns and tracks employee tasks."
}

];

const container =
document.getElementById("projectContainer");

projects.forEach(function(project){

container.innerHTML +=

`
<div class="card">

<h3>${project.title}</h3>

<p>${project.description}</p>

</div>

`;

});
/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    let name = document.getElementById("name").value.trim();

    let email = document.getElementById("email").value.trim();

    let phone = document.getElementById("phone").value.trim();

    let message = document.getElementById("message").value.trim();

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let phonePattern = /^[0-9]{10}$/;

    if(name=="" || email=="" || phone=="" || message==""){

        alert("Please fill all the fields.");

        return;

    }

    if(!emailPattern.test(email)){

        alert("Please enter a valid Email Address.");

        return;

    }

    if(!phonePattern.test(phone)){

        alert("Phone number should contain exactly 10 digits.");

        return;

    }

    alert("Thank You! Your message has been submitted successfully.");

    form.reset();

});


/* ==========================================
   SKILLS FILTER
========================================== */

function showProgramming(){

    let programming = document.querySelectorAll(".programming");

    let web = document.querySelectorAll(".web");

    programming.forEach(function(skill){

        skill.style.display="block";

    });

    web.forEach(function(skill){

        skill.style.display="none";

    });

}

function showWeb(){

    let programming = document.querySelectorAll(".programming");

    let web = document.querySelectorAll(".web");

    programming.forEach(function(skill){

        skill.style.display="none";

    });

    web.forEach(function(skill){

        skill.style.display="block";

    });

}

function showAll(){

    let skills = document.querySelectorAll("#skillList p");

    skills.forEach(function(skill){

        skill.style.display="block";

    });

}


/* ==========================================
   IMAGE ZOOM MODAL
========================================== */

const profileImage = document.getElementById("profileImage");

const modal = document.getElementById("imageModal");

const modalImage = document.getElementById("modalImage");

const closeModal = document.getElementById("closeModal");

profileImage.onclick = function(){

    modal.style.display="flex";

    modalImage.src = profileImage.src;

}

closeModal.onclick = function(){

    modal.style.display="none";

}

window.onclick = function(event){

    if(event.target==modal){

        modal.style.display="none";

    }

}


/* ==========================================
   SCROLL TO TOP
========================================== */

const topButton = document.getElementById("topButton");

window.onscroll = function(){

    if(document.documentElement.scrollTop>200){

        topButton.style.display="block";

    }

    else{

        topButton.style.display="none";

    }

}

topButton.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}


/* ==========================================
   FOOTER YEAR
========================================== */

document.getElementById("year").innerHTML =
new Date().getFullYear();


/* ==========================================
   TESTIMONIAL SLIDER
========================================== */

const testimonials=[

"Excellent Team Player.",

"Quick Learner and Hardworking.",

"Very Good Communication Skills.",

"Creative Problem Solver.",

"Dedicated and Passionate Engineer."

];

let index=0;

setInterval(function(){

    document.getElementById("testimonial").innerHTML =
    testimonials[index];

    index++;

    if(index==testimonials.length){

        index=0;

    }

},3000);