import { createClient } from "@sanity/client";

const SYSTEM_RESOURCES_KEY = "systemResources";

const sanityConfigClient = createClient({
    projectId: import.meta.env.SANITY_PROJECT_ID,
    dataset: import.meta.env.SANITY_DATASET,
    apiVersion: import.meta.env.SANITY_API_VERSION,
    useCdn: import.meta.env.SANITY_USE_CDN,
});

export const fetchAndCacheSystemResources = async () => {
    try {
        const data = await sanityConfigClient.fetch(
            import.meta.env.SANITY_FETCH_QUERY
        );
        localStorage.setItem(SYSTEM_RESOURCES_KEY, JSON.stringify(data));
        return data;
    } catch (err) {
        localStorage.removeItem(SYSTEM_RESOURCES_KEY);
        console.error("Error fetching system resources:", err);
        throw err;
    }
};

export const getSystemResources = () => {
    const cachedData = localStorage.getItem(SYSTEM_RESOURCES_KEY);
    return cachedData ? JSON.parse(cachedData) : null;
};

export const initializeSystemResources = async () => {
    if (!getSystemResources()) {
        await fetchAndCacheSystemResources();
    }
};
