# We make responsive websites with the wrong tool - 3/02/2021

## Media queries are not maintainable

​	Designing something is chaotic, no one really knows how it works, how it ticks. At any moment something **needs** to change, be redone or taken completely out of the picture.

​	*That's how I do it, at least.*

​	*I don't really know what I'm doing either.*

​	Designers are then forced to use alternative tools in the process of designing websites. Media queries are not maintainable, at some point something **needs** to change. In a real website this implies that the whole structure might fall apart, making it impossible to design something hands on.

​	Why? Now, the **media queries**, need to change as well.

## The problem

​	Media queries can only target the viewport,  which  means  that  each  part  of  the  interface can  only  respond  to  changes  of  the  (global)  "window" size. This is the issue. The key limitation.

## Making responsive websites with the right tool

​	Well, right now you can't.

## Oh, so what now?

​	Container queries are still just a proposal, maybe in 5 years it's a reality. We don't have 5 years. That's a long time. 

​	However, there's a simple alternative. Algorithmic layouts.

```css
.container {
	display: flex;
	flex-wrap: wrap;
	--margin: 1rem;
	--modifier: calc(var(--margin) * -1);
	margin: calc(var(--margin) * -1);
}

.container > * {
    flex-grow: 1;
    flex-basis: calc(var(--modifier) * 999);
    margin: var(--margin);
}
```
​	[Do check out Heydon Pickering's blog about them here.](https://heydonworks.com/article/the-flexbox-holy-albatross-reincarnated/)

​	The flex-basis property sets the initial width for any item, and the state modifier serves as a switch between states at the break-point width.

​	At the break-point width or above, the flex-basis value is absurdly high and thus every element takes an entire row. Below the break-point width, every element occupies the same row, these can then be equally distributed within it or individually controlled with the flex-grow property.

​	Each block that makes an interface can then respond to it's size, independently from the viewport. Hope this helps.

--- the guy who doesn't know what he's doing
