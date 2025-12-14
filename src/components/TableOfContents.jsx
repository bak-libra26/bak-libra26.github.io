import React, { useEffect, useState } from 'react';
import GithubSlugger from 'github-slugger';

function TableOfContents({ content }) {
    const [activeId, setActiveId] = useState('');
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        if (content) {
            const slugger = new GithubSlugger();
            const lines = content.split('\n');
            const extractedHeadings = [];
            lines.forEach(line => {
                const match = line.match(/^(#{1,3})\s+(.+)$/);
                if (match) {
                    const level = match[1].length;
                    const text = match[2];
                    const slug = slugger.slug(text);
                    extractedHeadings.push({ level, text, id: slug });
                }
            });
            setHeadings(extractedHeadings);
        }
    }, [content]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '0px 0px -80% 0px' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

    const handleTocClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -120;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    if (headings.length === 0) return null;

    return (
        <aside className="toc-sidebar">
            <div className="toc-title">
                이 글의 목차
            </div>
            <nav>
                {headings.map((heading, index) => (
                    <a
                        key={index}
                        href={`#${heading.id}`}
                        className={`toc-link h${heading.level} ${activeId === heading.id ? 'active' : ''}`}
                        onClick={(e) => handleTocClick(e, heading.id)}
                    >
                        {heading.text}
                    </a>
                ))}
            </nav>
        </aside>
    );
}

export default TableOfContents;
