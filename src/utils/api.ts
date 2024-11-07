



 export async  function getData() {
    const res = await fetch("/server/data.json")
    const data = await res.json()

    return data
}