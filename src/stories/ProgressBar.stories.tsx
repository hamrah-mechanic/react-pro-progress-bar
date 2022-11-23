import React from "react";
import { Story, Meta } from "@storybook/react";
import ProgressBar, { ProgressBarProps } from "../lib/ProgressBar";

export default {
  title: "Example/ProgressBar",
  component: ProgressBar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  currentGrade: 0.2,
  maxGrade: 5,
};

export const Bad = Template.bind({});
Bad.args = {
  currentGrade: 0.5,
  maxGrade: 5,
  color: "#ED1C24",
};

export const Average = Template.bind({});
Average.args = {
  currentGrade: 2.5,
  maxGrade: 5,
  color: "#EF8F00",
};

export const Good = Template.bind({});
Good.args = {
  currentGrade: 3.5,
  maxGrade: 5,
  color: "#2B3390",
};

export const Best = Template.bind({});
Best.args = {
  currentGrade: 4.5,
  maxGrade: 5,
  color: "#08A650",
};

export const CircleShape = Template.bind({});
CircleShape.args = {
  currentGrade: 4.5,
  maxGrade: 5,
  color: "#A020F0",
  circleStep: true,
  stepColor: "#A020F0",
};

export const NumbericStep = Template.bind({});
NumbericStep.args = {
  currentGrade: 3,
  maxGrade: 5,
  color: "#00FFFF",
  circleStep: true,
  stepColor: "#00FFFF",
  stepTexts: [1, 2, 3, 4],
};
