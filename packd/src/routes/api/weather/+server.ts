// import { PRIVATE_CARBONE_WILL_TEMPLATE_ID } from "$env/static/private";
// import { carbone } from "$lib/server/carbone.server";
import { weather } from "$lib/server/weather.server";
import { json, type RequestHandler } from "@sveltejs/kit";

// request, locals 
export const POST: RequestHandler = async () => {
    //  Throws error if API is called while no User is detected

    //  Extracats the Carbone.io Options from the request
    // const { convertTo, reportName, template } = Object(await request.json());

    /// TODO - add in logic for associated "tempalte" with an appropriate "templateId" when we have more than 1 tempalte
    // const templateId = PRIVATE_CARBONE_WILL_TEMPLATE_ID;
    
    //  Calls Carbone API to generate a document by passing in paramters if they're available
    const res = await weather.getWeather()
        .then((response) => {
            console.log("/api/generate created document for: ", response);
            return response;
        })
        .catch((err) => {
            console.log(`Error at /api/generate/+server.ts. Please review the below: \n ${err}`);
            return {
                success: false,
                error: "Server failed to generate the document. Please try again in a bit."
            };
        });
    return json(res);
};