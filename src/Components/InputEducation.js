import React from "react";

export default function InputEducation() {
  return (
    <div>
      <h2>Education</h2>
      <form>
        <section className="form">
          <label htmlFor="input-course">
            <input
              type="text"
              id="input-course"
              name="course"
              placeholder="course/program"
            ></input>
          </label>

          <label htmlFor="input-university">
            <input
              type="text"
              id="input-university"
              name="university"
              placeholder="university"
            ></input>
          </label>

          <label htmlFor="input-start-date">
            <input
              type="text"
              id="input-start-date"
              name="start-date"
              placeholder="start-date"
            ></input>
          </label>

          <label htmlFor="input-end-date">
            <input
              type="text"
              id="input-end-date"
              name="end-date"
              placeholder="end-date"
            ></input>
          </label>

          <label htmlFor="input-description">
            <input
              type="text"
              id="input-description"
              name="description"
              placeholder="description"
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
