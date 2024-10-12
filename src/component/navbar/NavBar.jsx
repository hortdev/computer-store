import "./NavBar.css"
import { SearchOutlined, } from "@ant-design/icons"

const NavBar = () => {
    return(
        <div>
            <div className="first-nav">All products are original and brand New.</div>
            <div className="nav-bar">
                <div className="search-icon">
                    <SearchOutlined />
                </div>
                <div className="a-tag">
                    <a id="a-underline" href="">Home</a>
                    <a id="a-underline" href="">Brands</a>
                    <a id="a-underline" href="">Categories</a>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default NavBar;