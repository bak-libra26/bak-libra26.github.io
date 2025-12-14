import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeSlug from 'rehype-slug';

function PostContent({ content }) {
    return (
        <div className="markdown-content">
            <ReactMarkdown
                rehypePlugins={[rehypeSlug]}
                components={{
                    code({ node, inline, className, children, ...props }) {
                        const match = /language-(\w+)/.exec(className || '');
                        return !inline && match ? (
                            <div className="code-block-container">
                                <div className="code-header">
                                    <div className="code-controls">
                                        <div className="code-control-dot" style={{ background: '#ff5f56' }}></div>
                                        <div className="code-control-dot" style={{ background: '#ffbd2e' }}></div>
                                        <div className="code-control-dot" style={{ background: '#27c93f' }}></div>
                                    </div>
                                    <div className="code-title">
                                        {match[1] ? match[1].toUpperCase() : 'CODE'}
                                    </div>
                                </div>

                                <div className="code-content-wrapper">
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
                            <code className={`inline-code ${className || ''}`} {...props}>
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
