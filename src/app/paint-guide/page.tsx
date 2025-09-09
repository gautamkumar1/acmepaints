"use client";

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

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function PaintGuide() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          Colors According to Vastu
        </h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Looking for wall colours that fill your house with warmth, positivity,
          and vibrance? Acme Paints your spot! Check out our beautiful palette.
        </p>
      </div>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-center">
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
      <div className="mt-16 flex justify-center">
        <div className="w-full h-40 relative">
          <Image
            src='/zone-img.jpg'
            alt='Vastu Zone Guide'
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
