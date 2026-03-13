// hooks/useScrollSpy.js — vanilla scroll listener (no framer-motion)
import { useRef, useState, useEffect } from "react";

export const useScrollSpy = () => {
    const hElementPositions = useRef([]);
    const activeIdRef = useRef("");
    const [activeId, setActiveId] = useState("");
    const HEADER_OFFSET = 96;

    useEffect(() => {
        const getPositions = () => {
            const headings = document.querySelectorAll(".post-heading");
            hElementPositions.current = Array.from(headings)
                .filter((el) => {
                    const tag = el.tagName.toLowerCase();
                    return tag === "h2" || tag === "h3" || tag === "h4";
                })
                .map((header) => ({
                    id: header.id,
                    top: header.offsetTop - HEADER_OFFSET,
                }));
        };

        getPositions();

        // Recompute positions when layout shifts (images load, resize, etc.)
        const recompute = () => getPositions();
        window.addEventListener('resize', recompute);
        const timer = setTimeout(recompute, 1000); // after images load

        const handleScroll = () => {
            const positions = hElementPositions.current;
            if (!positions.length) return;

            const latest = window.scrollY;
            let headingId = positions[0].id;

            for (let i = 0; i < positions.length; i++) {
                const current = positions[i];
                const next = positions[i + 1];

                if (
                    latest >= current.top - 180 &&
                    (!next || latest < next.top - 180)
                ) {
                    headingId = current.id;
                    break;
                }
            }

            if (activeIdRef.current !== headingId) {
                activeIdRef.current = headingId;
                setActiveId(headingId);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", recompute);
            clearTimeout(timer);
        };
    }, []);

    return activeId;
};
