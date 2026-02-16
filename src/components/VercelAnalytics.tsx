"use client";

import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function VercelAnalytics() {
    const [consentGranted, setConsentGranted] = useState(false);

    useEffect(() => {
        // Check consent status on mount and listen for updates
        const checkConsent = () => {
            const consent = localStorage.getItem("cookie_consent");
            if (consent === "granted") {
                setConsentGranted(true);
            }
        };

        checkConsent();

        // Listen to custom event for immediate reaction
        window.addEventListener("storage", checkConsent);
        return () => window.removeEventListener("storage", checkConsent);
    }, []);

    if (!consentGranted) return null;

    return <Analytics />;
}
