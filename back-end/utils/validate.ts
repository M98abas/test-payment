export default class Validate {
  constructor(parameters: any) {}
  static payment = (must = true) => ({
    amount: {
      presence: must,
      type: "number",
    },
    currency: {
      presence: must,
      type: "string",
    },
  });
}
