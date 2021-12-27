import {
  Flex,
  Text,
  Input,
  Select,
  Divider,
  NumberInput,
  NumberInputField,
  Button,
} from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { AuthLayout } from "../components/AuthLayout";
import { API_URLS } from "../../../config/constants";
import { setUserDetails } from "../../../utility/storage";
import { RoutesPath } from "../../../config/routes";
import { RouterProps } from "react-router";

export function Edit(props: RouterProps) {
  console.log("Signup");
  console.log(props.history.location.state);
  const { history } = props;
  const [editState, setEditState] = React.useState({
    email: "",
    password: "",
    error: "",
    salutation: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    address_line_1: "",
    address_line_2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    phone_number: "",
    secondary_phone: "",
    recoveryAnswer: "",
    passwordconfirm: "",
  });
  function onChange(e: any) {
    console.log(e.target.name, e.target.value);
    setEditState({ ...editState, [e.target.name]: e.target.value.trim() });
  }
  async function onSubmit() {
    if (
      editState.first_name.length &&
      editState.last_name.length &&
      editState.address_line_1.length &&
      editState.city.length &&
      editState.state.length &&
      editState.country.length &&
      editState.pincode.length &&
      editState.phone_number.length &&
      editState.recoveryAnswer.length &&
      editState.passwordconfirm.length
    ) {
      console.log("inside IF");
      try {
        console.log("inside TRY");
        const payload: any = { ...editState };
        delete payload.error;
        const response = await axios.post(`${API_URLS.Auth.edit}`, payload);
        if (response.status === 200 && response.data.auth_token) {
          setUserDetails(JSON.stringify(response.data));
          history.replace(RoutesPath.PROFILE);
        }
      } catch (error: any) {
        console.log("inside CATCH");
        if (error.response?.status === 401) {
          setEditState({
            ...editState,
            error:
              error.response?.data?.error?.user_authentication ||
              "UserName or Password invalid.",
          });
        }
        console.error("Error signing in:", error.response, error.response.data);
      }
    } else if (!editState.email) {
      setEditState({ ...editState, error: "Email is required." });
    } else if (!editState.recoveryAnswer) {
      setEditState({ ...editState, error: "Recovery Answere is required." });
    } else if (!editState.first_name) {
      setEditState({ ...editState, error: "FirstName is required." });
    } else if (!editState.last_name) {
      setEditState({ ...editState, error: "LastName is required." });
    } else if (!editState.address_line_1) {
      setEditState({ ...editState, error: "Address is required." });
    } else if (!editState.city) {
      setEditState({ ...editState, error: "City is required." });
    } else if (!editState.state) {
      setEditState({ ...editState, error: "State is required." });
    } else if (!editState.country) {
      setEditState({ ...editState, error: "County is required." });
    } else if (!editState.pincode) {
      setEditState({ ...editState, error: "Pincode is required." });
    } else if (!editState.phone_number) {
      setEditState({ ...editState, error: "Mobile Number is required." });
    }
  }
  // console.log(editState);

  return (
    <Flex direction="column" align="center" height="100%" pt="5vh">
      <Text fontSize="24" pb={"5px"}>
        EDIT PROFILE
      </Text>
      <Flex
        direction="column"
        border="1px solid #d5d5d5"
        p="max(2vmax, 15px)"
        borderRadius="15"
      >
        <>
          <Select placeholder="Password Recovery Question" mb={1}>
            <option value="What was the name of your first school?">
              What was the name of your first school?
            </option>
            <option value="Who was your childhood hero?">
              Who was your childhood hero?
            </option>
            <option value="Month you were born?">Month you were born?</option>
            <option value="What is your favorite pastime?">
              What is your favorite pastime?
            </option>
            <option value="Who is your favorite actor?">
              Who is your favorite actor?
            </option>
            <option value="What is your favorite food?">
              What is your favorite food?
            </option>
          </Select>
          <Input
            placeholder="Password Recovery Answer"
            name="recoveryAnswer"
            onChange={onChange}
            value={editState.recoveryAnswer}
            mb={1}
          />
          <Input
            placeholder="Salutation"
            name="salutation"
            onChange={onChange}
            value={editState.salutation}
            mb={1}
          />
          <Input
            placeholder="First Name"
            name="first_name"
            onChange={onChange}
            value={editState.first_name}
            mb={1}
          />
          <Input
            placeholder="Middle Name"
            name="middle_name"
            onChange={onChange}
            value={editState.middle_name}
            mb={1}
          />
          <Input
            placeholder="Last Name"
            name="last_name"
            onChange={onChange}
            value={editState.last_name}
            mb={1}
          />
          <Input
            placeholder="Address Line 1"
            name="address_line_1"
            onChange={onChange}
            value={editState.address_line_1}
            mb={1}
          />
          <Input
            placeholder="Address Line 2 (Optional)"
            name="address_line_2"
            onChange={onChange}
            value={editState.address_line_2}
            mb={1}
          />
          <Input
            placeholder="City"
            name="city"
            onChange={onChange}
            value={editState.city}
            mb={1}
          />
          <Input
            placeholder="State"
            name="state"
            onChange={onChange}
            value={editState.state}
            mb={1}
          />
          <Input
            placeholder="Country"
            name="country"
            onChange={onChange}
            value={editState.country}
            mb={1}
          />
          <Input
            placeholder="Pincode"
            name="pincode"
            onChange={onChange}
            value={editState.pincode}
            mb={1}
          />
          <NumberInput>
            <NumberInputField
              placeholder="Mobile Primary Number"
              name="phone_number"
              onChange={onChange}
              value={editState.phone_number}
              mb={1}
            />
          </NumberInput>
          <NumberInput>
            <NumberInputField
              placeholder="Mobile Secondary Number"
              name="secondary_phone"
              onChange={onChange}
              value={editState.secondary_phone}
              mb={1}
            />
          </NumberInput>
        </>
        {editState.error ? (
          <Text color="red">
            <sup>*</sup>
            {editState.error}
          </Text>
        ) : null}
        <Button colorScheme="blue" onClick={onSubmit} mb={1}>
          Confirm
        </Button>
      </Flex>
    </Flex>
  );
}
