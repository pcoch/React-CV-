import React from "react";

export default function InputWorkExperience(props) {
  return (
    <div>
      <form>
        <section className="form">
          <label htmlFor="input-company">
            <input
              onChange={props.handleWorkChange}
              type="text"
              id={props.workForm.id}
              name="company"
              placeholder="company"
              value={props.workForm.company}
            ></input>
          </label>

          <label htmlFor="input-position">
            <input
              onChange={props.handleWorkChange}
              type="text"
              id="input-position"
              name="position"
              placeholder="position"
              value={props.workForm.position}
            ></input>
          </label>

          <label htmlFor="input-start-date">
            <input
              onChange={props.handleWorkChange}
              type="text"
              id="input-start-date"
              name="startdate"
              placeholder="start-date"
              value={props.workForm.startdate}
            ></input>
          </label>

          <label htmlFor="input-end-date">
            <input
              onChange={props.handleWorkChange}
              type="text"
              id="input-end-date"
              name="enddate"
              placeholder="end-date"
              value={props.workForm.enddate}
            ></input>
          </label>

          <label htmlFor="input-description">
            <textarea
              onChange={props.handleWorkChange}
              type="text"
              id="input-description"
              name="description"
              placeholder="description"
              value={props.workForm.description}
            ></textarea>
          </label>
        </section>
      </form>
    </div>
  );
}
