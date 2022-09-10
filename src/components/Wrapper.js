import { Spacer, useTheme } from '@geist-ui/core'

import {
    isLocaleRTL,
    getLocaleDirection,
    getLocaleAlignment,
} from '../helpers/index.js'

export default function Wrapper({ essentials, children }) {
    const { config, i18n, useThemeProvider, useAuth, useRouter, Link, Head } =
        essentials

    const theme = useTheme()
    const {
        locale = config.defaultLocale,
        locales,
        pathname,
        asPath,
        query,
    } = useRouter()

    return (
        <>
            <div className="PageContent">
                <Spacer />
                {children}
                <Spacer />
            </div>
            <style jsx global>
                {`
                    html,
                    body {
                        background-color: ${theme.type == 'light'
                            ? config.theme.lightBackground
                            : config.theme.darkBackground}!important;
                    }

                    @font-face {
                        font-family: 'Inter';
                        src: url('/fonts/Inter/Inter.woff2');
                    }

                    @font-face {
                        font-family: 'Yekan';
                        src: url('/fonts/Yekan/Yekan.woff');
                    }

                    html,
                    body,
                    a,
                    p,
                    small,
                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6,
                    dd,
                    dt,
                    dl {
                        font-family: 'Inter', 'Yekan', -apple-system,
                            BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                            'Helvetica Neue', sans-serif !important;
                    }

                    .PageContent {
                        width: ${config.theme.width};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        box-sizing: border-box;
                    }
                    .AccentDivider > span {
                        background-color: ${theme.palette.accents_1} !important;
                        color: ${theme.palette.accents_4} !important;
                    }
                    .clear-icon > svg {
                        color: ${theme.palette.code} !important;
                    }
                    a {
                        color: ${theme.palette.code} !important;
                        transition: color 0.3s ease;
                    }
                    a:hover {
                        color: ${theme.palette.accents_4} !important;
                    }
                    .Peculiar {
                        color: ${theme.palette.accents_6}!important;
                    }
                    .Peculiar:hover {
                        color: ${theme.palette.code}!important;
                    }
                    .FooterLink {
                        color: ${theme.palette.accents_4} !important;
                        transition: color 0.3s ease;
                    }
                    .FooterLink:hover {
                        color: ${theme.palette.code} !important;
                    }
                    .Bread {
                        display: flex;
                        justify-content: start;
                        text-align: ${getLocaleAlignment(locale)};
                        direction: ${getLocaleDirection(locale)};
                    }
                    .Bread a {
                        color: ${theme.palette.accents_4} !important;
                        transition: color 0.3s ease;
                    }
                    .Bread a:hover {
                        color: ${theme.palette.code} !important;
                    }
                    .Bread > span {
                        white-space: nowrap;
                    }
                    table {
                        overflow: scroll !important;
                    }
                    .avanti > .item {
                        justify-content: ${isLocaleRTL(locale)
                            ? 'end'
                            : 'start'};
                    }
                    input::placeholder {
                        text-align: ${isLocaleRTL(locale) ? 'right' : 'left'};
                        direction: ${getLocaleDirection(locale)} !important;
                    }

                    .collapse > .view > .title > h3 {
                        position: ${isLocaleRTL(locale) &&
                        'absolute !important'};
                        right: ${isLocaleRTL(locale) && '2.5rem !important'};
                        direction: ${getLocaleDirection(locale)};
                        text-align: ${getLocaleAlignment(locale)};
                    }
                    .collapse > .view {
                        margin-bottom: ${isLocaleRTL(locale) &&
                        '0.6em !important'};
                    }
                    .collapse > .view > .subtitle {
                        direction: ${getLocaleDirection(locale)};
                        text-align: ${getLocaleAlignment(locale)};
                        margin-top: ${isLocaleRTL(locale) &&
                        '0.6rem !important'};
                    }
                    .collapse > .container > .content {
                        display: flex;
                        justify-content: start;
                        direction: ${getLocaleDirection(locale)};
                        text-align: start;
                    }
                    tbody > tr:last-child > td {
                        border-bottom: none !important;
                    }
                `}
            </style>
        </>
    )
}
