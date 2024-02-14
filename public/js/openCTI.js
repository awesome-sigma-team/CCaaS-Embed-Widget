(function (window) {
  window.CCaaS = window.CCaaS || {};
  window.CCaaS.CTIDriver = function (config) {
    // Initialize the CTI driver object
    var initialize = function () {
      // Your initialization logic here
      console.log('OPENCTI:: CTI driver initialized', config);
      return Promise.resolve(true);
    };

    var setSoftPhonePanelVisibility = function (visibility) {
      // Your logic to show/hide the softphone panel
      console.log('OPENCTI:: Softphone panel visibility set to', visibility);
      const eventData = {
        key: 'softPhonePanelVisibilty',
        value: visibility
      }
      // const customEvent = new CustomEvent('OPENCTI', eventData);
      window.parent.postMessage(eventData, document?.referrer || '*');
    };

    var setSoftPhonePanelHeight = function (height) {
      // Your logic to set the height of the softphone panel
      console.log('OPENCTI:: Softphone panel height set to', height);
    };

    var setSoftPhonePanelWidth = function (width) {
      // Your logic to set the width of the softphone panel
      console.log('OPENCTI:: Softphone panel width set to', width);
    };

    var onClickToDial = function (callback) {
      // Your logic to handle click-to-dial
      console.log('OPENCTI:: Click-to-dial initiated for', callback);
    };

    var conversationReady = function (conversationData) {
      // Your logic to handle conversation ready event
      console.log('OPENCTI:: Conversation ready', conversationData);
      const eventData = {
        key: 'conversationReady',
        value: conversationData
      };
      window.parent.postMessage(eventData, document?.referrer || '*');
      return Promise.resolve();

    };

    var endConversation = function (conversationId) {
      // Your logic to end the conversation
      console.log('OPENCTI:: Conversation ended', conversationId);
      const eventData = {
        key: 'conversationEnded',
        value: conversationId
      };
      window.parent.postMessage(eventData, document?.referrer || '*');
      return Promise.resolve();
    };

    var getConversationDetails = function (conversationIds) {
      // Your logic to get conversation details
      console.log('OPENCTI:: Conversation details', conversationIds);
      return Promise.resolve([]);
    };

    // Return the CTI driver object
    return {
      initialize: initialize,
      setSoftPhonePanelVisibility: setSoftPhonePanelVisibility,
      setSoftPhonePanelHeight: setSoftPhonePanelHeight,
      setSoftPhonePanelWidth: setSoftPhonePanelWidth,
      onClickToDial: onClickToDial,
      conversationReady: conversationReady,
      endConversation: endConversation,
      getConversationDetails: getConversationDetails
    };
  };
})(window);
