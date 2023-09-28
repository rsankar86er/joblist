import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import JobList from './pages/JobList';
import CreateJob from './pages/CreateJob';
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<JobList/>} />
          <Route path="/createjob" element={<CreateJob/>} />
        </Route>
      </Routes>
    </BrowserRouter>  
    </Provider>
  );
}

export default App;
