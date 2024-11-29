/* eslint-disable jsx-a11y/iframe-has-title */
import './App.css';

export const IFrameComponent = ({
  setSoftPhonePanelVisibility,
  softPhonePanelVisibilty,
}) => {
  // Extract 'dynamicsUrl' from the query parameters
  const params = new URLSearchParams(window.location.search);
  const dynamicsUrl = params.get('dynamicsUrl'); // Get the dynamicsUrl parameter
  const iframeSrc = dynamicsUrl
    ? `https://ccaas-embed-prod.azureedge.net/widget/index.html?dynamicsUrl=${encodeURIComponent(
        dynamicsUrl
      )}`
    : ''; // Provide a fallback if dynamicsUrl is not present
  return (
    <div
      id="inqC2CContainer"
      style={{
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <iframe
        style={{
          visibility: softPhonePanelVisibilty ? 'visible' : 'hidden',
          resize: 'horizontal',
        }}
        src={iframeSrc}
        height="500"
        width="795px"
      ></iframe>
      <button onClick={() => setSoftPhonePanelVisibility(!softPhonePanelVisibilty)}>
        Live Chat
      </button>
    </div>
  );
};
