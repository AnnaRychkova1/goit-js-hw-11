import{i as a,S as f}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="https://pixabay.com/api",h="41902273-a1675a4e2dad43acb6fd87e89",p=document.querySelector(".form"),l=document.querySelector(".gallery"),c=document.querySelector(".loader-container");p.addEventListener("submit",y);u();function y(i){g(),i.preventDefault(),l.innerHTML="";const t=i.currentTarget,s=t.elements.query.value;L(s).then(o=>{if(!o||o.total===0){a.error({title:"🥺 Ooops...",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"});return}const e=o.hits;let r="";for(const m of e)r+=S(m);l.innerHTML=r;var n=new f(".gallery a",{captionsData:"alt",captionDelay:250});n.refresh()}).catch(o=>{console.error("Error fetching images:",o),a.error({title:"🥺 Ooops...",message:"An error occurred while fetching images. Please try again later.",position:"center"})}).finally(()=>{u(),t.reset()})}function g(){c.style.display="flex"}function u(){c.style.display="none"}function L(i){const t=new URLSearchParams({key:h,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:21});return fetch(`${d}/?${t}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json()})}function S({webformatURL:i,largeImageURL:t,tags:s,likes:o,views:e,comments:r,downloads:n}){return`<li class="gallery-item">
    <a class="gallery-link" href="${t}">
      <img
        class="gallery-image"
        src="${i}"
        alt="${s}"
      />
    </a>
      <ul class="description">
        <li class="items-descr">
          <h2>Likes</h2>
          <p>${o}</p>
        </li>
        <li class="items-descr">
          <h2>Views</h2>
          <p>${e}</p>
        </li>
        <li class="items-descr">
          <h2>Comments</h2>
          <p>${r}</p>
        </li>
        <li class="items-descr">
          <h2>Downloads</h2>
          <p>${n}</p>
        </li>
      </ul>
  </li>
  `}
//# sourceMappingURL=commonHelpers.js.map
