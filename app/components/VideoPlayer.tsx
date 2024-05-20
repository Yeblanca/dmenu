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

      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
      video.addEventListener('mouseenter',() => { playVideo(); console.log('mouse enter') });
});

      // document.querySelectorAll('').addEventListener('mouseenter', () => { playVideo(); console.log('mouse enter') });
      videoElement.addEventListener('mouseleave', pauseVideo);
      videoElement.addEventListener('touchstart', playVideo);

      return () => {
        videoElement.removeEventListener('mouseenter', playVideo);
        videoElement.removeEventListener('mouseleave', pauseVideo);
        videoElement.removeEventListener('touchstart', playVideo);
      };
    } else {
      const player = playerRef.current;
      player?.autoplay(options.autoplay);
      player?.src(options.sources);
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
