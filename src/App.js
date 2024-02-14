/* eslint-disable jsx-a11y/iframe-has-title */
import logo from './logo.svg';
import React, {useEffect, useState} from 'react'
import './App.css';
import { IFrameComponent } from './IFrameComponent';

function App() {
  const [softPhonePanelVisibilty, setSoftPhonePanelVisibility] = useState(false);
  const [isConversationReady, setIsConversationReady] = useState(false)

  useEffect(() => {
    const handleCustomEvent = (event) => {
      const {key, value} = event?.data;
      if(key === 'softPhonePanelVisibilty') {
        setSoftPhonePanelVisibility(value)
      } else if(key === 'conversationReady') {
        setIsConversationReady(true)
      } else if(key === 'conversationEnded') {
        setIsConversationReady(false)
      }
    }

    window.addEventListener('message', handleCustomEvent);
    return () => {
      window.removeEventListener('message', handleCustomEvent)
    }
  },[])
return (
  <div className="App">
    <header style={{display: 'flex'}}>
      <img id="logo" style={{marginLeft: '10px'}} src="images/logo.png" width="325" height="177" alt="Best Brands" />
    </header>
      
    {!isConversationReady ?
      <div id="widget-container" className="greyBox">
        <div className="span-24 append-bottom last" style={{display:'flex', flexDirection: 'row'}}>
          <img src="images/image_home_bestplan.png" width="630" height="325" />
          <img id="iphone5s_front_page" src="images/iPhone5S_front_page.png" width="310" height="325" alt="" />
        </div>
        <div className="span-24 append-bottom greenbox last" style={{display:'flex', flexDirection: 'column'}}> 
          <h2 style={{fontSize: "larger"}}>You May Also Like</h2>
          <div className="span-5 promobox center" style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
            <div>
              <h3>Motorola Atrix 2</h3>
              <img src="images/pr_atrix2.jpg" width="92" height="150" alt="" />
            </div>

            <div>
              <h3>Samsung Galaxy Note</h3>
              <img src="images/pr_galaxy_note.jpg" width="92" height="150" alt="" />
            </div>

            <div>
              <h3>Nokia Lumina 900</h3>
              <img src="images/pr_lumina_900.jpg" width="92" height="150" alt="" />
            </div>

            <div>
              <h3>Sharp FX</h3>
              <img src="images/pr_sharp_fx.jpg" width="92" height="150" alt="" />
            </div>
          </div>
        </div>
      </div>
    : <img id="conversationReady" src="images/image.png" />}

    <IFrameComponent setSoftPhonePanelVisibility={setSoftPhonePanelVisibility} softPhonePanelVisibilty={softPhonePanelVisibilty}/>
  </div>
);
}

export default App;
