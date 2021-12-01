import { Flex } from '@chakra-ui/react'
import styled from '@emotion/styled'
import AdvocateBadge from './../../assets/images/AdvocateBadge.png'

export const HomeWrapper = styled(Flex)`
    background-image: url(${AdvocateBadge});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 40vmin auto;
`

export const BestPicksWrapper = styled.div`
    border: 2px solid #C9DEF2;
    background: #fff;
    box-shadow: inset 0px 0px 0px 10px #222;
    border-radius: 32px;
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
