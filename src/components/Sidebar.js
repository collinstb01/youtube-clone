import React from 'react'
import styled from 'styled-components'
import SidebarItem from "./SidebarItem"
import { AiFillHome } from "react-icons/ai"

const Sidebar = () => {
    return (
        <Container>
            < SidebarItem Icon={AiFillHome} text="HOME" />
            < SidebarItem Icon={AiFillHome} text="Subcribed" />
            < SidebarItem Icon={AiFillHome} text="Like Videos" />
            < SidebarItem Icon={AiFillHome} text="Just to" />
            < SidebarItem Icon={AiFillHome} text="Populate" />
            < SidebarItem Icon={AiFillHome} text="Sidebar" />
            <div className="logout">
                < SidebarItem Icon={AiFillHome} text="HOME" />
            </div>
        </Container>
    )
}

export default Sidebar

const Container = styled.div`
width: 13%;
height: 100vh;
background-color: black;
color: white;
z-index: -1;
position: sticky;
top: 0;
.logout {
    margin-top: 26px;
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
}
`