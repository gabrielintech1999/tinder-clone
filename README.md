# Tinder Clone




## Stack
- React - [components]
- React-Router-Dom [route, Links]
- Tailwind-CSS [utility-classes]
- axios - [fetching]
- React cookie
- React-tinder-card


## Search
- How to use position absolute e relative in tailwind

- How to center with position absolute in tailwind ?
To center an element using `position: absolute` in Tailwind CSS, you can use the following approach:

### Center Horizontally and Vertically

1. Set the element to `absolute` positioning.
2. Use `inset-0` to set all sides (top, right, bottom, left) to 0.
3. Use `m-auto` to apply automatic margin, which centers the element.

This works for elements with fixed dimensions.

```html
<div class="absolute inset-0 m-auto w-32 h-32 bg-blue-500">
  Centered Content
</div>
```

### Center Horizontally and Vertically with `top-1/2` and `left-1/2`

If the element has a variable size, use a combination of `top-1/2` and `left-1/2` to position it in the center, then apply `transform` to shift it back by half its width and height (`-translate-x-1/2 -translate-y-1/2`).

```html
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500">
  Centered Content
</div>
```

### Explanation:

- `top-1/2` and `left-1/2`: Position the top-left corner of the element in the center of the container.
- `transform -translate-x-1/2 -translate-y-1/2`: Shift the element back by 50% of its own width and height, effectively centering it. 

This approach is useful for centering both variable and fixed-size elements.



- how to use gradient in  taiwind
- how to background image in tailwiind