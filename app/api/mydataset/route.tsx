import { initialDatasets } from "@/app/constants/Data";

// this is the get enbpoint that is provding dummy data to the result page as of now.
export async function GET() {
    return Response.json(initialDatasets);
  }


  