// import React, { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Text,
  Image,
  Heading,
  Card,
  CardBody,
} from "@chakra-ui/react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dp from "../assets/dp.jpg";
import { useState } from "react";
 

const testimonials = [
  {
    id: 1,
    text: `The reason for this late testimonial is that I wanted to ensure
    all my storage items were packed in the storage undamaged. -Now,
    your two guys were the best-ever movers! They arrived at my home
    on time. They filled the truck expeditiously, followed me to the
    storage unit, and thanked me for using their service. Wow! Your
    company employees are likely the most efficient, professional,
    kind, courteous, and proficient movers—no complaints from me.
    I'm genuinely grateful for calling your company. Thank you!!!`,
    name: "Pamela Sanders",
  },
  {
    id: 2,
    text: `We've used MOVECO multiple times, both our home moves, and our
    office move. Each time they went above and beyond what was
    needed to do a great job. I highly recommend them and will use them again!We recently relocated to the southeast from Texas and for the
    third time used MoveCo. I cannot speak highly enough about their
    professionalism and commitment to excellence.`,
    name: "Barion Mills",
  },
  {
    id: 3,
    text: `We recently relocated to the southeast from Texas and for the
    third time used MoveCo. I cannot speak highly enough about their
    professionalism and commitment to excellence.`,
    name: "JD Lauramore",
  },
  {
    id: 4,
    text: `This is the worst move experience I've ever had. The furniture was damaged, the workers did not care, were slow and even with me purchasing extra insurance to cover damages - it still has not been resolved in almost a year. No repairs have been made, no reimbursement has been received and no sense of responsibility or sense of urgency has been displayed by the company. Email inquiries go mostly ignored and they are very slow if they respond at all. My advice would be to NOT use this company if you value your belongings and NOT to purchase the extra insurance because that only gives them more profit with no apparent intentions of repairing, replacing or correcting any situation they are liable for. I am still waiting to clear this matter after almost a year of waiting. Do NOT consider this company for any move you are planning.`,
    name: "Ronny Duwe",
  },
  {
    id: 5,
    text: `This is the worst move experience I've ever had. The furniture was damaged, the workers did not care, were slow and even with me purchasing extra insurance to cover damages - it still has not been resolved in almost a year. No repairs have been made, no reimbursement has been received and no sense of responsibility or sense of urgency has been displayed by the company. Email inquiries go mostly ignored and they are very slow if they respond at all. My advice would be to NOT use this company if you value your belongings and NOT to purchase the extra insurance because that only gives them more profit with no apparent intentions of repairing, replacing or correcting any situation they are liable for. I am still waiting to clear this matter after almost a year of waiting. Do NOT consider this company for any move you are planning.`,
    name: "Ronny Duwe",
  },
  {
    id: 6,
    text: `This is the worst move experience I've ever had. The furniture was damaged, the workers did not care, were slow and even with me purchasing extra insurance to cover damages - it still has not been resolved in almost a year. No repairs have been made, no reimbursement has been received and no sense of responsibility or sense of urgency has been displayed by the company. Email inquiries go mostly ignored and they are very slow if they respond at all. My advice would be to NOT use this company if you value your belongings and NOT to purchase the extra insurance because that only gives them more profit with no apparent intentions of repairing, replacing or correcting any situation they are liable for. I am still waiting to clear this matter after almost a year of waiting. Do NOT consider this company for any move you are planning.`,
    name: "Ronny Duwe",
  },
  {
    id: 7,
    text: `This is the worst move experience I've ever had. The furniture was damaged, the workers did not care, were slow and even with me purchasing extra insurance to cover damages - it still has not been resolved in almost a year. No repairs have been made, no reimbursement has been received and no sense of responsibility or sense of urgency has been displayed by the company. Email inquiries go mostly ignored and they are very slow if they respond at all. My advice would be to NOT use this company if you value your belongings and NOT to purchase the extra insurance because that only gives them more profit with no apparent intentions of repairing, replacing or correcting any situation they are liable for. I am still waiting to clear this matter after almost a year of waiting. Do NOT consider this company for any move you are planning.`,
    name: "Ronny Duwe",
  },
  {
    id: 8,
    text: `This is the worst move experience I've ever had. The furniture was damaged, the workers did not care, were slow and even with me purchasing extra insurance to cover damages - it still has not been resolved in almost a year. No repairs have been made, no reimbursement has been received and no sense of responsibility or sense of urgency has been displayed by the company. Email inquiries go mostly ignored and they are very slow if they respond at all. My advice would be to NOT use this company if you value your belongings and NOT to purchase the extra insurance because that only gives them more profit with no apparent intentions of repairing, replacing or correcting any situation they are liable for. I am still waiting to clear this matter after almost a year of waiting. Do NOT consider this company for any move you are planning.`,
    name: "Ronny Duwe",
  },
  {
    id: 9,
    text: `This is the worst move experience I've ever had. The furniture was damaged, the workers did not care, were slow and even with me purchasing extra insurance to cover damages - it still has not been resolved in almost a year. No repairs have been made, no reimbursement has been received and no sense of responsibility or sense of urgency has been displayed by the company. Email inquiries go mostly ignored and they are very slow if they respond at all. My advice would be to NOT use this company if you value your belongings and NOT to purchase the extra insurance because that only gives them more profit with no apparent intentions of repairing, replacing or correcting any situation they are liable for. I am still waiting to clear this matter after almost a year of waiting. Do NOT consider this company for any move you are planning.`,
    name: "Ronny Duwe",
  },
];

const ClientReviews = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Desktop view
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Tablet view
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Mobile view
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
    <Box  bg="#e9e9e9" py={5} >
    <Box direction="column" my={10} >
      <Box textAlign="center" mb={5}>
        <Heading>Client Speaks</Heading>
      </Box>

      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <Box
          alignItems="center"
          w={5}
          px={10}
        
          h={10}
            key={testimonial.id}
            p={3}
            onMouseEnter={() => setHoveredId(testimonial.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <Card>
              <CardBody>
                <Text 
            
                  fontSize="sm"
                  noOfLines={hoveredId === testimonial.id ? undefined : 4}
                  fontStyle="italic"
                  color="gray"
                >
                  {testimonial.text}
                </Text>
              </CardBody>
            </Card>
            <Box display="flex" alignItems="center" mt={4}>
              <Image src={dp} boxSize="40px" borderRadius="full" mr={2} />
              <Heading size="xs">{testimonial.name}</Heading>
            </Box>
          </Box>
        ))}
      </Slider>
      </Box>
    </Box>
  );
};

export default ClientReviews;
