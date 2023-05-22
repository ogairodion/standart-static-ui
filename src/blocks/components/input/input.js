const inputNumbers = document.querySelectorAll('.input__number');

// input numbers scripts
if (inputNumbers.length) {
    inputNumbers.forEach((el) => {
        const input = el.querySelector('input');
        const minus = el.querySelector('.minus');
        const plus = el.querySelector('.plus');
        let value = input.value == '' ? 0 : parseInt(input.value);

        input.value = value;

        minus.addEventListener('click', () => {
            if (value !== 0) {
                value -= 1;
                input.value = value;
            }
        });

        plus.addEventListener('click', () => {
            value += 1;
            input.value = value;
        });

        input.addEventListener('input', (e) => {
            let value = e.target.value;

            // for(let i = 0; i < value.length; i++) {
            // }
        });
    });
}