import useState from 'react-usestateref'
import React, { useEffect } from 'react'
import {
    Tabs,
    Text,
    useTheme,
    Drawer,
    ButtonGroup,
    Button,
    useToasts,
} from '@geist-ui/core'
import {
    Globe,
    Sun,
    Moon,
    LogIn,
    User,
    ShoppingCart,
    Menu,
    Search,
} from '@geist-ui/icons'

import { isLocaleRTL } from '../helpers/index.js'
import { useWindowSize } from '../hooks/index.js'

export default function ({ essentials }) {
    const { config, i18n, useThemeProvider, useAuth, useRouter, Link, Head } =
        essentials

    const theme = useTheme()
    const themeProvider = useThemeProvider()
    const { width, height } = useWindowSize()
    const { setToast } = useToasts()
    const { isAuthenticated, setLocalAuthentication } = useAuth()

    const router = useRouter()

    const {
        locale = config.defaultLocale,
        locales,
        pathname,
        asPath,
        query,
    } = router

    function getPosition(string, subString, index) {
        return string.split(subString, index).join(subString).length
    }

    function loopLanguages() {
        router.push({ pathname, query }, asPath, {
            locale: locales[(locales.indexOf(locale) + 1) % locales.length],
        })
    }

    const [sticky, setSticky] = useState(false)
    const [drawerVis, setDrawerVis] = useState(false)
    const [placement, setPlacement] = useState('')

    const {
        buttons,
        components: { header },
    } = i18n

    useEffect(() => {
        const scrollHandler = () =>
            setSticky(document.documentElement.scrollTop > 54)
        document.addEventListener('scroll', scrollHandler)
        return () => document.removeEventListener('scroll', scrollHandler)
    }, [setSticky])

    const matchedURL = router['pathname'].match(/(?:^\/)?[^/]+/g)

    function drawDrawer() {
        setPlacement('left')
        setDrawerVis(true)
    }

    const Title = () => (
        <>
            {i18n && (
                <>
                    <Text mt={1.5} className="MenuNavigationTitle">
                        <Link className="MenuNavigationTitle" href="/">
                            {i18n['components']['header']['title'][
                                locale
                            ].toUpperCase()}
                        </Link>
                    </Text>
                </>
            )}
            <style jsx global>
                {`
                    .MenuNavigationTitle a {
                        color: ${theme.palette.foreground}!important;
                        font-size: 2.2rem;
                        font-weight: 600;
                        letter-spacing: ${locale == 'en' ? '0.3rem' : 0};
                    }
                `}
            </style>
        </>
    )

    const Submenu = () => {
        const submenu = i18n['components']['header']['submenu']

        return (
            <>
                {config && i18n && submenu && (
                    <nav className="SubmenuWrapper">
                        <div
                            className={`Submenu ${
                                sticky ? 'SubmenuSticky' : ''
                            }`}
                        >
                            <div className="SubmenuInner">
                                <Tabs
                                    align="center"
                                    value={
                                        matchedURL
                                            ? matchedURL[0]
                                            : router.pathname
                                    }
                                    onChange={(route) => router.push(route)}
                                >
                                    {submenu.unprotected.map((tab) => {
                                        return (
                                            <Tabs.Item
                                                key={tab['label'][locale]}
                                                label={tab['label'][locale]}
                                                value={tab.value}
                                            />
                                        )
                                    })}
                                    {submenu.protected.map((tab) => (
                                        <Tabs.Item
                                            key={tab['label'][locale]}
                                            label={tab['label'][locale]}
                                            value={tab.value}
                                            disabled={!isAuthenticated}
                                        />
                                    ))}
                                </Tabs>
                            </div>
                        </div>
                    </nav>
                )}
                <style jsx global>
                    {`
                        .scroll-container {
                            padding-left: 0px !important;
                            border: none !important;
                        }
                        .SubmenuWrapper {
                            height: 50px;
                            position: relative;
                            overflow: hidden;
                            box-shadow: inset 0 -1px ${theme.palette.border};
                        }
                        .SubmenuSticky {
                            transition: box-shadow 1s ease;
                        }
                        .SubmenuSticky {
                            position: fixed;
                            z-index: 1100;
                            top: 0;
                            right: 0;
                            left: 0;
                            background: ${theme.palette.background};
                            box-shadow: ${theme.type === 'dark'
                                ? `inset 0 -1px ${theme.palette.border}`
                                : 'rgba(0, 0, 0, 0.1) 0 0 15px 0'};
                        }
                        .SubmenuInner {
                            width: ${config.theme.width};
                            max-width: 100%;
                            margin: 0 auto;
                            padding: 0 ${theme.layout.pageMargin};
                            height: 50px;
                            overflow-y: hidden;
                            overflow-x: auto;
                            overflow: -moz-scrollbars-none;
                            -ms-overflow-style: none;
                            -webkit-overflow-scrolling: touch;
                            scrollbar-width: none;
                            box-sizing: border-box;
                        }
                        .SubmenuInner::-webkit-scrollbar {
                            display: none;
                        }
                        .SubmenuInner .content {
                            display: none;
                        }
                        .SubmenuInner .tabs,
                        .SubmenuInner header {
                            height: 100%;
                            border: none !important;
                        }
                        .SubmenuInner .tab {
                            height: calc(100% - 2px);
                            padding-top: 0;
                            padding-bottom: 0;
                            color: ${theme.palette.accents_5};
                            font-size: 0.9rem !important;
                        }
                        .SubmenuInner .tab:hover {
                            color: ${theme.palette.foreground};
                        }
                        .SubmenuInner .active {
                            color: ${theme.palette.foreground};
                            border: none !important;
                        }
                    `}
                </style>
            </>
        )
    }

    const TabletNav = () => (
        <>
            <div>
                <Button
                    type="secondary"
                    ghost
                    style={{ border: 'none' }}
                    auto
                    icon={<Search />}
                />
                {themeProvider && (
                    <Button
                        icon={theme.type === 'dark' ? <Sun /> : <Moon />}
                        aria-label="Toggle Theme"
                        mx={0.5}
                        type="secondary"
                        ghost
                        style={{ border: 'none' }}
                        auto
                        onClick={() =>
                            themeProvider.setLocalTheme(
                                theme.type === 'dark' ? 'light' : 'dark'
                            )
                        }
                    />
                )}
                {locales && (
                    <Button
                        type="secondary"
                        ghost
                        auto
                        style={{ border: 'none' }}
                        icon={<Globe />}
                        onClick={() => loopLanguages()}
                    />
                )}
            </div>
            <Title config={config} i18n={i18n} />
            <div>
                {isAuthenticated ? (
                    <>
                        <Link href="/cart">
                            <Button
                                icon={<ShoppingCart />}
                                aria-label="Shopping Cart"
                                mx={0.5}
                                type="secondary"
                                ghost
                                style={{ border: 'none' }}
                                auto
                            />
                        </Link>
                        <Link href="/user">
                            <Button
                                icon={<User />}
                                aria-label="Toggle Theme"
                                type="secondary"
                                ghost
                                style={{ border: 'none' }}
                                auto
                            />
                        </Link>
                    </>
                ) : (
                    <>
                        <Button
                            icon={<LogIn />}
                            aria-label="Login Button"
                            type="secondary"
                            style={{ border: 'none' }}
                            auto
                            px={1.2}
                        >
                            {buttons['login'][locale]}
                        </Button>
                    </>
                )}
            </div>
        </>
    )

    const PhoneNav = () => (
        <>
            <Button
                type="secondary"
                ghost
                style={{ border: 'none' }}
                auto
                icon={<Search />}
            />
            <Title config={config} i18n={i18n} />
            <Button
                type="secondary"
                ghost
                style={{ border: 'none' }}
                auto
                icon={<Menu />}
                onClick={() => drawDrawer()}
            />
            <Drawer
                visible={drawerVis}
                onClose={() => setDrawerVis(false)}
                placement={placement}
                width="60%"
            >
                <Drawer.Content>
                    {
                        <ButtonGroup
                            type="secondary"
                            mx={0}
                            mb={2}
                            width="100%"
                        >
                            <Button
                                disabled={theme.type === 'dark'}
                                icon={<Moon />}
                                scale={1.3}
                                aria-label="Toggle Dark Mode"
                                onClick={() =>
                                    themeProvider.setLocalTheme('dark')
                                }
                            />
                            <Button
                                disabled={theme.type === 'light'}
                                icon={<Sun />}
                                scale={1.3}
                                aria-label="Toggle Light Mode"
                                onClick={() =>
                                    themeProvider.setLocalTheme('light')
                                }
                            />
                        </ButtonGroup>
                    }
                    {locales && (
                        <Button
                            type="secondary"
                            width="100%"
                            scale={1.5}
                            mb={0.5}
                            icon={<Globe />}
                            onClick={() => loopLanguages()}
                        />
                    )}
                    {isAuthenticated ? (
                        <>
                            <Link href="/cart">
                                <Button
                                    icon={<ShoppingCart />}
                                    aria-label="Shopping Cart"
                                    type="secondary"
                                    width="100%"
                                    scale={1.5}
                                    mb={0.5}
                                    style={{ border: 'none' }}
                                />
                            </Link>
                            <Link href="/user">
                                <Button
                                    icon={<User />}
                                    aria-label="Toggle Theme"
                                    type="secondary"
                                    width="100%"
                                    scale={1.5}
                                    style={{ border: 'none' }}
                                />
                            </Link>
                        </>
                    ) : (
                        <>
                            <Button
                                icon={<LogIn />}
                                aria-label="Login Button"
                                type="secondary"
                                style={{ border: 'none' }}
                                width="100%"
                                scale={1.5}
                            />
                        </>
                    )}
                </Drawer.Content>
            </Drawer>
            <style jsx global>
                {`
                    .btn-group > button {
                        width: 100% !important;
                    }
                `}
            </style>
        </>
    )

    const Binder = ({ children }) => (
        <>
            {config && i18n && (
                <>
                    <nav className="Navigation">{children}</nav>
                    <Submenu config={config} i18n={i18n} sticky={sticky} />
                    <style jsx global>
                        {`
                            .Navigation {
                                display: flex;
                                align-items: center;
                                justify-content: space-between;
                                width: ${config.theme.width};
                                max-width: 100%;
                                margin: 0 auto;
                                padding: 2rem ${theme.layout.pageMargin};
                                height: 55px;
                                box-sizing: border-box;
                            }
                            .Navigation > div {
                                display: flex;
                                align-items: center;
                            }
                            .MainDropdown {
                                margin-left: ${isLocaleRTL(locale)
                                    ? ''
                                    : '0.5rem'};
                                margin-right: ${isLocaleRTL(locale)
                                    ? '0.5rem'
                                    : ''};
                            }
                            .MainDropdown > button {
                                white-space: nowrap;
                            }
                        `}
                    </style>
                </>
            )}
        </>
    )

    return <Binder>{width > 650 ? <TabletNav /> : <PhoneNav />}</Binder>
}
