# Widget Configuration (Website/Power App) 

Get the widget URL
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
        
      `<iframe src="https://ccaas-embed-test.azureedge.net/ccaaswidget/index.html?dynamicsUrl=https://msdynccaasdemo.crm.dynamics.com/" height="700" width="500" >`
  
4) Import your solution under the Solutions tab. 

5) Import the newly created Custom Code Component into your Canvas App. 

6) Publish the app. 

## CCaaS Embedded Widget inside a Website (mimicking CRM) 

1) ** Pre-Condition:** CCaaS team will need to Whitelist the Website domain. 
   - For us the domain was https://ccaas-widget-integration-demo.azurewebsites.net/
   - Once the PR is merged, run the release pipeline.

2) In your website, add an iframe element with an attribute “src = Widget URL”.
   - You can also add height and width to the iframe as shown below:
     
   `<iframe src="https://ccaas-embed-test.azureedge.net/ccaaswidget/index.html?dynamicsUrl=https://msdynccaasdemo.crm.dynamics.com/" height="700" width="500" >`






