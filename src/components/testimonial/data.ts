export type TestimonialProps = {
  avatar: string;
  author: string;
  message: string;
  role: string;
  rating: number;
}

export const testimonials: TestimonialProps[] = [
  {
    message:
      "Join this fitness member, the best choice that I’ve. They’re very professional and give you suggestions about what food and nutrition that you can eat.",
    author: "Jonathan Edward",
    role: "Office Worker",
    avatar: "https://i.pravatar.cc/100",
    rating: 4.5,
  },
  {
    message: "This service is amazing, I achieved great results in no time!",
    author: "Sarah Connor",
    role: "Fitness Enthusiast",
    avatar: "https://i.pravatar.cc/101",
    rating: 3.5,
  },
  {
    message: "I highly recommend their services. They truly care about your success!",
    author: "Michael Johnson",
    role: "Athlete",
    avatar: "https://i.pravatar.cc/102",
    rating: 4.5,
  },
];