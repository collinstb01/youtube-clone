import React, {useState} from 'react'
import styled from "styled-components"
import Navbar from '../../components/Navbar'
import SearchSreen from '../../components/SearchSreen'
import Sidebar from '../../components/Sidebar'

const Search = () => {

    const [toggle, setToggle] = useState(false);

  return (
    <Main>
        < Navbar toggle={toggle} setToggle={setToggle} />
      <div className="items">
      < Sidebar toggle={toggle} setToggle={setToggle}  />
        < SearchSreen />
      </div>
    </Main>
  )
}

export default Search

const Main = styled.div`
width: 100%;
min-height: 100vh;

.items {
    display: flex;
}
`

