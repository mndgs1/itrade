export function extractError(responseData) {
  if (
    responseData &&
    responseData.errors &&
    Array.isArray(responseData.errors)
  ) {
    return responseData.errors.map((error) => error.message).join("\n");
  }
  return "There was an error processing the request.";
}

console.log("currently not in use, delete before shipping");
