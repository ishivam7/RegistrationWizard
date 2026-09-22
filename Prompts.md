# Sprint 7 - AI Learning & Debugging Log

This file documents the AI-assisted learning used during development.
The code should be reviewed and understood before committing.

## Session 1 — Architecture

**Prompt:** Explain how to architect a three-step React registration wizard
where form values persist when a step is unmounted.

**Learning:** The form state must live in a parent/form context rather than
inside an individual step component. Conditional rendering can then switch
the visible step without losing the registered values.

## Session 2 — Validation

**Prompt:** Explain how React Hook Form can be combined with Zod for
client-side validation.

**Learning:** Zod defines the validation schema while the resolver connects
the schema to React Hook Form. Validation errors can then be displayed beside
individual inputs.

## Session 3 — Cross-field validation

**Prompt:** Explain how to validate that confirmPassword matches password.

**Learning:** A schema-level refinement can compare the two fields and attach
the error to confirmPassword.

## Session 4 — QA

**Prompt:** What should be tested for a multi-step registration wizard?

**Learning:** Test navigation, state persistence, invalid input handling,
disabled/blocked navigation, password visibility, review data, submission,
and success state.

## Development note

AI output was used for explanation and debugging guidance. Every committed
implementation should be reviewed by the developer before submission.
