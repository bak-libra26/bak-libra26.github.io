import '../styles/home-hero.css';


const HomeHero = () => {
    return (
        <section className="home-hero">
            <p className="home-hero__kicker">개발 블로그</p>
            <p className="home-hero__title">
                개발하는 고양이는
                <br/>
                <span className="home-hero__subtitle">줄여서 개고양</span>
            </p>

            <p className="home-hero__caption">개고냐옹냐옹</p>
        </section>
    )
}

export default HomeHero;