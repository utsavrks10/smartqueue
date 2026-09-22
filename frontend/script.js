 // ========================================
// PATIENT REGISTRATION
// ========================================

 // ========================================
// PATIENT REGISTRATION
// ========================================

const patientForm = document.getElementById("patientForm");

if (patientForm) {

    patientForm.addEventListener("submit", async function(event) {

        event.preventDefault();

        const name =
            document.getElementById("patientName").value;

        const department =
            document.getElementById("department").value;

        const phone =
            document.getElementById("phone").value;

        try {

            const response = await fetch(
                "http://localhost:5000/api/token",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        name: name,
                        department: department,
                        phone: phone
                    })
                }
            );

            const data = await response.json();

            if (data.success) {

                // Convert 1 → A001
                const token =
                    "A" +
                    String(data.token).padStart(3, "0");

                document.getElementById(
                    "tokenNumber"
                ).innerText = token;

                document.getElementById(
                    "tokenPosition"
                ).innerText =
                    data.position +
                    " patient(s) waiting ahead";

                document.getElementById(
                    "tokenResult"
                ).classList.remove("hidden");
                localStorage.setItem("smartQueueToken", token);

                console.log(
                    "Token generated:",
                    token
                );

            } else {

                alert(
                    data.message ||
                    "Unable to generate token."
                );

            }

        } catch (error) {

            console.error(error);

            alert(
                "Unable to connect to SmartQueue server. Make sure backend is running."
            );

        }

    });

}


// ========================================
// DOCTOR - CALL NEXT PATIENT
// ========================================

async function callNextPatient() {

    const message =
        document.getElementById("doctorMessage");

    try {

        const response = await fetch(
            "http://localhost:5000/api/call-next",
            {
                method: "POST"
            }
        );

        const data = await response.json();

        if (data.success) {

            const token =
                "A" +
                String(
                    data.currentPatient.tokenNumber
                ).padStart(3, "0");

            const current =
                document.getElementById(
                    "doctorCurrent"
                );

            const currentLarge =
                document.getElementById(
                    "doctorCurrentLarge"
                );

            if (current) {
                current.innerText = token;
            }

            if (currentLarge) {
                currentLarge.innerText = token;
            }

            if (message) {

                message.innerText =
                    token +
                    " has been called for consultation.";
            }
             await loadDoctorQueue();

            

        } else {

            if (message) {
                message.innerText =
                    "No patients are waiting.";
            }

        }

    } catch (error) {

        console.error(error);

        if (message) {
            message.innerText =
                "Unable to connect to server.";
        }

    }

}


// ========================================
// EMERGENCY
// ========================================

async function handleEmergency() {

    const message =
        document.getElementById("doctorMessage");

    try {

        const response = await fetch(
            "http://localhost:5000/api/emergency",
            {
                method: "POST"
            }
        );

        const data = await response.json();

        if (data.success) {

            const token =
                "A" +
                String(
                    data.patient.tokenNumber
                ).padStart(3, "0");

            if (message) {

                message.innerText =
                    "🚨 Emergency patient " +
                    token +
                    " added to priority queue.";

            }

        }

    } catch (error) {

        console.error(error);

        if (message) {

            message.innerText =
                "Unable to connect to server.";

        }

    }

}
// ========================================
// LOAD DOCTOR DASHBOARD QUEUE
// ========================================

async function loadDoctorQueue() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/queue"
        );

        const data = await response.json();

        // CURRENT TOKEN
        const current =
            document.getElementById("doctorCurrent");

        const currentLarge =
            document.getElementById("doctorCurrentLarge");

        // PATIENT NAME
        const patientName =
            document.getElementById("currentPatientName");

        if (data.currentPatient) {

            const token =
                "A" +
                String(
                    data.currentPatient.tokenNumber
                ).padStart(3, "0");

            if (current) {
                current.innerText = token;
            }

            if (currentLarge) {
                currentLarge.innerText = token;
            }

            if (patientName) {
                patientName.innerText =
                    data.currentPatient.name;
            }
            const patientDepartment =
    document.getElementById("currentPatientDepartment");

if (patientDepartment) {
    patientDepartment.innerText =
        data.currentPatient.department;
}

        } else {

            if (current) {
                current.innerText = "--";
            }

            if (currentLarge) {
                currentLarge.innerText = "--";
            }

            if (patientName) {
                patientName.innerText =
                    "Waiting for consultation";
            }
        }

        // WAITING COUNT
        const summaryCards =
            document.querySelectorAll(
                ".dashboard-stat strong"
            );

        if (summaryCards.length > 1) {

            summaryCards[1].innerText =
                data.waitingCount;
        }

        // WAITING PATIENTS
        const patientList =
            document.querySelector(".patient-list");

        if (patientList) {

            patientList.innerHTML = "";

            data.waitingPatients.forEach(
                (patient, index) => {

                    const token =
                        "A" +
                        String(
                            patient.tokenNumber
                        ).padStart(3, "0");

                    const row =
                        document.createElement("div");

                    row.className =
                        "patient-list-row";

                    row.innerHTML = `
                        <div class="list-token">
                            ${token}
                        </div>

                        <div class="list-details">
                            <strong>
                                ${patient.name}
                            </strong>

                            <span>
                                ${patient.department}
                            </span>
                        </div>

                        <span class="waiting-tag">
                            ${
                                index === 0
                                    ? "Next"
                                    : `${index + 1}th`
                            }
                        </span>
                    `;

                    patientList.appendChild(row);
                }
            );
        }

    } catch (error) {

        console.error(
            "Doctor queue error:",
            error
        );
    }
}


// ========================================
// LOAD DOCTOR QUEUE WHEN DOCTOR PAGE OPENS
// ========================================

if (document.querySelector(".doctor-dashboard")) {
    loadDoctorQueue();
}
// ========================================
// LOAD LIVE DOCTOR QUEUE
// ========================================

 // ========================================
// LIVE QUEUE PAGE
// ========================================

async function loadLiveQueue() {

    try {

        const response = await fetch(
            "http://localhost:5000/api/queue"
        );

        const data = await response.json();


        // ================================
        // YOUR TOKEN
        // ================================

        const yourTokenElement =
            document.getElementById("yourToken");

        const savedToken =
            localStorage.getItem("smartQueueToken");

        if (yourTokenElement) {

            yourTokenElement.innerText =
                savedToken || "--";

        }


        // ================================
        // CURRENT SERVING TOKEN
        // ================================

        const currentTokenElement =
            document.getElementById("currentToken");

        let currentNumber = 0;

        if (data.currentPatient) {

    currentNumber =
        Number(
            data.currentPatient.tokenNumber
        );

    const currentToken =
        "A" +
        String(currentNumber).padStart(3, "0");

    if (currentTokenElement) {

        currentTokenElement.innerText =
            currentToken;
    }

    // CURRENT PATIENT NAME
    const currentPatientName =
        document.getElementById("currentPatientName");

    if (currentPatientName) {

        currentPatientName.innerText =
            data.currentPatient.name;
    }

} 
        else {

            if (currentTokenElement) {

                currentTokenElement.innerText =
                    "--";

            }

        }


        // ================================
        // PEOPLE AHEAD
        // ================================

        const peopleAheadElement =
            document.getElementById("peopleAhead");

        let yourNumber = 0;

        if (savedToken) {

            yourNumber =
                parseInt(
                    savedToken.replace("A", "")
                );

        }

        let ahead = 0;

        if (yourNumber > 0) {

            ahead =
                Math.max(
                    yourNumber -
                    currentNumber -
                    1,
                    0
                );

        }

        if (peopleAheadElement) {

            peopleAheadElement.innerText =
                ahead;

        }


        // ================================
        // ESTIMATED WAIT
        // ================================

        const estimatedWaitElement =
            document.getElementById("estimatedWait");

        if (estimatedWaitElement) {

            estimatedWaitElement.innerText =
                ahead * 8;

        }

    } catch (error) {

        console.error(
            "Unable to load live queue:",
            error
        );

    }

}


// Load queue page
if (document.querySelector(".queue-page")) {

    loadLiveQueue();

    setInterval(
        loadLiveQueue,
        5000
    );

}