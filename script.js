const counter = document.getElementById('counter');
const decrementBtn = document.getElementById('decrementBtn');
const incrementBtn = document.getElementById('incrementBtn');
const clearBtn = document.getElementById('clearBtn');
const error = document.getElementById('error');

let count = 0;

incrementBtn.addEventListener('click', () => {
    count++;
    counter.innerHTML = count;
    error.style.visibility = 'hidden';
    if (count > 0) {
        clearBtn.style.display = 'block';
    }
});

decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        counter.innerHTML = count;
        error.style.visibility = 'hidden';
    } else {
        error.style.visibility = 'visible';
    }
    if (count === 0) {
        clearBtn.style.display = 'none';
    }
});

clearBtn.addEventListener('click', () => {
    count = 0;
    counter.innerHTML = count;
    clearBtn.style.display = 'none';
});
