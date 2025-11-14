import { useState } from "react";
import { FaImages, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { ImageGalleryModal } from "./constant";
import Image from "next/image";
import { Button } from "../ui/button";

// Project interface
interface Project {
  title: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
  isLarge?: boolean;
  link?: string;
  githubLink?: string;
  gallery?: string[];
}

// Project Card Component
export const ProjectCard = ({
  title,
  imageSrc,
  imageAlt,
  description,
  isLarge = false,
  link,
  githubLink,
  gallery,
}: Project) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <>
      <Card className="group h-full backdrop-blur-lg bg-cc/5 border-h1/20 hover:border-cg">
        <CardHeader className="p-6">
          <CardTitle
            className={`${
              isLarge ? "text-3xl" : "text-2xl"
            } font-semibold tracking-tight text-h1`}
          >
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 pt-0">
          <div className="flex flex-col space-y-6">
            <div className="relative w-full h-[300px] overflow-hidden rounded-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 5400px) 90vw, (max-width: 1024px) 50vw, 33vw"
                quality={90}
              />
            </div>
            <p
              className={`${
                isLarge ? "text-lg" : "text-base"
              } text-dm/80 font-light leading-relaxed`}
            >
              {description}
            </p>
            <div className="flex space-x-4">
              {gallery && gallery.length > 0 && (
                <Button
                  variant="outline"
                  onClick={() => setIsGalleryOpen(true)}
                  className="flex items-center gap-2 text-h1 hover:text-h2 border-h1/20 hover:border-h2/50 hover:bg-h2/10 transition-all duration-300"
                  aria-label="View Gallery"
                >
                  <FaImages className="w-4 h-4" />
                  <span>View Gallery</span>
                </Button>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors text-h1 hover:text-h2"
                  aria-label="GitHub Repository"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center transition-colors text-h1 hover:text-h2"
                  aria-label="Live Demo"
                >
                  <FaExternalLinkAlt className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {gallery && gallery.length > 0 && (
        <ImageGalleryModal
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          images={gallery}
          title={title}
        />
      )}
    </>
  );
};
