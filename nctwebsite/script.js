document.addEventListener("DOMContentLoaded", function () {

function revealOnScroll(){
    let reveals = document.querySelectorAll(".reveal");

    for(let i=0;i<reveals.length;i++){

        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;

        if(elementTop < windowHeight - 100){
            reveals[i].classList.add("active");
        }

    }
}

window.addEventListener("scroll", revealOnScroll);


/* Timeline image click interaction */

const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach(item => {

    const img = item.querySelector('img');
    const detail = item.querySelector('.timeline-detail');


    if(img && detail){

        img.addEventListener('click', () => {

            document.querySelectorAll('.timeline-detail').forEach(d=>{
                if(d !== detail){
                    d.classList.remove('active');
                }
            });

            detail.classList.toggle('active');

        });

    }

});

});