"use client";
import React from "react";
import { Slider } from "@/components/ui/slider";

interface SpotifySliderProps {
  value?: number;
  onChange?: (value: number) => void;
}

const SpotifySlider: React.FC<SpotifySliderProps> = ({
  value = 1,
  onChange,
}) => {
  const handleChange = (newValue: number[]) => {
    onChange?.(newValue[0]);
  };

  return (
    <Slider
      defaultValue={[1]}
      value={[value]}
      onValueChange={handleChange}
      max={1}
      step={0.1}
      aria-label="Volume"
    />
  );
};

export default SpotifySlider;
