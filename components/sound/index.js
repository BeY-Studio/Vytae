import React, { useState } from 'react';
import Image from 'next/image';
import SoundPopup from './popup';

const SoundButton = () => {
    const [popup, showPopup] = useState(false);

    const toggleSoundClick = (e) => {
        showPopup(!popup);
    }
    return (
        <>
            <div className='sound_button'>
                <div id="ondaHomeBut24" className="iconAudioMobile" onClick={toggleSoundClick}>
                    <Image src="https://s2.svgbox.net/loaders.svg?ic=puff&amp;color=7C756F" width="15" height="15" />
                    <p className="textSound">White noise</p>
                </div>
            </div>
            {popup && <SoundPopup toggle={toggleSoundClick} />}
        </>
    );
}

export default SoundButton;
