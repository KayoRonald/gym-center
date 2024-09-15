import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Center,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  chakra,
} from "@chakra-ui/react";
import { SwiperNavButtons } from "../swiper-nav-buttons";
import { sliderSettings } from "../config";
import { CSSProperties } from "react";
import SwiperCore from "swiper";
import { gymData } from "../../../data/gym";
import { FeatureCard } from "./feature-card";
type SwiperInstance = SwiperCore;

export const GymSwiper = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.realIndex);
  };

  const slideStyles: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: "350px",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s",
  };

  return (
    <Box>
     <Flex
          align="center"
          justify="space-between"
          mb={4}
          position="relative"
        >
          <Heading fontSize={{ base: "2xl", md: "4xl" }}>
            Explore Our Program
          </Heading>
          <Image
            src="/exploreProgram.svg"
            alt="Explore Program"
            position="absolute"
            left={0}
            zIndex="-1"
          />
        </Flex>
      <Swiper
        {...sliderSettings}
        onSlideChange={handleSlideChange}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperNavButtons />
        {gymData.map((item, index) => (
          <SwiperSlide key={index} style={slideStyles}>
            <FeatureCard
              isActive={activeIndex === index}
              icon={item.icon}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
