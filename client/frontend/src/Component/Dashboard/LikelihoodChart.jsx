import React, { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";
import {
  Box,
  Flex,
  Heading,
  Select,
  useColorModeValue
} from "@chakra-ui/react";

const LikelihoodRadarChart = ({ data }) => {
  const [selectedCountry, setSelectedCountry] = useState("United States of America");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const countryData = data.filter((entry) => entry.country === selectedCountry);
    setFilteredData(countryData);
  }, [selectedCountry, data]);

  const chartData = {
    labels: filteredData.map((entry) => entry.country),
    datasets: [
      {
        label: "Likelihood",
        data: filteredData.map((entry) => entry.likelihood),
        backgroundColor: useColorModeValue(
          "rgba(79, 59, 169, 0.7)",
          "rgba(144, 104, 190, 0.7)"
        ),
        borderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
        borderWidth: 2,
        pointBackgroundColor: useColorModeValue("white", "black"),
        pointBorderColor: useColorModeValue(
          "rgba(79, 59, 169, 1)",
          "rgba(144, 104, 190, 1)"
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scale: {
      ticks: {
        beginAtZero: true,
        min: 0,
        max: 5,
        stepSize: 1,
      },
    },
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box
      borderRadius={20}
      pt={6}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700} 
      overflow="hidden" 
    >
      <Flex direction="column" margin={'auto'}>
        <Heading as="h2" mb={4} ml={6}>
          Likelihood Chart
        </Heading>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          mb={4}
          w="200px"
          colorScheme="purple"
          ml={6}
        >
          <option value="United States of America">United States of America</option>
          <option value="Mexico">Mexico</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Russia">Russia</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
        </Select>
        <Box height="500px" width={"100%"}>
          <Radar data={chartData} options={chartOptions} />
        </Box>
      </Flex>
    </Box>
  );
};

export default LikelihoodRadarChart;
