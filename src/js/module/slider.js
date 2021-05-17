export default class Slider {
    constructor(page, btnsNext) {
        this.page = document.querySelector(page);
        this.slides = this.page.children;
        this.btnsNext = document.querySelectorAll(btnsNext);
        this.slideIndex = 1;
    }

    showSlides(n) {
        if (n > this.slides.length) {
            this.slideIndex = 1;
        }
        // console.log(this.slides.length);
        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    minusSlides(n) {
        this.showSlides(this.slideIndex -= n);
    }

    render() {
        this.btnsNext.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.plusSlides(1);
            });

            item.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            })
        });

        this.showSlides(this.slideIndex);
    }
}