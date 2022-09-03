import { Spacer, Text, useTheme } from '@geist-ui/core'

import { getLocaleDirection } from '../helpers/index.js'

export default function ({ essentials, large, small }) {
    const { config, i18n, useThemeProvider, useAuth, useRouter, Link, Head } =
        essentials

    const theme = useTheme()
    const smallComponent = small

    const {
        locale = config.defaultLocale,
        locales,
        pathname,
        asPath,
        query,
    } = useRouter()

    return (
        <>
            <div className="Banner">
                <div style={{ marginTop: '1rem', marginBottom: '3rem' }}>
                    {large && small && (
                        <>
                            <Text
                                h3
                                mb={0}
                                pb={0}
                                style={{
                                    direction: getLocaleDirection(locale),
                                }}
                            >
                                {large.toUpperCase()}
                            </Text>
                            <Text
                                mt={0.2}
                                type="secondary"
                                style={{
                                    fontSize: '0.85rem',
                                    direction: getLocaleDirection(locale),
                                }}
                            >
                                {smallComponent}
                            </Text>
                        </>
                    )}
                </div>
            </div>
            <Spacer />
            <style jsx global>
                {`
                    .Banner {
                        width: ${config.theme.width};
                        max-width: 100%;
                        margin: 0 auto;
                        padding: 0 ${theme.layout.pageMargin};
                        box-sizing: border-box;
                        text-align: justify !important;
                    }
                `}
            </style>
        </>
    )
}
