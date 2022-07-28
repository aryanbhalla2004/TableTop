import React from "react";
import "./MultiStepProgressBar.css";
// import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = props => {
  let stepPercentage = 0;

  if (props.currentStep === 1) {
    stepPercentage = 10;
  } else if (props.currentStep === 2) {
    stepPercentage = 20;
  } else if (props.currentStep === 3) {
    stepPercentage = 60;
  } else if (props.currentStep === 4) {
    stepPercentage = 80;
  } else if (props.currentStep === 5) {
    stepPercentage = 100;
  } else if (props.currentStep === 5) {
    stepPercentage = 100;
  }else {
    stepPercentage = 0;
  }

  return (
    <ProgressBar className="step-progress-bar" percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
			<Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  );
};

export default MultiStepProgressBar;
