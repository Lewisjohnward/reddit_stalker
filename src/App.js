import {useEffect, useState} from "react"
import GlobalStyle from "./GlobalStyles"
import styled from "styled-components"
import {Title} from "./components/Title"
import {Search} from "./components/search/Search"
import {Results} from "./components/results/Results"

const Page = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0px 500px;
`

const Feature = styled.div`
    > * {
        margin-bottom: 10px;
        border-radius: 5px;
    }
`

const App = () => {
    const [user, setUser] = useState("lostpollen")
    const [data, setData] = useState()
    const [searching, setSearching] = useState(false)

    const [error, setError] = useState(false)

    useEffect(() => {
        handleSearch()
    }, [])


    const handleSearch = () => {
        fetch(`https://www.reddit.com/user/${user}/.json`)
            .then(res => res.json())
            .then(data => setData(data))
    }

    useEffect(() => {
        if(!data) return
        console.log(data)
        data.error == 404 ? setError(true) : setError(false)
    }, [data])
    return (
        <>
            <GlobalStyle />
            <Page>
                <Feature>
                    <Title />
                    <Search user={user} setUser={setUser} handleSearch={handleSearch} searching={searching}/>
                    <Results />
                </Feature>
            </Page>
        </>
    )
}

export default App
