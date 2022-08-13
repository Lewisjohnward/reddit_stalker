import styled from "styled-components"

const Container = styled.div`
    width: 100px;
    background: black;

`


export const Results = ({data, error}) => {
    if(!data || error) return null

    //posts = t1
    //

    console.log(data.data.children)
    console.log(data.data.children[0])
    console.log(data.data.children[0].data.subreddit)


    const kindConvert = (code) => {
        switch(code){
            case "t1":
                return "comment"
                break
            case "t3":
                return "post"
                break
        }
    }

    data.data.children.forEach(d => {
        const sub = d.data.subreddit

        const kind = kindConvert(d.kind)


        const date = new Date(d.data.created * 1000)
        console.log(sub,kind, date)
    })  

    return (
        <Container>
            Results
        </Container>
    )
}
