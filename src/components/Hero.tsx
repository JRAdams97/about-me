import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export default function Hero(): JSX.Element {
    return (
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                    <span style={{ color: '' }}>
                        <Typewriter loop cursor delaySpeed={2000} words={["Hi, I'm Justin!"]} />
                    </span>
                </h1>
            </div>
        </div>
    );
}
