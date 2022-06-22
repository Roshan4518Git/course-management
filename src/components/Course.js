import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import {
  Button,
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Container,
} from "reactstrap";
import base_url from "../api/bootapi";

const Course = ({ course, update }) => {
  const deleteCourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        toast.success("Course Deleted");
        update(id);
      },
      (error) => {
        console.log("error");
        toast.error("Problem in Deliting Course");
      }
    );
  };

  return (
    <div>
      <Card>
        <CardBody className="text-center">
          <CardSubtitle>
            <strong> {course.title}</strong>
          </CardSubtitle>
          <CardText>{course.description}</CardText>
          <Container>
            <Button color="success">add</Button>
            <Button
              color="danger m-2"
              onClick={() => {
                deleteCourse(course.id);
              }}
            >
              delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    </div>
  );
};

export default Course;
