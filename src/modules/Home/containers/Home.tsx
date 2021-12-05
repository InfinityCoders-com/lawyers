import { Flex } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
<<<<<<< HEAD
import { useQuery } from 'react-query'
import { API_URLS, initialFilters } from '../../../config/constants'
import AppliedFilters from '../components/AppliedFilters'
=======
import {
    useQuery
} from 'react-query'
import { API_URLS, initialFilters } from '../../../config/constants'
>>>>>>> 481e362 (Home, search, filter Listing design, best pick design)
import { CitySelect } from '../components/CitySelect'
import { Search } from '../components/Search'
import { HomeWrapper } from '../styled'
import { BestPick } from './BestPick'
import { Filters } from './Filters'
import { Listing } from './Listing'

export function Home() {
    const [city, setCity] = React.useState()
    const [search, setSearch] = React.useState()
    const [filters, setFilters] = React.useState(initialFilters)
    async function fetchLawyers() {
        try {
            const response = await axios.get(`${API_URLS.Lawyers.list}?role_name=advocate`)
            return response.data
        } catch(error) {
            console.error('Error fetching lawyers:', error)
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
                <AppliedFilters filters={filters} setFilters={setFilters}/>
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
