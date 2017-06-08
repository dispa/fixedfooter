#fixfooter

##Demo: http://dispa.github.io/fixfooter/

A jQuery plugin to make footer element glued at the bottom of page.

##Usage:

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

```javascript
$(".fixfooter-footer").fixfooter();
```
##Options:

* container (jQuery element): The container element. <i>Default: $(".fixfooter-container")</i>
