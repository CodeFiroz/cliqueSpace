import React, { useState, useId } from 'react'
import Main from '../components/Layout/Main'
import Sidebar from '../components/Sidebar/Sidebar'
import { Cake, Image, Lock, Trash, Users } from 'lucide-react'

const WritePost = () => {
    const [picture, setPicture] = useState(null);
    const [imageFile, setImageFile] = useState(null);
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
    return (
        <div>

            {/* <ReportModel /> */}
            <Main>
                <div>
                    <Sidebar />
                </div>

                <div className="p-10 px-20 overflow-y-auto">

                    <div className="flex items-center gap-2 mb-5">
                        <div className="size-10 bg-rose-600 text-white flex justify-center items-center rounded-full">
                            S
                        </div>

                        <div className='text-zinc-700 text-xs dark:text-zinc-300'>
                            <p><a href="#" className='hover:text-orange-500'>c/shits-happens</a></p>
                            <p><a href="#">BiryaniElaichi</a></p>
                        </div>

                    </div>

                    <div>
                        {picture && (
                            <div className="w-full flex justify-center items-center bg-zinc-100 dark:bg-neutral-800 p-2 rounded-xl relative">
                                <img src={picture} alt="upload" className="object-contain max-h-60 rounded-lg" />
                                <button
                                    onClick={handleRemoveImage}
                                    className="w-8 h-8 bg-red-400 flex justify-center items-center rounded-full text-white absolute top-2 right-2 cursor-pointer hover:bg-red-500"
                                >
                                    <Trash size={18} />
                                </button>
                            </div>
                        )}

                        <input
                            onChange={handleUpload}
                            accept="image/*"
                            type="file"
                            name="picture"
                            id={`picture-upload-${uniqueId}`}
                            hidden
                        />
                        <label htmlFor={`picture-upload-${uniqueId}`} className="dark:text-zinc-300 hover:text-black cursor-pointer inline-flex justify-center items-center px-4 py-2 bg-neutral-700 my-4 gap-3 text-sm rounded-full hover:bg-teal-400 transition">
                            Upload an image <Image size={18} />
                        </label>
                    </div>

                    <input className='text-xl font-semibold text-gray-600 dark:text-gray-200 mb-5 w-full border p-3 border-neutral-800 rounded-2xl outline-0' placeholder='Title' />

                    <textarea className='text-sm text-gray-500 dark:text-slate-300 font-thing w-full border p-3 border-neutral-800 rounded-2xl outline-0 h-60' placeholder='content'></textarea>

                    <div className="flex justify-end">
                        <button className='px-10 py-2 rounded-full bg-orange-500 text-white text-sm cursor-pointer'>Post </button>
                    </div>

                </div>

                <div className='py-10 pr-5'>
                    <div className="w-full rounded-2xl p-4 bg-slate-200">

                        <div>


                            <h3 className='font-semibold text-sm text-zinc-600 mb-4'>
                                Posting To
                            </h3>

                            <h3 className='font-semibold text-sm text-zinc-600'>
                                C/delhite
                            </h3>

                        </div>
                        <p className='my-3 text-xs text-zinc-600'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, ratione.
                        </p>

                        <div className="flex item-center gap-2 my-2 text-zinc-600 text-sm">
                            <span><Lock size={16} /></span>
                            <p>
                                Private
                            </p>
                        </div>
                        <div className="flex item-center gap-2 my-2 text-zinc-600 text-sm">
                            <span><Cake size={16} /></span>
                            <p>
                                Created Mar 20, 2006
                            </p>
                        </div>

                        <div className="flex item-center gap-2 my-2 text-zinc-600 text-sm">
                            <span><Users size={16} /></span>
                            <p>
                                35 Members
                            </p>
                        </div>

                    </div>


                </div>
            </Main>
        </div>
    )
}

export default WritePost
