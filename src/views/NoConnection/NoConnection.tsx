import React from "react";
import { useIntl } from "react-intl";
import { StyledContainer, StyledTypography } from "./noConnection.styles";

function NoConnection() {
  const intl = useIntl();
  return (
    <StyledContainer>
      <StyledTypography>
        {intl.formatMessage({ id: "connectionError" })}
      </StyledTypography>
    </StyledContainer>
  );
}

export default NoConnection;
