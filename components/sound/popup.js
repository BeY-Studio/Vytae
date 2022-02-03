import React, { useRef, useState, useEffect } from "react";

const SoundPopup = (props) => {
    const [rain, setRain] = useState(false);
    const [leaves, setLeaves] = useState(false);
    const [wind, setWind] = useState(false);
    const rainRef = useRef(null);
    const leavesRef = useRef(null);
    const windRef = useRef(null);
    const audioOneRef = useRef(null);
    const audioTwoRef = useRef(null);
    const audioThreeRef = useRef(null);

    const handleClick = (e) => {
        if (e.target.id === 'rain') {
            setRain(!rain);
        }
        if (e.target.id === 'leaves') {
            setLeaves(!leaves);
        }
        if (e.target.id === 'wind') {
            setWind(!wind);
        }
    };

    const stopPropagate = (e) => {
        e.stopPropagation();
    }

    useEffect(() => {
        if (rain) {
            rainRef.current.style.opacity = '1';
            audioOneRef.current.play();
        } else {
            rainRef.current.style.opacity = '0.4';
            audioOneRef.current.pause();
        }
    }, [rain]);

    useEffect(() => {
        if (leaves) {
            leavesRef.current.style.opacity = '1';
            audioTwoRef.current.play();
        } else {
            leavesRef.current.style.opacity = '0.4';
            audioTwoRef.current.pause();
        }
    }, [leaves]);

    useEffect(() => {
        if (wind) {
            windRef.current.style.opacity = '1';
            audioThreeRef.current.play();
        } else {
            windRef.current.style.opacity = '0.4';
            audioThreeRef.current.pause();
        }
    }, [wind]);
    return (
        <>
            <div id="myModal2" className="modal2" onClick={props.toggle}>
                <div className="modal2Content" onClick={stopPropagate}>
                    <div className="containermob2">
                        <svg className="closeModal2" onClick={props.toggle} width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                            fill="currentColor" color="#7a7a7">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">
                            </path>
                        </svg>
                        <h1 className="modal2TitleNew">
                            <span className="reliefe">White Noise:</span>
                            <br />
                            {props.lang === 'it' ? 'componi il tuo rumore bianco' : 'make your own.' }
                        </h1>

                        <div className="containerAudioNew">
                            <div className="audioButton audioPioggia" ref={rainRef}>
                                <div className="click_div" id="rain" onClick={handleClick}></div>
                                <img src="https://vytae.com/wp-content/uploads/2021/05/Rain.svg" />
                                <span className="soundTextMob">{props.lang === 'it' ? 'Pioggia Continua' : 'Steady Rain'}</span>
                            </div>
                            <div className="audioButton audioPace" ref={leavesRef}>
                                <div className="click_div" id="leaves" onClick={handleClick}></div>
                                <img src="https://vytae.com/wp-content/uploads/2021/05/Leaves.svg" />
                                {props.lang === 'it' ? <span className="soundTextMob">Fruscio delle foglie</span> : ''}
                                {props.lang === 'en' ? <span className="soundTextMob">Rustling<br />Leaves</span> : ''}
                            </div>
                            <div className="audioButton audioVento" ref={windRef}>
                                <div className="click_div" id="wind" onClick={handleClick}></div>
                                <img src="https://vytae.com/wp-content/uploads/2021/05/Wind.svg" />
                                <span className="soundTextMob">{props.lang === 'it' ? 'Vento' : 'Wind'}</span>
                            </div>
                        </div>
                        {
                            props.lang === 'it'
                            ?
                            <>
                                <p className="modal2ParagraphNew">Il rumore bianco è ovunque in natura. Studi recenti hanno dimostrato che può migliorare la qualità del sonno e infondere un senso generale di rilassamento e benessere. Vogliamo farti sentire in armonia mentre navighi sul nostro sito, per cui abbiamo scelto immagini e suoni che ti aiutino nel percorso. Resterai qui per poco tempo e crediamo sia giusto farlo valere al meglio: prima di scoprire i nostri prodotti, pensa al tuo equilibrio interiore.<br />Questo è quello che ci interessa.</p>
                                <p className="modal2ParagraphNew"><br />Benvenuto in Vytae.</p>
                            </>
                            :
                            <>
                                <p className="modal2ParagraphNew">Nature is full of white noise. Recent studies have found that natural white noise may improve sleep quality and provide a sense of relaxation and general well-being. We want you to feel in tune with yourself while you browse our website, so we’ve designed it with images and sounds that will guide you through the journey. You’ll be here for a limited time only and we need to make it count: focus on your inner balance first, before even looking at our products. <br />That’s our approach.</p>
                                <p className="modal2ParagraphNew"><br /> Welcome to Vytae</p>
                            </> 
                        }

                        <audio className="audiofile" id="pioggia" loop ref={audioOneRef}
                            src="https://vytae.com/wp-content/uploads/2021/02/Pioggia_Ridotto.mp3"></audio>
                        <audio className="audiofile" id="pace" loop ref={audioTwoRef}
                            src="https://vytae.com/wp-content/uploads/2021/02/Peace.wav"></audio>
                        <audio className="audiofile" id="vento" loop ref={audioThreeRef}
                            src="https://vytae.com/wp-content/uploads/2021/02/Car-Sounds-White-Noise.mp3"></audio>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SoundPopup;