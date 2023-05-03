import React from 'react';

export default function Header(): JSX.Element {
    return (
        <div className="w-full z-50 top-0 py-3 sm:py-5 absolute">
            <nav className="flex w-screen">
                <div className="flex-1 flex justify-center mr-auto">
                    <span className="cursor-pointer pt-1 font-header font-semibold uppercase text-white mx-3">
                        About Me
                    </span>
                    <span className="cursor-pointer pt-1 font-header font-semibold uppercase text-white mx-3">
                        Skills
                    </span>
                    <span className="cursor-pointer pt-1 font-header font-semibold uppercase text-white mx-3">
                        Works
                    </span>
                    <span className="cursor-pointer pt-1 font-header font-semibold uppercase text-white mx-3">
                        Experience
                    </span>
                    <span className="cursor-pointer pt-1 font-header font-semibold uppercase text-white mx-3">
                        Contact Me
                    </span>
                </div>
            </nav>
        </div>
    );
}
