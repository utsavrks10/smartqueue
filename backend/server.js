 const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Queue data
let tokenCounter = 0;
let waitingQueue = [];
let currentPatient = null;
let completedPatients = 0;

// Home route
app.get("/", (req, res) => {
    res.send("SmartQueue Backend is Running!");
});


// ===============================
// GENERATE NEW TOKEN
// ===============================

app.post("/api/token", (req, res) => {

    const { name, department } = req.body;

    tokenCounter++;

    const token = {
        tokenNumber: tokenCounter,
        name: name || "Patient",
        department: department || "General OPD",
        status: "Waiting"
    };

    waitingQueue.push(token);

    res.json({
        success: true,
        token: token.tokenNumber,
        position: waitingQueue.length,
        patient: token
    });
});


// ===============================
// GET QUEUE
// ===============================

app.get("/api/queue", (req, res) => {

    res.json({
        currentPatient: currentPatient,
        waitingPatients: waitingQueue,
        waitingCount: waitingQueue.length,
        completed: completedPatients
    });

});


// ===============================
// CALL NEXT PATIENT
// ===============================

app.post("/api/call-next", (req, res) => {

    if (waitingQueue.length === 0) {

        return res.json({
            success: false,
            message: "No patients waiting."
        });

    }

    currentPatient = waitingQueue.shift();

    currentPatient.status = "In Consultation";

    completedPatients++;

    res.json({
        success: true,
        currentPatient: currentPatient,
        waitingPatients: waitingQueue,
        waitingCount: waitingQueue.length,
        completed: completedPatients
    });

});


// ===============================
// EMERGENCY PATIENT
// ===============================

app.post("/api/emergency", (req, res) => {

    tokenCounter++;

    const emergencyPatient = {

        tokenNumber: tokenCounter,
        name: "Emergency Patient",
        department: "Emergency",
        status: "Priority"

    };

    // Put emergency patient at beginning
    waitingQueue.unshift(emergencyPatient);

    res.json({

        success: true,
        message: "Emergency patient added.",
        patient: emergencyPatient,
        waitingPatients: waitingQueue

    });

});


// ===============================
// START SERVER
// ===============================

const PORT = 5000;

app.listen(PORT, () => {

    console.log(
        `SmartQueue server running on http://localhost:${PORT}`
    );

});