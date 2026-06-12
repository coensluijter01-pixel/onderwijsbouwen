import { buildBrandIcon, iconContentType } from "@/lib/brand-icon";

export const size = { width: 180, height: 180 };
export const contentType = iconContentType;

export default function AppleIcon() {
  return buildBrandIcon(180);
}
