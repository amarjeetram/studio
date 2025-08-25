"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
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
    <div className="w-full h-[250px]">
      <ChartContainer config={chartConfig}>
        <BarChart accessibilityLayer data={chartData}>
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
    </div>
  )
}
