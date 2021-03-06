import React from "react"
import ServiceCard from "./ServiceCard"
import styled from "styled-components"
import ServiceSlider from "./Slider"
import { useTheme } from "@material-ui/core"
import { ServiceItemList } from "../../../types"

type ServiceSectionRootProps = {
  contrast: boolean
}

const ServiceSectionRoot = styled("div")<ServiceSectionRootProps>`
  background-color: ${props => (props.contrast ? " #f3f3f3" : "#fff")};
  padding-top: 5vh;
  padding-bottom: 5vh;

  @media (min-width: 1024px) {
    padding-top: 10vh;
    padding-bottom: 10vh;
  }
`

const ServiceSectionTitle = styled("div")`
  text-align: center;
  font-size: 30px;
  font-family: ${props => props.theme.typography.fontFamily};
  color: ${props => props.theme.palette.primary.main};
  font-weight: 800;

  @media (min-width: 1024px) {
    font-size: 42px;
  }
`

interface Props extends ServiceItemList {
  serviceSectionTitle: string
  serviceSectionTitleColor?: string
  rootContrast?: boolean
  serviceCardActionRef?: React.RefObject<HTMLDivElement> | null
}

const ServiceSection = ({
  serviceList = [],
  serviceSectionTitle = "Título da seção",
  serviceSectionTitleColor,
  rootContrast = false,
  serviceCardActionRef = null,
}: Props) => {
  const theme = useTheme()

  return (
    <div>
      {serviceList.length ? (
        <ServiceSectionRoot contrast={rootContrast}>
          <ServiceSectionTitle>{serviceSectionTitle}</ServiceSectionTitle>

          <ServiceSlider
            serviceCardActionRef={serviceCardActionRef}
            serviceList={serviceList}
          />
        </ServiceSectionRoot>
      ) : null}
    </div>
  )
}

export default ServiceSection
