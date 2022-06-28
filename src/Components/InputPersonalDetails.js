import React from "react";

export default function InputPersonalDetails(props) {
  console.log(props);
  return (
    <div>
      <h2 className="first-title">Personal Details</h2>
      <form>
        <section className="form">
          <label htmlFor="input-name">
            <input
              onChange={props.UpdateName}
              type="text"
              id="input-name"
              name="name"
              placeholder="name"
              value={props.PersonName}
            ></input>
          </label>

          <label htmlFor="input-title">
            <input
              onChange={props.UpdateTitle}
              type="text"
              id="input-title"
              name="title"
              placeholder="title"
              value={props.JobTitle}
            ></input>
          </label>

          <label htmlFor="input-phone">
            <input
              onChange={props.UpdatePhone}
              type="tel"
              id="input-phone"
              name="phone"
              placeholder="phone"
              value={props.Phone}
            ></input>
          </label>

          <label htmlFor="input-email">
            <input
              onChange={props.UpdateEmail}
              type="text"
              id="input-email"
              name="email"
              placeholder="email"
              value={props.Email}
            ></input>
          </label>

          <label htmlFor="input-location">
            <input
              onChange={props.UpdateLocation}
              type="text"
              id="input-location"
              name="location"
              placeholder="location"
              value={props.Location}
            ></input>
          </label>

          <label htmlFor="input-description">
            <textarea
              onChange={props.UpdateDescription}
              type="text"
              id="input-description"
              name="description"
              placeholder="description"
              value={props.Description}
            ></textarea>
          </label>
        </section>
      </form>
    </div>
  );
}
