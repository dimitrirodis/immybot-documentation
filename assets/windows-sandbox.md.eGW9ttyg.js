import{_ as s,c as a,o as i,U as t}from"./chunks/framework.Q7Se86sZ.js";const n="/assets/2021-03-15-08-29-07.XRQ9c0U-.png",e="/assets/2021-03-15-08-29-35.VKfg9jws.png",o="/assets/2021-03-15-08-29-41.e06U6aAN.png",l="/assets/2021-03-15-08-30-29.M7sANwYj.png",d="/assets/2021-03-15-08-47-28.Ex6WDe9g.png",r="/assets/2021-03-15-08-37-50.NwngOs1k.png",x=JSON.parse('{"title":"Testing with Windows Sandbox","description":"","frontmatter":{},"headers":[],"relativePath":"windows-sandbox.md","filePath":"windows-sandbox.md"}'),p={name:"windows-sandbox.md"},h=t('<h1 id="testing-with-windows-sandbox" tabindex="-1">Testing with Windows Sandbox <a class="header-anchor" href="#testing-with-windows-sandbox" aria-label="Permalink to &quot;Testing with Windows Sandbox&quot;">​</a></h1><p>Windows Sandbox is a fast loading disposable container in Windows that loses all settings when shutdown or restarted. It is very convenient for testing software deployments. It should be noted that not all software is compatible with Windows Sandbox, particular software that installs drivers or requires restarts.</p><p>If you haven&#39;t used Windows Sandbox before, you can enable it by opening Windows PowerShell as Admin and running the following command:</p><div class="language-powershell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">powershell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Enable-WindowsOptionalFeature</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">FeatureName </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Containers-DisposableClientVM&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">All </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Online </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">NoRestart</span></span></code></pre></div><h2 id="download-windows-sandbox-file-wsb" tabindex="-1">Download Windows Sandbox file (.wsb) <a class="header-anchor" href="#download-windows-sandbox-file-wsb" aria-label="Permalink to &quot;Download Windows Sandbox file (.wsb)&quot;">​</a></h2><p><img src="'+n+'" alt=""></p><p><img src="'+e+'" alt=""></p><p>Wait for ImmyBot Agent to install <img src="'+o+'" alt=""></p><p><a href="#onboarding">Onboard</a> the Sandbox <img src="'+l+'" alt=""></p><p><img src="'+d+'" alt=""></p><p><img src="'+r+'" alt=""></p><p>This will create an &quot;Onboarding&quot; Session (sessions are like running gpupdate) that will apply all applicable Deployments (deployments are like Group Policies)</p>',12),w=[h];function c(g,b,k,_,m,u){return i(),a("div",null,w)}const y=s(p,[["render",c]]);export{x as __pageData,y as default};
