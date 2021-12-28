import { Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import LawyerUserIcon from '../../../assets/images/download.png'
import { LawyerCard } from '../../Home/styled'

export function VakeelProfile(props: any) {
    console.log(props);
    // const filteredList = lawyersState?.data?.content.filter
    const data = props.location.state;
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
                            <Text color="#3BA66C" fontWeight={600} fontSize="2xl">{data.first_name} {data.last_name}</Text>
                            <Text color="#727272" fontSize="sm"><b>Address:</b> {data.address_line_1}, {data.address_line_2}, <br /> {data.city}, {data.state} </Text>
                            <Text color="#727272" fontSize="sm"><b>Mobile:</b> {data.phone_number} {data.secondary_phone}</Text>
                            <Text color="#727272"></Text>
                        </Flex>
                    </LawyerCard>
            </Flex>
        </Flex>
    )
}
