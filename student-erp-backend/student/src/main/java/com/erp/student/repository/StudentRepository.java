package com.erp.student.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.erp.student.entity.Student;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
