import React from "react";

export default function InputEducation(props) {
  return (
    <div>
      <h2>Education</h2>
      <form>
        <section className="form">
          <label htmlFor="input-course">
            <input
              onChange={props.handleEducationChange}
              type="text"
              id="input-course"
              name="course"
              placeholder="course/program"
              value={props.educationForm.course}
            ></input>
          </label>

          <label htmlFor="input-university">
            <input
              onChange={props.handleEducationChange}
              type="text"
              id="input-university"
              name="university"
              placeholder="university"
              value={props.educationForm.university}
            ></input>
          </label>

          <label htmlFor="input-start-date">
            <input
              onChange={props.handleEducationChange}
              type="text"
              id="input-start-date"
              name="startdate"
              placeholder="start-date"
              value={props.educationForm.startdate}
            ></input>
          </label>

          <label htmlFor="input-end-date">
            <input
              onChange={props.handleEducationChange}
              type="text"
              id="input-end-date"
              name="enddate"
              placeholder="end-date"
              value={props.educationForm.enddate}
            ></input>
          </label>
          <div className="button-container">
            <button>Delete</button>
            <button>Add</button>
          </div>
        </section>
      </form>
    </div>
  );
}
