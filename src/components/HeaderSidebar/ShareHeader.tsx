import React from 'react'
import { Box, Flex, Link } from "@chakra-ui/react"
import styled from '@emotion/styled'
import { RoutesPath } from '../../config/routes'

const HeaderPoly = styled(Box)`
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0%  55%);
    padding: 8px 15px;
    min-height: min(10vw, 50px);
`

const SpanLogo = styled.span`
    margin-left: 20px;
    color: #fff;
    cursor: pointer;
    text-shadow: 2px 2px #0d6a39;
    font-family: 'Sacramento';
    font-size: min(10vw, 40px);
    text-transform: capitalize;
`

const HeaderWrapper = styled(Flex)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`

export function ShareHeader(props: any) {
    return (
        <Box style={{ position: 'relative' }}>
            <HeaderPoly p={2} bgGradient="linear(to-r, green.400, green.500)" />
            <HeaderWrapper data-testid="header">
                <Link href={RoutesPath.HOME}>
                    <SpanLogo className="logo">Vakeel</SpanLogo>
                </Link>
            </HeaderWrapper>
        </Box>
    )
}
