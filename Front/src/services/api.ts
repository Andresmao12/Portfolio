const API_ROUTE = import.meta.env.VITE_API_URL

interface postParameters {
    endpoint: string,
    data: object
}
export const post = async ({ endpoint, data }: postParameters) => {

    try {
        const res = await fetch(`${API_ROUTE}${endpoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (!res.ok) throw new Error(`-- Error en la respuesta ${res.status} ${res.statusText}`);

        return await res.json()

    } catch (error) {
        return error
    }
}