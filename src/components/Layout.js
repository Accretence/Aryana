import Crown from './Crown.js'
import Footer from './Footer.js'
import Header from './Header.js'
import Helmet from './Helmet.js'
import Wrapper from './Wrapper.js'

export default ({ essentials, children }) => (
    <>
        <Helmet essentials={essentials} />
        <Header essentials={essentials} />
        <Crown essentials={essentials} />
        <Wrapper essentials={essentials}>{children}</Wrapper>
        <Footer essentials={essentials} />
    </>
)
