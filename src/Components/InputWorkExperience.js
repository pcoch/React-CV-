import React from "react";

export default function InputWorkExperience(props) {
  // const addForm = () => {};

  // const deleteForm = () => {
  //   //only delete 2nd form, can't delete first
  // };

  return (
    <div>
      <h2>Work Experience</h2>
      <form>
        <section className="form">
          <label htmlFor="input-company">
            <input
              onChange={props.UpdateCompany}
              type="text"
              id="input-company"
              name="company"
              placeholder="company"
              value={props.Company}
            ></input>
          </label>

          <label htmlFor="input-position">
            <input
              onChange={props.UpdatePosition}
              type="text"
              id="input-position"
              name="position"
              placeholder="position"
              value={props.Position}
            ></input>
          </label>

          <label htmlFor="input-start-date">
            <input
              onChange={props.UpdateStartDate}
              type="text"
              id="input-start-date"
              name="start-date"
              placeholder="start-date"
              value={props.StartDate}
            ></input>
          </label>

          <label htmlFor="input-end-date">
            <input
              onChange={props.UpdateEndDate}
              type="text"
              id="input-end-date"
              name="end-date"
              placeholder="end-date"
              value={props.EndDate}
            ></input>
          </label>

          <label htmlFor="input-description">
            <textarea
              onChange={props.UpdateJobDescription}
              type="text"
              id="input-description"
              name="description"
              placeholder="description"
              value={props.JobDescription}
            ></textarea>
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
