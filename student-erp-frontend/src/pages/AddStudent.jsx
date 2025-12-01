import { useState } from "react";
import { addStudent } from "../services/studentService";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: "",
    gender: "",
    phone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student).then(() => navigate("/"));
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Add Student</h1>

      <form className="flex flex-col gap-4 w-96" onSubmit={handleSubmit}>
        
        <input
          className="border p-2"
          placeholder="Name"
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />

        <input
          className="border p-2"
          placeholder="Email"
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
        />

        <input
          className="border p-2"
          placeholder="Course"
          onChange={(e) => setStudent({ ...student, course: e.target.value })}
        />

        <input
          className="border p-2"
          placeholder="Gender"
          onChange={(e) => setStudent({ ...student, gender: e.target.value })}
        />

        <input
          className="border p-2"
          placeholder="Phone"
          onChange={(e) => setStudent({ ...student, phone: e.target.value })}
        />

        <button className="bg-blue-600 text-white p-2 rounded">
          Submit
        </button>

      </form>
    </div>
  );
}

export default AddStudent;
