import React, { useEffect, useState } from "react";
import {
    initializeSystemResources,
    getSystemResources,
} from "../../lib/sanity/sanityService";
import Preloader from "../PreLoader/Pre";

const ResourceLoader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadResources = async () => {
            try {
                if (!getSystemResources()) {
                    await initializeSystemResources();
                }
                setIsLoading(false);
            } catch (err) {
                setError(err);
                setIsLoading(false);
            }
        };

        loadResources();
    }, []);

    if (error) {
        return <div>Error loading resources. Please refresh the page.</div>;
    }

    if (isLoading) {
        return <Preloader load={true} />;
    }

    return children;
};

export default ResourceLoader;
