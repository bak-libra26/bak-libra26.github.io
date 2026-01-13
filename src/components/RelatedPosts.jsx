import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../utils/posts';
import { formatDate } from '../utils/dateFormatter';

function RelatedPosts({ currentPost }) {
    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);

    const relatedPosts = useMemo(() => {
        if (!currentPost || !currentPost.category) return [];

        const currentCategories = currentPost.category.split('/');

        const scoredPosts = posts
            .filter(p => p.id !== currentPost.id) // Exclude current post
            .map(p => {
                const postCategories = p.category ? p.category.split('/') : [];
                let matchScore = 0;

                // Simple overlap score
                for (let i = 0; i < Math.min(currentCategories.length, postCategories.length); i++) {
                    if (currentCategories[i] === postCategories[i]) {
                        matchScore++;
                    } else {
                        break;
                    }
                }

                // Match requirement:
                // User requested STRICT matching.
                // If current is "Dev/Java/Reactive", ONLY show "Dev/Java/Reactive/*".
                // So matchScore must equal currentCategories.length.
                const strictMatch = matchScore === currentCategories.length;

                return { post: p, score: matchScore, passedThreshold: strictMatch };
            })
            .filter(item => item.passedThreshold) // Only include posts that strictly match the current category
            .sort((a, b) => {
                // Primary sort: Score descending
                if (b.score !== a.score) return b.score - a.score;
                // Secondary sort: Date descending (newest first)
                return new Date(b.post.date) - new Date(a.post.date);
            });

        // Only return matches
        return scoredPosts.map(item => item.post);
    }, [currentPost]);

    // if (relatedPosts.length === 0) return null; // Removed check to show empty state per user request

    const visiblePosts = relatedPosts.slice(startIndex, startIndex + 4);
    const hasNext = startIndex + 4 < relatedPosts.length;
    const hasPrev = startIndex > 0;

    const handleNext = () => {
        if (hasNext) {
            setStartIndex(prev => prev + 4);
        }
    };

    const handlePrev = () => {
        if (hasPrev) {
            setStartIndex(prev => Math.max(0, prev - 4));
        }
    };

    return (
        <div style={{
            marginTop: '80px',
            marginBottom: '80px',
            paddingTop: '40px',
            paddingBottom: '40px',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            borderBottom: '1px solid rgba(0,0,0,0.08)',
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '24px'
            }}>
                <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: 'var(--color-text-header)',
                    margin: 0
                }}>
                    함께 보면 좋은 글
                </h3>

                {relatedPosts.length > 4 && (
                    <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                            onClick={handlePrev}
                            disabled={!hasPrev}
                            style={{
                                background: 'none',
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '4px',
                                cursor: hasPrev ? 'pointer' : 'default',
                                padding: '4px 12px',
                                color: hasPrev ? 'var(--color-text-header)' : 'rgba(0,0,0,0.2)',
                                transition: 'all 0.2s',
                                fontSize: '0.9rem'
                            }}
                        >
                            ←
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={!hasNext}
                            style={{
                                background: 'none',
                                border: '1px solid rgba(0,0,0,0.1)',
                                borderRadius: '4px',
                                cursor: hasNext ? 'pointer' : 'default',
                                padding: '4px 12px',
                                color: hasNext ? 'var(--color-text-header)' : 'rgba(0,0,0,0.2)',
                                transition: 'all 0.2s',
                                fontSize: '0.9rem'
                            }}
                        >
                            →
                        </button>
                    </div>
                )}
            </div>

            {relatedPosts.length > 0 ? (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                    gap: '20px'
                }}>
                    {visiblePosts.map(post => (
                        <div
                            key={post.id}
                            onClick={() => {
                                navigate(`/posts/${post.id}`);
                                window.scrollTo(0, 0);
                            }}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: '#fff',
                                border: '1px solid rgba(0,0,0,0.06)',
                                borderRadius: '8px',
                                padding: '20px',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.06)';
                                e.currentTarget.style.borderColor = 'var(--color-accent-wood)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = 'none';
                                e.currentTarget.style.boxShadow = 'none';
                                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)';
                            }}
                        >
                            <span style={{
                                fontSize: '0.75rem',
                                color: 'var(--color-accent-wood)',
                                fontWeight: 600,
                                marginBottom: '8px',
                                display: 'block',
                                textTransform: 'uppercase'
                            }}>
                                {(() => {
                                    const currentParts = currentPost.category.split('/');
                                    const targetParts = post.category.split('/');
                                    let i = 0;
                                    while (i < currentParts.length && i < targetParts.length && currentParts[i] === targetParts[i]) {
                                        i++;
                                    }
                                    // If target is parent of current (unlikely/edge case), show last part
                                    if (i >= targetParts.length) {
                                        return targetParts[targetParts.length - 1].replace(/_/g, ' ');
                                    }
                                    // Show parts from divergence point onwards
                                    return targetParts.slice(i).join(' > ').replace(/_/g, ' ');
                                })()}
                            </span>

                            <h4 style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                margin: '0 0 12px 0',
                                lineHeight: 1.4,
                                color: 'var(--color-text-header)',
                                // Limit title to 2 lines
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden'
                            }}>
                                {post.title}
                            </h4>

                            <div style={{
                                marginTop: 'auto',
                                fontSize: '0.8rem',
                                color: 'var(--color-text-muted)'
                            }}>
                                {formatDate(post.date)}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div style={{
                    padding: '32px 0',
                    textAlign: 'center',
                    color: 'var(--color-text-muted)',
                    fontSize: '0.9rem',
                    backgroundColor: 'rgba(0,0,0,0.02)',
                    borderRadius: '8px'
                }}>
                    이 주제로는 첫 글이에요, 곧 친구들을 데려오겠습니다.
                </div>
            )}
        </div>
    );
}

export default RelatedPosts;
