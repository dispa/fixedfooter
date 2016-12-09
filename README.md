Demo: http://dispa.github.com/fixedfooter/

<br />
<h1>fixedfooter</h1>
A jQuery plugin to make footer element glued at the bottom of page.
<br /><br />
<h2>Usage:</h2>
<br />
HTML<br />
```html
<body>
<div class="fixedfooter-container">
	Content
	<footer class="fixedfooter-footer">
		Footer
	</div>
</div>
</body>
```
<br />
JavaScript<br />
```javascript
$(".fixedfooter-footer").fixedfooter();
```
<br />

<h2>Options:</h2>
<br />
* container (jQuery element): The container element. Default: $(".fixedfooter-container")
