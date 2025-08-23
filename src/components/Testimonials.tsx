"use client";

import { motion } from "framer-motion";
import { TestimonialsColumn } from "./testimonials-columns-1";

const testimonials = [
    {
      text: "AcmePaints gave my house a fresh, vibrant look with their weather-proof paints. The consultation was smooth and professional.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Priya Nair",
      role: "Homeowner, Bengaluru",
    },
    {
      text: "The water proofing service saved us during the monsoon. Their team was quick, reliable, and very courteous.",
      image: "https://randomuser.me/api/portraits/men/66.jpg",
      name: "Rohit Sharma",
      role: "Apartment Owner, Mumbai",
    },
    {
      text: "I loved the eco-friendly paint options. The colors are beautiful and safe for my kids’ room.",
      image: "https://randomuser.me/api/portraits/women/67.jpg",
      name: "Anjali Verma",
      role: "Interior Designer, Delhi",
    },
    {
      text: "Their experts guided me step by step, from consultation to site visit. Truly hassle-free and professional.",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      name: "Arjun Mehta",
      role: "Homeowner, Pune",
    },
    {
      text: "The finish on our wooden furniture is amazing. AcmePaints really cares about quality and durability.",
      image: "https://randomuser.me/api/portraits/women/69.jpg",
      name: "Sneha Iyer",
      role: "Architect, Chennai",
    },
    {
      text: "We were impressed with the quick service and premium quality. Our home looks brand new!",
      image: "https://randomuser.me/api/portraits/men/70.jpg",
      name: "Vikram Singh",
      role: "Villa Owner, Jaipur",
    },
  ];
  


type Testimonial = {
  text: string
  image: string
  name: string
  role: string
}

const columns: Testimonial[][] = [[], [], []]
testimonials.forEach((t, i) => {
  columns[i % 3].push(t)
})

const [firstColumn, secondColumn, thirdColumn] = columns


const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5">
            What our users say
          </h2>
          <p className="text-center mt-5 opacity-75">
            See what our customers have to say about us.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;