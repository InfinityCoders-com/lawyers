import { Flex } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import {
    useQuery
} from 'react-query'
import { API_URLS, initialFilters } from '../../../config/constants'
import { CitySelect } from '../components/CitySelect'
import { Search } from '../components/Search'
import { HomeWrapper } from '../styled'
import { BestPick } from './BestPick'
import { Filters } from './Filters'
import { Listing } from './Listing'

const res = {
    "content": [
        {
            "id": 3,
            "first_name": "User",
            "last_name": "3",
            "email": "nitish11228@gmail.com",
            "phone_number": 6811335522,
            "role_name": "advocate",
            "salutation": "Mr",
            "middle_name": "",
            "address_line_1": "Delhi",
            "address_line_2": "",
            "city": "Delhi",
            "state": "New Delhi",
            "country": "India",
            "pincode": 110007,
            "secondary_phone": "",
            "academic_degrees": ["B.A.", "LL.B.", "LL.C."],
            "experience": 3,
            "practicing": ""
        },{
            "id": 7,
            "first_name": "User",
            "last_name": "7",
            "email": "nitish11228@gmail.com",
            "phone_number": 6811335522,
            "role_name": "advocate",
            "salutation": "Mr",
            "middle_name": "",
            "address_line_1": "Delhi",
            "address_line_2": 5,
            "city": "Delhi",
            "state": "New Delhi",
            "country": "India",
            "pincode": 110007,
            "secondary_phone": "",
            "academic_degrees": ["B.A.", "LL.B.", "LL.C."],
            "experience": 7,
            "practicing": ""
        },{
            "id": 18,
            "first_name": "User",
            "last_name": "18",
            "email": "nitish11228@gmail.com",
            "phone_number": 6811335522,
            "role_name": "advocate",
            "salutation": "Mr",
            "middle_name": "",
            "address_line_1": "Delhi",
            "address_line_2": "",
            "city": "Delhi",
            "state": "New Delhi",
            "country": "India",
            "pincode": 110007,
            "secondary_phone": "",
            "academic_degrees": ["B.A.", "LL.B.", "LL.C."],
            "experience": 18,
            "practicing": ""
        },{
            "id": 14,
            "first_name": "User",
            "last_name": "14",
            "email": "nitish11228@gmail.com",
            "phone_number": 6811335522,
            "role_name": "advocate",
            "salutation": "Mr",
            "middle_name": "",
            "address_line_1": "Delhi",
            "address_line_2": "",
            "city": "Delhi",
            "state": "New Delhi",
            "country": "India",
            "pincode": 110007,
            "secondary_phone": "",
            "academic_degrees": ["B.A.", "LL.B.", "LL.C."],
            "experience": 14,
            "practicing": ""
        },{
            "id": 16,
            "first_name": "User",
            "last_name": "16",
            "email": "nitish11228@gmail.com",
            "phone_number": 6811335522,
            "role_name": "advocate",
            "salutation": "Mr",
            "middle_name": "",
            "address_line_1": "Delhi",
            "address_line_2": "",
            "city": "Delhi",
            "state": "New Delhi",
            "country": "India",
            "pincode": 110007,
            "secondary_phone": "",
            "academic_degrees": ["B.A.", "LL.B.", "LL.C."],
            "experience": 16,
            "practicing": ""
        },{
            "id": 34,
            "first_name": "User",
            "last_name": "34",
            "email": "nitish11228@gmail.com",
            "phone_number": 6811335522,
            "role_name": "advocate",
            "salutation": "Mr",
            "middle_name": "",
            "address_line_1": "Delhi",
            "address_line_2": "",
            "city": "Delhi",
            "state": "New Delhi",
            "country": "India",
            "pincode": 110007,
            "secondary_phone": "",
            "academic_degrees": ["B.A.", "LL.B.", "LL.C."],
            "experience": 34,
            "practicing": ""
        },{
            "id": 23,
            "first_name": "User",
            "last_name": "23",
            "email": "nitish11228@gmail.com",
            "phone_number": 6811335522,
            "role_name": "advocate",
            "salutation": "Mr",
            "middle_name": "",
            "address_line_1": "Delhi",
            "address_line_2": "",
            "city": "Delhi",
            "state": "New Delhi",
            "country": "India",
            "pincode": 110007,
            "secondary_phone": "",
            "academic_degrees": ["B.A.", "LL.B.", "LL.C."],
            "experience": 23,
            "practicing": ""
        },{
            "id": 0,
            "first_name": "User",
            "last_name": "0",
            "email": "nitish11228@gmail.com",
            "phone_number": 6811335522,
            "role_name": "advocate",
            "salutation": "Mr",
            "middle_name": "",
            "address_line_1": "Delhi",
            "address_line_2": "",
            "city": "Delhi",
            "state": "New Delhi",
            "country": "India",
            "pincode": 110007,
            "secondary_phone": "",
            "academic_degrees": ["B.A.", "LL.B.", "LL.C."],
            "experience": 0,
            "practicing": ""
        }
    ],
    "meta": {
        "total_entries": 1
    }
}

export function Home() {
    const [city, setCity] = React.useState()
    const [search, setSearch] = React.useState()
    const [filters, setFilters] = React.useState(initialFilters)
    async function fetchLawyers() {
        try {
            const response = await axios.get(`${API_URLS.Lawyers.list}?role_name=advocate`)
            return response.data
        } catch(error) {
            return res
        }
    }

    const lawyersState = useQuery('lawyersListing', fetchLawyers)
    console.log(lawyersState, lawyersState?.data?.content)
    // const filteredList = lawyersState?.data?.content.filter
    return (
        <HomeWrapper>
            <Flex>
                <CitySelect
                    city={city}
                    setCity={setCity}
                    listing={lawyersState?.data?.content || []}
                />
            </Flex>
            <Flex>
                <Search listing={lawyersState?.data?.content || []} city={city} search={search} setSearch={setSearch} />
            </Flex>
            <Flex></Flex>
            <Flex>
                <Filters listing={lawyersState?.data?.content || []} filters={filters} setFilters={setFilters}/>
            </Flex>
            <Flex flexDirection="column" ml={15} mr={15}>
                <Listing
                    lawyersState={lawyersState}
                    listing={lawyersState?.data?.content || []}
                    count={lawyersState?.data?.meta?.total_entries || 0}
                />
            </Flex>
            <Flex>
                <BestPick listing={lawyersState?.data?.content || []} />
            </Flex>
        </HomeWrapper>
    )
}
