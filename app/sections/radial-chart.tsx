"use client";

import {
  Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart, } from "recharts";

import { ChartConfig, ChartContainer } from "@/components/ui/chart";
import { Lesson as LessonType } from "../data/lessons";

const chartData = [
  { browser: "safari", visitors: 50, fill: "var(--color-main)" },
];

const chartConfig = {
  visitors: { label: "Visitors", },
  safari: {  label: "Safari",  color: "hsl(var(--chart-2))", },
} satisfies ChartConfig;

interface Lesson extends LessonType {
  tag: string;
}

const RadialChart = ({ lessons }: { lessons: Lesson[] }) => {

  const total = lessons.length;
  const done = lessons.filter((lesson) => lesson.tag === "done").length;

  const percentage = Math.round((done / total) * 100);

  return (

        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={percentage * 3.6}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {percentage}%
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          تم
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
  );
};

export default RadialChart;
