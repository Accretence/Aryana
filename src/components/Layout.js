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
    essentials,
    crownLarge,
    crownSmall,
    metaTitle,
    metaDescription,
    metaImage,
    children,
}) => (
    <>
        <Helmet
            essentials={essentials}
            title={metaTitle}
            description={metaDescription}
            image={metaImage}
        />
        <Header essentials={essentials} />
        <Crown essentials={essentials} large={crownLarge} small={crownSmall} />
        <Wrapper essentials={essentials}>{children}</Wrapper>
        <Footer essentials={essentials} />
    </>
)

Layout.defaultProps = defaultProps

export default Layout
