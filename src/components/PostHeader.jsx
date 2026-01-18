import React from 'react';
import { formatDate } from '../utils/dateFormatter';

function PostHeader({ title, category, date }) {
    return (
        <header className="post-header">
            <div className="post-category">
                {category?.replace(/\//g, ' > ')}
            </div>
            <h1 className="post-title">{title}</h1>
            <div className="post-date">
                {formatDate(date)}
            </div>
        </header>
    );
}

export default PostHeader;
