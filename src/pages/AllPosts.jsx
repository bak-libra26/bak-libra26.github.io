import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { posts } from '../utils/posts';
import { formatDate } from '../utils/dateFormatter';
import PostCard from '../components/PostCard';
function AllPosts() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Multi-level category path (e.g., ['개발', '자바', '웹플럭스'])
  const [selectedPath, setSelectedPath] = useState([]);

  const postsPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Build multi-level category tree
  const categoryTree = useMemo(() => {
    const tree = {};

    posts.forEach(post => {
      const parts = post.category.split('/');
      let current = tree;

      parts.forEach((part, index) => {
        if (!current[part]) {
          current[part] = {};
        }
        current = current[part];
      });
    });

    return tree;
  }, []);

  // Get current level categories based on selected path
  const getCurrentLevelCategories = () => {
    let current = categoryTree;
    for (const part of selectedPath) {
      current = current[part] || {};
    }
    return Object.keys(current);
  };

  // Helper to count posts for a specific category path
  const getCategoryCount = (path) => {
    return posts.filter(post => {
      const postCategoryParts = post.category.split('/');
      if (postCategoryParts.length < path.length) return false;
      return path.every((part, index) => postCategoryParts[index] === part);
    }).length;
  };

  const currentLevelCategories = getCurrentLevelCategories();

  // Filter Logic
  const filteredPosts = posts.filter(post => {
    // Search Filter
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());

    // Category Filter
    let matchesCategory = true;
    if (selectedPath.length > 0) {
      const postCategoryParts = post.category.split('/');
      // Check if each segment of selectedPath matches the corresponding segment in post category
      matchesCategory = selectedPath.every((segment, index) => postCategoryParts[index] === segment);
    }

    return matchesSearch && matchesCategory;
  });

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  // Handlers
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryClick = (category, level) => {
    // If clicking the already selected category at this level, go back one level
    if (selectedPath[level] === category) {
      setSelectedPath(selectedPath.slice(0, level));
    } else {
      const newPath = selectedPath.slice(0, level);
      newPath.push(category);
      setSelectedPath(newPath);
    }
    setCurrentPage(1);
  };

  const handleResetPath = (level) => {
    setSelectedPath(selectedPath.slice(0, level));
    setCurrentPage(1);
  };

  return (
    <main className="container page-container" style={{ marginTop: '48px', flex: 1 }}>
      <title>전체 글</title>
      <meta name="description" content="블로그의 모든 글 목록입니다." />
      <header style={{ marginBottom: '24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem' }}>전체 글</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          이것 저것, 요리 조리
        </p>
      </header>

      {/* Search and Filter Section */}
      <div style={{ marginBottom: '60px' }}>
        <div style={{ marginBottom: '32px', display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              width: '100%',
              maxWidth: '500px',
              padding: '12px 20px',
              fontSize: '1rem',
              border: '1px solid rgba(0,0,0,0.1)',
              borderRadius: '50px',
              outline: 'none',
              backgroundColor: 'var(--color-bg-subtle)',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e) => e.target.style.boxShadow = '0 0 0 2px var(--color-accent-wood)'}
            onBlur={(e) => e.target.style.boxShadow = 'none'}
          />
        </div>

        {/* Categories Container */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>

          {/* Level 1: Top-level Categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <button
              onClick={() => handleResetPath(0)}
              style={{
                padding: '10px 20px',
                borderRadius: '25px',
                border: selectedPath.length === 0 ? '2px solid var(--color-accent-wood)' : '1px solid rgba(0,0,0,0.1)',
                backgroundColor: selectedPath.length === 0 ? 'var(--color-accent-wood)' : 'transparent',
                color: selectedPath.length === 0 ? '#fff' : 'var(--color-text-muted)',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: selectedPath.length === 0 ? 600 : 400,
                transition: 'all 0.2s ease',
                minWidth: '80px'
              }}
            >
              전체 ({posts.length})
            </button>
            {Object.keys(categoryTree).map(category => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category, 0)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '25px',
                  border: selectedPath[0] === category ? '2px solid var(--color-accent-wood)' : '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: selectedPath[0] === category ? 'var(--color-accent-wood)' : 'transparent',
                  color: selectedPath[0] === category ? '#fff' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: selectedPath[0] === category ? 600 : 400,
                  transition: 'all 0.2s ease',
                  minWidth: '80px'
                }}
              >
                {category.replace(/_/g, ' ')} ({getCategoryCount([category])})
              </button>
            ))}
          </div>

          {/* Render each subsequent level */}
          {selectedPath.map((selectedCategory, levelIndex) => {
            // Get categories for this level
            let current = categoryTree;
            for (let i = 0; i <= levelIndex; i++) {
              current = current[selectedPath[i]] || {};
            }
            const categoriesAtLevel = Object.keys(current);

            if (categoriesAtLevel.length === 0) return null;

            return (
              <div
                key={levelIndex}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  gap: '8px',
                  flexWrap: 'wrap',
                  padding: '10px 20px',
                  backgroundColor: 'var(--color-bg-subtle)',
                  borderRadius: '20px',
                  animation: 'fadeIn 0.3s ease'
                }}
              >
                {categoriesAtLevel.map(category => {
                  const isSelected = selectedPath[levelIndex + 1] === category;
                  return (
                    <button
                      key={category}
                      onClick={() => handleCategoryClick(category, levelIndex + 1)}
                      style={{
                        padding: '6px 16px',
                        borderRadius: '15px',
                        border: 'none',
                        backgroundColor: isSelected ? 'var(--color-accent-wood)' : 'transparent',
                        color: isSelected ? '#fff' : 'var(--color-text-muted)',
                        cursor: 'pointer',
                        fontSize: '0.9rem',
                        fontWeight: isSelected ? 600 : 400,
                        transition: 'all 0.2s ease'
                      }}
                      onMouseOver={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = 'var(--color-accent-wood)';
                          e.currentTarget.style.color = '#fff';
                          e.currentTarget.style.fontWeight = '600';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isSelected) {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = 'var(--color-text-muted)';
                          e.currentTarget.style.fontWeight = '400';
                        }
                      }}
                    >
                      {category.replace(/_/g, ' ')} ({getCategoryCount([...selectedPath.slice(0, levelIndex + 1), category])})
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      {currentPosts.length > 0 ? (
        <>
          <div className="posts-grid">
            {currentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{
              marginTop: '60px',
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              alignItems: 'center'
            }}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  border: 'none',
                  background: 'none',
                  cursor: currentPage === 1 ? 'default' : 'pointer',
                  color: currentPage === 1 ? 'var(--color-text-muted)' : 'var(--color-text-main)',
                  opacity: currentPage === 1 ? 0.3 : 1,
                  padding: '8px 16px',
                  fontSize: '0.9rem'
                }}
              >
                &lt; 이전
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  style={{
                    border: 'none',
                    background: currentPage === number ? 'var(--color-text-main)' : 'none',
                    color: currentPage === number ? '#fff' : 'var(--color-text-main)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: currentPage === number ? 600 : 400,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  border: 'none',
                  background: 'none',
                  cursor: currentPage === totalPages ? 'default' : 'pointer',
                  color: currentPage === totalPages ? 'var(--color-text-muted)' : 'var(--color-text-main)',
                  opacity: currentPage === totalPages ? 0.3 : 1,
                  padding: '8px 16px',
                  fontSize: '0.9rem'
                }}
              >
                다음 &gt;
              </button>
            </div>
          )}
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--color-text-muted)' }}>
          검색 결과가 없습니다.
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 768px) {
          .page-container h1 {
            font-size: 2rem !important;
          }

          .page-container p {
            font-size: 0.9rem !important;
          }

          .page-container input {
            font-size: 0.9rem !important;
            max-width: 100% !important;
          }

          .page-container button {
            font-size: 0.85rem !important;
          }
        }
      `}</style>
    </main>
  );
}

export default AllPosts;
