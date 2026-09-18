import { Intro } from "@/components/Intro";
import { FramerCardStack } from "@/components/FramerCardStack";
import { ClotheslineGallery } from "@/components/ClotheslineGallery";

export default function HomePage() {
  return (
    <>
      <Intro />
      <FramerCardStack />
      <ClotheslineGallery />
    </>
  );
}
