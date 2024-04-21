export const requiredMessage = (fieldName: string) =>
  `${fieldName} is required`;

export const minLengthMessage = (fieldName: string, min: number) =>
  `${fieldName} must be at least ${min} character(s)`;

export const maxLengthMessage = (fieldName: string, max: number) =>
  `${fieldName} must be at most ${max} character(s)`;

export const validMessage = (fieldName: string) => `enter a valid ${fieldName}`;

export const mustMatchMessage = (fieldName: string) =>
  `${fieldName} must match`;
