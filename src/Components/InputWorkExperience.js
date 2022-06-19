import React from "react";

export default function InputWorkExperience() {
  return (
    <div>
      <h2>Work Experience</h2>
      <form>
        <section className="form">
          <label for="input-company">
            <input
              type="text"
              id="input-company"
              name="company"
              placeholder="company"
            ></input>
          </label>

          <label for="input-position">
            <input
              type="text"
              id="input-position"
              name="position"
              placeholder="position"
            ></input>
          </label>

          <label for="input-start-date">
            <input
              type="text"
              id="input-start-date"
              name="start-date"
              placeholder="start-date"
            ></input>
          </label>

          <label for="input-end-date">
            <input
              type="text"
              id="input-end-date"
              name="end-date"
              placeholder="end-date"
            ></input>
          </label>

          <label for="input-description">
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
