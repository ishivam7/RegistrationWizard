import React from "react";
export default function StepOne({ register, errors }) {
  return (
    <section className="step-content">
      <div className="step-heading">
        <span className="step-number">01</span>
        <div>
          <h2>Personal Information</h2>
          <p>Tell us a little about yourself.</p>
        </div>
      </div>

      <div className="form-grid two-columns">
        <Field
          label="First Name"
          name="firstName"
          placeholder="e.g. Shivansh"
          register={register}
          error={errors.firstName}
        />
        <Field
          label="Last Name"
          name="lastName"
          placeholder="e.g. Kumar"
          register={register}
          error={errors.lastName}
        />
      </div>

      <Field
        label="Date of Birth"
        name="dateOfBirth"
        type="date"
        register={register}
        error={errors.dateOfBirth}
      />
    </section>
  );
}

function Field({ label, name, type = "text", placeholder, register, error }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={error ? "input-error" : ""}
      />
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
}