import React, { useEffect, useState } from "react";
import base_url from "../api/bootapi";
import Course from "./Course";
import axios from "axios";
import { toast } from "react-toastify";

const AllCourses = () => {
  //Function to call Server
  const getAllCoursesFromServer = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        // console.log(response);
        console.log(response.data);
        toast.success("Data Loaded Successfully");
        setCourses(response.data);
      },
      (error) => {
        console.log(error);
        toast.error("Problem in Loading Data");
      }
    );
  };

  useEffect(() => {
    getAllCoursesFromServer();
  }, []);

  const [courses, setCourses] = useState([]);

  const removeCourseById = (id) => {
    setCourses(courses.filter((c) => c.id != id));
  };

  return (
    <div>
      <h1>This is the courses</h1>
      {courses.length > 0
        ? courses.map((item) => (
            <Course key={item.id} course={item} update={removeCourseById} />
          ))
        : "No Courses Found"}
    </div>
  );
};

export default AllCourses;
