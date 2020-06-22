export * from "@azure/functions";
declare module "@azure/functions" {
  export interface Response {
    res?: {
      status: number;
      body: string;
    };
  }
}