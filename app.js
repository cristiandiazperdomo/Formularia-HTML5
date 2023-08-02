const getData = () => {
    let inputs = document.querySelectorAll(".form-control");
    let alert = document.getElementById("alert");
    let isFormCompleted = true;

    // CHECKING IF CONTROLS FORMS ARE EMPTY

    console.log(inputs);

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].classList.add("bg-danger");
            inputs[i].classList.contains("bg-light") && inputs[i].classList.remove("bg-light");
            isFormCompleted = false;
        } else {
            inputs[i].classList.add("bg-light");
            inputs[i].classList.contains("bg-danger") && inputs[i].classList.remove("bg-danger");
        }
    }

    // SHOW ALERT IF IT'S NOT COMPLETED

    if (!isFormCompleted) {
        alert.classList.remove("d-none");
    } else {
        alert.classList.add("d-none");
    }

}

document.getElementById('button').addEventListener('click', () => {
    getData();
});