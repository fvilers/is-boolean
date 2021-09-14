function isBoolean(value: unknown): value is Boolean {
  return typeof value === "boolean";
}

export default isBoolean;
