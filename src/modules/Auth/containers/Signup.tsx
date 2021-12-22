import { Flex, Text, Input, Select, Divider, NumberInput, NumberInputField, Button } from '@chakra-ui/react';
import React from 'react'
import axios from 'axios'
import { AuthLayout } from '../components/AuthLayout';
import { API_URLS } from '../../../config/constants';
import { setUserDetails } from '../../../utility/storage';
import { RoutesPath } from '../../../config/routes';
import { RouterProps } from 'react-router';

export function Signup(props: RouterProps) {
    console.log('Signup');
    const { history } = props
    const [signUpState, setSignUpState] = React.useState({ email : '', password : '', error : '', salutation : '',  firstName : '',  middleName : '',  lastName : '',  address1 : '',  address2 : '',  city : '',  state : '',  country : '',  pincode : '',  mobileNumber1 : '',  mobileNumber2 : '', recoveryAnswer : '', passwordconfirm : ''});
    function onChange(e: any) {
        console.log(e.target.name, e.target.value);
        setSignUpState({ ...signUpState, [e.target.name]: e.target.value.trim() })
    }
    async function onSubmit() {
        if(signUpState.email && signUpState.password && signUpState.firstName.length && signUpState.lastName.length && signUpState.address1.length && signUpState.city.length && signUpState.state.length && signUpState.country.length && signUpState.pincode.length && signUpState.mobileNumber1.length && signUpState.recoveryAnswer.length && signUpState.passwordconfirm.length && (signUpState.password == signUpState.passwordconfirm)){
            console.log('inside IF');
            try {
                console.log('inside TRY');
                const payload: any = { ...signUpState }
                delete payload.error
                const response = await axios.post(`${API_URLS.Auth.signin}`, payload)
                if(response.status === 200 && response.data.auth_token) {
                    setUserDetails(JSON.stringify(response.data))
                    history.replace(RoutesPath.HOME)
                }
                setSignUpState({ ...signUpState, error: '' })
            } catch(error: any) {
                console.log('inside CATCH');
                if (error.response?.status === 401) {
                    setSignUpState({ 
                        ...signUpState,
                        error: error.response?.data?.error?.user_authentication || "UserName or Password invalid."
                    })
                }
                console.error('Error signing in:', error.response, error.response.data)
            }
        } else if (!signUpState.email) {
            setSignUpState({ ...signUpState, error: 'Email is required.' })
        } else if (!signUpState.password) {
            setSignUpState({ ...signUpState, error: 'Password is required.' })
        } else if (!signUpState.passwordconfirm) {
            setSignUpState({ ...signUpState, error: 'Please confirm your password.' })
        } else if (!signUpState.recoveryAnswer) {
            setSignUpState({ ...signUpState, error: 'Recovery Answere is required.' })
        } else if (!signUpState.firstName) {
            setSignUpState({ ...signUpState, error: 'FirstName is required.' })
        } else if (!signUpState.lastName) {
            setSignUpState({ ...signUpState, error: 'LastName is required.' })
        } else if (!signUpState.address1) {
            setSignUpState({ ...signUpState, error: 'Address is required.' })
        } else if (!signUpState.city) {
            setSignUpState({ ...signUpState, error: 'City is required.' })
        } else if (!signUpState.state) {
            setSignUpState({ ...signUpState, error: 'State is required.' })
        } else if (!signUpState.country) {
            setSignUpState({ ...signUpState, error: 'County is required.' })
        } else if (!signUpState.pincode) {
            setSignUpState({ ...signUpState, error: 'Pincode is required.' })
        } else if (!signUpState.mobileNumber1) {
            setSignUpState({ ...signUpState, error: 'Mobile Number is required.' })
        }
    }
    // console.log(signUpState);

    return (
        <Flex direction="column" align="center" height="100%" pt="5vh">
            <Text fontSize="24" pb={"5px"}>SIGN UP</Text>
            <Flex direction="column" border="1px solid #d5d5d5" p="max(2vmax, 15px)" borderRadius="15">
                <Input placeholder="Email (Username)" name="email" onChange={onChange} value={signUpState.email} mb={1}/>
                <Input type="password" name="password" placeholder="Password" onChange={onChange} value={signUpState.password} mb={1} />
                <Input type="password" name="passwordconfirm" placeholder="Re-Type Password" onChange={onChange} value={signUpState.passwordconfirm} mb={1} />
                <>        
                    <Select placeholder="Password Recovery Question" mb={1}>
                        <option value="What was the name of your first school?">What was the name of your first school?</option>
                        <option value="Who was your childhood hero?">Who was your childhood hero?</option>
                        <option value="Month you were born?">Month you were born?</option>
                        <option value="What is your favorite pastime?">What is your favorite pastime?</option>
                        <option value="Who is your favorite actor?">Who is your favorite actor?</option>
                        <option value="What is your favorite food?">What is your favorite food?</option>
                    </Select>
                    <Input placeholder="Password Recovery Answer" name="recoveryAnswer" onChange={onChange} value={signUpState.recoveryAnswer} mb={1} />
                    <Input placeholder="Salutation" name="salutation" onChange={onChange} value={signUpState.salutation} mb={1} />
                    <Input placeholder="First Name" name="firstName" onChange={onChange} value={signUpState.firstName} mb={1} />
                    <Input placeholder="Middle Name" name="middleName" onChange={onChange} value={signUpState.middleName} mb={1} />
                    <Input placeholder="Last Name" name="lastName" onChange={onChange} value={signUpState.lastName} mb={1} />
                    <Input placeholder="Address Line 1" name="address1" onChange={onChange} value={signUpState.address1} mb={1} />
                    <Input placeholder="Address Line 2 (Optional)" name="address2" onChange={onChange} value={signUpState.address2} mb={1} />
                    <Input placeholder="City" name="city" onChange={onChange} value={signUpState.city} mb={1} />
                    <Input placeholder="State" name="state" onChange={onChange} value={signUpState.state} mb={1} />
                    <Input placeholder="Country" name="country" onChange={onChange} value={signUpState.country} mb={1} />
                    <Input placeholder="Pincode" name="pincode" onChange={onChange} value={signUpState.pincode} mb={1} />
                    <NumberInput>
                        <NumberInputField placeholder="Mobile Primary Number" name="mobileNumber1" onChange={onChange} value={signUpState.mobileNumber1} mb={1} />
                    </NumberInput>
                    <NumberInput>
                        <NumberInputField  placeholder="Mobile Secondary Number" name="mobileNumber2" onChange={onChange} value={signUpState.mobileNumber2} mb={1}/>
                    </NumberInput> 
                </>
                {signUpState.error ? <Text color="red"><sup>*</sup>{signUpState.error}</Text> : null}
                <Button colorScheme="blue" onClick={onSubmit} mb={1}>Sign Up</Button>
            </Flex>
        </Flex>
    )
}
