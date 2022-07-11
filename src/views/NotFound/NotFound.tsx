import React from "react";
import { useIntl } from "react-intl";
import { StyledContainer, StyledTypography } from "./notFound.styles";

function NotFound() {
  const intl = useIntl();
  return (
    <StyledContainer>
      <StyledTypography>
        {intl.formatMessage({ id: "notFound" })}
      </StyledTypography>
    </StyledContainer>
  );
}

export default NotFound;
