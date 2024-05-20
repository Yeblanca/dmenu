'use client';
import React, { useEffect, useRef } from 'react';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';
import 'video.js/dist/video-js.css';

interface VideoPlayerProps {
  options: any;
  onReady?: (player: Player) => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ options, onReady }) => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!playerRef.current) {
      const videoElement = document.createElement('video-js');
      videoRef.current?.appendChild(videoElement);

      const player = playerRef.current = videojs(videoElement, options, () => {
        videojs.log('player is ready');
        if (onReady) {
          onReady(player);
        }
      });

      const playVideo = () => player.play();
      const pauseVideo = () => player.pause();

      const video = videoRef.current?.querySelector('video');
      console.log(video);
      if (video) {
        video.addEventListener('mouseenter', playVideo)
        video.addEventListener('mouseleave', pauseVideo);
        video.addEventListener('touchstart', playVideo);
      }

    }
  }, [options, onReady]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      player?.dispose();
      playerRef.current = null;
    };
  }, []);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
    </div>
  );
};
