'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type PresetColor = {
  name: string;
  value: string;
};

const PRESET_COLORS: PresetColor[] = [
  { name: 'Warm Beige', value: '#D9B382' },
  { name: 'Soft Green', value: '#81B29A' },
  { name: 'Ocean Blue', value: '#5DADE2' },
  { name: 'Dusty Rose', value: '#D4A5A5' },
  { name: 'Charcoal Grey', value: '#4A4A4A' },
];

function ColorSwatch(props: {
  color: PresetColor;
  selected: boolean;
  onSelect: (hex: string) => void;
}) {
  const { color, selected, onSelect } = props;
  
  return (
    <div className="text-center">
      <button
        type="button"
        onClick={() => onSelect(color.value)}
        className={cn(
          'w-20 h-20 rounded-full border-4 transition-all duration-200 hover:scale-105',
          selected 
            ? 'border-black shadow-lg scale-110' 
            : 'border-gray-300 hover:border-gray-400'
        )}
        style={{ backgroundColor: color.value }}
      />
      <p className="mt-2 text-sm font-medium text-gray-700">{color.name}</p>
    </div>
  );
}

export default function ColourGuide() {
  const [selectedColor, setSelectedColor] = useState<string>(PRESET_COLORS[0].value);

  return (
    <div className="min-h-screen bg-white">
      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 tracking-tight">
            Colour Guide
          </h1>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Choose from our carefully selected paint colors and see how they look in a real room instantly. 
            Simply click on any color to preview it on the wall.
          </p>
        </div>

        {/* Simple Left-Right Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Color Selection */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {PRESET_COLORS.map((color) => (
                <ColorSwatch
                  key={color.value}
                  color={color}
                  selected={selectedColor === color.value}
                  onSelect={setSelectedColor}
                />
              ))}
            </div>
          </div>

          {/* Right Side - Image Preview */}
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <div 
              className="absolute inset-0 transition-colors duration-300"
              style={{ backgroundColor: selectedColor }}
            />
            <Image
              src="/trans-wall.png"
              alt="Room preview"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

