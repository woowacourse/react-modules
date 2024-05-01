export const POSITIONS = ["top", "bottom", "center"] as const;
export type Position = (typeof POSITIONS)[number];
