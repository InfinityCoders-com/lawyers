import { Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { AuthLayout } from '../components/AuthLayout';

export function Login() {
    function onSubmit() {}
    return (
        <Flex direction="column" align="center" height="100%" pt="20vh">
            <Text fontSize="24" pb={"5px"}>LOGIN</Text>
            <AuthLayout login onSubmit={onSubmit} submitText="Login" />
        </Flex>
    )
}
