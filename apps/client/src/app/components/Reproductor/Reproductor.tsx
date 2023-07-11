/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { HiStop } from 'react-icons/hi2';
import { TbPlayerPlayFilled } from 'react-icons/tb';

import rendom from '@/app/assets/Aleatorio.png';
import ant from '@/app/assets/Anterior.png';
import img from '@/app/assets/landingpage/p.jpg';
import repet from '@/app/assets/Repeat.png';
import next from '@/app/assets/Siguiente.png';

interface Song {
  title: string;
  src: string;
}

interface ReproductorProps {
  songs: Song[];
  onSongSelect: (index: number) => void;
}

const ReproductorResponsive: React.FC<ReproductorProps> = ({ songs, onSongSelect }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [volume, setVolume] = useState(1);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Definir el ancho máximo para considerar como dispositivo móvil
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verificar el tamaño inicial de la pantalla

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
    setCurrentTime(0);
  }, [currentSongIndex, songs]);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (isPlaying) {
      void audioElement.play();
    } else {
      audioElement.pause();
    }
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
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <audio ref={audioRef} />
      {isMobile ? (
        <section
          className={`bg-orange-200 ${
            isExpanded ? 'h-[473px] w-[328px]' : 'h-[70px] w-[328px]'
          } mb-20 rounded border-[1px]`}
        >
          <div className="flex flex-col items-center justify-center">
            <div className=" flex  justify-end">
              <button
                className={`flex justify-end bg-orange-200 ${isExpanded ? '' : 'hidden'}`}
                onClick={toggleExpanded}
              >
                <BsChevronDown />
              </button>
            </div>
            {isExpanded ? (
              <div className="flex flex-col items-center ">
                <div className="mt-5">
                  <Image className="h-[288px] w-[280px]" src={img} alt="img" />
                </div>
                <div className="mt-5 flex items-center justify-center">
                  <button className="mr-2">
                    <Image src={rendom} alt="alt" className=" mr-2" />
                  </button>
                  <button className="mr-5" onClick={handlePreviousSong}>
                    <Image src={ant} alt="alt" className=" " />
                  </button>
                  <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-[3px] border-orange-400 bg-orange-100 p-6 ">
                    {isPlaying ? (
                      <button onClick={handlePlayPause}>
                        <HiStop />
                      </button>
                    ) : (
                      <button onClick={handlePlayPause}>
                        <TbPlayerPlayFilled />
                      </button>
                    )}
                  </div>
                  <button className="ml-5" onClick={handleNextSong}>
                    <Image src={next} alt="alt" className="" />
                  </button>
                  <button className="ml-2">
                    <Image src={repet} alt="alt" className="ml-2" />
                  </button>
                </div>
                <div className="flex items-center justify-center">
                  <span>{formatTime(currentTime)}</span>
                  <input
                    className="w-[204px]"
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    step={0.01}
                    onChange={handleSeek}
                  />
                  <span>{formatTime(duration)}</span>
                </div>
                <p className="mt-5">{songs[currentSongIndex].title}</p>
              </div>
            ) : (
              <div className="h-[70px] w-full  ">
                <div className="relative bottom-3 right-3 w-[328px]">
                  <button className=" relative flex w-full justify-end  " onClick={toggleExpanded}>
                    <BsChevronUp className="bg-orange-200" />
                  </button>
                </div>
                <div className="flex justify-between ">
                  <div className="flex items-center gap-2">
                    <div>
                      <Image className="ml-2 h-[32px] w-[32px]" src={img} alt="img" />
                    </div>
                    <span>{songs[currentSongIndex].title}</span>
                  </div>
                  <div>
                    <div className="mr-2 flex items-center rounded-full border-[2px] border-orange-500 p-2">
                      {isPlaying ? (
                        <button onClick={handlePlayPause}>
                          <HiStop />
                        </button>
                      ) : (
                        <button onClick={handlePlayPause}>
                          <TbPlayerPlayFilled />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-start ">
                  <input
                    className="w-[90%] "
                    type="range"
                    min={0}
                    max={duration}
                    value={currentTime}
                    step={0.01}
                    onChange={handleSeek}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      ) : (
        <section className="flex h-[100px] w-[800px] flex-col items-center justify-center rounded-3xl border-2 border-orange-400 bg-orange-100">
          <div className="flex h-[52px] w-[206px] justify-evenly">
            <button className="mr-2" onClick={handleNextSong}>
              <Image src={rendom} alt="alt" className="relative top-5 text-[18px]" />
            </button>
            <button onClick={handlePreviousSong}>
              <Image src={ant} alt="alt" className="relative top-5 text-[18px]" />
            </button>
            <button
              className="relative bottom-2 h-[60px] w-[60px] rounded-full border-[4px] border-orange-400 bg-orange-300"
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
              <Image src={next} alt="alt" className="relative top-5 text-[18px]" />
            </button>
            <button className="ml-2">
              <Image src={repet} alt="alt" className="relative top-5  text-[18px]" />
            </button>
          </div>

          <div className="relative bottom-2">
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
                    className="w-[100px]   "
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
          </div>
          <p className="relative bottom-5">{songs[currentSongIndex].title}</p>
        </section>
      )}
    </div>
  );
};

export default ReproductorResponsive;
