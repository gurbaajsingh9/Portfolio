"use client";

import { useIsSoundEnabled } from "@/store/use-sound-enabled";
import { useEffect, useRef } from "react";

export function BackgroundAudio() {
  const { isSoundEnabled } = useIsSoundEnabled();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.15; // Set a chill ambient volume

    if (isSoundEnabled) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Auto-play was prevented by the browser. 
          // We wait for the user's first click on the document to start playing.
          const startPlay = () => {
             if (useIsSoundEnabled.getState().isSoundEnabled) {
                 audio.play().catch(() => {});
             }
             document.removeEventListener('click', startPlay);
          };
          document.addEventListener('click', startPlay);
        });
      }
    } else {
      audio.pause();
    }
  }, [isSoundEnabled]);

  return <audio ref={audioRef} src="/sfx/aashiqui-theme.mp3" loop />;
}
