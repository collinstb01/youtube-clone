import React, { useState } from 'react'
import Feeds from '../../components/Feeds'
import Navbar from '../../components/Navbar'

const Home = () => {
    const [term, setTerm] = useState('');

    return (
        <div>
            < Navbar term={term} setTerm={setTerm} />
            < Feeds term={term} setTerm={setTerm} />
        </div>
    )
}

export default Home