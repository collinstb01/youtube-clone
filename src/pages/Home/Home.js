import React, { useState } from 'react'
import Feeds from '../../components/Feeds'
import Navbar from '../../components/Navbar'

const Home = () => {
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            < Navbar toggle={toggle} setToggle={setToggle} />
            < Feeds toggle={toggle} setToggle={setToggle} />
        </div>
    )
}

export default Home