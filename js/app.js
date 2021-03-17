import { data } from './data.js';

class App {
    buttonControl() {
        this.i = 0;
        document.querySelectorAll('button').forEach((button) =>
            button.addEventListener('click', (e) => {
                if (button.id == 'next') {
                    this.next();
                } else if (button.id == 'prev') {
                    this.prev();
                }
            })
        );
        window.addEventListener('keydown', (e) => {
            switch (e.code) {
                case 'ArrowRight':
                    this.next();
                    break;
                case 'ArrowLeft':
                    this.prev();
                    break;
            }
        });
    }
    next() {
        if (this.i >= data.length - 1) {
            this.i = 0;
            this.render(this.i);
        } else {
            this.i++;
            this.render(this.i);
        }
    }
    prev() {
        if (this.i <= 0) {
            this.i = data.length - 1;
            this.render(this.i);
        } else {
            this.i--;
            this.render(this.i);
        }
    }
    render(i) {
        const img = document.querySelector('img');
        const text = document.querySelector('#text');
        const name = document.querySelector('#name');
        const job = document.querySelector('#job');

        img.src = data[i].img;
        text.textContent = data[i].text;
        name.textContent = data[i].name;
        job.textContent = data[i].job;
    }
}

const app = new App();
app.buttonControl();
