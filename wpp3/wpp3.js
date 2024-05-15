var random = Math.ceil(Math.random() * 10);

function fun() {
    var input =
    prompt('guess the number between 1-10');
    // console.log('clicked')

    if (input == random)
        alert('matched')

    else
        alert('Not matched, the number was ' + random);

}