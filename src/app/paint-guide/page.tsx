"use client";

import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import Image from "next/image";

interface ColorCardProps {
  title: string;
  description: string;
  imgSrc: string;
}

const colorsData: ColorCardProps[] = [
  {
    title: "Yellow",
    description:
      "Summon self-esteem with Yellow. Try shades of yellow as they signify communication and power.",
    imgSrc: "/yellow.png", // replace with actual asset
  },
  {
    title: "Purple",
    description:
      "Peace with Purple. Try shades of lavender for a calm and soothing sleep.",
    imgSrc: "/purple.png", // replace with actual asset
  },
  {
    title: "Green",
    description:
      "Go green and heal. The colour is associated with wood which tends to cure stress and depression.",
    imgSrc: "/green.png", // replace with actual asset
  },
];

const colorsDataDetails = [
  {
    title: "Red",
    description: "Ignite love and passion with Red.",
    imgSrc: "/red.png", // replace with actual asset
  },
  {
    title: "Orange",
    description: "Boost optimism and energy with Orange.",
    imgSrc: "/orange.png",
  },
  {
    title: "Yellow/Gold",
    description: "Unleash power and wisdom with Yellow.",
    imgSrc: "/yellow-gold.png",
  },
  {
    title: "Pink",
    description: "Embrace care and tenderness with Pink.",
    imgSrc: "/pink.png",
  },
  {
    title: "Green",
    description: "Invite generosity and renewal with Green.",
    imgSrc: "/green1.png",
  },
  {
    title: "Blue-Greens",
    description: "Create balance and calm with Blue-Greens.",
    imgSrc: "/blue-green.png",
  },
  {
    title: "Deeper Blues",
    description: "Strengthen confidence with Deeper Blues.",
    imgSrc: "/deepar-blue.png",
  },
  {
    title: "Purple",
    description: "Welcome nobility and grace with Purple.",
    imgSrc: "/purple.png",
  },
  {
    title: "Black",
    description: "Add elegance and wealth with Black.",
    imgSrc: "/black.png",
  },
  {
    title: "White",
    description: "Celebrate reverence with White.",
    imgSrc: "/white.png",
  },
  {
    title: "Gray",
    description: "Generate dignity and poise with Gray.",
    imgSrc: "/grey.png",
  },
  {
    title: "Brown",
    description: "Explore endurance and grounding with Brown.",
    imgSrc: "/browne.png",
  },
];


const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function PaintGuide() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 mt-10">
      <div className="max-w-5xl w-full mx-auto  text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Colors According to Vastu
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Looking for wall colours that fill your house with warmth, positivity,
          and vibrance? Acme Paints your spot! Check out our beautiful palette.
        </p>
      </div>

      <div className="max-w-5xl w-full mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
        {colorsData.map((color, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center max-w-sm mx-auto"
          >
            <div className="w-40 h-40 relative">
              <Image
                src={color.imgSrc}
                alt={color.title}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mt-6 text-xl font-bold text-gray-800">
              {color.title}
            </h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {color.description}
            </p>
          </div>
        ))}
      </div>

      {/* Zone Image Section */}
      <div className="max-w-5xl w-full mx-auto mt-16 flex flex-col gap-15">
        <h3 className="text-xl font-bold text-gray-800">Zone Wise Colors According to Vaastu</h3>
        <Image
          src='/zone-img.jpg'
          alt='Vastu Zone Guide'
          width={1000}
          height={600}
          style={{ width: '100%', height: 'auto' }}
          className="object-contain max-w-full !h-auto mix-blend-multiply"
        />
        <Image
          src='/color-psychology.png'
          alt='Color Psychology Guide'
          width={1000}
          height={600}
          style={{ width: '100%', height: 'auto' }}
          className="object-contain max-w-full !h-auto mix-blend-multiply"
        />
      </div>

      {/* Color Section */}
      <div className="max-w-5xl w-full mx-auto mt-16">
        <div className="flex flex-col gap-6 text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-bold text-primary">Transform Your Home with Feng Shui Colors.</h1>
          <p>Feng Shui — “the way of wind and water” — is an ancient Chinese art focused on designing environments that bring peace and harmony. Use our curated color palette to Feng Shui your space and create the perfect atmosphere for your home!</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          {colorsDataDetails.map((color, idx) => (
            <div
              key={idx}
              className="flex flex-col max-w-sm mx-auto"
            >
              <div className="h-40 relative">
                <Image
                  src={color.imgSrc}
                  alt={color.title}
                  fill
                  className="object-contain w-full h-auto"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold text-gray-800">
                {color.title}
              </h3>
              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {color.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ContactForm/>
    </section>
  );
}
