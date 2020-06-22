import { HttpRequest, Context } from "@azure/functions";
import { Response } from "./types/az-function";
export default function (context: Context, req: HttpRequest): Promise<Response>;
