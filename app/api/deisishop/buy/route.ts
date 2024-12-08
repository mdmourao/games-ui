export async function POST(req: Request, res: Response) {
    const body = await req.json()
    const resp = await fetch(`https://deisishop.pythonanywhere.com/buy/`, {
        method: "POST",
        body: JSON.stringify(body),
    })
    if (!resp.ok) {
        return Response.json({ error: resp.statusText }, { status: resp.status })
    }
    const data = await resp.json()
    // server should return 500 if there is an error but its not doing it
    if (data.hasOwnProperty("error")) {
        return Response.json({ error: data.error }, { status: 500 })
    }
    return Response.json(data)
}