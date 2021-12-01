import { Avatar, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BestPicksWrapper } from '../styled'
import { StarIcon } from '@chakra-ui/icons'

export function BestPick() {
    const lawyers = [{
        img: '',
        name: 'Adam Apple',
        category: 'Crime',
        experience: '5yr'
    },{
        img: '',
        name: 'Brias Baydon',
        category: 'Property',
        experience: '3.5yr'
    },{
        img: '',
        name: 'Mike Taylor',
        category: 'Cyber',
        experience: '3yr'
    },{
        img: '',
        name: 'Houston Harris',
        category: 'Financial',
        experience: '2.5yr'
    },{
        img: '',
        name: 'Lucy James',
        category: 'Fashion Industry',
        experience: '2yr'
    },{
        img: '',
        name: 'Travis Hound',
        category: 'Patent',
        experience: '1.8yr'
    }]
    return (
        <BestPicksWrapper>
            <Flex mt={6} mb={6} justifyContent="center" alignItems="center">
                <StarIcon color="#4DB359" mr={3} w="20px" h="20px" />
                <Text fontSize="20" fontFamily="Raleway">Our Top Picks</Text>
            </Flex>
            {lawyers.map((lawyer: any, i: number) => (
                <Flex p={2} alignItems="center" key={i}>
                    <Avatar
                        mr={3}
                        size="sm"
                        name={lawyer.name}
                        src={lawyer.img}
                    />
                    <Flex flexDirection="column">
                        <Text color="#222" fontSize="md">{lawyer.name}</Text>
                        <Flex justifyContent="space-between" width="150px">
                            <Text color="#727272" fontSize="sm">{lawyer.category}</Text>
                            <Text fontSize="sm">{lawyer.experience}</Text>
                        </Flex>
                    </Flex>
                </Flex>
            ))}
        </BestPicksWrapper>
    )
}
