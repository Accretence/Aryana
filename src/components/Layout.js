import Crown from './Crown.js'
import Footer from './Footer.js'
import Header from './Header.js'
import Helmet from './Helmet.js'
import Wrapper from './Wrapper.js'

const defaultProps = {
    config: {
        theme: {
            width: '900pt',
        },
        meta: {
            title: 'NEXT-DASHBOARD-ABSTRACTION',
            image: 'https://i.imgur.com/NitQE9d.jpg',
            url: 'https://example.com',
            handle: '@example',
            keywords: 'geist-ui, nextjs, reactjs',
        },
        links: {
            email: 'mailto:example@example.com',
            twitter: 'https://twitter.com/example',
            linkedin: 'https://linkedin.com/in/example',
            github: 'https://github.com/example',
        },
        tabs: [
            {
                label: 'CONTACT',
                value: '/contact',
            },
        ],
    },
}

const Layout = ({
    config,
    i18n,
    useThemeProvider,
    useAuth,
    router,
    Link,
    Head,
    crownLarge,
    crownSmall,
    metaTitle,
    metaDescription,
    metaImage,
    children,
}) => {
    return (
        <>
            <Helmet
                config={config}
                i18n={i18n}
                title={metaTitle}
                description={metaDescription}
                image={metaImage}
                router={router}
                Head={Head}
            />
            <Header
                config={config}
                i18n={i18n}
                useThemeProvider={useThemeProvider}
                useAuth={useAuth}
                router={router}
                Link={Link}
            />
            <Crown
                config={config}
                i18n={i18n}
                large={crownLarge}
                small={crownSmall}
                router={router}
            />
            <Wrapper config={config} router={router}>
                {children}
            </Wrapper>
            <Footer config={config} i18n={i18n} router={router} Link={Link} />
        </>
    )
}

Layout.defaultProps = defaultProps

export default Layout
