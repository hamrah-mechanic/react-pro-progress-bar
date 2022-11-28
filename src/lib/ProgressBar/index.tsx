import React from "react";

//STYLES
import styles from "./index.module.scss";

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
  return (
    <div className={`${styles["container"]} ${className}`}>
      <div
        style={{
          width: `${(currentGrade * 100) / maxGrade}%`,
          backgroundColor: color,
          borderRadius: ".2rem",
        }}
        className={lineClassName}
      />
      {Array.from({ length: maxGrade - 1 }).map((grade: any, index: number) => (
        <div
          key={grade}
          className={`${styles["step"]} ${
            circleStep && styles["step--circle"]
          } ${stepClassName}`}
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
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
