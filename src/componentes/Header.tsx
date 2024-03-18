import './Header.css'
function Header(){
    return(
        <header>
            <div className="logo">1022 A</div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Informações</a>
                    </li>
                    <li>
                        <a href="#">Listagens</a>
                    </li>
                </ul>
            </nav>
            
        </header>
    )
}
export default Header;