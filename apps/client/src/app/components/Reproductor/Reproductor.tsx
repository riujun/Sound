/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { HiChevronLeft, HiChevronRight, HiStop } from 'react-icons/hi2';
import { TbPlayerPlayFilled } from 'react-icons/tb';

import img from '@/app/assets/landingpage/p.jpg';

interface Song {
  title: string;
  src: string;
}

interface ReproductorProps {
  songs: Song[];
  onSongSelect: (index: number) => void;
}

const Reproductor: React.FC<ReproductorProps> = ({ songs, onSongSelect }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handleLoadedData = () => {
      setDuration(audioElement.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audioElement.currentTime);
    };

    audioElement.addEventListener('loadeddata', handleLoadedData);
    audioElement.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement.removeEventListener('loadeddata', handleLoadedData);
      audioElement.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.src = songs[currentSongIndex].src;
    audioElement.load();
    setIsPlaying(false);
    setCurrentTime(0);
  }, [currentSongIndex, songs]);

  useEffect(() => {
    const audioElement = audioRef.current;

    const handlePlayPause = async () => {
      if (isPlaying) {
        try {
          await audioElement?.play();
        } catch (error) {
          // Manejar el error de reproducción
        }
      } else {
        audioElement?.pause();
      }
    };

    void handlePlayPause();
  }, [isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;
    audioElement.volume = volume;
  }, [volume]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    onSongSelect(nextIndex);
  };

  const handlePreviousSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    onSongSelect(prevIndex);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <audio ref={audioRef} />
      <section className="flex h-[140px] w-[800px] flex-col items-center justify-center rounded-3xl border-2 border-orange-400 bg-orange-100">
        <div className="flex h-[52px] w-[206px] justify-evenly">
          <button onClick={handlePreviousSong}>
            <HiChevronLeft className="text-[18px]" />
          </button>
          <button
            className="relative bottom-7 h-[80px] w-[80px] rounded-full border-[4px] border-orange-400 bg-orange-300"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <div className="flex items-center justify-center">
                <HiStop />
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <TbPlayerPlayFilled className="text-[18px]" />
              </div>
            )}
          </button>
          <button onClick={handleNextSong}>
            <HiChevronRight />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <div>
            <Image className="h-[62px] w-[62px]" src={img} alt="img" />
          </div>
          <div>
            <input
              className="w-[447px]"
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              step={0.01}
              onChange={handleSeek}
            />
            <span>{formatTime(currentTime)}</span> / <span>{formatTime(duration)}</span>
          </div>
          <div>
            <div>
              <input
                className="w-[100px] bg-gray-300"
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={handleVolumeChange}
              />
            </div>
          </div>
        </div>
        <p className="pb-4">{songs[currentSongIndex].title}</p>
      </section>
    </div>
  );
};

export default Reproductor;
