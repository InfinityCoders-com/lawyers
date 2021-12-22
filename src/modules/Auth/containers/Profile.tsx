import { Flex, Text, Input, Select, Divider, NumberInput, NumberInputField, Button } from '@chakra-ui/react';
import React from 'react'
import axios from 'axios'
import { LawyerCard } from '../../Home/styled';
import { API_URLS } from '../../../config/constants';
import { setUserDetails } from '../../../utility/storage';
import { RoutesPath } from '../../../config/routes';
import { RouterProps } from 'react-router';

export function Profile(props: RouterProps) {
    console.log('Login');

    return (
        <Flex direction="column" align="center" height="100%" pt="5vh">
            <Text fontSize="24" pb={"5px"}>PROFILE</Text>
            <Flex direction="column" border="1px solid #d5d5d5" p="max(2vmax, 15px)" borderRadius="15">
            <LawyerCard>
            </LawyerCard>
            </Flex>
        </Flex>
    )
}
