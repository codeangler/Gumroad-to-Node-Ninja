export function homepage(request, response) {
  response.setHeader("Content-Type", "text/html");
  response.end("hello world");
}

export function notFound(request, response) {
   response.setHeader("Content-Type", "text/html");
  response.end("not found");
  response.status(404);
}