"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Gallery = ({ imagePaths }: { imagePaths: string[] }) => {
    //state variable to decide howmany images to show
    const [show, setshow] = useState(false);
    //state variables to determine howmany images should be rendered initially.
    const [count, setCount] = useState(1);

    //sets count = to the number of images in 1 row. Since gallery is a grid, so it displays 3 images for large devices, 2 for tablet mode and 1 for smartphones.
    const handleResize = () => {
        if (window.innerWidth > 1280) setCount(3);
        else if (window.innerWidth > 766) setCount(2);
        else setCount(1);
    };

    useEffect(() => {
        handleResize();
        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup function to remove event listener when the component is unmounted
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleShow = () => {
        setshow(!show);
    };
    return (
        <div>
            <section className="py-4 md:py-5 gap-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {show &&
                    imagePaths.map((imageSource) => (
                        <div
                            key={imageSource}
                            className="w-full aspect-w-4 aspect-h-3 relative"
                        >
                            <Image fill objectFit="cover" alt="event banner" src={imageSource} />
                        </div>
                    ))}
                {!show &&
                    imagePaths.slice(0, count).map((imageSource) => (
                        <div
                            key={imageSource}
                            className="w-full aspect-w-4 aspect-h-3 relative"
                        >
                            <Image fill objectFit="cover" alt="event banner" src={imageSource} />
                        </div>
                    ))}
            </section>
            {/* button will be displyed only if imagePaths length is greated than 3 */}
            {imagePaths.length > count ? (
                <button
                    type="button"
                    className="block text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 m-auto"
                    onClick={handleShow}
                >
                    Show {show ? "less" : "more"}
                </button>
            ) : (
                <></>
            )}
        </div>
    );
};

export default Gallery;
