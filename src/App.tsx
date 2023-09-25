import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import JobList from './pages/JobList';
import CreateJob from './pages/CreateJob';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<JobList/>} />
          <Route path="/createjob" element={<CreateJob/>} />
        </Route>
      </Routes>
    </BrowserRouter>  
    </>
  );
}

export default App;
