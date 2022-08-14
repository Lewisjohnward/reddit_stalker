import styled from "styled-components"
import avatar from "../../assets/images/avatar.png"
import {Interaction} from "./components/Interaction"

const Container = styled.div`
    background: ${({theme}) => theme.lightblue};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 30px;



     * {
        color: white;
        border-radius: 5px;
    }

`
const PicContainer = styled.div`
    margin-top: 5px;
`
const Pic = styled.img`
    width: 100px;
    border-radius: 50px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.2);
`

const DetailsContainer = styled.div`
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;


`
const Joined = styled.div`
    
`

const UsernameContainer = styled.div`
`

const Username = styled.div`
    font-family: ${({theme}) => theme.font};
    font-size: 16px;

`

const SubBio = styled.div`
    font-size: 0.8rem;
    margin-bottom: 20px;
`

const Bio = styled.div`
`

const InfoContainer = styled.div`
    width: 500px;
`

const KarmaContainer = styled.div`
    display: flex;
    justify-content: space-around;

    margin: 10px 0px;
    padding: 10px 0px;

    background: ${({theme}) => theme.darkblue};
`
const GenContainer = styled.div``

const Text = styled.p`
    font-size: 0.9rem;
`
const Bold = styled.p`
    font-size: 1.1rem;
    font-weight: 900;
`

const InteractionContainer = styled.div`
    padding: 5px 0px;
    background: ${({theme}) => theme.darkblue};
  
`

export const Results = ({user, data, error}) => {

    if(!data) return null

    //posts = t1
    //

//    console.log(data.data)
    //console.log(data.data.children[0])
    //console.log(data.data.children[0].data.subreddit)


    const typeConvert = (code) => {
        switch(code){
            case "t1":
                return "comment"
                break
            case "t3":
                return "post"
                break
        }
    }

    const arrayOfSubs = []
    data.data.children.forEach(d => {
        const sub = d.data.subreddit
        const type = typeConvert(d.kind)
        const date = new Date(d.data.created * 1000)
        const today = new Date()
        const oneDay = 24 * 60 * 60 * 1000
        const diffDays = Math.round(Math.abs((date - today) / oneDay))

        const obj = {
            sub,
            type,
            date,
            diffDays

        }


        arrayOfSubs.push(obj)
    })  



    return (
        <Container>
            <PicContainer>
                <Pic src={avatar}/>
            </PicContainer>
            <InfoContainer>
                <DetailsContainer>
                    <UsernameContainer>
                        <Username>{data.user}</Username>
                        <SubBio>User bio</SubBio>
                        <Bio>This profile has no bio</Bio>
                    </UsernameContainer>
                    <Joined>Joined - unkown</Joined>
                </DetailsContainer>
                <KarmaContainer>
                    <GenContainer>
                        <Text>Followers</Text>
                        <Bold>100</Bold>
                    </GenContainer>
                    <GenContainer>
                        <Text>Karma</Text>
                        <Bold>100</Bold>
                    </GenContainer>
                    <GenContainer>
                        <Text>Active</Text>
                        <Bold>100</Bold>
                    </GenContainer>
                </KarmaContainer>
                <InteractionContainer>
                    <Interaction array={arrayOfSubs} />
                    <ViewSelector />
                </InteractionContainer>
            </InfoContainer>
        </Container>
    )
}

const DotContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;

    > * {
        margin-right: 10px;
    }

`

const Dot = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background: white;
`
const ViewSelector = () => {
    return (
        <DotContainer>
            <Dot />
            <Dot />
            <Dot />
        </DotContainer>
    )
}
