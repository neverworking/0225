import { Music } from 'lucide-react'

export default function MusicPlayer() {
  // YouTube embed link
  const youtubeEmbed = "https://www.youtube.com/embed/_mwqXnTEHSc"

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
          src={youtubeEmbed}
          width="100%"
          height="200"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  )
}
