const cursor1 = document.querySelector('#cursor1');
const cursor2 = document.querySelector('#cursor2');

document.addEventListener('mousemove', e => {
    cursor1.setAttribute("style", "top: "+(e.pageY - 2.5)+"px; left:"+(e.pageX - 2.5)+"px;")
    cursor2.setAttribute("style", "top: "+(e.pageY - 48)+"px; left:"+(e.pageX - 48)+"px;")
})

document.addEventListener('click', () => {
    cursor2.classList.add("animate-cursorAnimation");
    setTimeout (() => {
        cursor2.classList.remove("animate-cursorAnimation");
    }, 500)
})

const navLinkEls = document.querySelectorAll('.nav_link');
const sectionEls = document.querySelectorAll('.section');

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= (sectionEl.offsetTop - sectionEl.clientHeight / 2)) {
            currentSection = sectionEl.id;
        }
    });

    navLinkEls.forEach(navLinkEl => {
        const sectionId = navLinkEl.getAttribute('href').split('#')[1]; 
        if (sectionId === currentSection) {
            navLinkEls.forEach(link => link.classList.remove('active'));
            navLinkEl.classList.add('active');  
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuCheckbox = document.getElementById('mobileMenu');
    const menu = document.getElementById('menu');
    const burgerSpans = document.querySelectorAll('.burger span');
  
    function updateMenu() {
        if(window.innerWidth < 768) {
            if (mobileMenuCheckbox.checked) {
                menu.style.marginRight = '0rem';
                burgerSpans.forEach(span => span.style.backgroundColor = 'black');
            } 
            else {
                menu.style.marginRight = '-30rem';
                burgerSpans.forEach(span => span.style.backgroundColor = 'white');
            }
        }
        else {
            menu.style.marginRight = '0rem';
            burgerSpans.forEach(span => span.style.backgroundColor = '');
        }
    }
  
    updateMenu();
  
    mobileMenuCheckbox.addEventListener('change', updateMenu);
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#SSC').addEventListener('click', function () {
        window.open('docs/SSC_certi.pdf', '_blank');
    });

    document.querySelector('#DE').addEventListener('click', function () {
        window.open('docs/DE_passing_certi.pdf', '_blank');
    });

    document.querySelector('#BE').addEventListener('click', function () {
        window.open('docs/BE_SEM3_certi.pdf', '_blank');
    });
});
