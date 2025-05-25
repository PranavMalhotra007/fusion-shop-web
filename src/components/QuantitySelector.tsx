
import React from "react";
import { Minus, Plus } from "lucide-react";

type Props = {
  value: number;
  min?: number;
  max?: number;
  onChange: (newValue: number) => void;
  disabled?: boolean;
  className?: string;
};

export default function QuantitySelector({
  value,
  min = 1,
  max = 99,
  onChange,
  disabled = false,
  className = "",
}: Props) {
  const handleDecrease = () => {
    if (value > min) onChange(value - 1);
  };
  const handleIncrease = () => {
    if (value < max) onChange(value + 1);
  };
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <button
        type="button"
        onClick={handleDecrease}
        disabled={disabled || value <= min}
        className="p-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        aria-label="Decrease quantity"
      >
        <Minus size={16} />
      </button>
      <span className="min-w-[2ch] text-center px-2">{value}</span>
      <button
        type="button"
        onClick={handleIncrease}
        disabled={disabled || value >= max}
        className="p-1 rounded bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
        aria-label="Increase quantity"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
