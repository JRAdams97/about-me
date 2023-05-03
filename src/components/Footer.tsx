import React from 'react';

export default function Footer(): JSX.Element {
    return (
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                © 2023 Justin Adams, All Rights Reserved.
            </span>
        </div>
    );
}
