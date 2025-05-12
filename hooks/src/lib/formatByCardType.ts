import { cardRules } from "./cardRules";
import { CardType } from "./types/Card";

export function formatByCardType(raw: string, cardType: CardType): string {
  const digits = raw.replace(/\D/g, "");
  const rule = cardRules.find((r) => r.type === cardType);
  const lengths = rule?.numberLengths ?? {
    first: 4,
    second: 4,
    third: 4,
    fourth: 4,
  };

  const chunks: string[] = [];
  let cursor = 0;
  for (const len of Object.values(lengths)) {
    if (len === 0) continue;
    const chunk = digits.slice(cursor, cursor + len);
    if (chunk) chunks.push(chunk);
    cursor += len;
  }

  return chunks.join(" ");
}
