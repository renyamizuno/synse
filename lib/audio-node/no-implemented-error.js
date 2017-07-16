export default class NoImplementedError extends Error {
  constructor(self, methodName) {
    super();
    this.message = `${methodName} is No Implemented for ${self.constructor.name}.`;
  }
}
