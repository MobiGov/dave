import { AzureFunction, HttpRequest, Context } from "@azure/functions";
import { Response } from "./types/az-function";
import "regenerator-runtime/runtime";
import "core-js/es/array";

const httpTrigger: AzureFunction = async function(context: Context, req: HttpRequest): Promise<Response> {
    context.log('TypeScript HTTP trigger function processed a request.');

    const name = req.query["name"] || req.body["name"];
    if (name) {
        return {
            res: {
              status: 200,
              body: `Hello there ${name}`
            }
          };
    }
    else {
        return {
          res: {
            status: 400,
            body: "You need to provide a name"
          }
        };
      }
};

export default httpTrigger;