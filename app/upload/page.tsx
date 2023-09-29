'use client';
import { CldUploadWidget } from 'next-cloudinary';

const UploadPage = () => {
  return (
    <CldUploadWidget uploadPreset="fpvzxzrf">
      {({ open }) => (
        <button className="btn brn-primary" onClick={() => open()}>
          Upload
        </button>
      )}
    </CldUploadWidget>
  );
};

export default UploadPage;
