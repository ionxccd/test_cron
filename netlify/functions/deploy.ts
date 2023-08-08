import {schedule} from "@netlify/functions";

export const handler = schedule("* * * * *", async (event:any) => {
    console.log("working");
    return {
        statusCode:200,
        body:"Hello"
    }
});