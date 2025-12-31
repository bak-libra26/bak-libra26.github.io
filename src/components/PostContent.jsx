import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSlug from 'rehype-slug';
import styles from './PostContent.module.css';

function PostContent({ content, postId }) {
    return (
        <div className={styles.markdownContent}>
            <ReactMarkdown
                rehypePlugins={[rehypeSlug]}
                components={{
                    img({ node, ...props }) {
                        // Fix relative paths for images
                        // Markdown file: posts/개발/자바/리액티브/Post.md
                        // Image file: posts/개발/자바/리액티브/Image.png
                        // URL: /posts/개발/자바/리액티브/Post
                        // Browser resolves relative "Image.png" to /posts/개발/자바/리액티브/Post/Image.png (WRONG)
                        // We need: /posts/개발/자바/리액티브/Image.png (CORRECT)

                        if (props.src && !props.src.startsWith('/') && !props.src.startsWith('http') && postId) {
                            // Extract the directory path from postId
                            // postId example: "개발/자바/리액티브/리액티브_스트림즈와_프로젝트_리액터"
                            // We need: "개발/자바/리액티브"
                            const lastSlashIndex = postId.lastIndexOf('/');
                            const postDirectory = lastSlashIndex !== -1 ? postId.substring(0, lastSlashIndex) : '';

                            // Remove ./ prefix if present
                            const cleanSrc = props.src.startsWith('./') ? props.src.slice(2) : props.src;

                            // Construct the absolute path
                            const absolutePath = postDirectory ? `/posts/${postDirectory}/${cleanSrc}` : `/posts/${cleanSrc}`;

                            return <img {...props} src={absolutePath} style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '2rem auto' }} />;
                        }
                        return <img {...props} style={{ maxWidth: '100%', height: 'auto', display: 'block', margin: '2rem auto' }} />;
                    },
                    blockquote({ node, children, ...props }) {
                        return (
                            <blockquote
                                style={{
                                    borderLeft: '4px solid var(--color-accent-wood)',
                                    padding: '1.5rem 1.5rem',
                                    margin: '2rem 0',
                                    fontStyle: 'italic',
                                    color: 'var(--color-text-muted)',
                                    backgroundColor: 'var(--color-bg-subtle)',
                                    borderRadius: '0 var(--border-radius) var(--border-radius) 0',
                                    textAlign: 'left',
                                    display: 'flex',
                                    alignItems: 'center',
                                    minHeight: '60px'
                                }}
                                {...props}
                            >
                                {children}
                            </blockquote>
                        );
                    },
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <div className={styles.codeBlockContainer}>
                                <div className={styles.codeHeader}>
                                    <div className={styles.codeControls}>
                                        <div className={styles.codeControlDot} style={{ background: '#ff5f56' }}></div>
                                        <div className={styles.codeControlDot} style={{ background: '#ffbd2e' }}></div>
                                        <div className={styles.codeControlDot} style={{ background: '#27c93f' }}></div>
                                    </div>
                                    <div className={styles.codeTitle}>
                                        {match[1] ? match[1].toUpperCase() : 'CODE'}
                                    </div>
                                </div>

                                <div className={styles.codeContentWrapper}>
                                    <SyntaxHighlighter
                                        style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        showLineNumbers={true}
                                        wrapLines={true}
                                        wrapLongLines={true}
                                        lineNumberStyle={{
                                            minWidth: '3em',
                                            paddingRight: '1em',
                                            textAlign: 'right',
                                            color: '#6e7681',
                                            borderRight: '1px solid #333',
                                            marginRight: '1em',
                                            position: 'absolute',
                                            left: 0,
                                            top: 0,
                                            height: '100%',
                                            backgroundColor: 'transparent',
                                            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                                            fontSize: '14px',
                                            lineHeight: '1.6'
                                        }}
                                        lineProps={{
                                            style: {
                                                display: 'block',
                                                position: 'relative',
                                                paddingLeft: '4.5em',
                                                wordBreak: 'break-all',
                                                overflowWrap: 'anywhere',
                                                whiteSpace: 'pre-wrap',
                                                backgroundColor: 'transparent',
                                            }
                                        }}
                                        customStyle={{
                                            margin: 0,
                                            borderRadius: 0,
                                            fontSize: '14px',
                                            lineHeight: '1.6',
                                            fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                                            padding: '24px 0',
                                            background: 'rgb(30, 30, 30)',
                                            border: 'none',
                                            overflowX: 'hidden',
                                            color: '#ffffff'
                                        }}
                                        codeTagProps={{
                                            style: {
                                                fontFamily: 'Menlo, Monaco, "Courier New", monospace',
                                                fontSize: '14px',
                                                lineHeight: '1.6',
                                                color: '#ffffff',
                                                display: 'block',
                                                backgroundColor: 'transparent'
                                            }
                                        }}
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, '')}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        ) : (
                            <code className={`${styles.inlineCode} ${className || ''}`} {...props}>
                                {children}
                            </code>
                        );
                    }
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
}

export default PostContent;
