export const handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    // Only log on the client-side, avoid SSR logs
    if (event.url.pathname !== '/__data.json') {
        console.log("=============================================")
        console.log(`Target ==> ${event.url.pathname}\n`);
    }

    return response;
};
