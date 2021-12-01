import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { AuthLayout } from '../components/AuthLayout';

export function Signup() {
    console.log('Signup');
    function onSubmit() {}
    return (
        <Flex direction="column" align="center" height="100%" pt="5vh">
            <Text fontSize="24" pb={"5px"}>SIGN UP</Text>
            <AuthLayout signup onSubmit={onSubmit} submitText="SignUp" />
        </Flex>
    )
}
