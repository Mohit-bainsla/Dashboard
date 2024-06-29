import React, { useState, useEffect } from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Box,
  Flex,
  Heading,
  Select,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

const TopicsPolarAreaChart = ({ data }) => {
  const { colorMode } = useColorMode();
  const [selectedCountry, setSelectedCountry] = useState("United States of America");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const countryData = data.filter((entry) => entry.country === selectedCountry);
    setFilteredData(countryData);
  }, [selectedCountry, data]);

  const topics = filteredData.map(item => item.topic);

  const chartData = {
    labels: topics,
    datasets: [
      {
        data: filteredData.map(item => item.relevance),
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 159, 64, 0.6)',
          'rgba(255, 205, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scale: {
      ticks: {
        beginAtZero: true,
        stepSize: 1,
        max: 5,
      },
    },
  };

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  return (
    <Box
      p={6}
      borderRadius={20}
      boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
      mt={50}
      shadow="md"
      pb={100}
      bg={useColorModeValue("white", "gray.800")}
      maxHeight={700}
      overflow="hidden"
    >
      <Flex direction="column" margin={'auto'}>
        <Heading as="h2" mb={4}>
          Topics Chart
        </Heading>
        <Select
          value={selectedCountry}
          onChange={handleCountryChange}
          mb={4}
          w="200px"
          colorScheme="purple"
        >
          <option value="United States of America">United States of America</option>
          <option value="Mexico">Mexico</option>
          <option value="Nigeria">Nigeria</option>
          <option value="Lebanon">Lebanon</option>
          <option value="Russia">Russia</option>
          <option value="Saudi Arabia">Saudi Arabia</option>
        </Select>
        <Box height="500px" width={"100%"}>
          <PolarArea data={chartData} options={chartOptions} />
        </Box>
      </Flex>
    </Box>
  );
};

export default TopicsPolarAreaChart;
