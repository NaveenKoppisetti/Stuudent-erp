import { useEffect, useState } from "react";
import { getStudentById, updateStudent } from "../services/studentService";
import { useNavigate, useParams } from "react-router-dom";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({});

  useEffect(() => {
    getStudentById(id).then(res => setStudent(res.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(id, student).then(() => navigate("/"));
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold mb-4">Edit Student</h1>

      <form className="flex flex-col gap-4 w-96" onSubmit={handleSubmit}>

        <input
          className="border p-2"
          value={student.name || ""}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
        />

        <input
          className="border p-2"
          value={student.email || ""}
          onChange={(e) => setStudent({ ...student, email: e.target.value })}
        />

        <input
          className="border p-2"
          value={student.course || ""}
          onChange={(e) => setStudent({ ...student, course: e.target.value })}
        />

        <input
          className="border p-2"
          value={student.gender || ""}
          onChange={(e) => setStudent({ ...student, gender: e.target.value })}
        />

        <input
          className="border p-2"
          value={student.phone || ""}
          onChange={(e) => setStudent({ ...student, phone: e.target.value })}
        />

        <button className="bg-green-600 text-white p-2 rounded">
          Update
        </button>

      </form>
    </div>
  );
}

export default EditStudent;
