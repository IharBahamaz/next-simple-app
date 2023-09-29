'use client';
import { CldUploadWidget, CldImage } from 'next-cloudinary';
import React, { useState } from 'react';

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState('');

  return (
    <>
      {publicId && <CldImage src={publicId} width={270} height={180} alt="A" />}
      <CldUploadWidget
        uploadPreset="fpvzxzrf"
        onUpload={(result, widget) => {
          if (result.event !== 'success') return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn brn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
    </>
  );
};

export default UploadPage;
