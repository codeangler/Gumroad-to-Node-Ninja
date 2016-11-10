import http from "http";
import { homepage, notFound } from "./handlers";

const server = http.createServer((request, response) => {
  homepage(request, response);
  if(response.status === 400){
    notFound(request, response)
  }
});

server.listen(4050);