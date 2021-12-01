import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Search } from '../components/Search'
import { BestPick } from './BestPick'
import { Filters } from './Filters'
import { CitySelect } from '../components/CitySelect'
import { HomeWrapper } from '../styled'

export function Home() {
    return (
        <HomeWrapper flexDirection="column">
            <Flex p={15}>
                <Flex width="max(30vw, 300px)">
                    <CitySelect />
                </Flex>
                <Flex width="max(40vw, 450px)">
                    <Search />
                </Flex>
                <Flex width="max(25vw, 250px)"></Flex>
            </Flex>
            <Flex p={15} style={{ position: 'relative' }}>
                <Flex justifyContent="flex-end" width="max(30vw, 300px)">
                    <Filters />
                </Flex>
                <Flex width="max(40vw, 450px)">
                </Flex>
                <Flex width="max(25vw, 250px)">
                    <BestPick />
                </Flex>
            </Flex>      
        </HomeWrapper>
    )
}
