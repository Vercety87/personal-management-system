"use strict";var precacheConfig=[["/assets/css/tinymce-editor.css","03ec821fcbd20884dc6210d32a38035c"],["/assets/fonts/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/assets/fonts/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/assets/fonts/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/assets/fonts/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/assets/fonts/lg.4fe6f9ca.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/assets/fonts/lg.5fd4c338.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/assets/fonts/lg.ecff1170.eot","ecff11700aad0000cf3503f537d1df17"],["/assets/fonts/themify.2c454669.eot","2c454669bdf3aebf32a1bd8ac1e0d2d6"],["/assets/fonts/themify.a1ecc3b8.woff","a1ecc3b826d01251edddf29c3e4e1e97"],["/assets/fonts/themify.e23a7dca.ttf","e23a7dcaefbde4e74e263247aa42ecd7"],["/assets/images/01.0a3750e6.png","0a3750e6fdb29fcd632e627e2fc34dde"],["/assets/images/02.351bd682.png","351bd6828f980ec53eb3a1ad0d3b1e31"],["/assets/images/03.e438ea2a.png","e438ea2aabdb1087dc4f6fea5f6518e7"],["/assets/images/04.0284d042.png","0284d042a6c29213aaa1979528195b7f"],["/assets/images/05.5014f9cc.png","5014f9cce435c71ade6395a5ed0c50e7"],["/assets/images/06.21612b9d.png","21612b9d3e9d84e7e8761a2caf43bc65"],["/assets/images/07.f8da0281.png","f8da0281186df8f17f732a2a22aa0efa"],["/assets/images/08.975f7e00.png","975f7e0074400e7561ba2124604aacf2"],["/assets/images/09.fd19309a.png","fd19309a1932b475138799acc0b75a82"],["/assets/images/404.f97802b0.png","f97802b0567b0469f22da92330d64ec6"],["/assets/images/500.6e177923.png","6e17792333c1f535f031067e34cea15b"],["/assets/images/arrow_left.11911410.svg","11911410dca2de148f30954eb2fd5eab"],["/assets/images/arrow_right.8ef6a08c.svg","8ef6a08cdc1154920165680a4edde771"],["/assets/images/bcgk.jpg","382232c24cd34139209a8d68c5d25163"],["/assets/images/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/assets/images/lg.98d62b1e.svg","98d62b1e5f5b556facf319b19c6c7cba"],["/assets/images/loading.bbdac9cd.gif","bbdac9cda255c54bfd809110aff87898"],["/assets/images/logo/facebook_cover_photo_1.png","dcf04e4e68a77b0adb0c558c22607aa3"],["/assets/images/logo/facebook_cover_photo_2.png","32b2d1d3f44046d0abcf3586e3fb676b"],["/assets/images/logo/facebook_profile_image.png","5e184d4c77192cb05c297a350a97fa11"],["/assets/images/logo/favicon.png","9a505cd35d38cdb9c89001a3c92d6928"],["/assets/images/logo/instagram_profile_image.png","a38b40c028946f380ed6276cfc878643"],["/assets/images/logo/linkedin_banner_image_1.png","97e654875bdd1be457866685cdd4b1c5"],["/assets/images/logo/linkedin_banner_image_2.png","d738f8b6b21849bc727c9e6e32ee4467"],["/assets/images/logo/linkedin_profile_image.png","a38b40c028946f380ed6276cfc878643"],["/assets/images/logo/logo.png","5e184d4c77192cb05c297a350a97fa11"],["/assets/images/logo/logo_transparent.png","c4a3a67f8b675259148911e07d94429f"],["/assets/images/logo/pinterest_board_photo.png","b9044a5a404cfef7819dc6f5fb462c97"],["/assets/images/logo/pinterest_profile_image.png","006262a5970a36f01d4d329447c32ffe"],["/assets/images/logo/small.png","80e002156976aba8f51487ccad3817bc"],["/assets/images/logo/smaller.png","f39d0e41c649780005574ab7bdc84bef"],["/assets/images/logo/twitter_header_photo_1.png","c927ac3d5a62d8b692f515eb267dec25"],["/assets/images/logo/twitter_header_photo_2.png","a6b361119a62d103c51678e0f725b411"],["/assets/images/logo/twitter_profile_image.png","b9044a5a404cfef7819dc6f5fb462c97"],["/assets/images/logo/youtube_profile_image.png","b9044a5a404cfef7819dc6f5fb462c97"],["/assets/images/sf.f10c2d76.png","f10c2d76500745c76d0e8a9c78081e93"],["/assets/images/sort_asc.9326ad44.png","9326ad44ae4bebdedd141e7a53c2a730"],["/assets/images/sort_asc_disabled.d7dc10c7.png","d7dc10c78f23615d328581aebcd805eb"],["/assets/images/sort_both.9a648608.png","9a6486086d09bb38cf66a57cc559ade3"],["/assets/images/sort_desc.1fc418e3.png","1fc418e33fd5a687290258b23fac4e98"],["/assets/images/sort_desc_disabled.bda51e15.png","bda51e15154a18257b4f955a222fd66f"],["/assets/images/themify.9c8e96ec.svg","9c8e96ecc7fa01e6ebcd196495ed2db5"],["/assets/images/video-play.dc34cc9c.png","dc34cc9c99e935cd9c88c036e34103f5"],["/assets/images/vimeo-play.dfe7764b.png","dfe7764b4fe444c3880736ac6131f5b4"],["/assets/images/volmarg_avatar.jpg","e7415056bcf9015a4da25985e0b0ab3c"],["/assets/images/youtube-play.e6f0c233.png","e6f0c233c87ddefab049c991c61e2d69"],["/assets/manifest.json","3996ad4f8917057a5a48907aff19c864"],["/assets/skins/content/default/content.css","757f0f32d050b7e0982534e5a3d13bca"],["/assets/skins/ui/oxide/content.css","757f0f32d050b7e0982534e5a3d13bca"],["/assets/skins/ui/oxide/content.inline.css","3d7ab98288843cdb73da394db20512b8"],["/assets/skins/ui/oxide/content.inline.min.css","128d68a7502304b27acb407e546f5c4e"],["/assets/skins/ui/oxide/content.min.css","3208440bc70a5a03481fa8bc6f4b8409"],["/assets/skins/ui/oxide/content.mobile.min.css","0684a64086ad1114949a1e51f06aa750"],["/assets/skins/ui/oxide/fonts/tinymce-mobile.woff","baecf466c40e709e7ffdbc935fc0813a"],["/assets/skins/ui/oxide/skin.css","4ffefc87e9d47b6b5bc23b6e575d9433"],["/assets/skins/ui/oxide/skin.min.css","2ad81bd1728be5d410312a4b7d80fdc2"],["/assets/skins/ui/oxide/skin.mobile.min.css","ddda741d80c4bc322faf2331d0e1d2fc"]],cacheName="sw-precache-v3-Personal_Management_System-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],t=new URL(s,self.location),n=createCacheKey(t,hashParamName,a,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),t="index.html";(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,t),s=urlsToCacheKeys.has(a));var n="index.html";!s&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL(n,self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});