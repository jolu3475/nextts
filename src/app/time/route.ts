export const GET = async () => {
    return Response.json({
        time: new Date().toLocaleTimeString(),
    })
}