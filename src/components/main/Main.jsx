// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';

import './Main.css'
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';

const Main = () => {

    const{onSent,recentPrompt,showResult,loding,resultData,setInput, input} = useContext(Context)

  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            


            {!showResult
            ?<>
            <div className="greet">
                <p><span>Hello, Dev .</span></p>
                <p>How can i help u today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Sugest a place to mt road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>breaflly summarised this concept :urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Benefites of team bnding Activities </p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>improve the relatabalaty of following text</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loding
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    : <p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    } 
                </div>
            </div>
            }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter Prompt here" />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        {input? <img onClick={()=>onSent()} src={assets.send_icon} alt="" /> : null}
                    </div>
                </div>
                <p className="bottom-info">
                     it is a clone model created  by @ PRIYANGSHU BHUNIA.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
