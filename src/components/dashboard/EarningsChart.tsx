"use client"

import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { date: "2024-05-14", earnings: 186 },
  { date: "2024-05-15", earnings: 305 },
  { date: "2024-05-16", earnings: 237 },
  { date: "2024-05-17", earnings: 73 },
  { date: "2024-05-18", earnings: 209 },
  { date: "2024-05-19", earnings: 214 },
  { date: "2024-05-20", earnings: 350 },
]

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "hsl(var(--primary))",
  },
}

export function EarningsChart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { weekday: 'short' })}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="earnings" fill="var(--color-earnings)" radius={4} />
        </BarChart>
      </ChartContainer>
    </ResponsiveContainer>
  )
}
