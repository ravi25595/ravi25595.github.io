function primeChecker() {
    var num = document.getElementById('input').value;
    var result = document.getElementById('p');

    if (!num) {
        result.innerHtml = "Please enter a number.";
        return;
    }

    num = parseInt(num);
    if (isNaN(num)) {
        result.innerHTML = "Invalid input. Enter a number.";
        return;
    }

    if (num < 2) {
        result.innerHTML = num + " is not prime.";
        return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            result.innerHTML = num + " is not prime.";
            return;
        }
    }

    result.innerHTML = num + " is prime!";
}
