import React from 'react';
import { useTranslation } from 'react-i18next'


const About = () => {
    const { t } = useTranslation()
    return (
        <div className='about'>
            <h1>{t('About')}</h1>
        </div>
    )
}

export default About;