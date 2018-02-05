webpackJsonp([64106737349458],{505:function(n,a){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/faAZ5v8.png" alt="ReactiveMap Image"></p>\n<p>A <code>ReactiveMap</code> creates a data-driven map UI component. It is the key component for build map based experiences.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing a map of user checkins by city and topics for powering discovery based experiences.</li>\n<li>displaying restaurants filtered by a nearby distance query on a map.</li>\n</ul>\n<h3 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h3>\n<h4 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveMap</span>\n    <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>MapUI<span class="token punctuation">"</span></span>\n    <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>location<span class="token punctuation">"</span></span>\n    <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Venue Location Map<span class="token punctuation">"</span></span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h4 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h4>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveMap\n    componentId<span class="token operator">=</span><span class="token string">"MapUI"</span>\n    dataField<span class="token operator">=</span><span class="token string">"location"</span>\n    title<span class="token operator">=</span><span class="token string">"Venue Location Map"</span>\n    size<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">100</span><span class="token punctuation">}</span>\n    defaultZoom<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">13</span><span class="token punctuation">}</span>\n    defaultCenter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> lat<span class="token punctuation">:</span> <span class="token number">37.74</span><span class="token punctuation">,</span> lon<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token number">122.45</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    showMapStyles<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    defaultMapStyle<span class="token operator">=</span><span class="token string">"Standard"</span>\n    showMarkers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    defaultMarkerImage<span class="token operator">=</span><span class="token string">"path/to/marker.png"</span>\n    setMarkerCluster<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    showSearchAsMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    setSearchAsMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    showPopoverOn<span class="token operator">=</span><span class="token string">"click"</span>\n    onPopoverTrigger<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onPopoverTrigger<span class="token punctuation">}</span>\n    popoverTTL<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">}</span>\n\n    stream<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    streamTTL<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">}</span>\n    streamAutoCenter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    streamMarkerImage<span class="token operator">=</span><span class="token string">"path/to/streaming/marker.png"</span>\n\n    <span class="token comment" spellcheck="true">// \'react\' defines when and how the map component should update</span>\n    react<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      and<span class="token punctuation">:</span> <span class="token string">"CitySensor"</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// map events</span>\n    onData<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onData<span class="token punctuation">}</span>\n    onIdle<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onIdle<span class="token punctuation">}</span>\n    onMouseOver<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onMouseOver<span class="token punctuation">}</span>\n    onMouseOut<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onMouseOut<span class="token punctuation">}</span>\n    onMouseMove<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onMouseMove<span class="token punctuation">}</span>\n    onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onClick<span class="token punctuation">}</span>\n    onDblClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDblClick<span class="token punctuation">}</span>\n    onDrag<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDrag<span class="token punctuation">}</span>\n    onDragStart<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragStart<span class="token punctuation">}</span>\n    onDragEnd<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onDragEnd<span class="token punctuation">}</span>\n    onResize<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onResize<span class="token punctuation">}</span>\n    onRightClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onRightClick<span class="token punctuation">}</span>\n    onBoundsChanged<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onBoundsChanged<span class="token punctuation">}</span>\n    onCenterChanged<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onCenterChanged<span class="token punctuation">}</span>\n    onProjectionChanged<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onProjectionChanged<span class="token punctuation">}</span>\n    onTiltChanged<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onTiltChanged<span class="token punctuation">}</span>\n    onZoomChanged<span class="token operator">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onZoomChanged<span class="token punctuation">}</span>\n\n    <span class="token comment" spellcheck="true">// less useful props</span>\n    autoMapRender<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    autoCenter<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    autoMarkerPosition<span class="token operator">=</span><span class="token punctuation">{</span><span class="token boolean">true</span><span class="token punctuation">}</span>\n    style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span>\n      height<span class="token punctuation">:</span> <span class="token string">\'700px\'</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<h3 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h3>\n<ul>\n<li><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</li>\n<li><strong>dataField</strong> <code>String</code><br>\nDB data field to be connected to the component’s UI view, usually of a geopoint (i.e. location) data type and used for rendering the markers on the map.</li>\n<li><strong>title</strong> <code>String or HTML</code> [optional]<br>\ntitle of the component to be shown in the UI.</li>\n<li><strong>size</strong> <code>Number</code> [optional]<br>\nnumber of results to show in the map view, can be a number in the range [1, 1000]. Defaults to 100.</li>\n<li><strong>defaultZoom</strong> <code>Number</code> [optional]<br>\npreset map’s zoom level, accepts integer values between [0, 20]. 0 is the minimum zoom level, where you can see the entire globe. 20 is the maximum zoom level. Defaults to 13.</li>\n<li><strong>defaultCenter</strong> <code>Object</code> [optional]<br>\npreset map’s center position by specifying an object with valid <code>lat</code> and <code>lon</code> values.</li>\n<li><strong>showMapStyles</strong> <code>Boolean</code> [optional]<br>\nwhether to show map styles dropdown picker in the map UI. Defaults to <code>true</code>.</li>\n<li><strong>defaultMapStyle</strong> <code>String</code> [optional]<br>\npreset a map style for the map UI. Available options include “Standard”, “Blue Essence”, “Blue Water”, “Flat Map”, “Light Monochrome”, “Midnight Commander”, “Unsaturated Browns”.</li>\n<li><strong>showMarkers</strong> <code>Boolean</code> [optional]<br>\nwhether to show the markers on the map, defaults to <code>true</code>. Sometimes, it doesn’t make sense to display markers (when building a heatmap or weather map or a directions navigation map)</li>\n<li><strong>defaultMarkerImage</strong> <code>String</code> [optional]<br>\nURL of the default marker image to be shown. It comes with a default image. Should only be set if you wish to use a custom marker.</li>\n<li><strong>setMarkerCluster</strong> <code>Boolean</code> [optional]<br>\nwhether to aggregate and form a cluster of nearby markers. Defaults to <code>true</code>.</li>\n<li><strong>showSearchAsMove</strong> <code>Boolean</code> [optional]<br>\nwhether to show the <em>Search As I Move</em> checkbox in the UI. Defaults to <code>true</code>.</li>\n<li><strong>setSearchAsMove</strong> <code>Boolean</code> [optional]<br>\nwhether to set the <em>Search As I Move</em> checkbox. Defaults to <code>false</code>.</li>\n<li><strong>showPopoverOn</strong> <code>String</code> [optional]<br>\nevent that triggers popover, accepts either a “click” or a “mouseover” as valid values.</li>\n<li><strong>onPopoverTrigger</strong> <code>function</code> [optional]<br>\na function that takes one argument for getting a marker’s data and returns an HTML markup to be displayed in the popover box.</li>\n<li><strong>popoverTTL</strong> <code>Number</code> [optional]<br>\ntime to live for a popover specified in seconds. By default, a popover doesn’t have a TTL value. Valid values are in the range (0, 60].</li>\n<li><strong>stream</strong> <code>Boolean</code> [optional]<br>\nwhether to stream new result (aka realtime view) updates in the UI. Defaults to <code>false</code>.</li>\n<li><strong>streamTTL</strong> <code>Number</code> [optional]<br>\ntime to live for a just streamed update, specified in seconds. It defaults to 5 seconds.</li>\n<li><strong>streamAutoCenter</strong> <code>Boolean</code> [optional]<br>\nwhether to auto center the map based on the location of the streamed update. Defaults to <code>false</code>.</li>\n<li><strong>streamMarkerImage</strong> <code>String</code> [optional]<br>\nURL of the streaming marker image to be shown. It comes with a default image that’s distinct from the defaultMarkerImage. Should be only set if you wish to use a custom marker image.</li>\n<li><strong>react</strong> <code>Object</code>\na dependency object defining how this component should react based on the state changes in the dependent sensor components. You can read more about it <a href="/advanced/react.html">here</a>.</li>\n<li><strong>autoCenter</strong> <code>Boolean</code> [optional]<br>\nwhether to auto center the map based on the geometric center of all the location markers. Defaults to <code>true</code>.</li>\n<li><strong>autoMapRender</strong> <code>Boolean</code> [optional]<br>\nwhether map view should be rendered automatically. Defaults to <code>true</code> and is what you want most of the time. There are certain cases however where you want to re-render the map view manually.</li>\n<li><strong>autoMarkerPosition</strong> <code>Boolean</code> [optional]<br>\nwhether to set the rotation angle of the marker image based on the delta changes in its location, useful when displaying realtime traffic data. Defaults to <code>false</code>.</li>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>style</strong> <code>Object</code><br>\nCSS style object to be applied to the <code>ReactiveMap</code> component.</li>\n<li><strong>onData</strong> <code>function</code><br>\nevent fired when one or more markers are indexed, updated or removed from the map. It takes an object with the following properties:</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\n  mode<span class="token punctuation">:</span> <span class="token string">\'historic\'</span> or <span class="token string">\'streaming\'</span><span class="token punctuation">,</span>\n  newData<span class="token punctuation">:</span> data which is the response <span class="token keyword">of</span> xhr call or streaming data<span class="token punctuation">,</span>\n  currentData<span class="token punctuation">:</span> Array <span class="token keyword">of</span> all existing markers data <span class="token keyword">in</span> the view <span class="token punctuation">(</span>should be <span class="token punctuation">[</span><span class="token punctuation">]</span> on query change<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  appliedQuery<span class="token punctuation">:</span> Raw query object<span class="token punctuation">,</span>\n  took<span class="token punctuation">:</span> time <span class="token keyword">in</span> milliseconds <span class="token punctuation">(</span>optional<span class="token punctuation">,</span> only applicable when mode is historic<span class="token punctuation">)</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>the function can return the markup to be displayed on the map (e.g. setting custom pins based on type of marker data or overlaying shapes like polygons or circles on the map).</p>\n<h3 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h3>\n<p><img src="https://i.imgur.com/W8deTH2.png" alt="ReactiveMap Events"></p>\n<p>ReactiveMap component exposes many events to provide a good listening mechanism for building interactivity.</p>\n<ul>\n<li>\n<p><strong>onIdle</strong>: is the event which is fired when map reached to its idle state after dragging or zooming effect. It has argument which contains</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token punctuation">{</span>\nboundingBoxCoordinates<span class="token punctuation">:</span> object which contains top_left<span class="token punctuation">,</span> bottom_right <span class="token keyword">of</span> current map bounds<span class="token punctuation">,</span>\nmapBounds<span class="token punctuation">:</span> original map bounds which is returned by map\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>and also user can return the markup which will be append inside map (as ex. Polygon, circles, rectangles can be return using <a href="https://github.com/tomchentw/react-google-maps">react-component</a> ).</p>\n</li>\n</ul>\n<h3 id="syntax"><a href="#syntax" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Syntax</h3>\n<br>\n<iframe height=\'500\' scrolling=\'no\' title=\'ReactiveMap docs example\' src=\'//codepen.io/sids-aquarius/embed/qXvWpo/?height=500&theme-id=light&default-tab=js&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/sids-aquarius/pen/qXvWpo/\'>ReactiveMap docs example</a> by Siddharth Kothari (<a href=\'https://codepen.io/sids-aquarius\'>@sids-aquarius</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<h3 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h3>\n<p><img src="https://i.imgur.com/YPRoLch.png" alt="Annotated Image"></p>\n<h3 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h3>\n<br>\n<iframe height=\'500\' scrolling=\'no\' title=\'ReactiveMap docs example\' src=\'//codepen.io/sids-aquarius/embed/qXvWpo/?height=500&theme-id=light&default-tab=result&embed-version=2\' frameborder=\'no\' allowtransparency=\'true\' allowfullscreen=\'true\' style=\'width: 100%;\'>See the Pen <a href=\'https://codepen.io/sids-aquarius/pen/qXvWpo/\'>ReactiveMap docs example</a> by Siddharth Kothari (<a href=\'https://codepen.io/sids-aquarius\'>@sids-aquarius</a>) on <a href=\'https://codepen.io\'>CodePen</a>.\n</iframe>\n<ol>\n<li>\n<p><a href="https://opensource.appbase.io/playground/?knob-title=Reactive%20maps&#x26;knob-URLParams%20(not%20visible%20in%20storybook)=true&#x26;knob-showMarkers=true&#x26;knob-filterLabel=GeoDistance%20filter&#x26;knob-defaultSelected=%7B%22label%22%253A%22Less%20than%20100%20miles%22%252C%22location%22%253A%22London%22%7D&#x26;knob-rangeLabels=%7B%22start%22%253A%22Start%22%252C%22end%22%253A%22End%22%7D&#x26;knob-range=%7B%22start%22%253A0%252C%22end%22%253A50%7D&#x26;knob-autoMarkerPosition=true&#x26;knob-streamMarkerImage=https%253A%252F%252Fcdn.rawgit.com%252Fappbaseio%252Freactivemaps%252F6500c73a%252Fdist%252Fimages%252Fstream-pin.png&#x26;knob-showMapStyles=false&#x26;knob-URLParams%20(not%20visible%20on%20storybook)=true&#x26;knob-showFilter=true&#x26;knob-autoMapRender=false&#x26;knob-placeholderDropdown=Select%20radius&#x26;knob-stepValue=1&#x26;knob-showPopoverOn=mouseover&#x26;knob-setMarkerCluster=true&#x26;knob-streamTTL=5&#x26;knob-setSearchAsMove=false&#x26;knob-defaultMarkerImage=https%253A%252F%252Fcdn.rawgit.com%252Fappbaseio%252Freactivemaps%252F6500c73a%252Fdist%252Fimages%252Fhistoric-pin.png&#x26;knob-size=100&#x26;knob-autoLocation=true&#x26;knob-streamAutoCenter=true&#x26;knob-unit=mi&#x26;knob-autoCenter=true&#x26;knob-placeholder=Search%20Location&#x26;knob-defaultZoom=5&#x26;knob-showSearchAsMove=true&#x26;knob-defaultMapStyle=Standard&#x26;knob-defaultCenter=%7B%22lat%22%253A37.74%252C%22lon%22%253A-122.45%252C%22lng%22%253A-122.45%7D&#x26;selectedKind=map%252FReactiveMap&#x26;selectedStory=Basic&#x26;full=0&#x26;down=1&#x26;left=1&#x26;panelRight=0&#x26;downPanel=storybooks%252Fstorybook-addon-knobs">ReactiveMap with all the default props</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/reactivemaps/examples/meetupblast/">ReactiveMap with a search sensor on the map</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/reactivemaps/examples/transport/">ReactiveMap with historical and realtime data</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/reactivemaps/examples/events/">ReactiveMap with events example</a></p>\n</li>\n<li>\n<p><a href="https://opensource.appbase.io/reactivemaps/examples/weather/">ReactiveMap with weather data</a></p>\n</li>\n</ol>',frontmatter:{title:"ReactiveMap",next:null,prev:"map-components/placessearch.html",nextTitle:null,prevTitle:"PlacesSearch"},fields:{path:"docs/map-components/ReactiveMap.md",slug:"map-components/reactivemap.html"}}},pathContext:{slug:"map-components/reactivemap.html"}}}});
//# sourceMappingURL=path---map-components-reactivemap-html-f9dfea6350b08698f690.js.map