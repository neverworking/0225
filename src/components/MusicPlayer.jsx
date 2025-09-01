import { Music } from 'lucide-react'

export default function MusicPlayer() {
  // Change this to your favorite track/playlist
  const spotifyEmbed = "https://open.spotify.com/embed/track/4iJyoBOLtHqaGxP12qzhQI?utm_source=generator"
  return (
    <div className="glass rounded-2xl p-4 border border-white/10">
      <div className="flex items-center gap-2 mb-3">
        <Music className="w-5 h-5 text-brand" />
        <p className="text-sm text-white/80">Press play for our vibe</p>
      </div>
      <div className="relative rounded-xl overflow-hidden">
        <iframe
          title="music"
          style={{ border: 0 }}
          src={spotifyEmbed}
          width="100%"
          height="152"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}