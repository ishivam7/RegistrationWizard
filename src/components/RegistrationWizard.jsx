import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const schema = z.object({
  firstName: z.string().trim().min(1, "First name is required."),
  lastName: z.string().trim().min(1, "Last name is required."),
  dateOfBirth: z.string().min(1, "Date of birth is required."),
  email: z.string().trim().email("Enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  confirmPassword: z.string().min(1, "Please confirm your password.")
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match."
});

export default function RegistrationWizard() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const stepFields = {
    1: ["firstName", "lastName", "dateOfBirth"],
    2: ["email", "password", "confirmPassword"]
  };

  async function nextStep() {
    const valid = await trigger(stepFields[step]);
    if (!valid) return;
    setStep((current) => Math.min(current + 1, 3));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 1));
  }

  function submitRegistration(data) {
    console.log("Finalized registration payload:", data);
    setSuccess(true);
  }

  function restart() {
    window.location.reload();
  }

  if (success) {
    return (
      <main className="page-shell">
        <section className="success-card">
          <div className="success-icon" aria-hidden="true">✓</div>
          <p className="eyebrow">Registration Complete</p>
          <h1>You're all set!</h1>
          <p className="success-text">
            Your registration was successfully compiled and submitted.
          </p>
          <button className="primary-button" type="button" onClick={restart}>
            Start Again
          </button>
        </section>
      </main>
    );
  }

  const progress = (step / 3) * 100;
  const values = getValues();

  return (
    <main className="page-shell">
      <section className="wizard-card">
        <header className="wizard-header">
          <div>
            <p className="eyebrow">Sprint 7 · Phase 3</p>
            <h1>Registration Wizard</h1>
            <p className="subtitle">
              Complete your profile in three simple steps.
            </p>
          </div>
          <span className="step-badge">Step {step} of 3</span>
        </header>

        <div className="progress-area" aria-label={`Step ${step} of 3`}>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <div className="progress-labels">
            <span className={step >= 1 ? "active" : ""}>Personal</span>
            <span className={step >= 2 ? "active" : ""}>Account</span>
            <span className={step >= 3 ? "active" : ""}>Review</span>
          </div>
        </div>

        <form onSubmit={handleSubmit(submitRegistration)} noValidate>
          {step === 1 && <StepOne register={register} errors={errors} />}

          {step === 2 && (
            <StepTwo
              register={register}
              errors={errors}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
              showConfirmPassword={showConfirmPassword}
              setShowConfirmPassword={setShowConfirmPassword}
            />
          )}

          {step === 3 && (
            <StepThree values={values} />
          )}

          <div className="navigation">
            {step > 1 ? (
              <button className="secondary-button" type="button" onClick={previousStep}>
                ← Back
              </button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <button className="primary-button" type="button" onClick={nextStep}>
                Next →
              </button>
            ) : (
              <button className="primary-button" type="submit">
                Submit Registration ✓
              </button>
            )}
          </div>
        </form>
      </section>

      <p className="footer-note">
        Client-side validation · React Hook Form · Zod
      </p>
    </main>
  );
}