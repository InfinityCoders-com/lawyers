import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { LawyerCard } from '../styled'

interface IListing {
    listing: any
    count: 0
    lawyersState: any
}

export function Listing({
    listing,
    count,
    lawyersState
}: IListing) {
    return (
        <Flex flexDirection="column">
            <Text>Count: {lawyersState.isLoading ? '...' : count}</Text>
            {listing.map((lawyer: any) => {
                const experience = parseInt(lawyer.experience || 0)
                return (
                    <LawyerCard>
                        <Image src={lawyer.profileImg || ''} alt={`${lawyer.first_name} ${lawyer.last_name}`} />
                        <Flex flexDirection="column">
                            <Text color="#222" fontSize="md">{`${lawyer.first_name} ${lawyer.last_name}`}</Text>
                            <Flex justifyContent="space-between" width="150px">
                                <Text color="#727272" fontSize="sm">{lawyer.practising ? 'Practising' : '-'}</Text>
                                <Text fontSize="sm">{experience} {experience > 1 ? 'Yrs' : 'Yr'}</Text>
                            </Flex>
                        </Flex>                    
                    </LawyerCard>
                )
            })}
        </Flex>
    )
}
