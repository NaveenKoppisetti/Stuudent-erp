import { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../services/studentService";
import { Link } from "react-router-dom";

function StudentList() {
  const [students, setStudents] = useState([]);

  const loadData = () => {
    getStudents().then(res => setStudents(res.data));
  };

  useEffect(() => {
    loadData();
  }, []);

  const removeStudent = (id) => {
    deleteStudent(id).then(() => loadData());
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Student ERP</h1>

      <Link
        to="/add"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Student
      </Link>

      <table className="w-full mt-6 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Course</th>
            <th className="p-2 border">Gender</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {students.map((s) => (
            <tr key={s.id} className="text-center">
              <td className="border p-2">{s.id}</td>
              <td className="border p-2">{s.name}</td>
              <td className="border p-2">{s.email}</td>
              <td className="border p-2">{s.course}</td>
              <td className="border p-2">{s.gender}</td>
              <td className="border p-2">{s.phone}</td>
              <td className="border p-2 flex gap-2 justify-center">
                <Link
                  to={`/edit/${s.id}`}
                  className="bg-green-600 px-3 py-1 text-white rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => removeStudent(s.id)}
                  className="bg-red-600 px-3 py-1 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default StudentList;
