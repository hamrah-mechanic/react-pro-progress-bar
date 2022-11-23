import React from "react";
import styled, { css } from "styled-components";

//TYPES
export interface ProgressBarProps {
  maxGrade: number;
  currentGrade: number;
  color?: string;
  stepColor?: string;
  circleStep?: boolean;
  stepTexts?: string[] | number[];
  className?: string;
  lineClassName?: string;
  stepClassName?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  maxGrade,
  currentGrade,
  color = "black",
  stepColor = "",
  circleStep = false,
  stepTexts = [],
  className = "",
  lineClassName = "",
  stepClassName = "",
}) => {
  const Container = styled.div`
    display: flex;
    background-color: lightgray;
    position: relative;
    border-radius: 0.2rem;
    height: 0.4rem;
  `;

  const Step = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.2rem;
    background-color: white;
    font-size: 1.2rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    ${circleStep &&
    css`
      width: 1.6rem;
      height: 1.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      border-radius: 50%;
      top: -0.8rem;
      border: 4px solid transparent;
    `}
  `;

  return (
    <Container className={className}>
      <div
        style={{
          width: `${(currentGrade * 100) / maxGrade}%`,
          backgroundColor: color,
          borderRadius: ".2rem",
        }}
        className={lineClassName}
      />
      {Array.from({ length: maxGrade - 1 }).map((grade: any, index: number) => (
        <Step
          key={grade}
          className={stepClassName}
          style={{
            left: `${(100 / maxGrade) * (index + 1)}%`,
            borderColor: stepColor,
            backgroundColor:
              (100 / maxGrade) * (index + 1) <= (currentGrade * 100) / maxGrade
                ? stepColor
                : "",
          }}
        >
          {stepTexts[index]}
        </Step>
      ))}
    </Container>
  );
};

export default ProgressBar;
