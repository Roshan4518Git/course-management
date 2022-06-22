import "./App.css";
import { Button, Col, Container, Row } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import Home from "./components/Home";
import Course from "./components/Course";
import AllCourses from "./components/AllCourses";
import MyCourses from "./components/MyCourses";
import Menus from "./components/Menus";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
function App() {
  const btnHandle = () => {
    toast("This is messege");
  };

  return (
    <div className="App">
      <Router>
        <ToastContainer />
        <h1 className="text-center my-3 bg-warning">
          Full stack Application in Java & React
        </h1>
        <Container>
          <Row>
            <Col md={4}>
              <Menus />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/addCourse" element={<MyCourses />} exact />
                <Route path="/viewCourse" element={<AllCourses />} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
