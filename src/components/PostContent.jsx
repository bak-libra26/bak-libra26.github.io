import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSlug from 'rehype-slug';
import styles from './PostContent.module.css';

function PostContent({ content }) {
    return (
        <div className={styles.markdownContent}>
            <ReactMarkdown
                rehypePlugins={[rehypeSlug]}
                components={{
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
