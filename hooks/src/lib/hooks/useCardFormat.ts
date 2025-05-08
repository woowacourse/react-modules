import { useState, useMemo } from "react";
import { checkCardBrand } from "../utils/card-brand-checker";
import { SPECIAL_RULES } from "../utils/format-helper";

export interface CardFormatResult {
  formatted: string;
  totalLength: number;
  placeholder: string;
}

function getRule(digits: string): number[] {
  return SPECIAL_RULES[checkCardBrand(digits)];
}

function splitIntoChunks(digits: string, rule: number[]): string[] {
  const parts: string[] = [];
  let idx = 0;
  rule.forEach((size) => {
    if (idx >= digits.length) return;
    parts.push(digits.slice(idx, idx + size));
    idx += size;
  });
  return parts;
}

function buildPlaceholder(
  rule: number[],
  splitter: string,
  placeholderChar = "X"
): string {
  return rule
    .map((n) => placeholderChar.repeat(n))
    .join(splitter)
    .trim();
}

function calcTotalLength(rule: number[], splitter: string): number {
  const totalDigits = rule.reduce((s, n) => s + n, 0);
  const separators = rule.length > 1 ? rule.length - 1 : 0;
  return totalDigits + separators * splitter.length;
}

export function computeCardFormat(
  digits: string,
  splitter = " ",
  placeholderChar = "X"
): CardFormatResult {
  const rule = getRule(digits);
  const formatted = splitIntoChunks(digits, rule).join(splitter);
  return {
    formatted,
    totalLength: calcTotalLength(rule, splitter),
    placeholder: buildPlaceholder(rule, splitter, placeholderChar),
  };
}

export interface UseCardFormatReturn {
  formatted: string;
  raw: string;
  totalLength: number;
  onCardNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}
export interface UseCardFormatOptions {
  splitter?: string;
  placeholderChar?: string;
}

export default function useCardFormat({
  splitter = " ",
  placeholderChar = "X",
}: UseCardFormatOptions = {}): UseCardFormatReturn {
  const [raw, setRaw] = useState("");

  const { formatted, totalLength, placeholder } = useMemo(
    () => computeCardFormat(raw, splitter, placeholderChar),
    [raw, splitter, placeholderChar]
  );

  const onCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRaw(e.target.value.replace(/\D/g, ""));
  };

  return { formatted, raw, totalLength, placeholder, onCardNumberChange };
}
