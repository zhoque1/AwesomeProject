enum StatusCode {
  Success = 200,
  Created = 201,
  NoContent = 204,
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

export default StatusCode;
