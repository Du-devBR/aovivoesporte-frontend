import { SportCategory } from "@/types/game";
import bannerBasketball from "@/assets/banner-basketball.jpg";
import bannerSoccer from "@/assets/banner-soccer.jpg";
import bannerMma from "@/assets/banner-mma.jpg";
import bannerTennis from "@/assets/banner-tennis.jpg";

export const sports: SportCategory[] = [
  { id: "basketball", name: "Basquete", icon: "🏀", banner: bannerBasketball },
  { id: "soccer", name: "Futebol", icon: "⚽", banner: bannerSoccer },
  { id: "mma", name: "MMA", icon: "🥊", banner: bannerMma },
  { id: "tennis", name: "Tênis", icon: "🎾", banner: bannerTennis },
];
