<h1>Realtime SQL Editor</h1>
<h2>Atlan Project</h2>

<p>Performace image</p>
<img src="./lighthouse-image.png" /> 
<p>The tool I am using is google chrome lighthouse as shown in the image above. The performance upto 25% which is not quite good and we really need to improve it </p>
<p>Page load time image</p>
<p>The performance section of lightouse itself gives the page load time and rest all performance related things, currently its almost 15-18s to load this application</p>


<strong>We can improve the performance by implementing the following ways</strong>
<ol>
  <li>We are fetching almost 500 key value pairs instead we can add pagination in the API to fetch only the required data at a time let say 50-100 comments</li>
  <li>Adding lazy loading for the remaining fetched comments will improve the application performance</li>
  <li>By avoiding unnecessary re-rendering will improve the performance a lot</li>
  <li>Caching the API data to avoid re-fetching data will again the performance></li>
</ol>
