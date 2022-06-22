import React from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus = () => {
  return (
    <div>
      <ListGroup>
        <Link className="list-group-item list-group-item-action" tag="a" to="/">
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/addCourse"
        >
          Add Courses
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/viewCourse"
        >
          View Courses
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#">
          Delete Course
        </Link>
        <Link className="list-group-item list-group-item-action" tag="a" to="#">
          Update Courses
        </Link>
      </ListGroup>
    </div>
  );
};

export default Menus;
