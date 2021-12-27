import { Button, Flex, Input, Text } from '@chakra-ui/react';
import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
import { AuthLayout } from '../components/AuthLayout';
import { API_URLS } from '../../../config/constants';
import { setUserDetails } from '../../../utility/storage';
import { RoutesPath } from '../../../config/routes';
import { RouterProps } from 'react-router';

export function Login(props: RouterProps) {
    const { history } = props
    const [signInState, setSignInState] = React.useState({ email: '', password: '', error: ''})
    
    function onChange(e: any) {
        console.log(e.target.name, e.target.value);
        setSignInState({ ...signInState, [e.target.name]: e.target.value.trim() })
    }

    async function onSubmit() {
        if(signInState.email && signInState.password && signInState.password.length){
            try {
                const payload: any = { ...signInState }
                delete payload.error
                const response = await axios.post(`${API_URLS.Auth.signin}`, payload)
                if(response.status === 200 && response.data.auth_token) {
                    setUserDetails(JSON.stringify(response.data))
                    history.replace(RoutesPath.HOME)
                }
            } catch(error: any) {
                if (error.response?.status === 401) {
                    setSignInState({ 
                        ...signInState,
                        error: error.response?.data?.error?.user_authentication || "UserName or Password invalid."
                    })
                }
                console.error('Error signing in:', error.response, error.response.data)
            }
        } else if (!signInState.email) {
            setSignInState({ ...signInState, error: 'Email is required.' })
        } else if (!signInState.password) {
            setSignInState({ ...signInState, error: 'Invalid password.' })
        } else {
            setSignInState({ ...signInState, error: 'Error.' })
        }
    }
    return (
        <Flex direction="column" align="center" height="100%" pt="20vh">
            <Text fontSize="24" pb="5px">LOGIN</Text>
            <Flex direction="column" border="1px solid #d5d5d5" p="max(2vmax, 15px)" borderRadius="15">
                <Input placeholder="Email (Username)" name="email" onChange={onChange} value={signInState.email} mb={1}/>
                <Input type="password" name="password" placeholder="Password" onChange={onChange} value={signInState.password} mb={1} />
                <Button colorScheme="blue" onClick={onSubmit} mb={1}>Login</Button>
                {signInState.error ? <Text color="red"><sup>*</sup>{signInState.error}</Text> : null}
            </Flex>
        </Flex>
    )
}
