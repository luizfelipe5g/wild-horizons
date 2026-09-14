import http from "node:http";
import { getDataFromDb } from "./database/db.js";
import { sendJsonResponse } from "./utils/sendJsonResponse.js";
import { getDataPathParams } from "./utils/getDataPathParams.js";
import { getDataQueryParams } from "./utils/getDataQueryParams.js";

const PORT = 8000;

const server = http.createServer(async (request, response) => {

   const destinations = await getDataFromDb();

   const objectUrl = new URL(request.url, `http://${request.headers.host}`);

   const queryObj = Object.fromEntries(objectUrl.searchParams);

   if (objectUrl.pathname === "/api" && request.method === "GET") {
      const filteredDataApi = getDataQueryParams(destinations, queryObj);

      sendJsonResponse(response, 200, filteredDataApi);


   } else if (request.url.startsWith("/api/continent") && request.method === "GET") {

      const continent = request.url.split("/").pop();
      const filteredData = getDataPathParams(destinations, "continent", continent);
      sendJsonResponse(response, 200, filteredData);

   } else if (request.url.startsWith("/api/country") && request.method === "GET") {

      const country = request.url.split("/").pop();
      const filteredDataCountry = getDataPathParams(destinations, "country", country);
      sendJsonResponse(response, 200, filteredDataCountry);

   } else {
      sendJsonResponse(response, 404, { error: "not found", message: "Recurso solicitado não pode ser encontrado" });
   }
});

server.listen(PORT, () => console.log(`server running on port ${PORT}`));