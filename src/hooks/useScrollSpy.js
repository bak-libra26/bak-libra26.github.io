// hooks/useScrollSpy.js
import { useRef, useState, useEffect } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export const useScrollSpy = () => {
    const hElementPositions = useRef([]); // [{ id, top }]
    const [activeId, setActiveId] = useState("");
    const { scrollY } = useScroll();
    const HEADER_OFFSET = 96;

    const getHTagPositions = () => {
        const headings = document.querySelectorAll(".post-heading");

        hElementPositions.current = Array.from(headings)
            .filter((el) => {
                const tag = el.tagName.toLowerCase();
                return tag === "h2" || tag === "h3" || tag === "h4";
            })
            .map((header) => ({
                id: header.id,
                // 앵커 점프 후 scrollY랑 맞추기 위해 HEADER_OFFSET 만큼 미리 빼둠
                top: header.offsetTop - HEADER_OFFSET,
            }));
    };

    useEffect(() => {
        getHTagPositions();
        // 필요하면 resize 시에도 갱신
        // window.addEventListener("resize", getHTagPositions);
        // return () => window.removeEventListener("resize", getHTagPositions);
    }, []);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const positions = hElementPositions.current;
        if (!positions.length) return;

        // 기본값: 첫 번째 헤딩
        let headingId = positions[0].id;

        for (let i = 0; i < positions.length; i++) {
            const current = positions[i];
            const next = positions[i + 1];

            // 현재 헤딩의 top보다 아래로 내려왔고
            // 다음 헤딩의 top보다 위에 있을 때 => 이 구간이 active
            if (
                latest >= current.top - 180 &&
                (!next || latest < next.top - 180)
            ) {
                headingId = current.id;
                break;
            }
        }

        setActiveId(headingId);
    });


    return activeId;
};
