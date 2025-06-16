import { Image, Smile, Trash } from 'lucide-react';
import React, { useState, useId } from 'react';

const CommentBox = ({
  onSubmit,
  placeholder = 'Join the conversation',
  submitLabel = 'Comment',
  className = '',
  initialImage = null,
}) => {
  const [picture, setPicture] = useState(initialImage);
  const [imageFile, setImageFile] = useState(null);
  const [text, setText] = useState('');

  const uniqueId = useId();

  const handleUpload = (e) => {
    const imgFile = e.target.files[0];
    if (!imgFile) return;
    const ImageURL = URL.createObjectURL(imgFile);
    setPicture(ImageURL);
    setImageFile(imgFile);
  };

  const handleRemoveImage = () => {
    setPicture(null);
    setImageFile(null);
  };

  const handleSubmit = () => {
    if (text.trim() === '' && !imageFile) return;
    onSubmit(text.trim(), imageFile);
    setText('');
    handleRemoveImage();
  };

  return (
    <div className={`w-full rounded-2xl p-4 border-2 border-gray-200 mt-6 ${className}`}>      
      {picture && (
        <div className="w-full flex justify-center items-center bg-zinc-100 p-2 rounded-xl relative">
          <img src={picture} alt="upload" className="object-contain max-h-60 rounded-lg" />
          <button
            onClick={handleRemoveImage}
            className="w-8 h-8 bg-red-400 flex justify-center items-center rounded-full text-white absolute top-2 right-2 cursor-pointer hover:bg-red-500"
          >
            <Trash size={18} />
          </button>
        </div>
      )}

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full resize-none outline-none border-0 mt-3 pt-1 pl-1 text-sm text-gray-600"
        placeholder={placeholder}
        rows={3}
      />

      <div className="flex justify-between items-center mt-3">
        <div className="flex gap-2 items-center">
          <input
            onChange={handleUpload}
            accept="image/*"
            type="file"
            name="picture"
            id={`picture-upload-${uniqueId}`}
            hidden
          />
          <label htmlFor={`picture-upload-${uniqueId}`} className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-full hover:text-white hover:bg-teal-400 transition">
            <Image size={18} />
          </label>

          <div className="w-8 h-8 cursor-pointer flex justify-center items-center rounded-full hover:bg-amber-400 transition">
            <Smile size={18} />
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="text-xs text-white bg-orange-500 px-4 py-2 rounded-full cursor-pointer hover:bg-orange-600 transition"
        >
          {submitLabel}
        </button>
      </div>
    </div>
  );
};

export default CommentBox;
