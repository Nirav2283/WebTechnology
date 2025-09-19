import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentList from "./StudentList";
import StudentForm from "./StudentForm";
import StudentView from "./StudentView";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route path="/add" element={<StudentForm />} />
        <Route path="/edit/:id" element={<StudentForm />} />
        <Route path="/view/:id" element={<StudentView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
