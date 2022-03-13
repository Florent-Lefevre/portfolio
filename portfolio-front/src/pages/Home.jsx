import React from 'react'
import Career from '../components/career/Career'
import MovieList from '../components/movieList/MovieList'
import Profil from '../components/profil/Profil'
import './Home.scss'

const Home = () => {
    return (
        <div className='Home'>
            <Profil />
            <Career />
            <MovieList /> 
        </div>
    )
}

export default Home