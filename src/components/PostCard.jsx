import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/dateFormatter';

function PostCard({ post }) {
  const navigate = useNavigate();

  return (
    <article
      onClick={() => navigate(`/posts/${post.id}`)}
      style={{
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        minHeight: '320px',
        padding: '32px',
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '12px',
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
          {post.category.split('/').join(' > ')}
        </span>
      </div>
      <h2 style={{
        fontSize: '1.5rem',
        marginBottom: '12px',
        lineHeight: 1.3,
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        minHeight: 'calc(1.5rem * 1.3 * 2)' // 2 lines
      }}>
        {post.title}
      </h2>
      <p style={{
        fontSize: '0.93rem',
        color: 'var(--color-text-muted)',
        marginBottom: '24px',
        lineHeight: '1.6',
        flex: 1,
        display: '-webkit-box',
        WebkitLineClamp: 1,
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
  );
}

export default PostCard;
