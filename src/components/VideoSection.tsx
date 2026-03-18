import { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

const videos = [
  { src: "/videos/video-1.mp4", title: "Catering Setup" },
  { src: "/videos/video-2.mp4", title: "Floral Backdrop" },
  { src: "/videos/video-3.mp4", title: "Grand Entrance" },
  { src: "/videos/video-4.mp4", title: "Light Tunnel Walkthrough" },
  { src: "/videos/video-5.mp4", title: "Wedding Stage" },
  { src: "/videos/video-6.mp4", title: "Entrance Reveal" },
  { src: "/videos/video-7.mp4", title: "Seating & Stage View" },
  { src: "/videos/video-8.mp4", title: "Hall Decor View" },
];

const VideoCard = ({ src, title }: { src: string; title: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="group relative rounded-lg overflow-hidden border border-gold/10 hover:border-primary/30 transition-all duration-300 hover:shadow-gold">
      <div className="relative aspect-video bg-card">
        <video
          ref={videoRef}
          src={src}
          muted={muted}
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />
        {/* Overlay controls */}
        <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={togglePlay}
            className="w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold hover:scale-110 transition-transform"
          >
            {playing ? (
              <Pause className="w-6 h-6 text-primary-foreground" />
            ) : (
              <Play className="w-6 h-6 text-primary-foreground ml-1" />
            )}
          </button>
        </div>
        {/* Mute toggle */}
        {playing && (
          <button
            onClick={() => {
              setMuted(!muted);
              if (videoRef.current) videoRef.current.muted = !muted;
            }}
            className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center text-foreground/70 hover:text-primary transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg text-foreground">{title}</h3>
      </div>
    </div>
  );
};

const VideoSection = () => {
  return (
    <section id="videos" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-elegant text-lg tracking-[0.3em] uppercase text-primary/70 mb-3">
            Experience the Magic
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Video Gallery
          </h2>
          <div className="w-24 h-[2px] bg-gradient-gold mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={index} src={video.src} title={video.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
