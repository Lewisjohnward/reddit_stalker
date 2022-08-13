import {useState} from "react"
import styled from "styled-components"
import {TbBrandReddit} from "react-icons/tb"
import {MdLightMode, MdOutlineLightMode} from "react-icons/md"

const Container = styled.div`
    text-align: left;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Header = styled.h1`
    color: white;
    font-weight: 600;
`

const RedditIco = styled(TbBrandReddit)`
    color: orange;
    font-size: 3rem;
    transform: rotate(-30deg);
    filter: drop-shadow(0px 0px 1px black)
`
const IcoContainer = styled.div`
    color: white;
    font-size: 1.5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

`



export const Title = () => {
    const [light, setLight] = useState(false)

    return (
        <Container>
            <HeaderContainer>
                <Header>
                Reddit Stalker
                </Header>
            <RedditIco />
            </HeaderContainer>
            <IcoContainer onClick={() => setLight(prev => !prev)}>
                {
                    light ?
                        <MdOutlineLightMode />
                        :
                        <MdLightMode />
                }
            </IcoContainer>

        </Container>
    )
}

