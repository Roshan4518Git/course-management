import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../api/bootapi";

const MyCourses = () => {
  const [course, setCourse] = useState({});

  const handleForm = (e) => {
    console.log(course);
    postDataToServer(course);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        console.log("Success");
        toast.success("Course added Successfully");
      },
      (error) => {
        console.log(error);
        console.log("Error");
      }
    );
  };

  return (
    <div>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label for="userId">CourseId</label>
          <Input
            type="text"
            placeholder="Enter the id"
            name="userId"
            id="userId"
            onChange={(e) => {
              setCourse({ ...course, id: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="title">Course Title</label>
          <Input
            type="text"
            placeholder="Enter the title"
            name="title"
            id="title"
            onChange={(e) => {
              setCourse({ ...course, title: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label for="description">Course Description</label>
          <Input
            type="textarea"
            placeholder="Enter the description"
            name="description"
            id="description"
            style={{ height: 100 }}
            onChange={(e) => {
              setCourse({ ...course, description: e.target.value });
            }}
          />
        </FormGroup>

        <Container className="text-center">
          <Button type="submit" color="success m-2">
            Add
          </Button>
          <Button
            type="reset"
            onClick={(e) => {
              setCourse({});
            }}
            color="warning"
          >
            Clear
          </Button>
        </Container>
      </Form>
    </div>
  );
};

export default MyCourses;
