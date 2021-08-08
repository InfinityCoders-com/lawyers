import React from 'react'
import { Box } from "@chakra-ui/react"
import styled from '@emotion/styled'

const HeaderPoly = styled(Box)`
    clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 45%);
    padding: 8px 15px;
    min-height: 50px;
    span.logo {
        position: absolute;
        top: -10px;
        left: 20px;
        color: #fff;
        text-shadow: 2px 2px 1px 2px green.300;
        font-family: 'Sacramento';
    }
`

function Header() {
    return (
        <Box style={{ position: 'relative' }}>
            <HeaderPoly p={2} bgGradient="linear(to-r, green.400, green.500)" />
            <span className="logo">vakeel</span>
        </Box>
    )
}

export default Header
