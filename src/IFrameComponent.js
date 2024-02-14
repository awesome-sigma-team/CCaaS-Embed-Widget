/* eslint-disable jsx-a11y/iframe-has-title */
import './App.css';
export const IFrameComponent = ({setSoftPhonePanelVisibility, softPhonePanelVisibilty}) => (
    <div id="inqC2CContainer" style={{position: "fixed", bottom: "0px", left: "0px", display:'flex', flexDirection:'column'}}>
      <iframe 
      style={{visibility: softPhonePanelVisibilty? 'visible': 'hidden', resize: 'horizontal'}} 
      src={`https://ccaas-embed-test.azureedge.net/ccaaswidget/index.html?dynamicsUrl=https://msdynccaasdemo.crm.dynamics.com/&&ctiDriverUrl=https://ccaas-widget-integration-demo.azurewebsites.net/js/openCTI.js`} 
      height="700" 
      width="500"></iframe>
      <button onClick={() => setSoftPhonePanelVisibility(!softPhonePanelVisibilty)}>Live Chat</button>
    </div>)