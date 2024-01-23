const btn = document.querySelector('#theme');

btn.addEventListener('click', () => {
    document.querySelector(':root').classList.toggle('dark');
})


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    })
})

const h1 = document.querySelectorAll('section h1');
h1.forEach((el) => {
    observer.observe(el);
})
