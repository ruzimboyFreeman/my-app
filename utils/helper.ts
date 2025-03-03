import { H3Event, getMethod as h3GetMethod, getHeaders as h3GetHeaders, readBody } from "h3";

/**
 * Extracts the HTTP method from the event.
 */
export const getMethod = (event: H3Event) => {
    return h3GetMethod(event) ?? "GET"; // Default to GET if undefined
};

/**
 * Extracts the request headers and formats them correctly.
 */
export const getHeaders = (event: H3Event): Record<string, string> => {
    const headers = h3GetHeaders(event);
    return Object.fromEntries(Object.entries(headers).map(([key, value]) => [key, String(value)]));
};

/**
 * Reads and returns the request body.
 */
export const getRequestBody = async (event: H3Event) => {
    return await readBody(event);
};
