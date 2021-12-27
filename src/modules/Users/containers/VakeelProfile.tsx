import { Flex, Image, Text, Button } from '@chakra-ui/react'
import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { API_URLS } from '../../../config/constants'
import { LawyerCard } from '../../Home/styled'
import { Link } from 'react-router-dom'
import LawyerUserIcon from '../../../assets/images/download.png'

export function VakeelProfile(props: any) {
    console.log(props);
    // const filteredList = lawyersState?.data?.content.filter
    return (
        <Flex direction="column" align="center" height="100%" pt="5vh">
            <Text fontSize="24" pb={"5px"}></Text>
            <Button colorScheme="blue" onClick={() => props.history.goBack()} mb={1}>Back</Button>
            <Flex direction="column" border="1px solid #d5d5d5" p="max(2vmax, 15px)" borderRadius="15">
                    <LawyerCard>
                        <Image
                            src={LawyerUserIcon}
                            fallbackSrc={LawyerUserIcon}
                        />
                        <Flex flexDirection="column">
                            <Text color="#3BA66C" fontWeight={600} fontSize="2xl">FName LName</Text>
                            <Text color="#727272" fontSize="sm"><b>Address:</b> House no 269/7, Village Fatehpur Chandila, Near Sector 21/B, Faridabad</Text>
                            <Text color="#727272" fontSize="sm"><b>Mobile:</b> +9717822270</Text>
                            <Text color="#727272"></Text>
                        </Flex>
                    </LawyerCard>
            </Flex>
        </Flex>
    )
}
