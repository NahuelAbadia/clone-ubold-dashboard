import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Filler,
  Legend,
  LinearScale,
  PointElement,
  Title,
  Tooltip
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Stack } from '@chakra-ui/react'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

const scores = [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
const labels = ["", "02 Jan", "03 Jan", "04 Jan", "05 Jan", "06 Jan", "07 Jan", "08 Jan", "09 Jan", "10 Jan", "11 Jan", "12 Jan"]

const options = {
  fill: true,
  scales: {
    y: {
      min: 0,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
  },
}

const BarChart = () => {

  const data = useMemo(function () {
    return {
      datasets: [
        {
          label: "Revenue",
          tension: 0.3,
          data: scores,
          borderWidth: 1,
          borderColor: "#015958",
          backgroundColor: "#1abc9c",
          hoverBorderColor: "#015958",
          hoverBackgroundColor: "#1abc9c90",
        },
      ],
      labels,
    }
  }, [])

  return (
    <Stack
      w="85%"
      h="85%"
    >
      <Bar data={data} options={options} />
    </Stack>
  )
}

export default BarChart