# fixfooter

A jQuery plugin to make footer element glued at the bottom of page.


## Demo:
http://dispa.github.io/fixfooter/


## Usage:
`HTML`
```html
<body>
<div class="fixfooter-container">
	Content
	<div class="footer">
		Footer
	</div>
</div>
</body>
```
`JavaScript`
```javascript
$(".footer").fixfooter();
```


## Options:

#### `container` (jQuery element)
The container element. <i>Default: $(".fixfooter-container")</i>
