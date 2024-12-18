import './Footer.css'

// muss hier nun React.FC rein?
const Footer = () => {
    return ( 
        <section>
            <article className='footer'>
                <div className="footer-left">
                    <p className='line'></p>
                    <div className="logo-con">
                        <img src="/img/Logo.png" alt="Logo" />
                    </div>
                    <div className='contact-data'>
                        <p>+379 8364 2837</p> 
                        <p>woodies@goodies.com</p>
                        <p>Woodsbury, Woodlands</p>
                    </div>
                    <div className='copyright'>
                        <p>©️ 2024 WOODIES</p>
                    </div>
                </div>

                <div className='footer-right'>
                    <img src="./img/Footer.png" alt="desk" />
                </div>
            </article>
        </section>
    );
}

export default Footer;