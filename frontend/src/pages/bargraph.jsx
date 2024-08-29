import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample scores data
const scores = [
  { section: 'Verbal', score: 80 },
  { section: 'Mathematical', score: 70 },
  { section: 'Musical', score: 90 },
  { section: 'Visual', score: 85 },
  { section: 'Bodily', score: 75 },
  { section: 'Interpersonal', score: 95 },
  { section: 'Intrapersonal', score: 65 },
  { section: 'Naturalistic', score: 88 }
];

const MyBarChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={scores} // Pass the scores data
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="section" /> {/* Using 'section' for X-axis */}
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="score" fill="#82ca9d" /> {/* Using 'score' for bar values */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default MyBarChart;
