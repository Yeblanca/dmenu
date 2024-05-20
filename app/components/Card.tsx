'use client';
import Image from 'next/image';
import React, { useRef, useMemo } from 'react';
import '@/styles/components/Card.scss';
import Link from 'next/link';
import { formatPrice } from '../lib/utils';
import { Button } from './Button';
import { VideoPlayer } from './VideoPlayer';
import videojs from 'video.js';
import Player from 'video.js/dist/types/player';

type Item = {
  id: number;
  name: string;
  description: string;
  price: number;
  slug: string;
  ItemDetail: { type: string; url: string }[];
};

export const Card: React.FC<Item> = ({ id, name, description, price, slug, ItemDetail }) => {
  const playerRef = useRef<Player | null>(null);

  const videoJsOptions = useMemo(() => ({
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    preload: 'auto',
    sources: [{
      src: 'https://yeblanca-bucket.s3.us-east-2.amazonaws.com/dynamicmenu/Platillo1.mp4',
      type: 'video/mp4'
    }],
    controlBar: {
      playToggle: false,
      captionsButton: false,
      chaptersButton: false,
      subtitlesButton: false,
      remainingTimeDisplay: false,
      progressControl: {
        seekBar: true
      },
      fullscreenToggle: false,
      playbackRateMenuButton: false,
    },
  }), []);

  const handlePlayerReady = (player: Player) => {
    playerRef.current = player;

    player.on('waiting', () => {
      videojs.log('player is waiting');
    });


    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

  return (
    <div className="card">
      <div className="image">
        <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />
      </div>
      <div className="card-details">
        <Link href={`/items/${slug}`}>
          <h3>{name}</h3>
        </Link>
        <p>{description}</p>
        <div className="action-row">
          <h2>{formatPrice(price)}</h2>
          <Button title="Add to cart" item={{ id, name, description, price, slug, ItemDetail }} />
        </div>
      </div>
    </div>
  );
};
