import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://i.ibb.co/s3b4Zqr/Card-1-zhu.jpg"
                title="Transcend Live Music"
                description="Unique collaboration between artists and audience."
            />
            <Card
                src="https://i.ibb.co/JqjbPkd/Card-2-odesza.jpg"
                title="Curious venues"
                description="Spaces that transcend traditional concert halls."
            />
            <Card
                src="https://i.ibb.co/kxJ1t20/Card-3-tokimonsta.jpg"
                title="Intimate concerts"
                description="Comfortable private places, for friends or family."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://i.ibb.co/q9RLNgc/Card-4-rooftop-bar.jpg"
                title="Summer series concert on bar rooftop "
                description="Enjoy NYC Skyline, play at a rooftop bar you desire"
                price="$200"
            />
            <Card
                src="https://i.ibb.co/wy9q78q/Card-5-Dubai-concert-hall.jpg"
                title="Dubaii Copper Garden"
                description="Enjoy the luxury and play at this esteemed venue with the click of a button"
                price="$5000"
            />
            <Card
                src="https://i.ibb.co/2tzZFyW/Card-5-dubaii.jpg"
                title="Play intimate shows inside someone's home"
                description="Some people want a live show right in the comfort of their own home."
                price="$2000"
            />
            </div>
        </div>
    )
}






export default Home
