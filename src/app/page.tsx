import { Intro } from "@/components/Intro";
import { ProjectsSection } from "@/components/ProjectsSection";
import { AboutSection } from "@/components/AboutSection";
import { ClotheslineGallery } from "@/components/ClotheslineGallery";

export default function HomePage() {
  return (
    <>
      <Intro />
      <ProjectsSection />
      <AboutSection variant="home" />
      <ClotheslineGallery />
    </>
  );
}
