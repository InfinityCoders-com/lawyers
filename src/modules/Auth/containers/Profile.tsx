import { Flex, Text, Image, Button } from "@chakra-ui/react";
import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { RouterProps } from "react-router";
import { LawyerCard } from "../../Home/styled";
import LawyerUserIcon from "../../../assets/images/download.png";
import { API_URLS, initialFilters } from "../../../config/constants";
import { Redirect, Link } from "react-router-dom";

export function Profile(props: RouterProps) {
  console.log(props);
  console.log("Login");

  async function fetchProfile() {
    try {
      const response = await axios.get(`${API_URLS.User.profile}`);
      console.log(response.data);
      console.log("=====");
      return response.data;
    } catch (error) {
      console.error("Error fetching lawyers:", error);
    }
  }

  const lawyersState = useQuery("lawyersListing", fetchProfile);

  console.log(lawyersState);

  return (
    <Flex direction="column" align="center" height="100%" pt="5vh">
      <Text fontSize="24" pb={"5px"}>
        PROFILE
      </Text>
      <Flex
        direction="column"
        border="1px solid #d5d5d5"
        p="max(2vmax, 15px)"
        borderRadius="15"
      >
        <LawyerCard>
          <Image src={LawyerUserIcon} fallbackSrc={LawyerUserIcon} />
          <Flex flexDirection="column">
            <Text color="#3BA66C" fontWeight={600} fontSize="2xl">
              FName LName
            </Text>
            <Text color="#727272" fontSize="sm">
              <b>Address:</b> House no 269/7, Village Fatehpur Chandila, Near
              Sector 21/B, Faridabad
            </Text>
            <Text color="#727272" fontSize="sm">
              <b>Mobile:</b> +9717822270
            </Text>
            <Text color="#727272"></Text>
          </Flex>
          <Link to={{ pathname: "/edit", state: 123 }}>
            <Button colorScheme="blue" mb={1}>
              Edit
            </Button>
          </Link>
        </LawyerCard>
      </Flex>
    </Flex>
  );
}
