import React from 'react';
import SkillCell from '@/components/SkillCell';

export default function Skills() {
    return (
        <div className="m-auto container py-16 md:py-20" id="services">
            <h2 className="text-center font-header text-4xl font-bold uppercase text-primary sm:text-5xl lg:text-6xl">
                My Skillset
            </h2>
            <h4 className="pt-6 font-header text-center text-xl font-medium text-gray-500 sm:text-2xl lg:text-3xl">
                Here's What I'm Good At...
            </h4>
            <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-4">
                <SkillCell name="webApplications" shadow="inner" />
                <SkillCell name="microservices" shadow="lg" />
                <SkillCell name="cloud" shadow="xl" />
                <SkillCell name="data" shadow="lg" />
                <SkillCell name="automation" shadow="lg" />
                <SkillCell name="testing" shadow="xl" />
                <SkillCell name="communication" shadow="lg" />
                <SkillCell name="writing" shadow="xl" />
            </div>
        </div>
    );
}
