import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import Lottie from "lottie-react";
import faq from "../../assets/faq.json"

const Question = () => {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="container mx-auto p-3 py-10">
          <h2 className="text-pretty mb-10 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
         FAQ
        </h2>
     <div className="flex justify-between ">
     <div className="max-w-xl">
      
      
        <div>
        <Accordion open={open === 1}>
          <AccordionHeader onClick={() => handleOpen(1)}>
          What is the adoption process?
          </AccordionHeader>
          <AccordionBody>
          Our adoption process involves submitting an application, meeting the pet, and ensuring your home is a suitable environment for the pet. Once approved, you can take your new furry friend home!
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2}>
          <AccordionHeader onClick={() => handleOpen(2)}>
          What is included in the adoption fee?
          </AccordionHeader>
          <AccordionBody>
          The adoption fee typically includes vaccinations, spaying/neutering, a health check, and sometimes microchipping.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3}>
          <AccordionHeader onClick={() => handleOpen(3)}>
          Can I adopt if I live in an apartment?
          </AccordionHeader>
          <AccordionBody>
          Yes, many pets, especially smaller breeds or older animals, adapt well to apartment living. We'll help you find the perfect match.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4}>
          <AccordionHeader onClick={() => handleOpen(4)}>
          Are the pets vaccinated and healthy?
          </AccordionHeader>
          <AccordionBody>
          Yes, all our pets receive necessary medical care, vaccinations, and a health check before adoption.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5}>
          <AccordionHeader onClick={() => handleOpen(5)}>
          Do you have pets suitable for families with kids?
          </AccordionHeader>
          <AccordionBody>
          Yes, we can recommend pets that are great with children based on their temperament and behavior.
          </AccordionBody>
        </Accordion> 
        
      </div>
      </div>
      <div>
      <Lottie className=" " animationData={faq} loop={true} />
     

      </div>
      
     </div>
    </div>
  );
};

export default Question;
