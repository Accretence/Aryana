import { memo } from 'react'

import Footer from './Footer.js'
import Header from './Header.js'
import Wrapper from './Wrapper.js'

export default memo(({ essentials, children }) => (
    <>
        <Header essentials={essentials} />
        <Wrapper essentials={essentials}>{children}</Wrapper>
        <Footer essentials={essentials} />
    </>
))
