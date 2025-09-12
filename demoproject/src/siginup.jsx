import React, { useState } from 'react';

function HospitalManagement() {
    const [patients, setPatients] = useState([]);
    const [formData, setFormData] = useState(initialFormData());
    const [editingIndex, setEditingIndex] = useState(null);

    // 1️⃣ Initialize Form Data
    function initialFormData() {
        return {
            email: '',
            firstName: '',
            lastName: '',
            dob: '',
            mobile: '',
            address: '',
            password: '',
        };
    }

    // 2️⃣ Handle Input Change
    function handleInputChange(e) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    // 3️⃣ Submit Form (Create or Update)
    function handleFormSubmit(e) {
        e.preventDefault();
        if (editingIndex !== null) {
            updatePatient();
        } else {
            createPatient();
        }
    }

    // 4️⃣ Create Patient
    function createPatient() {
        setPatients([...patients, formData]);
        resetForm();
    }

    // 5️⃣ Update Patient
    function updatePatient() {
        const updated = [...patients];
        updated[editingIndex] = formData;
        setPatients(updated);
        resetForm();
        setEditingIndex(null);
    }

    // 6️⃣ Delete Patient
    function deletePatient(index) {
        const updated = [...patients];
        updated.splice(index, 1);
        setPatients(updated);
    }

    // 7️⃣ Populate Form for Editing
    function editPatient(index) {
        setFormData(patients[index]);
        setEditingIndex(index);
    }

    // 8️⃣ Reset Form Fields
    function resetForm() {
        setFormData(initialFormData());
    }

    // 9️⃣ Render Component
    return (
        <div style={{ padding: '20px' }}>
            <h2>Hospital Management System</h2>

            {/* Form */}
            <form onSubmit={handleFormSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                /><br /><br />

                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                /><br /><br />

                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                /><br /><br />

                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    required
                /><br /><br />

                <input
                    type="text"
                    name="mobile"
                    placeholder="Mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                /><br /><br />

                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                /><br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                /><br /><br />

                <button type="submit">{editingIndex !== null ? 'Update Patient' : 'Add Patient'}</button>
                <button type="button" onClick={resetForm} style={{ marginLeft: '10px' }}>Clear</button>
            </form>

            <hr />

            {/* Patients Table */}
            <h3>Patient Records</h3>
            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>DOB</th>
                        <th>Mobile</th>
                        <th>Address</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {patients.length === 0 ? (
                        <tr><td colSpan="7" align="center">No patient records</td></tr>
                    ) : (
                        patients.map((patient, index) => (
                            <tr key={index}>
                                <td>{patient.email}</td>
                                <td>{patient.firstName}</td>
                                <td>{patient.lastName}</td>
                                <td>{patient.dob}</td>
                                <td>{patient.mobile}</td>
                                <td>{patient.address}</td>
                                <td>
                                    <button onClick={() => editPatient(index)}>Edit</button>
                                    <button onClick={() => deletePatient(index)} style={{ marginLeft: '5px' }}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default HospitalManagement;
