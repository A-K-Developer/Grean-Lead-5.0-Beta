import {
    doc
} from "@firebase/firestore";

console.log('App.js is running')
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

let headding = document.getElementById('heading');
let smallNav = document.querySelector('.smallNav')
let aboutUs = document.getElementById('aboutUs');
let workshop = document.getElementById('workshops');
let contact = document.getElementById('contact');
let spanReplace = document.getElementById('spanReplace')
let replaceMouse = document.getElementById('replaceMouse');

smallNav.style.display = 'none'
let arrows = document.querySelectorAll('.arrow');
let paragraph = document.querySelector('.para')
let span = spanReplace.querySelector('span');

let rightNav = document.getElementById('rightNav')
let bckImg = document.getElementById('backgroundImg2');

arrows[1].addEventListener('click', (e) => {

    if (span.textContent == '01 /') {


        span.textContent = '02 /';
        paragraph.textContent = 'Then GreenLead is able to help you. Over the past 10 years, we have worked with exactly that field, from wind turbines, arctic hydropower, energy storage, waste-to-energy, solar cells, and energy optimization of plants. Our projects range from smaller projects of around 1 million. DKK up to projects up to 3 billion DKK.';
        arrows[0].style.zIndex = 22;
    } else if (span.textContent == '02 /') {
        paragraph.textContent = 'Does your company have a vision for a green transition and do you need help to convert the vision into an action plan? Or do you lack experts who can guide you to the best green investments on the market?';
        span.textContent = '03 /';
        arrows[1].style.zIndex = -22;
    }
})
arrows[0].addEventListener('click', () => {
    if (span.textContent == '03 /') {
        paragraph.textContent = 'Then GreenLead is able to help you. Over the past 10 years, we have worked with exactly that field, from wind turbines, arctic hydropower, energy storage, waste-to-energy, solar cells, and energy optimization of plants. Our projects range from smaller projects of around 1 million. DKK up to projects up to 3 billion DKK.';
        span.textContent = '02 /';
        arrows[1].style.zIndex = 22;
    } else if (span.textContent == '02 /') {
        paragraph.textContent = 'GreenLead advises on renewable energy systems. We have a large portfolio of projects and a broad network of investors - we often work in the empty space between financing and the project. We specialize in designing green projects and describing the project to investors as well as finding the right projects for the right investor. This means making the green transition a reality.';
        span.textContent = '01 /';
        arrows[0].style.zIndex = -2;
    }
})



let paragraphh = document.querySelector('.pWorkshop');
let headingg = document.querySelector('.hWorkshop')
let dots = document.getElementById('dots');

window.addEventListener('wheel', (e) => {


    let wDelta = e.wheelDelta < 0 ? 'down' : 'up';
    console.log(window.pageYOffset)
    console.log(window.scrollY);
    if (window.pageYOffset < 993) {
        smallNav.style.display = 'none';
        spanReplace.replaceWith(replaceMouse)
    }
    if (window.pageYOffset > 650) {
        animateEl(smallNav, 'animate__fadeInRight')
        smallNav.style.display = 'flex';
        aboutUs.classList.add('active')
        workshop.classList.add('notActive')
        contact.classList.add('notActive')
        replaceMouse.replaceWith(spanReplace)
        spanReplace.style.display = 'block';
    }


    if (wDelta == 'down') {
        animateEl(headding, 'animate__backOutUp')
    }

    if (window.pageYOffset > 1700) {
        workshop.classList.remove('notActive')
        workshop.classList.add('active');
        aboutUs.classList.remove('active')
        aboutUs.classList.add('notActive');
        rightNav.style.zIndex = 5;

        headingg.textContent = '';
        paragraphh.textContent = ''
        bckImg.src = '../img/background3.jpg';
    }
    if(window.pageYOffset > 2000){
       
        spanReplace.replaceWith(dots)
        dots.style.zIndex = 33
        contact.classList.add('active')

    }
})
let videos = document.getElementById('video');
let dot1 = document.querySelector('.dot1')
let dot2 = document.querySelector('.dot2')

dots.firstElementChild.addEventListener('click',() => {
    let dot1Res = dot1;
    dot1.replaceWith(dot2);
    dots.appendChild(dot1Res)
    videos.setAttribute('src',"https://firebasestorage.googleapis.com/v0/b/greanlead5.appspot.com/o/interview1.mp4?alt=media&token=250b13df-867b-4825-a206-55df7d6b1868");

})
dots.lastElementChild.addEventListener('click',() => {
    let dot2Res = dot2;
    dot2.replaceWith(dot1);
    dots.appendChild(dot2Res)
    videos.setAttribute('src', 'https://firebasestorage.googleapis.com/v0/b/greanlead5.appspot.com/o/Interview2.mp4?alt=media&token=a9b86c3b-abfc-42dc-8fa2-f37f67024940')
})
let navLinks = document.querySelectorAll('.navLinks');

for (let i = 0; i < navLinks.length; i++) {
    if (i == 0) {
        navLinks[i].addEventListener('click', () => {
            span.textContent = '01 /'

            makeMeActive(navLinks[i], navLinks[i + 1], navLinks[i + 2])


            changeContext(`Green transitions are not just about the right intentions and ample financial resources, but also about all employees feeling safe and well informed about the impact and consequences for their daily work and routines. 
 
            GreenLead have therefore developed a series of dialogue promoting workshops for the heads of company and technical staff in supply companies that will help with developing and clarifying the employee roles and procedures of the green transition of said supply company.
            `)
        })
    } else if (i == 1) {
        navLinks[i].addEventListener('click', () => {
            span.textContent = '02 /'


            makeMeActive(navLinks[i], navLinks[i - 1], navLinks[i + 1])
            changeContext(`The workshops are dedicated mainly to the supply companies which are working within gas, electricity, heating, water, sewers, waste management and sewage management. The companies can be both public or private companies but should have a certain amount of technical staff in order to have interest in the workshop service that GreenLead provides (at least 10 employees in the technical department and at least 50 employees in total throughout the company).
            `)
        })
    } else if (i == 2) {
        navLinks[i].addEventListener('click', () => {
            span.textContent = '03 /'
            makeMeActive(navLinks[i], navLinks[i - 1], navLinks[i - 2])
            changeContext(`Together we set goals
            Together we celebrate milestones;
            Together we take on the challenges;
            There is something we need to get better at;
            There is something we have to accept;
            There's something we have to deal with;
            `)
        })
    }

}

function animateEl(ele, classToAdd, remove) {
    ele.classList.add('animate__animated')
    ele.classList.add(classToAdd);

    if (remove) {
        ele.addEventListener('animationend', () => {
            ele.classList.remove(classToAdd)
        })
    }

}

function makeMeActive(el, prevEl, nextEl) {
    if (el.classList.contains('black')) {
        el.classList.remove('black');
    }
    el.classList.add('active');
    el.lastElementChild.src = "../img/right-arrow.png";

    if (prevEl.classList.contains('active')) {
        prevEl.classList.remove('active');
    }
    prevEl.classList.add('black')
    prevEl.lastElementChild.src = "../img/rightArrow.png";


    if (nextEl.classList.contains('active')) {
        nextEl.classList.remove('active');
    }

    nextEl.classList.add('black')
    nextEl.lastElementChild.src = "../img/rightArrow.png"

}

function changeContext(text) {
    let context = document.querySelector('.context');
    let contOpac = document.querySelector('.contextForWhatop');
    context.classList.add('contextForWhat')
    contOpac.style.zIndex = 1;
    headingg.classList.remove('heading');
    paragraphh.classList.remove('para')
    paragraphh.classList.add('paragrapf')
    paragraphh.style.zIndex = 6;
    paragraphh.textContent = text;
}