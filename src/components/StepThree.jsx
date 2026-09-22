import React from "react";
export default function StepThree({ values }) {
  return (
    <section className="step-content">
      <div className="step-heading">
        <span className="step-number">03</span>
        <div>
          <h2>Review & Submit</h2>
          <p>Check your information before completing registration.</p>
        </div>
      </div>

      <div className="review-card">
        <ReviewRow label="First Name" value={values.firstName} />
        <ReviewRow label="Last Name" value={values.lastName} />
        <ReviewRow label="Date of Birth" value={values.dateOfBirth} />
        <ReviewRow label="Email" value={values.email} />
        <ReviewRow label="Password" value="••••••••" />
      </div>

      <div className="review-notice">
        <span aria-hidden="true">🔒</span>
        <p>
          Your password is hidden from the review screen and is only included
          in the final client-side submission payload.
        </p>
      </div>
    </section>
  );
}

function ReviewRow({ label, value }) {
  return (
    <div className="review-row">
      <span>{label}</span>
      <strong>{value || "—"}</strong>
    </div>
  );
}