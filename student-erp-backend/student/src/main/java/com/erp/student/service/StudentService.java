package com.erp.student.service;

import com.erp.student.entity.Student;
import java.util.List;

public interface StudentService {
    Student saveStudent(Student s);

    Student updateStudent(Long id, Student s);

    List<Student> getAllStudents();

    Student getStudentById(Long id);

    void deleteStudent(Long id);
}
