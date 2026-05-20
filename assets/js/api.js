const JIKAN_BASE = "https://api.jikan.moe/v4";

export async function jikanRequest(endpoint) {
    try {
        const res = await fetch(`${JIKAN_BASE}${endpoint}`);
        if (!res.ok) throw new Error(`API Error: ${res.status}`);
        return await res.json();
    } catch (err) {
        console.error(err);
        return { data: [] };
    }
}

export async function getAnimeById(malId) {
    const res = await jikanRequest(`/anime/${malId}`);
    return res.data;
}

export async function searchAnime(query, limit = 12) {
    const res = await jikanRequest(`/anime?q=${encodeURIComponent(query)}&limit=${limit}`);
    return res.data;
}

export async function getSeasonalAnime() {
    return await jikanRequest("/seasons/now?limit=24");
}

export async function getTopAnime(limit = 12) {
    return await jikanRequest(`/top/anime?limit=${limit}`);
}

export async function getRandomAnime() {
    const res = await jikanRequest("/random/anime");
    return res.data;
}
