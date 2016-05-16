import React from 'react';

import {Animated, AnimatedAgent} from 'boxart';

import Component from '../update-ancestor';

function randomGray() {
  const r = 64 + 128 * Math.random() | 0;
  return `rgb(${r}, ${r}, ${r})`
}

const animation = {
  head: {
    style: {
      transform: [
        [0, 300, (t, {emit}) => (emit({x: 40 + Math.random() * 60, y: 90 + Math.random() * 20, vx: 100, vy: 100, drag: 0.9, o: 1, vo: -2, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), emit({x: 30 + Math.random() * 10, y: 100 + Math.random() * 10, vx: -10, vy: 100, drag: 0.9, o: 1, vo: -2, s: 0.5, vs: 1, sdrag: 0.9, color: randomGray()}), `translate3d(${0}px, ${14 * t * t}px, 0) translate(40px, 100px) rotateZ(${-5 * t * t}deg) translate(-40px, -100px)`)],
        [300, 800, t => `translate3d(${0}px, ${14}px, 0) translate(40px, 100px) rotateZ(${-5 + 2 * t}deg) translate(-40px, -100px)`],
        [800, 1300, (t, {emit}) => (emit({x: 75 + Math.random() * 10, y: 105 + Math.random() * 10, vx: 50, vy: 50, drag: 0.9, o: 0.5, vo: -1, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), emit({x: 55 + Math.random() * 10, y: 125 + Math.random() * 10, vx: 10, vy: 50, drag: 0.9, o: 0.5, vo: -1, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), `translate3d(${0}px, ${14 + -4 * t}px, 0) translate(40px, 100px) rotateZ(${-3 + 3 * t}deg) translate(-40px, -100px)`)],
        [1300, 2000, (t, {emit}) => (emit({x: 65 + Math.random() * 40, y: 100 + Math.random() * 10, vx: 100, vy: 100, drag: 0.99, o: 0.5, vo: -2, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), `translate3d(${0}px, ${10 + -10 * t}px, 0)`)],
        [2000, 2400, (t, {emit}) => (emit({x: 65 + Math.random() * 40, y: 100 + Math.random() * 10, vx: 100, vy: 100, drag: 0.99, o: 0.5, vo: -2, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), emit({x: 65 + Math.random() * 10, y: 115 + Math.random() * 10, vx: 20, vy: 60, drag: 0.9, o: 0.5, vo: -1, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), `translate3d(${0}px, ${2 * t}px, 0)`)],
        [2400, 3000, (t, {emit}) => (emit({x: 65 + Math.random() * 40, y: 100 + Math.random() * 10, vx: 100, vy: 100, drag: 0.99, o: 0.5, vo: -2, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), `translate3d(${0}px, ${2 + -2 * t}px, 0)`)],
        [3000, 3400, (t, {emit}) => (emit({x: 65 + Math.random() * 40, y: 100 + Math.random() * 10, vx: 100, vy: 100, drag: 0.99, o: 0.5, vo: -2, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), `translate3d(${0}px, ${2 * t}px, 0)`)],
        [3400, 4000, (t, {emit}) => (emit({x: 65 + Math.random() * 40, y: 100 + Math.random() * 10, vx: 100, vy: 100, drag: 0.99, o: 0.5, vo: -2, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), `translate3d(${0}px, ${2 + -2 * t}px, 0)`)],
        [4000, 4400, (t, {emit}) => (emit({x: 65 + Math.random() * 40, y: 100 + Math.random() * 10, vx: 100, vy: 100, drag: 0.99, o: 0.5, vo: -2, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), `translate3d(${0}px, ${2 * t}px, 0)`)],
        [4400, 5000, (t, {emit}) => (emit({x: 65 + Math.random() * 40, y: 100 + Math.random() * 10, vx: 100, vy: 100, drag: 0.99, o: 0.5, vo: -2, s: 1, vs: 1, sdrag: 0.9, color: randomGray()}), `translate3d(${0}px, ${2 + -2 * t}px, 0)`)],
        // [2000, 1100, t => `translate(${0}, ${0})`],
      ],
    },
    // attributes: {
    //   transform: [
    //     [0, 300, t => `translate(${0}, ${14 * t * t}) rotate(${-5 * t * t}, 40, 100)`],
    //     [300, 800, t => `translate(${0}, ${14}) rotate(${-5 + 2 * t}, 40, 100)`],
    //     [800, 1300, t => `translate(${0}, ${14 + -4 * t}) rotate(${-3 + 3 * t}, 40, 100)`],
    //     [1300, 2000, t => `translate(${0}, ${10 + -10 * t})`],
    //     [2000, 2400, t => `translate(${0}, ${2 * t})`],
    //     [2400, 3000, t => `translate(${0}, ${2 + -2 * t})`],
    //     [3000, 3400, t => `translate(${0}, ${2 * t})`],
    //     [3400, 4000, t => `translate(${0}, ${2 + -2 * t})`],
    //     [4000, 4400, t => `translate(${0}, ${2 * t})`],
    //     [4400, 5000, t => `translate(${0}, ${2 + -2 * t})`],
    //     // [2000, 1100, t => `translate(${0}, ${0})`],
    //   ],
    // },
  },
  beard: {
    style: {
      transform: [
        [0, 300, t => `translate3d(${0}px, ${10 * t * t}px, 0) translate(40px, 100px) rotateZ(${-10 * t}deg) translate(-40px, -100px)`],
        [300, 800, t => `translate3d(${0}px, ${10 + -3 * t}px, 0)  translate(40px, 100px) rotateZ(${-10 + 3 * t}deg) translate(-40px, -100px)`],
        [800, 2000, t => `translate3d(${0}px, ${7 + -7 * t}px, 0)  translate(40px, 100px) rotateZ(${-7 + 7 * t}deg) translate(-40px, -100px)`],
        [2000, 2100, t => `translate3d(${0}, ${0}, 0)`],
      ],
    },
    // attributes: {
    //   transform: [
    //     [0, 300, t => `translate(${0}, ${10 * t * t}) rotate(${-10 * t}, 40, 100)`],
    //     [300, 800, t => `translate(${0}, ${10 + -3 * t}) rotate(${-10 + 3 * t}, 40, 100)`],
    //     [800, 2000, t => `translate(${0}, ${7 + -7 * t}) rotate(${-7 + 7 * t}, 40, 100)`],
    //     [2000, 2100, t => `translate(${0}, ${0})`],
    //   ],
    // },
  },
  neck1: {
    style: {
      transform: [
        [0, 300, t => `translate3d(${0 * t * t}px, ${10 * t * t}px, 0) translate(80px, 100px) rotateZ(${-10 * t * t}deg) translate(-80px, -100px)`],
        [300, 2000, t => `translate3d(${0 * t}px, ${10 + -10 * t}px, 0) translate(80px, 100px) rotateZ(${-10 + 10 * t}deg) translate(-80px, -100px)`],
      ],
    },
    // attributes: {
    //   transform: [
    //     [0, 300, t => `translate(${0 * t * t}, ${10 * t * t}) rotate(${-10 * t * t}, 80, 100)`],
    //     [300, 2000, t => `translate(${0 * t}, ${10 + -10 * t}) rotate(${-10 + 10 * t}, 80, 100)`],
    //   ],
    // },
  },
};

class Main extends Component {

  constructor() {
    super();

    this.state = {

    };
    this.particles = [];
  }

  render() { 
    return (
      <div className="game-board">
        <AnimatedAgent>
      <div>
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
          <Bird />
      </div>
        </AnimatedAgent>
      </div>
    );
  }
}

export default Main;

class Bird extends Component {
  emit(particle) {
    // console.log(particle);
    this.particles = this.particles || [];
    this.particles.push(particle);
    if (this.particles.length > 64) {
      this.particles.shift();
    }
  }

  animateParticle(options) {
    const index = options.animated.props.particleIndex;
    const timer = options.timer();
    let last = Date.now();
    const style = {transform: '', opacity: 0};
    options.replaceStyle(style);
    timer.loop(() => {
      let particle = this.particles[index];
      if (!particle || particle.o < 1e-5) {
        style.opacity = 0;
        options.setStyle(style);
        return 0;
      }
      const t = (Date.now() - last) / 1000;
      last = Date.now();
      particle.x += particle.vx * t;
      particle.y += particle.vy * t;
      particle.o += particle.vo * t;
      particle.s += particle.vs * t;
      particle.vx *= 1 - (particle.drag * t);
      particle.vy *= 1 - (particle.drag * t);
      particle.vs *= 1 - (particle.sdrag * t);
      // console.log(particle);
      style.transform = `translate(${particle.x}px, ${particle.y}px) scale(${particle.s})`;
      style.opacity = particle.o < 1e-5 ? 0 : particle.o;
      options.setStyle(style);
      options.animatedEl.setAttribute('fill', particle.color);
      return 0;
    });
    return timer;
  }

  animate(options) {
    const recipe = animation[options.animated.props.animateNode];
    if (!recipe) {return;}
    const timer = options.timer();
    const loop = () => {
      const start = Date.now();
      const style = {};
      const replaced = {};
      for (const key in recipe.style) {
        style[key] = '';
        replaced[key] = options.animatedEl.style[key];
      }
      const attributes = {};
      const replaceAttributes = {};
      for (const key in recipe.attributes) {
        attributes[key] = '';
        replaceAttributes[key] = options.animatedEl.getAttribute(key);
      }
      timer.cancelable(() => {
        for (const key in recipe.style) {
          options.animatedEl.style[key] = replaced[key];
        }
        for (const key in recipe.attributes) {
          options.animatedEl.setAttribute(key, replaceAttributes[key]);
        }
      });
      timer.loop(() => {
        const diff = Date.now() - start;
        // console.log(diff);
        for (const key in recipe.style) {
          for (const timeslice of recipe.style[key]) {
            if (timeslice[0] <= diff && timeslice[1] >= diff) {
              options.animatedEl.style[key] = timeslice[2]((diff - timeslice[0]) / (timeslice[1] - timeslice[0]), this);
            }
          }
        }
        for (const key in recipe.attributes) {
          for (const timeslice of recipe.attributes[key]) {
            // console.log(diff, timeslice[0], timeslice[1]);
            if (timeslice[0] <= diff && timeslice[1] >= diff) {
              options.animatedEl.setAttribute(key, timeslice[2]((diff - timeslice[0]) / (timeslice[1] - timeslice[0]), this));
            }
          }
        }
        return diff / 5000;
      })
      .then(() => {
        for (const key in recipe.style) {
          options.animatedEl.style[key] = replaced[key];
        }
        for (const key in recipe.attributes) {
          options.animatedEl.setAttribute(key, replaceAttributes[key]);
        }
      })
      .then(loop);
    }
    loop();
    return timer;
  }

  render() {
return (
  <div style={{display: "inline-block", position: "relative", width: 165, height: 249}}>
  <Animated animateKey={Math.random()} animateNode="neck1" animate={this.animate}>
  <svg width="165" height="249" style={{transformOrigin: '0 0 0', transform: 'translateZ(0)', position: 'absolute',}}>
  <defs>
    <pattern id="robo" patternUnits="userSpaceOnUse" width="165" height="249">
      <image xlinkHref={require('./robo.png')} x="0" y="0" width="165" height="249" />
    </pattern>
  </defs>
  <g>
    <polygon points="101,93 103,105 113,114 118,116 86,173 55,185 54,120 69,115" fill="url(#robo)"></polygon>
    <polygon points="101,93 103,105 113,114 118,116 86,153 55,155 54,120 69,115" fill="url(#robo)" transform="translate(-26, -10) rotate(0, 60, 120)"></polygon>
    <polygon points="101,93 103,105 113,114 118,116 86,173 55,185 54,120 69,115" fill="url(#robo)" transform="translate(-26, 25) rotate(-15, 60, 120)"></polygon>
  </g>
  </svg>
  </Animated>
  <svg width="165" height="249" style={{transform: 'translateZ(0)', position: 'absolute',}}>
  <defs>
    <pattern id="robo" patternUnits="userSpaceOnUse" width="165" height="249">
      <image xlinkHref={require('./robo.png')} x="0" y="0" width="165" height="249" />
    </pattern>
  </defs>
  <g>
    <polygon points="116,115 151,125 73,245 44,205 55,203 56,185 68,176 85,171" fill="url(#robo)"></polygon>
  </g>
  </svg>
  <Animated animateKey={Math.random()} animateNode="beard" animate={this.animate}>
  <svg width="165" height="249" style={{transformOrigin: '0 0 0', transform: 'translateZ(0)', position: 'absolute',}}>
  <defs>
    <pattern id="robo" patternUnits="userSpaceOnUse" width="165" height="249">
      <image xlinkHref={require('./robo.png')} x="0" y="0" width="165" height="249" />
    </pattern>
  </defs>
  <g>
    <polygon points="42,119 54,121 56,204 27,204 31,168" fill="url(#robo)" transform="translate(-15, -3) rotate(7, 48,119)"></polygon>
    <polygon points="42,119 54,121 56,204 27,204 31,168" fill="url(#robo)" transform="translate(-10, -2) rotate(5, 48,119)"></polygon>
    <polygon points="42,119 54,121 56,204 27,204 31,168" fill="url(#robo)"></polygon>
    <polygon points="" fill="url(#robo)"></polygon>
  </g>
  </svg>
  </Animated>
  <Animated animateKey={Math.random()} animateNode="head" animate={this.animate}>
  <svg width="162" height="116" style={{transformOrigin: '0 0 0', transform: 'translateZ(0)', position: 'absolute',}}>
  <defs>
    <pattern id="robo" patternUnits="userSpaceOnUse" width="165" height="249">
      <image xlinkHref={require('./robo.png')} x="0" y="0" width="165" height="249" />
    </pattern>
  </defs>
  <g transform="rotate(0, 80, 100)">
    <g transform="rotate(0, 40, 83)">
      <polygon points="38,83 27,81 13,59 21,51" fill="url(#robo)"></polygon>
      <polygon points="21,51 39,37 54,80 38,83" fill="url(#robo)"></polygon>
      <polygon points="39,37 78,12 81,78 54,80" fill="url(#robo)"></polygon>
      <polygon points="78,12 117,0 162,5 116,73 81,78" fill="url(#robo)"></polygon>
    </g>
    <polygon points="28,91 38,82 83,78 101,87 101,94 97,95 66,115 57,115 39,110 35,104 24,103" fill="url(#robo)"></polygon>
    <polygon points="25,101 38,106 29,115 0,116" fill="url(#robo)"></polygon>
  </g>
  </svg>
  </Animated>
  <svg width="165" height="249" style={{transformOrigin: '0 0 0', transform: 'translateZ(0)', position: 'absolute',}}>
  <g>
  {[
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
  ].map((n, index) => (
    <Animated animateKey={Math.random()} animate={this.animateParticle} particleIndex={index}>
      <image x="0" y="0" width="16" height="16" xlinkHref={require('./smoke.png')} />
    </Animated>
  ))}
  </g>
  </svg>
  </div>);
}
}
