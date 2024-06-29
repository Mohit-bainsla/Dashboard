import React, { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import {
  Box,
  Flex,
  Heading,
  Select,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";

const PieChart = ({ data }) => {
  const { colorMode } = useColorMode();
  const [selectedCountry, setSelectedCountry] = useState("United States of America");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const countryData = data.filter((entry) => entry.country === selectedCountry);
    setFilteredData(countryData);
  }, [selectedCountry, data]);

  const sectors = {};

  filteredData.forEach((entry) => {
    if (!sectors[entry.sector]) {
      sectors[entry.sector] = 0;
    }
    sectors[entry.sector] += entry.intensity;
  });

  const getRandomColor = (index) => {
    const colors = [
      "#FF0080",
      "#00BFFF",
      "#FFD700",
      "#32CD32",
      "#FF4500",
      "#9400D3",
      // Add more colors as needed
    ];
    return colors[index % colors.length];
  };

  const chartData = {
    labels: Object.keys(sectors),
    datasets: [
      {
        data: Object.values(sectors),
        backgroundColor: Object.keys(sectors).map((_, index) =>
          getRandomColor(index)
        ),
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        position: "average",
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
          Sector Chart
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
          <Pie data={chartData} options={chartOptions} />
        </Box>
      </Flex>
    </Box>
  );
};

export default PieChart;
