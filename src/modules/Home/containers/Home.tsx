import React, { useState } from 'react'
import { Flex } from '@chakra-ui/react'
import {
    useQuery
} from 'react-query'  
import { Search } from '../components/Search'
import { BestPick } from './BestPick'
import { Filters } from './Filters'
import { CitySelect } from '../components/CitySelect'
import { HomeWrapper } from '../styled'
import axios from 'axios'
import { API_URLS } from '../../../config/constants'
import { Listing } from './Listing'

const res = {
    "content": [
        {
            "id": 4,
            "first_name": "Nitish",
            "last_name": "Gupta",
            "email": "221a8@gmail.com",
            "phone_number": 4,
            "role_name": "advocate",
            "salutation": "Mr",
            "middle_name": "Kumar",
            "address_line_1": "Delhi",
            "address_line_2": "",
            "city": "Delhi",
            "state": "Delhi",
            "country": "India",
            "pincode": 110007,
            "secondary_phone": "",
            "academic_degrees": [
                "a",
                "b",
                "c"
            ],
            "experience": "",
            "practicing": ""
        }
    ],
    "meta": {
        "total_entries": 1
    }
}

export function Home() {
    const [city, setCity] = React.useState()
    async function fetchLawyers() {
        try {
            const response = await axios.get(API_URLS.Lawyers.list)
            return response.data
        } catch(error) {
            return res
        }
    }

    const lawyersState = useQuery('lawyersListing', fetchLawyers)
    console.log(lawyersState, lawyersState?.data?.content)
    
    return (
        <HomeWrapper flexDirection="column">
            <Flex p={15}>
                <Flex width="max(30vw, 300px)">
                    <CitySelect
                        city={city}
                        setCity={setCity}
                        listing={lawyersState?.data?.content || []}
                    />
                </Flex>
                <Flex width="max(40vw, 450px)">
                    <Search />
                </Flex>
                <Flex width="max(25vw, 250px)"></Flex>
            </Flex>
            <Flex p={15} style={{ position: 'relative' }}>
                <Flex justifyContent="flex-end" width="max(30vw, 300px)">
                    <Filters listing={lawyersState?.data?.content || []}/>
                </Flex>
                <Flex width="max(40vw, 450px)">
                    <Listing
                        lawyersState={lawyersState}
                        listing={lawyersState?.data?.content || []}
                        count={lawyersState?.data?.meta?.total_entries || 0}
                    />
                </Flex>
                <Flex width="max(25vw, 250px)">
                    <BestPick listing={lawyersState?.data?.content || []} />
                </Flex>
            </Flex>      
        </HomeWrapper>
    )
}
