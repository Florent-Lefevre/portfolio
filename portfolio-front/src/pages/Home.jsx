import React from 'react'
import Career from '../components/career/Career'
import Profil from '../components/profil/Profil'
import './Home.scss'

const Home = () => {
    return (
        <div className='Home'>
            <Profil />
            <Career />
        </div>
    )
}

export default Home