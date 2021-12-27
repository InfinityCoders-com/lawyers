import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { LawyerCard } from '../styled'
import LawyerUserIcon from '../../../assets/images/download.png'
import { fullName } from '../../../utility/string'
import { Link } from 'react-router-dom'


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
        <React.Fragment>
            <Text>Count: {lawyersState.isLoading ? '...' : count}</Text>
            {listing.map((lawyer: any,i: number) => {
                const experience = parseInt(lawyer.experience || 0)
                return (
                    <Link to={{pathname:'/vakeel-profile', state: lawyer}} key={i}>
                        <LawyerCard>
                            <Image
                                src={lawyer.profileImg || ''}
                                fallbackSrc={LawyerUserIcon}
                                alt={fullName(lawyer.first_name, lawyer.middle_name, lawyer.last_name)}
                            />
                            <Flex flexDirection="column">
                                <Text color="#3BA66C" fontWeight={600} fontSize="2xl">{fullName(lawyer.first_name, lawyer.middle_name, lawyer.last_name)}</Text>
                                <Text color="#727272" fontSize="sm">{lawyer.academic_degrees?.join(', ')}</Text>
                                <Text color="#727272" fontSize="sm">{`${lawyer.city}, ${lawyer.state}`}</Text>
                                <Flex justifyContent="space-between" p={1} width="95%">
                                    <Text color="#727272" fontSize="sm">{lawyer.practising ? 'Practising' : '-'}</Text>
                                    <Text fontSize="sm">{experience} {experience > 1 ? 'Yrs' : 'Yr'}</Text>
                                </Flex>
                                <Text color="#727272">{lawyer.email}</Text>
                            </Flex>
                        </LawyerCard>
                    </Link>
                )
            })}
        </React.Fragment>
    )
}
