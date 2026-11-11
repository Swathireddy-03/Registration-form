document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let studentName = document.getElementById("studentName").value;
    let rollNo = document.getElementById("rollNo").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let department = document.getElementById("department").value;
    let eventName = document.getElementById("event").value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    ).value;

    document.getElementById("message").innerHTML =
        "Registration Successful!<br>" +
        "Welcome, " + studentName + "!";

    console.log("Student Name:", studentName);
    console.log("Roll No:", rollNo);
    console.log("Email:", email);
    console.log("Mobile:", mobile);
    console.log("Department:", department);
    console.log("Event:", eventName);
    console.log("Gender:", gender);

    document.getElementById("registrationForm").reset();
});
