import { buildBrandIcon, iconContentType } from "@/lib/brand-icon";

export const size = { width: 32, height: 32 };
export const contentType = iconContentType;

export default function Icon() {
  return buildBrandIcon(32);
}
