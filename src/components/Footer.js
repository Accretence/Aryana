import { Text, Grid, useTheme, Collapse } from '@geist-ui/core'

import { isLocaleRTL, getLocaleDirection } from '../helpers/index.js'

export default function Footer({ essentials }) {
    const { config, i18n, useThemeProvider, useAuth, useRouter, Link, Head } =
        essentials

    const theme = useTheme()

    const footer = i18n['components']['footer']

    const {
        locale = config.defaultLocale,
        locales,
        pathname,
        asPath,
        query,
    } = useRouter()

    const FooterLink = (link) => {
        if (link.value.includes('http')) {
            return (
                <a
                    key={link.value}
                    className="FooterLink"
                    href={link.value}
                    target="_blank"
                >
                    <Text
                        px={0}
                        style={{
                            fontSize: '0.8rem',
                            direction: getLocaleDirection(locale),
                            textAlign: 'end',
                        }}
                    >
                        {link['label'][locale]}
                    </Text>
                </a>
            )
        } else {
            return (
                <Link key={link.value} href={link.value}>
                    <a className="FooterLink">
                        <Text
                            px={0}
                            style={{
                                fontSize: '0.8rem',
                                direction: getLocaleDirection(locale),
                                textAlign: 'end',
                            }}
                        >
                            {link['label'][locale]}
                        </Text>
                    </a>
                </Link>
            )
        }
    }

    const Copyright = () => (
        <div
            style={{
                display: 'block',
            }}
        >
            <Text
                h4
                my={0}
                style={{
                    direction: getLocaleDirection(locale),
                    textAlign: 'start !important',
                }}
            >
                {footer['title'][locale].toUpperCase()}
            </Text>
            <Text
                mt={0}
                style={{
                    fontSize: '0.7rem',
                    direction: getLocaleDirection(locale),
                    textAlign: 'start !important',
                }}
                type="secondary"
            >
                {footer['copyright'][locale]}
            </Text>
        </div>
    )

    const Desktop = () => (
        <Grid.Container gap={1} my={2}>
            {isLocaleRTL(locale) ? (
                <>
                    <DesktopLinks
                        config={config}
                        footer={footer}
                        locale={locale}
                        Link={Link}
                    />
                    <Grid
                        px={0}
                        style={{ display: 'block' }}
                        xs={24}
                        md={8}
                        mb={2}
                    >
                        <Text
                            h4
                            my={0}
                            style={{
                                textAlign: 'start',
                                direction: 'rtl',
                            }}
                        >
                            {footer['title'][locale].toUpperCase()}
                        </Text>
                        <Text
                            mt={0}
                            style={{
                                fontSize: '0.7rem',
                                textAlign: 'right',
                                direction: 'rtl',
                            }}
                            type="secondary"
                        >
                            {footer['copyright'][locale]}
                        </Text>
                    </Grid>
                </>
            ) : (
                <>
                    <Grid
                        px={0}
                        style={{ display: 'block' }}
                        xs={24}
                        md={8}
                        mb={2}
                    >
                        <Text h4 my={0}>
                            {footer['title'][locale].toUpperCase()}
                        </Text>
                        <Text
                            mt={0}
                            small
                            style={{ fontSize: '0.7rem' }}
                            type="secondary"
                        >
                            {footer['copyright'][locale]}
                        </Text>
                    </Grid>
                    <DesktopLinks config={config} footer={footer} />
                </>
            )}
        </Grid.Container>
    )

    const DesktopLinks = () => (
        <>
            {footer.links.map((category) => {
                return (
                    <Grid
                        style={{
                            display: 'block',
                        }}
                        xs={12}
                        md={4}
                        key={Math.random()}
                    >
                        <Text
                            h5
                            b
                            style={{
                                direction: getLocaleDirection(locale),
                                textAlign: 'end',
                                whiteSpace: 'nowrap',
                            }}
                        >
                            {category[locale]}
                        </Text>
                        {category['links'].map((link) => FooterLink(link))}
                    </Grid>
                )
            })}
        </>
    )

    const Mobile = () => (
        <>
            <Collapse.Group width="100%" mt={1} mb={2}>
                <MobileLinks
                    config={config}
                    footer={footer}
                    locale={locale}
                    Link={Link}
                />
            </Collapse.Group>
        </>
    )

    const MobileLinks = () => (
        <>
            <>
                {footer &&
                    footer.links.map((category) => {
                        return (
                            <Collapse
                                width="100%"
                                title={category[locale]}
                                key={category[locale]}
                            >
                                {category['links'].map((link) =>
                                    FooterLink(link)
                                )}
                            </Collapse>
                        )
                    })}
            </>
            <style jsx global>
                {`
                    .FooterWrapper
                        > .item
                        > .item
                        > .collapse-group
                        > .collapse
                        > .view
                        > .title
                        > h3 {
                        font-size: 1rem !important;
                        font-weight: 400 !important;
                        color: ${theme.palette.accents_6};
                    }
                    .FooterWrapper
                        > .item
                        > .item
                        > .collapse-group
                        > .collapse
                        > .view
                        > .title
                        > svg {
                        color: ${theme.palette.accents_6}!important;
                    }
                    .collapse {
                        border-top: none !important;
                    }
                `}
            </style>
        </>
    )

    return (
        <>
            {footer && (
                <footer>
                    <div className="FooterWrapper">
                        <Grid.Container>
                            <Grid xs={24} md={0}>
                                <Mobile
                                    config={config}
                                    footer={footer}
                                    locale={locale}
                                    Link={Link}
                                />
                            </Grid>
                            <Grid xs={0} md={24}>
                                <Desktop
                                    config={config}
                                    footer={footer}
                                    locale={locale}
                                    Link={Link}
                                />
                            </Grid>
                            <Grid
                                xs={24}
                                md={0}
                                mx={0.4}
                                style={{
                                    justifyContent: isLocaleRTL(locale)
                                        ? 'end'
                                        : 'start',
                                }}
                            >
                                <Copyright />
                            </Grid>
                        </Grid.Container>
                    </div>
                </footer>
            )}
            <style jsx global>
                {`
                    footer {
                        border-top: 1px solid ${theme.palette.border};
                    }
                    .FooterWrapper {
                        width: ${config.theme.width};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        vertical-align: text-top;
                        box-sizing: border-box;
                    }
                `}
            </style>
        </>
    )
}
