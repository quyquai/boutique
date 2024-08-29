export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualsToOtherValue(value, otherValue) {
  return value === otherValue;
}

export function isPassword(password) {
  var regularExpression = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  return regularExpression.test(password);
}
