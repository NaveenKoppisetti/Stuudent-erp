package com.erp.student.service.impl;

import com.erp.student.entity.Student;
import com.erp.student.repository.StudentRepository;
import com.erp.student.service.StudentService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StudentServiceImpl implements StudentService {

    private final StudentRepository repo;

    @Override
    public Student saveStudent(Student s) {
        return repo.save(s);
    }

    @Override
    public Student updateStudent(Long id, Student s) {
        Student existing = repo.findById(id).orElseThrow();
        existing.setName(s.getName());
        existing.setEmail(s.getEmail());
        existing.setCourse(s.getCourse());
        existing.setGender(s.getGender());
        existing.setPhone(s.getPhone());
        return repo.save(existing);
    }

    @Override
    public List<Student> getAllStudents() {
        return repo.findAll();
    }

    @Override
    public Student getStudentById(Long id) {
        return repo.findById(id).orElseThrow();
    }

    @Override
    public void deleteStudent(Long id) {
        repo.deleteById(id);
    }
}
