import CustomApiError from "./custom-api.js";
import { StatusCodes } from "http-status-codes";

export default class UnAuthenticatedError extends CustomApiError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
