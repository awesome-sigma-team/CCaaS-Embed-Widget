# Widget Configuration (Website/Power App) 

Get the widget URL

```html
https://ccaas-embed-test.azureedge.net/ccaaswidget/index.html?dynamicsUrl=https://msdynccaasdemo.crm.dynamics.com/

```
<button onclick="copyToClipboard('#canvas-app-code')"></button>

|  Environment        | URL       |
| ------------- |:-------------:| 
|  Demo     | https://ccaas-embed-test.azureedge.net/ccaaswidget/index.html |

## CCaaS Embedded Widget inside a Canvas App: 

1) **Pre-Condition:** **Same Dynamics Org needs to be used to access the Canvas App and the Widget.**  
   - Different orgs will conflict with the login feature of Widget.
   - If we use one org for canvas app and other for Widget login, then login.microsoft.com is not working and Widget is not loading in the canvas app.
  
3) Create Custom Code Component using PCF (Power Apps component framework) Framework. 
   - Use template as React.  
   - Add an iframe element with an attribute “src = Widget URL”.
      - You can also add height and width to the iframe as shown below:
        
      ```html
      <iframe src="https://ccaas-embed-test.azureedge.net/ccaaswidget/index.html?dynamicsUrl=https://msdynccaasdemo.crm.dynamics.com/" height="700" width="500"></iframe>
      ```
      <button onclick="copyToClipboard('#canvas-app-code')"></button>

4) Import your solution under the Solutions tab.
   <img width="570" alt="image" src="https://github.com/awesome-sigma-team/demo-website0integration/assets/122857590/4935e13a-dce0-47e9-b2d3-6798e60e2a0e">


6) Import the newly created Custom Code Component into your Canvas App.
  <img width="570" alt="image" src="https://github.com/awesome-sigma-team/demo-website0integration/assets/122857590/0dd0e8f5-ed4e-4766-82da-d47a289d4a4c">


8) Publish the app.
   
   <img width="458" alt="image" src="https://github.com/awesome-sigma-team/demo-website0integration/assets/122857590/32ae4a77-a26d-44d0-92b7-ec828cc54e98">


## CCaaS Embedded Widget inside a Website (mimicking CRM) 

1) **Pre-Condition:** CCaaS team will need to Whitelist the Website domain. 
   - For us the domain was https://ccaas-widget-integration-demo.azurewebsites.net/
   - Once the PR is merged, run the release pipeline.

2) In your website, add an iframe element with an attribute “src = Widget URL”.
   - You can also add height and width to the iframe as shown below:
     
   ```html
   <iframe src="https://ccaas-embed-test.azureedge.net/ccaaswidget/index.html?dynamicsUrl=https://msdynccaasdemo.crm.dynamics.com/" height="700" width="500"></iframe>
   ```
   <button onclick="copyToClipboard('#website-code')"></button>




-------------------------------------------------------------------------------------------------------------------















<script>
function copyToClipboard(selector) {
    var copyText = document.querySelector(selector);
    var textArea = document.createElement('textarea');
    textArea.textContent = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Code copied to clipboard!');
}
</script>
