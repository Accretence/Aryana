export default function Helmet({ essentials, meta }) {
    const { config, i18n, useThemeProvider, useAuth, useRouter, Link, Head } =
        essentials

    if (meta)
        return (
            <Head>
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="og:type" content="application" />
                <meta name="og:locale" content="en_US" />
                <meta name="twitter:site" content={config.meta.handle} />
                <meta name="twitter:creator" content={config.meta.handle} />
                <link rel="canonical" href={config.meta.url} />
                <meta name="theme-color" content="#000000" />

                <title>{meta.title}</title>
                <meta name="twitter:text:title" content={meta.title} />
                <meta name="twitter:title" content={meta.title} />
                <meta name="og:title" content={meta.title} />

                <meta name="description" content={meta.description} />
                <meta name="og:description" content={meta.description} />
                <meta name="twitter:description" content={meta.description} />

                <meta name="twitter:image" content={meta.image} />
                <meta name="og:image" content={meta.image} />

                <meta name="og:url" content={config.meta.url} />
                <meta name="keyword" content={config.meta.keywords} />
            </Head>
        )
}
