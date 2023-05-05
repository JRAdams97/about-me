import React from 'react';
import { getIconByName } from '@/components/Icons';

type Props = {
    name: string;
    shadow: string;
};

type Title = Record<string, string>;

const titles: Title = {
    automation: 'Automation & Scripting',
    cloud: 'Cloud Integration',
    communication: 'Communication',
    data: 'Data Management',
    microservices: 'Microservices & APIs',
    testing: 'Testing',
    webApplications: 'Web Applications',
    writing: 'Technical Writing',
};

export default function SkillCell({ name, shadow }: Props) {
    const title = titles[name];

    return (
        <div className={'group px-8 py-12 rounded hover:shadow-lg shadow-inner bg-gray-200 hover:bg-primary'}>
            <div className="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                <div className="hidden group-hover:block">{getIconByName(name, 'white')}</div>
                <div className="block group-hover:hidden">{getIconByName(name, '#0284c7')}</div>
            </div>
            <div className="text-center">
                <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-gray-200 lg:text-xl">
                    {title}
                </h3>
                <p className="text-grey pt-4 text-sm text-gray-500 group-hover:text-gray-200 md:text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        </div>
    );
}
