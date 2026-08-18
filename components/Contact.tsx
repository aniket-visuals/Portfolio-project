import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const Contact: React.FC = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: "15min" });
            cal("ui", {
                cssVarsPerTheme: {
                    light: { "cal-brand": "#2d2d2d" },
                    dark: { "cal-brand": "#FFA81C" }
                },
                hideEventTypeDetails: false,
                layout: "month_view"
            });
        })();
    }, []);

    return (
        <section id="contact" className="py-10 px-4 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center justify-center mb-10 text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-6">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Request a Project
                    </span>
                    <h2 className="text-[40px] font-bold mb-4 tracking-tight">Book a call</h2>
                    <p className="text-gray-400 text-sm md:text-base max-w-lg">
                        Let's talk scope, timeline, and budget &mdash; no fluff, just clarity
                    </p>
                </div>
                
                <div className="w-full h-[600px]">
                    <Cal
                        namespace="15min"
                        calLink="editors-hub/15min"
                        style={{ width: "100%", height: "100%", overflow: "scroll" }}
                        config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true", theme: "dark" }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact;