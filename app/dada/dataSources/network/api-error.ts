export default class ApiError extends Error {
  public statusCode: number | undefined;
  constructor(location: string, message?: string, status?: number) {
    super(message);
    this.name = 'Api Error : ' + location;
    //this.url = String(url);
    this.statusCode = status;
    this.stack = new Error().stack;
  }
  /**
   * Error msg for server side
   * @memberof HttpRequestError
   */
  public toString = (): string => {
    return `[${this.name}][${this.statusCode || '??'}] ${this.message}`;
  };
}
