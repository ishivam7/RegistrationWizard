import React from "react";
export default function StepTwo({
  register,
  errors,
  showPassword,
  setShowPassword,
  showConfirmPassword,
  setShowConfirmPassword
}) {
  return (
    <section className="step-content">
      <div className="step-heading">
        <span className="step-number">02</span>
        <div>
          <h2>Account Details</h2>
          <p>Create the credentials you will use to sign in.</p>
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          autoComplete="email"
          {...register("email")}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <PasswordField
        label="Password"
        name="password"
        register={register}
        error={errors.password}
        visible={showPassword}
        setVisible={setShowPassword}
        autoComplete="new-password"
      />

      <PasswordField
        label="Confirm Password"
        name="confirmPassword"
        register={register}
        error={errors.confirmPassword}
        visible={showConfirmPassword}
        setVisible={setShowConfirmPassword}
        autoComplete="new-password"
      />

      <div className="helper-box">
        <strong>Password requirement</strong>
        <span>Use at least 8 characters.</span>
      </div>
    </section>
  );
}

function PasswordField({
  label,
  name,
  register,
  error,
  visible,
  setVisible,
  autoComplete
}) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <div className="password-wrap">
        <input
          id={name}
          type={visible ? "text" : "password"}
          placeholder="••••••••"
          autoComplete={autoComplete}
          {...register(name)}
          className={error ? "input-error" : ""}
        />
        <button
          type="button"
          className="visibility-button"
          onClick={() => setVisible((value) => !value)}
          aria-label={visible ? `Hide ${label}` : `Show ${label}`}
        >
          {visible ? "Hide" : "Show"}
        </button>
      </div>
      {error && <p className="error-message">{error.message}</p>}
    </div>
  );
}