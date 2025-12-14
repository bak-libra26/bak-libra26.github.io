import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { posts } from '../utils/posts';
import { formatDate } from '../utils/dateFormatter'; // Correctly imported

function AllPosts() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  // Hierarchical State
  const [selectedMain, setSelectedMain] = useState('All');
  const [selectedSub, setSelectedSub] = useState('All');

  const postsPerPage = 6;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // 1. Build Hierarchy
  // Input: "Dev/React", "Dev/Node", "Life/Food"
  // Output: { 'All': [], 'Dev': ['React', 'Node'], 'Life': ['Food'] }
  const categoryHierarchy = useMemo(() => {
    const hierarchy = { 'All': [] };

    posts.forEach(post => {
      // Assuming format: "Main/Sub" or just "Main"
      const parts = post.category.split('/');
      const main = parts[0];
      const sub = parts[1]; // undefined if no sub-category

      if (!hierarchy[main]) {
        hierarchy[main] = [];
      }

      if (sub && !hierarchy[main].includes(sub)) {
        hierarchy[main].push(sub);
      }
    });

    return hierarchy;
  }, []);

  const mainCategories = Object.keys(categoryHierarchy);
  const subCategories = selectedMain !== 'All' ? categoryHierarchy[selectedMain] : [];

  // 2. Filter Logic
  const filteredPosts = posts.filter(post => {
    // Search Filter
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());

    // Category Filter
    let matchesCategory = true;
    if (selectedMain !== 'All') {
      // Check if post belongs to Main (starts with Main)
      // "Dev" matches "Dev", "Dev/React"
      matchesCategory = post.category.startsWith(selectedMain);

      if (selectedSub !== 'All') {
        // If Sub selected, must match specific sub
        // "Dev/React"
        // precise string check or "Main/Sub"
        const targetCategory = `${selectedMain}/${selectedSub}`;
        matchesCategory = post.category === targetCategory;
      }
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

  const handleMainCategoryChange = (main) => {
    setSelectedMain(main);
    setSelectedSub('All'); // Reset sub when main changes
    setCurrentPage(1);
  };

  const handleSubCategoryChange = (sub) => {
    setSelectedSub(sub);
    setCurrentPage(1);
  };

  return (
    <main className="container" style={{ paddingTop: '60px', paddingBottom: '80px', flex: 1 }}>
      <Helmet>
        <title>전체 글</title>
        <meta name="description" content="블로그의 모든 글 목록입니다." />
      </Helmet>
      <header style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>전체 글</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          이것 저것, 요리 조리
        </p>
      </header>

      {/* Search and Filter Section */}
      <div style={{ marginBottom: '40px', maxWidth: '800px', margin: '0 auto 60px' }}>
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

          {/* Level 1: Main Categories */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
            {mainCategories.map(category => (
              <button
                key={category}
                onClick={() => handleMainCategoryChange(category)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '25px',
                  border: selectedMain === category ? '2px solid var(--color-accent-wood)' : '1px solid rgba(0,0,0,0.1)',
                  backgroundColor: selectedMain === category ? 'var(--color-accent-wood)' : 'transparent',
                  color: selectedMain === category ? '#fff' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  fontWeight: selectedMain === category ? 600 : 400,
                  transition: 'all 0.2s ease',
                  minWidth: '80px'
                }}
              >
                {category === 'All' ? '전체' : category}
              </button>
            ))}
          </div>

          {/* Level 2: Sub Categories (Conditional) */}
          {selectedMain !== 'All' && subCategories.length > 0 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '8px',
              flexWrap: 'wrap',
              padding: '10px 20px',
              backgroundColor: 'var(--color-bg-subtle)',
              borderRadius: '20px',
              animation: 'fadeIn 0.3s ease'
            }}>
              <button
                onClick={() => handleSubCategoryChange('All')}
                style={{
                  padding: '6px 16px',
                  borderRadius: '15px',
                  border: 'none',
                  backgroundColor: selectedSub === 'All' ? 'var(--color-accent-wood)' : 'transparent',
                  color: selectedSub === 'All' ? '#fff' : 'var(--color-text-muted)',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: selectedSub === 'All' ? 600 : 400,
                  transition: 'all 0.2s ease'
                }}
              >
                전체
              </button>
              {subCategories.map(sub => (
                <button
                  key={sub}
                  onClick={() => handleSubCategoryChange(sub)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: '15px',
                    border: 'none',
                    backgroundColor: selectedSub === sub ? 'var(--color-accent-wood)' : 'transparent',
                    color: selectedSub === sub ? '#fff' : 'var(--color-text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: selectedSub === sub ? 600 : 400,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {sub}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {currentPosts.length > 0 ? (
        <>
          <div className="posts-grid">
            {currentPosts.map((post) => (
              <article
                key={post.id}
                className="card"
                onClick={() => navigate(`/posts/${post.id}`)}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  backgroundColor: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 20px rgba(0,0,0,0.1)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                }}
              >
                <div style={{ marginBottom: '16px' }}>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-accent-wood)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {post.category.replace('/', ' > ')}
                  </span>
                </div>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '12px', lineHeight: 1.3 }}>
                  {post.title}
                </h2>
                <p style={{
                  fontSize: '0.95rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '24px',
                  flex: 1,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {post.summary}
                </p>
                <div style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-muted)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto'
                }}>
                  <span>{formatDate(post.date)}</span>
                  <span style={{ color: 'var(--color-accent-wood)', fontWeight: 500 }}>
                    더 읽기 →
                  </span>
                </div>
              </article>
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
      `}</style>
    </main>
  );
}

export default AllPosts;
