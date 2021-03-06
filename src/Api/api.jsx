import Countries from "./counties.json";

const BASE_URL = "https://ipinfo.io/json";
const TOKEN = "2e2feb3f284581";

export async function getLocation() {
    const result = await fetch(`${BASE_URL}?token=${TOKEN}`).then(response => response.json()).then(data => {
        const { country } = data;
        return Countries.find(item => item.code === country)
    })
    return result;
}

export async function getFlag(code ) {
    const response = await fetch(`https://countryflagsapi.com/png/${code.toLowerCase()}`).then(data=>data.url);  
    return response;
}