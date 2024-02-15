/* eslint-disable no-unsafe-optional-chaining */
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Label } from '@fluentui/react';
import { IInputs } from './generated/ManifestTypes';
 
export interface IHelloWorldProps {
  name?: string;
  context?: ComponentFramework.Context<IInputs>;
}
 
export const HelloWorld: React.FC<IHelloWorldProps> = (props: IHelloWorldProps) => {
  const { context, name } = props;
  const url = context?.parameters?.src?.raw || 'https://ccaas-embed-test.azureedge.net/ccaaswidget/index.html?dynamicsUrl=https://msdynccaasdemo.crm.dynamics.com/&&ctiDriverUrl=https://ccaas-widget-integration-demo.azurewebsites.net/js/openCTI.js';
 
  // adding logic to change softphone functionality
  const [softPhonePanelVisibilty, setSoftPhonePanelVisibility] = useState(false);
  const [isConversationReady, setIsConversationReady] = useState(false)

  useEffect(() => {
    const handleCustomEvent = (event: { data: { key: any; value: any; }; }) => {
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
      <img id="logo" style={{marginLeft: '10px'}} src="https://ccaas-widget-integration-demo.azurewebsites.net/images/logo.png" width="325" height="177" alt="Best Brands" />
    </header>
      
    {!isConversationReady ?
      <div id="widget-container" className="greyBox">
        <div className="span-24 append-bottom last" style={{display:'flex', flexDirection: 'row'}}>
          <img src="https://ccaas-widget-integration-demo.azurewebsites.net/images/image_home_bestplan.png" width="630" height="325" />
          <img id="iphone5s_front_page" src="https://ccaas-widget-integration-demo.azurewebsites.net/images/iPhone5S_front_page.png" width="310" height="325" alt="" />
        </div>
        <div className="span-24 append-bottom greenbox last" style={{display:'flex', flexDirection: 'column'}}> 
          <h2 style={{fontSize: "larger"}}>You May Also Like</h2>
          <div className="span-5 promobox center" style={{display:'flex', flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
            <div>
              <h3>Motorola Atrix 2</h3>
              <img src="https://ccaas-widget-integration-demo.azurewebsites.net/images/pr_atrix2.jpg" width="92" height="150" alt="" />
            </div>

            <div>
              <h3>Samsung Galaxy Note</h3>
              <img src="https://ccaas-widget-integration-demo.azurewebsites.net/images/pr_galaxy_note.jpg" width="92" height="150" alt="" />
            </div>

            <div>
              <h3>Nokia Lumina 900</h3>
              <img src="https://ccaas-widget-integration-demo.azurewebsites.net/images/pr_lumina_900.jpg" width="92" height="150" alt="" />
            </div>

            <div>
              <h3>Sharp FX</h3>
              <img src="https://ccaas-widget-integration-demo.azurewebsites.net/images/pr_sharp_fx.jpg" width="92" height="150" alt="" />
            </div>
          </div>
        </div>
      </div>
    : <img id="conversationReady" src="https://ccaas-widget-integration-demo.azurewebsites.net/images/image.png" style={{width: '95%'}} />}

    <IFrameComponent setSoftPhonePanelVisibility={setSoftPhonePanelVisibility} softPhonePanelVisibilty={softPhonePanelVisibilty}/>
  </div>
);
}
 
export const IFrameComponent = ({setSoftPhonePanelVisibility, softPhonePanelVisibilty}:{setSoftPhonePanelVisibility: Function, softPhonePanelVisibilty:boolean}) => (
  <div id="inqC2CContainer" style={{position: "fixed", bottom: "0px", left: "0px", display:'flex', flexDirection:'column', transform: 'translate(-58px, 68px) scale(0.8)'}}>
    <iframe 
    style={{visibility: softPhonePanelVisibilty? 'visible': 'hidden', resize: 'horizontal'}} 
    src={`https://ccaas-embed-test.azureedge.net/ccaaswidget/index.html?dynamicsUrl=https://msdynccaasdemo.crm.dynamics.com/&&ctiDriverUrl=https://ccaas-widget-integration-demo.azurewebsites.net/js/openCTI.js`} 
    height="660px" 
    width="595px"></iframe>
    <button onClick={() => setSoftPhonePanelVisibility(!softPhonePanelVisibilty)}>Live Chat</button>
  </div>)