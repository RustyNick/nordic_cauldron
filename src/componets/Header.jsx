import ImageLogo from '../assets/NordicCauldron-greyLogo.png'

export default function Header(){
    return(
        <header>
            <div className='header-inner'>
                <div className='logo'>
                    <img src={ImageLogo} alt="Nordic Cauldron"/>
                </div>
                <div>CART (0)</div>
            </div>
        </header>
    );
}