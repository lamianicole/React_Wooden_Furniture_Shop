import './Home.css'

const Home = () => {
    return ( 
        <section>
            <img className="pink-background" src="./img/pinkRectangle.png" alt="pink background" />
            <article className='home-article'>
                <div className="left-part">
                    <p>Are you looking for <span>wooden</span></p> 
                    <p><span>furniture</span> for your place?</p>
                    <div>
                        <h1>This is the Right Place</h1>
                    </div>
                    <button>Explore Categories</button>
                </div>
                <div className='right-part'>
                    <img src="./img/Home.png" alt="Tisch" />
                </div>
            </article>
        </section>
    );
}

export default Home;