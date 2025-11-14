import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export const ImageGalleryModal = ({
  isOpen,
  onClose,
  images,
  title,
}: {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  title: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 bg-bc border-h1/20">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl font-semibold text-h1">
            {title} - Gallery
          </DialogTitle>
        </DialogHeader>

        <div className="relative">
          <div className="relative w-full h-[500px] bg-black/5">
            <Image
              src={images[currentIndex]}
              alt={`${title} - Image ${currentIndex + 1}`}
              fill
              className="object-contain"
              quality={90}
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bc/80 backdrop-blur-sm border border-h1/20 hover:bg-cc/10 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6 text-h1" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-bc/80 backdrop-blur-sm border border-h1/20 hover:bg-cc/10 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6 text-h1" />
              </button>
            </>
          )}

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-bc/80 backdrop-blur-sm border border-h1/20">
            <span className="text-sm text-h1">
              {currentIndex + 1} / {images.length}
            </span>
          </div>
        </div>

        {images.length > 1 && (
          <div className="flex gap-2 p-4 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex
                    ? "border-h2 scale-105"
                    : "border-h1/20 hover:border-h1/40"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                  quality={60}
                />
              </button>
            ))}
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
