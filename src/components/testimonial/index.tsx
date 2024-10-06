import {
  Flex,
  Heading,
  Stack,
  Image,
  Box,
  Container,
  Avatar,
  Text,
  AvatarGroup,
} from "@chakra-ui/react";
import { TestimonialCard } from "./testimonial-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderSettings } from "../swiper-slider/config";
import { testimonials } from "./data";
import "swiper/css/navigation"; 
import "swiper/css/pagination";
import { CSSProperties } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperNavButtons } from "./next-button-swiper";

export default function TestimonialSection() {
  const slideStyles: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: "100%",
    height: "100%",
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      p={8}
      // gap={"50px"}
      as={Container}
      maxW="7xl"
      color="white"
    >
      {/* Seção esquerda */}
      <Stack
        textAlign="center"
        mb={{ base: 8, md: 0 }}
        position="relative"
        justify={"space-between"}
        gap={"70px"}
      >
        <Box>
          <Heading
            pl={10}
            as={"h2"}
            fontSize="3xl"
            fontWeight="bold"
            maxW={"396px"}
            textAlign={"start"}
          >
            What Our Member Say About Us?
          </Heading>
          <Image
            src="/testimonial.svg"
            alt="Testimonial"
            position="absolute"
            zIndex="-1"
            top={"-50px"}
          />
        </Box>
        <Flex justify={"start"} pl={10} align={"start"} direction={"column"}>
          <AvatarGroup mt={4}>
            <Avatar src="https://i.pravatar.cc/50" />
            <Avatar src="https://i.pravatar.cc/51" />
            <Avatar src="https://i.pravatar.cc/52" />
            <Avatar src="https://i.pravatar.cc/52" />
          </AvatarGroup>
          <Text mt={2} fontSize="lg" color="gray.400">
            100+ Satisfied Customers
          </Text>
        </Flex>
      </Stack>

      {/* Seção direita */}
      <Box w={{ base: "100%", md: "50%" }} position="relative">
        <Swiper
          {...sliderSettings}
          style={{ width: "100%", height: "100%" }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} style={slideStyles}>
              <TestimonialCard
                key={index}
                author={item.author}
                message={item.message}
                role={item.role}
                avatar={item.avatar}
                rating={item.rating}
              />
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </Box>
    </Flex>
  );
}
