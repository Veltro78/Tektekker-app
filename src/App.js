import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { useSwipeable } from "react-swipeable";

const tracks = [
  {
    title: "Hard Techno Drop 1",
    artist: "DJ Thunder",
    cover: "https://source.unsplash.com/random/400x400?techno",
    artistImage: "https://source.unsplash.com/random/100x100?dj",
    audio: "https://www.sample-videos.com/audio/mp3/crowd-cheering.mp3",
    illustration: "https://source.unsplash.com/random/400x400?neon"
  },
  {
    title: "Uptempo Madness",
    artist: "Bass Destroyer",
    cover: "https://source.unsplash.com/random/400x400?rave",
    artistImage: "https://source.unsplash.com/random/100x100?artist",
    audio: "https://www.sample-videos.com/audio/mp3/wave.mp3",
    illustration: "https://source.unsplash.com/random/400x400?abstract"
  },
  {
    title: "Acid Rave 303",
    artist: "Underground Sound",
    cover: "https://source.unsplash.com/random/400x400?party",
    artistImage: "https://source.unsplash.com/random/100x100?producer",
    audio: "https://www.sample-videos.com/audio/mp3/rock.mp3",
    illustration: "https://source.unsplash.com/random/400x400?cyberpunk"
  }
];

export default function TechnoDiscoveryApp() {
  const [index, setIndex] = useState(0);
  const [playlist, setPlaylist] = useState([]);
  const currentTrack = tracks[index];

  const nextTrack = () => {
    setIndex((prev) => (prev + 1) % tracks.length);
  };

  const addToPlaylist = () => {
    if (!playlist.includes(currentTrack)) {
      setPlaylist([...playlist, currentTrack]);
    }
  };

  const handlers = useSwipeable({
    onSwipedUp: nextTrack,
  });

  return (
    <div {...handlers} className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4 relative">
      <motion.h1
        className="text-4xl font-extrabold mb-4 text-purple-500"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        TEKTEKKER
      </motion.h1>
      <Card className="w-80 p-4 text-center bg-gray-900">
        <CardContent>
          <motion.img
            key={currentTrack.illustration}
            src={currentTrack.illustration}
            alt="Illustration"
            className="w-full h-40 object-cover rounded-lg mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.img
            key={currentTrack.cover}
            src={currentTrack.cover}
            alt={currentTrack.title}
            className="w-full h-64 object-cover rounded-lg mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src={currentTrack.artistImage} alt={currentTrack.artist} className="w-12 h-12 rounded-full" />
            <div>
              <h2 className="text-xl font-semibold">{currentTrack.title}</h2>
              <p className="text-sm text-gray-400">{currentTrack.artist}</p>
            </div>
          </div>
          <audio controls src={currentTrack.audio} className="w-full mt-4" />
          <div className="flex justify-between mt-4">
            <Button onClick={nextTrack} className="bg-purple-600">Passer au suivant</Button>
            <Button onClick={addToPlaylist} className="bg-red-600 flex items-center">
              <Heart className="mr-2" /> Ajouter
            </Button>
          </div>
        </CardContent>
      </Card>
      <p className="text-gray-500 mt-4">Swipe vers le haut pour changer de son 🎵</p>
    </div>
  );
}
