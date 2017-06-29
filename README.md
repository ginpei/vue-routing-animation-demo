# Vue Routing Animation Demo

Demo to animate something when you move pages using [Vue.js](https://vuejs.org/).

![Demo video. When you move to another page, some blocks fade in and pop up.](./doc/demo.gif)

Live demo:

- [https://ginpei.github.io/vue-routing-animation-demo/](https://ginpei.github.io/vue-routing-animation-demo/)

Inspired by a demo of ReactTransitionGroup:

- [Animated page transitions with React Router 4, ReactTransitionGroup and Animated](https://hackernoon.com/animated-page-transitions-with-react-router-4-reacttransitiongroup-and-animated-1ca17bd97a1a)

# Animating

There is a wrapper component for all pages, which handles animation by; search target which has an attribute `routing-animation`, prepare a style sheet for the animation, then fire them.

[`src/components/layouts/BaseLayout.vue`](https://github.com/ginpei/vue-routing-animation-demo/blob/868d6139d5c2635452c6a4f19b5cf2bdd8ac3efb/src/components/layouts/BaseLayout.vue#L21-L26)

```javascript
mounted() {
    const els = Array.from(this.$el.querySelectorAll('[routing-animation]'));
    els.forEach((el, index)=>{
        setTimeout(()=>el.classList.add('is-preparedRoutingAnimation'), 50 * index);
    });
},
```

[`routing-animation.css`](https://github.com/ginpei/vue-routing-animation-demo/blob/868d6139d5c2635452c6a4f19b5cf2bdd8ac3efb/routing-animation.css)

```css
[routing-animation] {
    visibility: hidden;
}

[routing-animation].is-preparedRoutingAnimation {
    animation: routingAnimation-show 300ms;
    visibility: visible;
}

@keyframes routingAnimation-show {
    0%   { opacity: 0; transform: translateY(1rem); }
    100% { opacity: 1; transform: translateY(0); }
}
```
