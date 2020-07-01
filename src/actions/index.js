export function suma() {
  return {
    type: "SUMA",
  };
}
export function resta() {
  return {
    type: "RESTA",
  };
}
export function multiply(number) {
  return {
    type: "MULTIPLICAR",
    number,
  };
}
