export default function Helmet({ i18n, Head, title, description, image }) {
    title = title || i18n.meta.title.en
    description = description || i18n.meta.description.en
    image = image || i18n.meta.image

    return (
        <Head>
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="og:type" content="application" />
            <meta name="og:locale" content="en_US" />
            <meta name="twitter:site" content={i18n.meta.handle} />
            <meta name="twitter:creator" content={i18n.meta.handle} />
            <link rel="canonical" href={i18n.meta.url} />
            <meta name="theme-color" content="#000000" />

            <title>{title}</title>
            <meta name="twitter:text:title" content={title} />
            <meta name="twitter:title" content={title} />
            <meta name="og:title" content={title} />

            <meta name="description" content={description} />
            <meta name="og:description" content={description} />
            <meta name="twitter:description" content={description} />

            <meta name="twitter:image" content={image} />
            <meta name="og:image" content={image} />

            <meta name="og:url" content={i18n.meta.url} />
            <meta name="keyword" content={i18n.meta.keywords} />
        </Head>
    )
}
