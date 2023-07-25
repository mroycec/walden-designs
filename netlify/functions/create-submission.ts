import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";

const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
    return {
        headers: {
            Location: "<URL>",
        },
        statusCode: 200,
        body: JSON.stringify({ message: "Hello World" }),

    };
};

export { handler };
