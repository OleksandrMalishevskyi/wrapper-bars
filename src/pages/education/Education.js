import React from 'react';
import { useTranslation } from 'react-i18next';

const Education = () => {
    const { t } = useTranslation()
    return (
        <div className='education'>
            <h1>{t('Education')}</h1>
        </div>
    )
}

export default Education;