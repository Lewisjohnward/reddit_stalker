import styled, {keyframes, css} from "styled-components"
import {BsSearch} from "react-icons/bs"

const Container = styled.div`
    background: #4d78bd;
    width: 500px;
    padding: 5px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const SearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    > * {
        margin-right: 10px;
    }

`

const SearchIco = styled(BsSearch)`
        color: #284f8f;
        font-size: 1.2rem;
`

const Input = styled.input`
    display: block;
    color: white;
    font-family: 'Silkscreen';
    font-size: 1rem;
`

const flash = keyframes`
    0%{opacity: 1;}
    50%{opacity: 0;}
    100%{opacity: 1;}
`
const complex = css`
    animation: ${flash} 1s;
`

const Button = styled.button`
    background: #92bcf7;
    border-radius: 5px;
    color: white;
    padding: 4px 10px;
    font-size: 1.1rem;

    ${({searching}) => searching && complex}

    &:hover{
        cursor: pointer;
    }
`



export const Search = ({user, setUser, handleSearch, searching}) => {

    const handleChange = (e) => {

        setUser(e.target.value)
    }
    const handleClear = () => {
        setUser("")
    }
    const handleRestore = () => {
        user == "" && setUser("Search Reddit username")
    }
    return (
        <Container>
            <SearchContainer>
                <SearchIco />
                <Input 
                    value={user}
                    onFocus={() => handleClear()}
                    onChange={(e) => handleChange(e)}
                    onBlur={() => handleRestore()}

                />
            </SearchContainer>
            <Button onClick={() => handleSearch()} searching={searching}>Search</Button>
        </Container>
    )
}
