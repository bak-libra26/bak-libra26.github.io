import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { posts } from '../utils/posts';

function AllPosts() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const postsPerPage = 4;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Get unique categories
  const categories = ['All', ...new Set(posts.map(post => post.category))];

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  return (
    <main className="container" style={{ paddingTop: '120px', paddingBottom: '80px', flex: 1 }}>
      <header style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>전체 글</h1>
        <p style={{ color: 'var(--color-text-muted)' }}>
          기록된 모든 이야기들을 모았습니다.
        </p>
      </header>

      {/* Search and Filter Section */}
      <div style={{ marginBottom: '40px', maxWidth: '600px', margin: '0 auto 60px' }}>
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          <input
            type="text"
            placeholder="검색어를 입력하세요..."
            value={searchTerm}
            onChange={handleSearchChange}
            style={{
              width: '100%',
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

        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: selectedCategory === category ? '1px solid var(--color-text-main)' : '1px solid rgba(0,0,0,0.1)',
                backgroundColor: selectedCategory === category ? 'var(--color-text-main)' : 'transparent',
                color: selectedCategory === category ? '#fff' : 'var(--color-text-muted)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease'
              }}
            >
              {category}
            </button>
          ))}
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
                    {post.category}
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
                  <span>{post.date}</span>
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
    </main>
  );
}

export default AllPosts;
