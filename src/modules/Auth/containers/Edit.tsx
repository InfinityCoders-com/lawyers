import { Flex, Text, Input, Select, Divider, NumberInput, NumberInputField, Button } from '@chakra-ui/react';
import React from 'react'
import axios from 'axios'
import { AuthLayout } from '../components/AuthLayout';
import { API_URLS } from '../../../config/constants';
import { setUserDetails } from '../../../utility/storage';
import { RoutesPath } from '../../../config/routes';
import { RouterProps } from 'react-router';

export function Edit(props: RouterProps) {
    console.log('Signup');
    const { history } = props
    const [editState, setEditState] = React.useState({ email : '', password : '', error : '', salutation : '',  firstName : '',  middleName : '',  lastName : '',  address1 : '',  address2 : '',  city : '',  state : '',  country : '',  pincode : '',  mobileNumber1 : '',  mobileNumber2 : '', recoveryAnswer : '', passwordconfirm : ''});
    function onChange(e: any) {
        console.log(e.target.name, e.target.value);
        setEditState({ ...editState, [e.target.name]: e.target.value.trim() })
    }
    async function onSubmit() {
        if(editState.email && editState.password && editState.firstName.length && editState.lastName.length && editState.address1.length && editState.city.length && editState.state.length && editState.country.length && editState.pincode.length && editState.mobileNumber1.length && editState.recoveryAnswer.length && editState.passwordconfirm.length && (editState.password == editState.passwordconfirm)){
            console.log('inside IF');
            try {
                console.log('inside TRY');
                const payload: any = { ...editState }
                delete payload.error
                const response = await axios.post(`${API_URLS.Auth.signin}`, payload)
                if(response.status === 200 && response.data.auth_token) {
                    setUserDetails(JSON.stringify(response.data))
                    history.replace(RoutesPath.HOME)
                }
                setEditState({ ...editState, error: '' })
            } catch(error: any) {
                console.log('inside CATCH');
                if (error.response?.status === 401) {
                    setEditState({ 
                        ...editState,
                        error: error.response?.data?.error?.user_authentication || "UserName or Password invalid."
                    })
                }
                console.error('Error signing in:', error.response, error.response.data)
            }
        } else if (!editState.email) {
            setEditState({ ...editState, error: 'Email is required.' })
        } else if (!editState.password) {
            setEditState({ ...editState, error: 'Password is required.' })
        } else if (!editState.passwordconfirm) {
            setEditState({ ...editState, error: 'Please confirm your password.' })
        } else if (!editState.recoveryAnswer) {
            setEditState({ ...editState, error: 'Recovery Answere is required.' })
        } else if (!editState.firstName) {
            setEditState({ ...editState, error: 'FirstName is required.' })
        } else if (!editState.lastName) {
            setEditState({ ...editState, error: 'LastName is required.' })
        } else if (!editState.address1) {
            setEditState({ ...editState, error: 'Address is required.' })
        } else if (!editState.city) {
            setEditState({ ...editState, error: 'City is required.' })
        } else if (!editState.state) {
            setEditState({ ...editState, error: 'State is required.' })
        } else if (!editState.country) {
            setEditState({ ...editState, error: 'County is required.' })
        } else if (!editState.pincode) {
            setEditState({ ...editState, error: 'Pincode is required.' })
        } else if (!editState.mobileNumber1) {
            setEditState({ ...editState, error: 'Mobile Number is required.' })
        }
    }
    // console.log(editState);

    return (
        <Flex direction="column" align="center" height="100%" pt="5vh">
            <Text fontSize="24" pb={"5px"}>EDIT PROFILE</Text>
            <Flex direction="column" border="1px solid #d5d5d5" p="max(2vmax, 15px)" borderRadius="15">
                <>        
                    <Select placeholder="Password Recovery Question" mb={1}>
                        <option value="What was the name of your first school?">What was the name of your first school?</option>
                        <option value="Who was your childhood hero?">Who was your childhood hero?</option>
                        <option value="Month you were born?">Month you were born?</option>
                        <option value="What is your favorite pastime?">What is your favorite pastime?</option>
                        <option value="Who is your favorite actor?">Who is your favorite actor?</option>
                        <option value="What is your favorite food?">What is your favorite food?</option>
                    </Select>
                    <Input placeholder="Password Recovery Answer" name="recoveryAnswer" onChange={onChange} value={editState.recoveryAnswer} mb={1} />
                    <Input placeholder="Salutation" name="salutation" onChange={onChange} value={editState.salutation} mb={1} />
                    <Input placeholder="First Name" name="firstName" onChange={onChange} value={editState.firstName} mb={1} />
                    <Input placeholder="Middle Name" name="middleName" onChange={onChange} value={editState.middleName} mb={1} />
                    <Input placeholder="Last Name" name="lastName" onChange={onChange} value={editState.lastName} mb={1} />
                    <Input placeholder="Address Line 1" name="address1" onChange={onChange} value={editState.address1} mb={1} />
                    <Input placeholder="Address Line 2 (Optional)" name="address2" onChange={onChange} value={editState.address2} mb={1} />
                    <Input placeholder="City" name="city" onChange={onChange} value={editState.city} mb={1} />
                    <Input placeholder="State" name="state" onChange={onChange} value={editState.state} mb={1} />
                    <Input placeholder="Country" name="country" onChange={onChange} value={editState.country} mb={1} />
                    <Input placeholder="Pincode" name="pincode" onChange={onChange} value={editState.pincode} mb={1} />
                    <NumberInput>
                        <NumberInputField placeholder="Mobile Primary Number" name="mobileNumber1" onChange={onChange} value={editState.mobileNumber1} mb={1} />
                    </NumberInput>
                    <NumberInput>
                        <NumberInputField  placeholder="Mobile Secondary Number" name="mobileNumber2" onChange={onChange} value={editState.mobileNumber2} mb={1}/>
                    </NumberInput> 
                </>
                {editState.error ? <Text color="red"><sup>*</sup>{editState.error}</Text> : null}
                <Button colorScheme="blue" onClick={onSubmit} mb={1}>Confirm</Button>
            </Flex>
        </Flex>
    )
}
