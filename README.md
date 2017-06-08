Demo: http://dispa.github.io/fixfooter/

<br />
<h1>fixfooter</h1>
A jQuery plugin to make footer element glued at the bottom of page.
<br /><br />
<h2>Usage:</h2>
<br />
HTML<br />
```html
<body>
<div class="fixfooter-container">
	Content
	<div class="fixfooter-footer">
		Footer
	</div>
</div>
</body>
```
<br />
JavaScript<br />
```javascript
$(".fixfooter-footer").fixfooter();
```
<br />

<h2>Options:</h2>
<br />
* container (jQuery element): The container element. <i>Default: $(".fixfooter-container")</i>
