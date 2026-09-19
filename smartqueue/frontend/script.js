// PATIENT REGISTRATION

const patientForm =
    document.getElementById("patientForm");


if (patientForm) {

    patientForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            const name =
                document.getElementById(
                    "patientName"
                ).value;

            const department =
                document.getElementById(
                    "department"
                ).value;


            // Temporary token
            const token =
                "A" +
                Math.floor(
                    Math.random() * 900 + 100
                );


            document.getElementById(
                "tokenNumber"
            ).innerText = token;


            document.getElementById(
                "tokenResult"
            ).classList.remove("hidden");


            console.log(
                "Patient:",
                name
            );

            console.log(
                "Department:",
                department
            );

            console.log(
                "Token:",
                token
            );
        }
    );
}


// DOCTOR - CALL NEXT

function callNextPatient() {

    const message =
        document.getElementById(
            "doctorMessage"
        );

    message.innerText =
        "Next patient has been called. Queue updated.";
}


// EMERGENCY

function handleEmergency() {

    const message =
        document.getElementById(
            "doctorMessage"
        );

    message.innerText =
        "🚨 Emergency case added. ETA will be recalculated.";
}