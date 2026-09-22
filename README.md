🏥 SmartQueue – Real-Time OPD Queue Intelligence

MUSA CODEX 2026

«A smart digital OPD queue management system for real-time queue visibility and dynamic waiting-time updates.»

---

📌 Overview

SmartQueue is a digital OPD queue management solution designed to improve the patient waiting experience and simplify queue management for healthcare staff.

The system digitizes the OPD queue by providing patients with a digital token, live queue position, waiting-time information, and updated queue status.

For hospital staff, SmartQueue provides an interface to monitor and manage the active patient queue.

---

🎯 Problem Statement

Traditional OPD queue systems can create uncertainty for patients and additional workload for hospital staff.

Patients may not have clear information about:

- Their current position in the queue
- Number of patients ahead
- Expected waiting time
- Changes in the queue
- The effect of unexpected queue events

Manual queue management can also make it difficult to maintain continuously updated information.

SmartQueue addresses these challenges through a centralized digital queue system.

---

💡 Proposed Solution

SmartQueue provides a digital connection between patients and OPD staff.

Patient

Registration
     ↓
Digital Token
     ↓
Join OPD Queue
     ↓
Track Live Queue
     ↓
View Waiting-Time Information

Hospital Staff

View Queue
     ↓
Manage Patients
     ↓
Serve Patient
     ↓
Advance Queue
     ↓
Queue Gets Updated

---

⭐ Key Features

🎫 1. Digital Token Generation

Patients can register for an OPD and receive a unique digital token.

Example:

Patient: Riya Sharma
Department: General OPD
Token: A024
Status: Waiting

---

📊 2. Live Queue Tracking

Patients can monitor their queue status digitally.

The system can display:

- Current token
- Patient token
- Queue position
- Patients ahead
- Queue status
- Estimated waiting time

Example:

Your Token       A024
Current Token    A021
People Ahead       3
Position          #4
Estimated Wait   15 min

---

⏱️ 3. Waiting-Time Estimation

SmartQueue provides an estimated waiting time based on the current queue state.

The purpose is to give patients more visibility into their expected waiting period instead of relying only on a token number.

---

🔄 4. Dynamic Re-Forecasting

Core Innovation

OPD queues are dynamic and can change during the day.

For example, an emergency case or a change in patient flow can affect the existing queue.

SmartQueue is designed to update the queue state and re-evaluate the relevant waiting-time information when the queue changes.

Current Queue
      ↓
Queue Event
      ↓
Queue State Updated
      ↓
Dynamic Re-Forecasting
      ↓
Updated Waiting Information

This makes the queue information more responsive to changing conditions.

---

👨‍⚕️ 5. Doctor / Admin Queue Management

Hospital staff can manage the active OPD queue through the staff interface.

Key functions include:

- View current patient
- View next patient
- Monitor queue
- Serve patient
- Advance queue
- Update patient/queue status

---

🔄 Complete System Workflow

                  ┌───────────────┐
                  │    PATIENT    │
                  └───────┬───────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │   Registration  │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ Digital Token   │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │   OPD Queue     │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │ Live Queue View │
                 └────────┬────────┘
                          │
                          ▼
                 ┌─────────────────┐
                 │  Queue Event    │
                 └────────┬────────┘
                          │
                          ▼
                ┌───────────────────┐
                │ Dynamic Re-       │
                │ Forecasting        │
                └────────┬──────────┘
                         │
                         ▼
                ┌───────────────────┐
                │ Updated Queue     │
                │ Information       │
                └───────────────────┘

---

🏗️ System Architecture

                   ┌─────────────────┐
                   │     Patient     │
                   └────────┬────────┘
                            │
                            ▼
                   ┌─────────────────┐
                   │  SmartQueue UI  │
                   └────────┬────────┘
                            │
                 ┌──────────┴──────────┐
                 ▼                     ▼
        ┌────────────────┐    ┌────────────────┐
        │ Patient Module │    │ Doctor / Admin │
        │                │    │    Module      │
        └───────┬────────┘    └───────┬────────┘
                │                     │
                └──────────┬──────────┘
                           ▼
                  ┌─────────────────┐
                  │  Queue Engine   │
                  └────────┬────────┘
                           ▼
                 ┌───────────────────┐
                 │ Dynamic Re-       │
                 │ Forecasting        │
                 └───────────────────┘

---

🛠️ Technology Stack

Frontend

- HTML
- CSS
- JavaScript

Development Tools

- Visual Studio Code
- Git
- GitHub



---

📂 Project Structure

  SmartQueue/
│
├── frontend/
│   ├── index.html
│   ├── patient.html
│   ├── queue.html
│   ├── doctor.html
│   ├── style.css
│   └── script.js
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── node_modules/
│
├── README.md
└── .gitignore


---

📸 Application Modules

Patient Module

- Registration
- OPD selection
- Digital token
- Live queue
- Waiting-time information

Doctor/Admin Module

- Queue monitoring
- Current patient
- Next patient
- Patient serving
- Queue advancement

Queue Intelligence

- Queue state management
- Queue updates
- Dynamic re-forecasting
- Updated waiting information

---

🎯 Benefits

For Patients

- Better visibility of their queue position
- Digital access to queue information
- Better understanding of expected waiting time
- Reduced dependence on repeatedly asking staff for queue status

For Hospital Staff

- Centralized queue management
- Easier monitoring of patients
- Faster queue updates
- Better visibility of the active OPD queue

---

🔮 Future Scope

The SmartQueue MVP can be extended with:

- 📱 Dedicated mobile application
- 🔔 SMS / WhatsApp / app notifications
- 🤖 Advanced waiting-time prediction
- 🏥 Hospital Management System integration
- 📊 Hospital analytics dashboard
- 🏨 Multi-department support
- 🔐 Role-based authentication
- 📈 Historical queue analytics
- 🌐 Multi-hospital support

---

🔐 Security & Privacy

A production-ready implementation should include:

- Secure authentication
- Role-based access control
- Secure API communication
- Protection of patient information
- Audit logging
- Appropriate healthcare-data security practices

The current implementation is an MVP/prototype developed for MUSA CODEX 2026.

---

🏆 MUSA CODEX 2026

Project

SmartQueue – Real-Time OPD Queue Intelligence

Domain

Healthcare / Digital Health

Core Focus

Real-Time OPD Queue Management + Dynamic Re-Forecasting

---

👥 Team

Team Name:OUTLIER'S

Team Members:

- Member 1- UTSAV KUMAR SINGH
- Member 2- RISHIKA BALIRAM SINGH 
- Member 3- SARTHAK SANDEEP SHINDE 
- Member 4- SAIVAMSI NARAYANRAO TALAGANA 

