import styled from "styled-components"

const Container = styled.div`
    display: flex;
    margin: 5px 10px;
    justify-content: center;
    font-size: 0.8rem;

    > *{
        width: 150px;
    }


`

export const Interaction = ({array}) => {
    return(
        <>
            {array.map(d => { 
                return (
                    <>
                        <Container>
                        <div>{d.sub}</div>
                        <div>{d.type}</div>
                        <div>{d.diffDays == 0 ?  "today" : `${d.diffDays} days ago`}</div>
                        </Container>
                    </>
                )
            })}
        </>
    )
}
