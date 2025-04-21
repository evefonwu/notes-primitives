# Learning Libraries Series - Radix Primitives

Learning Notes -

Radix Primitives is a library for quality, accessible UI components

- components adhere to to WAI-ARIA design patterns,

- library makes web components and widgets accessible with ARIA roles, states, and properties and provides focus management, and keyboard navigation

- unstyled components = meaning you style the components. All components accept a className prop.

- uncontrolled components by default

# getting started with primitives - summary

"In a few simple steps, we've implemented a fully accessible Popover component, without having to worry about many of its complexities.

- Adheres to WAI-ARIA design pattern.
- Can be controlled or uncontrolled.
- Customize side, alignment, offsets, collision handling.
- Optionally render a pointing arrow.
- Focus is fully managed and customizable.
- Dismissing and layering behavior is highly customizable."

- https://www.radix-ui.com/primitives/docs/overview/getting-started#implementing-a-popover

First primitive implemented, the popover.

Styling the popover helped me understand the lingo of a popover, namely: trigger, content, arrow

# going to implement a few more primitives

- label,
- dialog,
- ?
- accordion,
- tab,

https://www.radix-ui.com/primitives/docs/components/label

# adding tailwindcss to style the components

install tailwind packages, configure vite plugin for tailwindcss, import into App.css

https://tailwindcss.com/docs/installation/using-vite
