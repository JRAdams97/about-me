import React from 'react';
import { faGithub, faLinkedin, faFacebookMessenger, faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function About(): JSX.Element {
    return (
        <div className="container m-auto flex flex-col py-16 md:py-20 lg:flex-row">
            <div className="w-full text-center sm:w-3/4 lg:w-1/2 lg:text-left">
                <h2 className="font-header text-4xl font-bold uppercase text-primary sm:text-5xl lg:text-6xl">
                    Who Am I?
                </h2>
                <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                    I'm Justin, a Full Stack Engineer
                </h4>
                <p className="pt-6 font-body leading-relaxed text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
                    <div className="flex items-center justify-center sm:justify-start">
                        <p className="font-body text-lg font-semibold uppercase text-gray-500">Connect with me</p>
                        <div className="hidden sm:block pl-3 text-2xl text-gray-500">
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0 text-2xl">
                        <a href="https://github.com/JRAdams97" className="pl-3 text-primary">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/justin-adams-a200ba141/" className="pl-5 text-primary">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://stackoverflow.com/users/21811323/j-adams" className="pl-5 text-primary">
                            <FontAwesomeIcon icon={faStackOverflow} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full pl-0 sm:w-3/4 lg:w-1/2 lg:pl-12 lg:pt-0">
                <div className="flex items-center justify-center sm:justify-start">
                    <p className="font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                        My Programming Expertise
                    </p>
                    <div className="hidden sm:block pl-3 text-2xl text-black">
                        <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                </div>
                <div className="pt-6">
                    <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                            Java<span className="pl-1 font-body font-semibold text-gray-500">(SpringBoot)</span>
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">100%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div className="h-3 rounded-full bg-primary w-[100%]"></div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                            Python<span className="pl-1 font-body font-semibold text-gray-500">(Django, Flask)</span>
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">90%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div className="h-3 rounded-full bg-primary w-[90%]"></div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                            JavaScript / TypeScript
                            <span className="pl-1 font-body font-semibold text-gray-500">
                                (Angular, Next.js, React)
                            </span>
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div className="h-3 rounded-full bg-primary w-[85%]"></div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                            Groovy
                            <span className="pl-1 font-body font-semibold text-gray-500">(Gradle, Jenkins CI)</span>
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div className="h-3 rounded-full bg-primary w-[70%]"></div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">Lua</h4>
                        <h3 className="font-body text-3xl font-bold text-primary">35%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div className="h-3 rounded-full bg-primary w-[35%]"></div>
                    </div>
                </div>
                <div className="pt-6">
                    <div className="flex items-end justify-between">
                        <h4 className="font-body font-semibold uppercase text-black">
                            Rust<span className="pl-1 font-body font-semibold text-gray-500">(Tauri)</span>
                        </h4>
                        <h3 className="font-body text-3xl font-bold text-primary">20%</h3>
                    </div>
                    <div className="mt-2 h-3 w-full rounded-full bg-lila">
                        <div className="h-3 rounded-full bg-primary w-[20%]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
