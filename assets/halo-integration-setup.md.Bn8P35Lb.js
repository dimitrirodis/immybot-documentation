import{_ as e,c as t,o as i,a6 as a}from"./chunks/framework.B49Yz1nR.js";const g=JSON.parse('{"title":"HaloPSA","description":"","frontmatter":{},"headers":[],"relativePath":"halo-integration-setup.md","filePath":"halo-integration-setup.md"}'),n={name:"halo-integration-setup.md"},o=a('<h1 id="halopsa" tabindex="-1">HaloPSA <a class="header-anchor" href="#halopsa" aria-label="Permalink to &quot;HaloPSA&quot;">​</a></h1><p>Setting up this integration allows you to</p><ol><li>Deploy Software to machines covered by a certain contract type</li></ol><ul><li>Example: Deploy Huntress to all customers with a Managed Security Contract</li></ul><ol><li>(Preferred) Deploy Software to machines covered by an Contract with a specific recurring invoice item</li></ol><ul><li>Example: Deploy SentinelOne to all computers that have SentinelOne on a recurring invoice as a recurring invoice item on their contract</li></ul><h2 id="create-an-immybot-application-under-config-integrations-api-applications" tabindex="-1">Create an ImmyBot Application under /config/integrations/api/applications <a class="header-anchor" href="#create-an-immybot-application-under-config-integrations-api-applications" aria-label="Permalink to &quot;Create an ImmyBot Application under /config/integrations/api/applications&quot;">​</a></h2><ul><li>Under the details section, select the Client ID and Secret Authentication Method</li><li>Generate and copy the Client ID and Client Secret</li><li>The Login Type should be &quot;Agent&quot;, and you should select an &quot;Agent to log in as&quot;</li></ul><h2 id="permissions" tabindex="-1">Permissions: <a class="header-anchor" href="#permissions" aria-label="Permalink to &quot;Permissions:&quot;">​</a></h2><ul><li>read:customers -&gt; Yes</li><li>read:contracts -&gt; Yes</li><li>read:items -&gt; Yes</li><li>edit:items -&gt; Yes (*should not be needed &gt; 2.99, API bug will not allow listing items without edit rights)</li><li>read:invoices -&gt; Yes</li><li>read:software -&gt; Yes</li><li>read:assets -&gt; Yes (*future feature of the integration will include asset population, not currently necessary)</li><li>edit:assets -&gt; Yes (*future feature of the integration will include asset population, not currently necessary)</li></ul><h2 id="plug-in-the-client-id-and-client-secret-in-immybot" tabindex="-1">Plug in the Client ID and Client Secret in ImmyBot <a class="header-anchor" href="#plug-in-the-client-id-and-client-secret-in-immybot" aria-label="Permalink to &quot;Plug in the Client ID and Client Secret in ImmyBot&quot;">​</a></h2><p>Create a HaloPSA Integration Link and fill in the <strong>Integration Settings</strong></p><p><img src="https://user-images.githubusercontent.com/18588314/184726437-c4398dec-1add-48c3-9443-88dc1b384c5b.png" alt="image"></p><h2 id="embedded-ticket-tab" tabindex="-1">Embedded Ticket Tab <a class="header-anchor" href="#embedded-ticket-tab" aria-label="Permalink to &quot;Embedded Ticket Tab&quot;">​</a></h2><p>HaloPSA version 2.125.5, introduced a new feature called Custom Tabs. You can configure these Custom Tabs to point to a web address, similar to an iframe.</p><p>Within HaloPSA, configure the tab as follows:</p><p><img src="https://github.com/immense/immybot-documentation/assets/16939160/c851198c-60fb-4eb6-b9c8-36ce4bf6fd6c" alt="image"></p><p>This tab will then show on all tickets in the system, like this:</p><p><img src="https://github.com/immense/immybot-documentation/assets/16939160/f4aaf5f2-08bf-4d56-b313-eeea62e21051" alt="image"></p>',19),l=[o];function s(r,c,d,u,p,h){return i(),t("div",null,l)}const b=e(n,[["render",s]]);export{g as __pageData,b as default};
