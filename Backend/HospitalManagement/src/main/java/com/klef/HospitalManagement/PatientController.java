package com.klef.HospitalManagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/patients")
@CrossOrigin(origins = "http://localhost:5173")
public class PatientController {
	  @Autowired
	    private PatientService patientService;

	    @GetMapping
	    public List<Patient> getAllPatients() {
	        return patientService.getAllPatients();
	    }

	    @PostMapping
	    public Patient createPatient(@RequestBody Patient patient) {
	        return patientService.createPatient(patient);
	    }

	    @PutMapping("/{id}")
	    public Patient updatePatient(@PathVariable Long id, @RequestBody Patient patientDetails) {
	        return patientService.updatePatient(id, patientDetails);
	    }

	    @DeleteMapping("/{id}")
	    public ResponseEntity<?> deletePatient(@PathVariable Long id) {
	        patientService.deletePatient(id);
	        return ResponseEntity.ok().build();
	    }
}
