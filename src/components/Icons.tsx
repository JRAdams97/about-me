import React from 'react';
import Automation from '../../public/icons/automation.svg';
import Cloud from '../../public/icons/cloud.svg';
import Communication from '../../public/icons/communication.svg';
import DataManagement from '../../public/icons/data-management.svg';
import Microservices from '../../public/icons/microservices.svg';
import TechnicalWriting from '../../public/icons/technical-writing.svg';
import Testing from '../../public/icons/testing.svg';
import WebApplications from '../../public/icons/web-applications.svg';

export function getIconByName(name: string, fill: string): JSX.Element {
    switch (name) {
        case 'automation':
            return <Automation fill={fill} />;
        case 'cloud':
            return <Cloud fill={fill} />;
        case 'communication':
            return <Communication fill={fill} />;
        case 'data':
            return <DataManagement fill={fill} />;
        case 'microservices':
            return <Microservices fill={fill} />;
        case 'testing':
            return <Testing fill={fill} />;
        case 'webApplications':
            return <WebApplications fill={fill} />;
        case 'writing':
            return <TechnicalWriting fill={fill} />;
    }
}
