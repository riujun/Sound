/* eslint-disable prettier/prettier */
'use client';
import Image from 'next/image';
import React from 'react';

import loader from '@/app/assets/LoaderPeuqño.gif';

interface ModalAlertProps {
  visible: boolean;
}

export default function Loader({ visible }: ModalAlertProps) {
  if (!visible) return null;

  return (
    <>
      <div className="modal backdrop-blur-xs flex items-center justify-center bg-black bg-opacity-25">
        <Image src={loader} alt="loader"></Image>
      </div>
    </>
  );
}
