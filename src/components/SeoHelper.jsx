const SeoHelper = ({
    title,
    description,
    type='website',
    publishedTime,
    modifiedTime,
}) => {
    return (
        <>
            {/* 기본 */}
            <title>{title}</title>
            <meta name="author" content="bak-libra26"/>
            <meta name="description" content={description}/>

            <meta name="theme-color" content="#ffffff" />

            {/* OG */}
            <meta property="og:type" content={type}/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            {publishedTime && (
                <meta property="article:published_time" content={publishedTime}/>
            )}
            {modifiedTime && (
                <meta property="article:modified_time" content={modifiedTime}/>
            )}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
        </>
    );
}

export default SeoHelper ;