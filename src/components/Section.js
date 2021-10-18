import styled from "styled-components"
import {Fade, Slide } from 'react-reveal'

const Section = ({title, description, backgroundImg, leftBtnText, rightBtnText}) => {
    return (
        <Wrap bgImage={backgroundImg}>
            <ItemText>
                <Slide bottom delay={1000}>
                    <h1>{title}</h1>
                </Slide>
                <Fade delay={2000}>
                    <p>{description}</p>
                </Fade>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <Fade left distance="50px" delay={2000}>
                        <LeftButton>
                            {leftBtnText}
                        </LeftButton>
                    </Fade>
                    <Fade right distance="50px" delay={2000}>
                        { rightBtnText && 
                            <RightButton>
                                {rightBtnText}
                            </RightButton>
                        }
                    </Fade>
                </ButtonGroup>
                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-item: center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 20vh;
    text-align: center;

    p {
        font-size: 14px;
        margin: 10px;
    }
`

const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`

const LeftButton = styled.div`
    background-color: #333334;
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
`

const RightButton = styled(LeftButton)`
    background-color: #E0DDDC;
    color: #393C41;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 25px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div`
margin-bottom: 30px;
`