import { Flex, NumberInput, NumberInputField, Input, Select, Divider, Button } from '@chakra-ui/react'
import React from 'react'

const initFormState = {
    email: '',
    password: '',
    confirmPassword: '',
    recoveryAnswer: '',
    salutation: '',
    firstName: '',
    middleName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    country: '',
    pincode: '',
    mobileNumber1: '',
    mobileNumber2: '',
    academicDegree: '',
    practicing: '',
    barIdPhoto: '',
    profilePhoto: ''
}

interface IAuthLayout {
    login?: boolean
    signup?: boolean
    forgotPassword?: boolean
    onSubmit: (formState: any) => void
    submitText: 'Login' | 'SignUp' | 'Reset Password'
}

export function AuthLayout(props: IAuthLayout) {
    const [form, setForm] = React.useState(initFormState)
    const { login, signup, forgotPassword, onSubmit, submitText } = props
    const showEmail = login
    const showPassword = login
    const showConfirmPassword = signup || forgotPassword
    const showSignUpForm = signup
    return (
        <Flex direction="column" border="1px solid #d5d5d5" p="max(2vmax, 15px)" borderRadius="15">
            {showEmail ? <Input placeholder="Email (Username)" value={form.email} mb={1}/> : null}
            {showPassword ? <Input type="password" placeholder="Password" value={form.password} mb={1} /> : null}
            {showConfirmPassword ? <Input type="password" placeholder="Re-Type Password" value={form.confirmPassword} mb={1} /> : null}
            {showSignUpForm ?
            <>        
                <Select placeholder="Password Recovery Question" mb={1}>
                    <option value="What was the name of your first school?">What was the name of your first school?</option>
                    <option value="Who was your childhood hero?">Who was your childhood hero?</option>
                    <option value="Month you were born?">Month you were born?</option>
                    <option value="What is your favorite pastime?">What is your favorite pastime?</option>
                    <option value="Who is your favorite actor?">Who is your favorite actor?</option>
                    <option value="What is your favorite food?">What is your favorite food?</option>
                </Select>
                <Input placeholder="Password Recovery Answer" value={form.recoveryAnswer} mb={1} />
                <Divider />
                <Input placeholder="Salutation" value={form.salutation} mb={1} />
                <Input placeholder="First Name" value={form.firstName} mb={1} />
                <Input placeholder="Middle Name" value={form.middleName} mb={1} />
                <Input placeholder="Last Name" value={form.lastName} mb={1} />
                <Input placeholder="Address Line 1" value={form.address1} mb={1} />
                <Input placeholder="Address Line 2 (Optional)" value={form.address2} mb={1} />
                <Input placeholder="City" value={form.city} mb={1} />
                <Input placeholder="State" value={form.state} mb={1} />
                <Input placeholder="Country" value={form.country} mb={1} />
                <Input placeholder="Pincode" value={form.pincode} mb={1} />
                <NumberInput placeholder="Mobile Primary Number" value={form.mobileNumber1} mb={1}>
                    <NumberInputField />
                </NumberInput>
                <NumberInput placeholder="Mobile Secondary Number" value={form.mobileNumber2} mb={1}>
                    <NumberInputField />
                </NumberInput> 
            </>
            : null}
            <Button colorScheme="blue">{submitText}</Button>
        </Flex>
    )
}
