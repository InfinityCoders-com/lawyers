import { Flex, Grid } from '@chakra-ui/react'
import styled from '@emotion/styled'
import AdvocateBadge from './../../assets/images/AdvocateBadge.png'

export const HomeWrapper = styled(Grid)`
    flex-direction:column;
    background-image: url(${AdvocateBadge});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 40vmin auto;
    margin: 0 auto;
    grid-template-rows: auto;
    overflow: hidden;
    justify-contents: space-evenly;
    align-items: flex-start;
    @media (max-width: 1920px) {
        width: 1400px;
        grid-template-columns: 23% 50% 25%;
        gap: 1%;
    }
    @media (max-width: 1440px) {
        width: 1100px;
        grid-template-columns: 23% 50% 25%;
        gap: 1%;
    }
    @media (max-width: 1200px) {
        width: 900px;
        grid-template-columns: 23% 50% 25%;
        gap: 1%;
    }
    @media (max-width: 920px) {
        width: 800px;
        grid-template-columns: 23% 50% 25%;
        gap: 1%;
    }
`

export const BestPicksWrapper = styled.div`
    border: 2px solid #C9DEF2;
    background: #fff;
    aspect-ratio: 1/2;
    box-shadow: inset 0px 0px 0px 10px #222;
    border-radius: 32px;
    margin: 0 auto;
    padding: 20px 15px 30px;
`

export const FiltersWrapper = styled.div`
    padding: 0 2vmax;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    border-right: 1px solid #ececec;
`

export const FiltersCategory = styled(Flex)`
    padding: 1vmax;
    width: 100%;
    margin: 10px 0;
    flex-direction: column;
    box-sizing: border-box;
    border: 1px solid #ececec;
    border-radius: 4px;
`


export const LawyerCard = styled(Grid)`
    padding: 2vmax;
    width: 100%;
    margin: 1vmax 0;
    grid-gap: 1vmax;
    box-sizing: border-box;
    grid-template-columns: 150px auto;
    background: rgba(255,255,255,.8);
    box-shadow: 0 0 5px 0px #ececec;
    border-radius: 4px;
    img {
        height: 150px;
        width: 150px;
        box-shadow: 0 0 1px 1px #3ba66c;
        margin-right: 1vmax;
        border-radius: 14px;
        object-fit: cover;
        object-position: top;
    }
`
