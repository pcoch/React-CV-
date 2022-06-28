import React from "react";

export default function InputPersonalDetails(props) {
  return (
    <div>
      <h2 className="first-title">Personal Details</h2>
      <form>
        <section className="form">
          <label htmlFor="input-name">
            <input
              onChange={props.handlePersonalChange}
              type="text"
              id="input-name"
              name="name"
              placeholder="name"
              value={props.personalForm.name}
            ></input>
          </label>

          <label htmlFor="input-title">
            <input
              onChange={props.handlePersonalChange}
              type="text"
              id="input-title"
              name="title"
              placeholder="title"
              value={props.personalForm.title}
            ></input>
          </label>

          <label htmlFor="input-phone">
            <input
              onChange={props.handlePersonalChange}
              type="tel"
              id="input-phone"
              name="phone"
              placeholder="phone"
              value={props.personalForm.phone}
            ></input>
          </label>

          <label htmlFor="input-email">
            <input
              onChange={props.handlePersonalChange}
              type="text"
              id="input-email"
              name="email"
              placeholder="email"
              value={props.personalForm.email}
            ></input>
          </label>

          <label htmlFor="input-location">
            <input
              onChange={props.handlePersonalChange}
              type="text"
              id="input-location"
              name="location"
              placeholder="location"
              value={props.personalForm.location}
            ></input>
          </label>

          <label htmlFor="input-description">
            <textarea
              onChange={props.handlePersonalChange}
              type="text"
              id="input-description"
              name="description"
              placeholder="description"
              value={props.personalForm.description}
            ></textarea>
          </label>
        </section>
      </form>
    </div>
  );
}
