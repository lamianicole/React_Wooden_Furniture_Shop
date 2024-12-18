import './About.css'

const About = () => {
    return ( 
        <section>
            <div>
                {/* hier img von figma downloaden about us */}
            </div>

            <div className="about-main">
                <div className='img-con'>
                    <img src="./img/About.png" alt="salat" />
                </div>
                <div className='teaser'>
                    <h2>WOODIES is the home of</h2>
                    <h3>modern wooden furniture</h3>
                    <p>the answer to your need for furniture</p>
                    <p>with spaces, sizes and colors.</p>
                </div>
            </div>
            
        </section>
    );
}

export default About;