const getData = () => {
    let inputs = document.querySelectorAll(".form-control");
    let alert = document.getElementById("alert");
    let isFormCompleted = true;

    // CHECKING IF CONTROLS FORMS ARE EMPTY

    console.log(inputs);

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") {
            inputs[i].classList.add("bg-danger");
            isFormCompleted = false;
        } else {
            inputs[i].classList.replace("bg-danger", "bg-light");
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