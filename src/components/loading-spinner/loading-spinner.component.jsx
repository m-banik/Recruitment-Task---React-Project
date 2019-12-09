import React from "react";
import { SpinnerOverlay, SpinnerContainer } from "./loading-spinner.styles";

const LoadingSpinner = () => (
  <SpinnerOverlay>
    <SpinnerContainer></SpinnerContainer>
  </SpinnerOverlay>
);

export default LoadingSpinner;
