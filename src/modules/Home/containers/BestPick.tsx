import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BestPicksWrapper } from '../styled'
import { StarIcon } from '@chakra-ui/icons'

interface IBestPick {
    listing: any
}

export function BestPick({
    listing
}: IBestPick) {
    const bestLawyers = React.useMemo(() => {
        return listing.sort((a: any, b: any) => {
            return parseInt(a.experience || 0) - parseInt(b.experience || 0)
        }).slice(0, 10)
    }, [listing]) 
    return (
        <BestPicksWrapper>
            <Flex
                style={{ padding: '2vmax' }}
                mt={6}
                mb={1}
                justifyContent="center"
                alignItems="center"
            >
                <StarIcon color="#4DB359" mr={3} w="20px" h="20px" />
                <Text fontSize="20" fontFamily="Raleway">Our Top Picks</Text>
            </Flex>
            {bestLawyers.map((lawyer: any, i: number) => {
                const experience = parseInt(lawyer.experience || 0)
                return (
                    <Flex p={2} alignItems="center" key={i}>
                        <Avatar
                            mr={3}
                            size="sm"
                            name={`${lawyer.first_name} ${lawyer.last_name}`}
                            src={lawyer.img || ''}
                        />
                        <Flex flexDirection="column">
                            <Text color="#222" fontSize="md">{`${lawyer.first_name} ${lawyer.last_name}`}</Text>
                            <Flex justifyContent="space-between" width="150px">
                                <Text color="#727272" fontSize="sm">{lawyer.practising ? 'Practising' : '-'}</Text>
                                <Text fontSize="sm">{experience} {experience > 1 ? 'Yrs' : 'Yr'}</Text>
                            </Flex>
                        </Flex>
                    </Flex>
                )}
            )}
        </BestPicksWrapper>
    )
}
