if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let f=Promise.resolve();return b[e]||(f=new Promise(async f=>{if("document"in self){const b=document.createElement("script");b.src=e,document.head.appendChild(b),b.onload=f}else importScripts(e),f()})),f.then(()=>{if(!b[e])throw new Error(`Module ${e} didn’t register its module`);return b[e]})},f=(f,b)=>{Promise.all(f.map(e)).then(e=>b(1===e.length?e[0]:e))},b={require:Promise.resolve(f)};self.define=(f,c,d)=>{b[f]||(b[f]=Promise.resolve().then(()=>{let b={};const a={uri:location.origin+f.slice(1)};return Promise.all(c.map(f=>{switch(f){case"exports":return b;case"module":return a;default:return e(f)}})).then(e=>{const f=d(...e);return b.default||(b.default=f),b})}))}}define("./service-worker.js",["./workbox-d9851aed"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0329342f1bca1701501e3e63d1fdd8f9.woff2",revision:"bd99fcf68ab6cd507200f1a1dec7cebd"},{url:"23a30d0625b19485bdb301b7edcc31a4.woff2",revision:"63ce26a20240f8225776e60aec734d6b"},{url:"3d200ddfa9e0d2bb4f599ace7bd743be.woff2",revision:"b1b49eef4c5c6d71facc5d003b95303e"},{url:"57d185ef007cac95fa2ff291c0153016.mp4",revision:"cda54cbbb8e95b88c8be9046b20e1ba1"},{url:"5e13bd4838bbfe3b1c3e82e1e584a6fa.ico",revision:"acc1fdd9b4fb518a0cb7cbbd10d070bb"},{url:"6a225dffba1da26f37e37278f633b3bc.svg",revision:"781a899e4b9ba9b96ab61b047a8e3308"},{url:"724de773db73293a01dcde1847833243.webp",revision:"b54033207a624ef040f5f842f391c0d6"},{url:"7686410818db17bffd798b225e8f264b.webp",revision:"b8ac4ed02a568c9a6c3813e4def4ce5d"},{url:"89c603e8a35dfa759193738422e0a141.svg",revision:"b7ebae666a1891bd923abff89768f07a"},{url:"8ada8693066cbb6dc5f8ecfa8d7eaab1.png",revision:"1b58307c24d8abf4d9412438f5b09f50"},{url:"9158eb92a684fcd5a4b1fd15cada035f.webp",revision:"6f1531c92f5cbac778efb90f86bc3ff9"},{url:"91d83869aa443dafc4713007e21cfd0d.png",revision:"43cebffc197433f6198c2cea5df7c748"},{url:"979242fd24b47edf0f83ee2a70ee32d9.png",revision:"6d98e07c96347d31018b379ab2f7a218"},{url:"app.bundle.js",revision:"ca64dcb0a3994293a3a7ef8786570af6"},{url:"d51174f3d90ec2bd2218a8c5be007bd4.svg",revision:"34c8e8f683fcc3d949c65dd237bcd08a"},{url:"dd1fbf153006bec18cc5810e38a85304.webp",revision:"323c27ea7ac3d30b9b0a0c3270be4822"},{url:"e969cff4fd8eaafd661964d1f759e59e.webp",revision:"7abade81b01e7a7a914a65b5fa937e17"},{url:"ea4a99b2f1004c7fe6ede50169c15630.png",revision:"5f217c481507845ecf9fc6109f160a76"},{url:"email.html",revision:"6f6acb565c4405b4429cfe520d0e9de8"},{url:"f3f30c3eb872664c8c04b727e722a31f.woff2",revision:"3db4b4d00b5ed24a5225dc4fc0131bc0"},{url:"fa49e44f8920d5ec122a21c8d96df89f.webp",revision:"245c151648b4570b6b5e8fe4992f60cf"},{url:"fd8f30bc341ec5f92d135784db74df85.woff2",revision:"83ebe6e46c7d9e716e8c3b071e22b13a"},{url:"home.bundle.js",revision:"19efaa3d627efc6bce5c2ffb9ccfc687"},{url:"index.html",revision:"c272d2ea6cbef08ccaa5292b143f7d6c"},{url:"lb-2.bundle.js",revision:"2b7a18a5eb687c51fe40d900909d61a3"},{url:"limbo.bundle.js",revision:"fe88282b45b61fa556eaa9f9ed97fc77"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"thumb.jpeg",revision:"a21517a7e8a1a07993204f5429b07c44"},{url:"western.bundle.js",revision:"e34bdf03a49b9be46a850e5c3076d9c3"}],{})}));
//# sourceMappingURL=service-worker.js.map
