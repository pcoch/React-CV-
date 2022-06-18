import React from "react";

export default function PersonalDetailsInput() {
  return (
    <div>
      <h2 className="first-title">Personal Details</h2>
      <form>
        <section className="form">
          <label for="input-name">
            <input
              type="text"
              id="input-name"
              name="name"
              placeholder="name"
            ></input>
          </label>

          <label for="input-title">
            <input
              type="text"
              id="input-title"
              name="title"
              placeholder="title"
            ></input>
          </label>

          <label for="input-phone">
            <input
              type="text"
              id="input-phone"
              name="phone"
              placeholder="phone"
            ></input>
          </label>

          <label for="input-email">
            <input
              type="text"
              id="input-email"
              name="email"
              placeholder="email"
            ></input>
          </label>

          <label for="input-location">
            <input
              type="text"
              id="input-location"
              name="location"
              placeholder="location"
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
        </section>
      </form>
    </div>
  );
}
