import React from 'react';
import {findDOMNode} from 'react-dom';

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
      birdCount: 1,
    };
    this.particles = [];
    this.many = [1, 2, 4, 8, 16, 32, 64, 128, 256];
  }

  emit(particle) {
    this.refs.particles.emit(particle);
  }

  render() {
    const birds = [];
    for (let i = 0; i < this.state.birdCount; i++) {
      birds.push(0);
    }
    return (
      <div className="game-board">
        <AnimatedAgent>
          <div>
            <div style={{position: 'relative', zIndex: 1}}>
              <select ref="birdCount" defaultValue={this.state.birdCount} onChange={() => {
                this.setState({birdCount: this.refs.birdCount.value | 0});
              }}>
                {this.many.map((n, index) => <option value={n}>{n}</option>)}
              </select>
            </div>
            {birds.map((n, index) => <Bird key={index} emit={this.emit} />)}
            <Particles ref="particles" width="100%" height="100%" max={birds.length * 32} />
          </div>
        </AnimatedAgent>
      </div>
    );
  }
}

export default Main;

class Particles extends Component {
  emit(particle) {
    const rect = this.rect;
    particle.x -= rect.left;
    particle.y -= rect.top;
    // console.log(particle);

    // console.log(particle);
    // this.particleFrame = this.particleFrame || 0;
    // this.particles = this.particles || [];
    // this.particlesData = this.particlesData || new Float64Array(11 * 64);
    // this.nextParticleIndex = this.nextParticleIndex || 0;
    // this.particleFills = this.particleFills || [];
    // this.particles[this.nextParticleIndex] = particle;
    this.particlesData[this.nextParticleIndex * 11 + 0] = Date.now() / 1000;
    this.particlesData[this.nextParticleIndex * 11 + 1] = particle.x;
    this.particlesData[this.nextParticleIndex * 11 + 2] = particle.vx;
    this.particlesData[this.nextParticleIndex * 11 + 3] = particle.y;
    this.particlesData[this.nextParticleIndex * 11 + 4] = particle.vy;
    this.particlesData[this.nextParticleIndex * 11 + 5] = particle.drag;
    this.particlesData[this.nextParticleIndex * 11 + 6] = particle.s;
    this.particlesData[this.nextParticleIndex * 11 + 7] = particle.vs;
    this.particlesData[this.nextParticleIndex * 11 + 8] = particle.sdrag;
    this.particlesData[this.nextParticleIndex * 11 + 9] = particle.o;
    this.particlesData[this.nextParticleIndex * 11 + 10] = particle.vo;
    this.nextParticleIndex++;
    if (this.nextParticleIndex >= this.props.max) {
      this.nextParticleIndex = 0;
    }
  }

  componentDidMount() {
    this.rect = findDOMNode(this).getBoundingClientRect();
  }

  animateParticle(options) {
    const timer = options.timer();
    const style = {transform: '', opacity: 0};
    const data = this.particlesData;
    // options.replaceStyle(style);
    timer.loop(() => {
      const now = Date.now() / 1000;
      for (let index = 0; index < this.props.max; index++) {
        // let particle = this.particles[index];
        const baseIndex = index * 11;
        if (data[baseIndex] === 0) {
        // if (!particle || particle.o < 1e-5) {
          continue;
        }

        const t = now - data[baseIndex];
        const d1 = t + 0.016;
        const d2 = -t * d1;
        // const drag = 0.016 * (f + 1) * (1 - particle.drag * 0.016 * f);
        const drag = data[baseIndex + 5] * d2 + d1;
        // const x = particle.x + particle.vx * drag;
        const x = data[baseIndex + 1] + data[baseIndex + 2] * drag;
        // const y = particle.y + particle.vy * drag;
        const y = data[baseIndex + 3] + data[baseIndex + 4] * drag;
        // const o = particle.o + particle.vo * t;
        const o = data[baseIndex + 9] + data[baseIndex + 10] * t;
        // const sdrag = 0.016 * (f + 1) * (1 - particle.sdrag * 0.016 * f);
        const sdrag = data[baseIndex + 8] * d2 + d1;
        // const s = particle.s + particle.vs * sdrag;
        const s = data[baseIndex + 6] + data[baseIndex + 7] * sdrag;

        // particle.x += particle.vx * t;
        // particle.y += particle.vy * t;
        // particle.o += particle.vo * t;
        // particle.s += particle.vs * t;
        // particle.vx *= 1 - (particle.drag * t);
        // particle.vy *= 1 - (particle.drag * t);
        // particle.vs *= 1 - (particle.sdrag * t);

        const ref = this.particleRefs[index];
        ref.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
        // ref.setAttribute('transform', `translate(${x}, ${y}) scale(${s})`);
        ref.style.opacity = o < 1e-5 ? 0 : o;
        if (o < 1e-5) {
          data[baseIndex] = 0;
        }
        // options.setStyle(style);
        // if (this.particles[index].color !== this.particleFills[index]) {
        //   ref.setAttribute('fill', this.particles[index].color);
        //   this.particleFills[index] = this.particles[index].color;
        // }
      }
      return 0;
    });
    return timer;
  }

  render() {
    if (!this.particleIndices || this.particleIndices.length !== this.props.max) {
      this.particleIndices = new Array(this.props.max);
      // this.particles = new Array(this.props.max);
      this.particlesData = new Float64Array(11 * this.props.max);
      this.nextParticleIndex = 0;
      for (let i = 0; i < this.props.max; i++) {
        this.particleIndices[i] = i;
      }
    }
    this.particleKey = this.particleKey || Math.random();
    this.particleRefs = this.particleRefs || [];
    // console.log(this);
    return (
      <svg width={this.props.width} height={this.props.height} style={{transformOrigin: '0 0 0', transform: 'translateZ(0)', position: 'absolute', top: 0, left: 0}}>
        <Animated animateKey={this.particleKey} animate={this.animateParticle} >
      <g>
      {this.particleIndices.map((n, index) => (
        <image ref={particle => {this.particleRefs[index] = particle;}} x="0" y="0" width="16" height="16" xlinkHref={require('./smoke.png')} style={{opacity: 0}} />
      ))}
      </g>
        </Animated>
      </svg>
    );
  }
}

class Bird extends Component {
  emit(particle) {
    if (this.props.emit) {
      const rect = this.rect;
      particle.x += rect.left;
      particle.y += rect.top;
      return this.props.emit(particle);
    }
    // console.log(particle);
    this.particleFrame = this.particleFrame || 0;
    this.particles = this.particles || [];
    this.particlesData = this.particlesData || new Float64Array(11 * 64);
    this.nextParticleIndex = this.nextParticleIndex || 0;
    this.particleFills = this.particleFills || [];
    this.particles[this.nextParticleIndex] = particle;
    this.particlesData[this.nextParticleIndex * 11 + 0] = Date.now() / 1000;
    this.particlesData[this.nextParticleIndex * 11 + 1] = particle.x;
    this.particlesData[this.nextParticleIndex * 11 + 2] = particle.vx;
    this.particlesData[this.nextParticleIndex * 11 + 3] = particle.y;
    this.particlesData[this.nextParticleIndex * 11 + 4] = particle.vy;
    this.particlesData[this.nextParticleIndex * 11 + 5] = particle.drag;
    this.particlesData[this.nextParticleIndex * 11 + 6] = particle.s;
    this.particlesData[this.nextParticleIndex * 11 + 7] = particle.vs;
    this.particlesData[this.nextParticleIndex * 11 + 8] = particle.sdrag;
    this.particlesData[this.nextParticleIndex * 11 + 9] = particle.o;
    this.particlesData[this.nextParticleIndex * 11 + 10] = particle.vo;
    this.nextParticleIndex++;
    if (this.nextParticleIndex >= 64) {
      this.nextParticleIndex = 0;
    }
  }

  componentDidMount() {
    this.rect = findDOMNode(this).getBoundingClientRect();
  }

  animateParticle(options) {
    return ;
    const timer = options.timer();
    const style = {transform: '', opacity: 0};
    // options.replaceStyle(style);
    timer.loop(() => {
      const now = Date.now() / 1000;
      const data = this.particlesData;
      for (let index = 0; index < this.particles.length; index++) {
        // let particle = this.particles[index];
        const baseIndex = index * 11;
        if (data[baseIndex] === 0) {
        // if (!particle || particle.o < 1e-5) {
          continue;
        }

        const t = now - data[baseIndex];
        const d1 = t + 0.016;
        const d2 = -t * d1;
        // const drag = 0.016 * (f + 1) * (1 - particle.drag * 0.016 * f);
        const drag = data[baseIndex + 5] * d2 + d1;
        // const x = particle.x + particle.vx * drag;
        const x = data[baseIndex + 1] + data[baseIndex + 2] * drag;
        // const y = particle.y + particle.vy * drag;
        const y = data[baseIndex + 3] + data[baseIndex + 4] * drag;
        // const o = particle.o + particle.vo * t;
        const o = data[baseIndex + 9] + data[baseIndex + 10] * t;
        // const sdrag = 0.016 * (f + 1) * (1 - particle.sdrag * 0.016 * f);
        const sdrag = data[baseIndex + 8] * d2 + d1;
        // const s = particle.s + particle.vs * sdrag;
        const s = data[baseIndex + 6] + data[baseIndex + 7] * sdrag;

        // particle.x += particle.vx * t;
        // particle.y += particle.vy * t;
        // particle.o += particle.vo * t;
        // particle.s += particle.vs * t;
        // particle.vx *= 1 - (particle.drag * t);
        // particle.vy *= 1 - (particle.drag * t);
        // particle.vs *= 1 - (particle.sdrag * t);

        const ref = this.particleRefs[index];
        ref.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
        // ref.setAttribute('transform', `translate(${x}, ${y}) scale(${s})`);
        ref.style.opacity = o < 1e-5 ? 0 : o;
        if (o < 1e-5) {
          data[baseIndex] = 0;
        }
        // options.setStyle(style);
        if (this.particles[index].color !== this.particleFills[index]) {
          ref.setAttribute('fill', this.particles[index].color);
          this.particleFills[index] = this.particles[index].color;
        }
      }
      return 0;
    });
    return timer;
  }

  animate(options) {
    const recipe = animation[options.animated.props.animateNode];
    if (!recipe) {return;}
    const timer = options.timer();
    let canceled = false;
    const key = Math.random();
    const loop = () => {
      if (canceled) {
        return;
      }
      // console.log(key);
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
        if (canceled) {
          return;
        }
        // console.log(key, 'canceled');
        canceled = true;
        for (const key in recipe.style) {
          options.animatedEl.style[key] = replaced[key];
        }
        for (const key in recipe.attributes) {
          options.animatedEl.setAttribute(key, replaceAttributes[key]);
        }
      });
      timer.loop(() => {
        if (canceled) {
          return 1;
        }
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
    this.neckKey = this.neckKey || Math.random();
    this.beardKey = this.beardKey || Math.random();
    this.headKey = this.headKey || Math.random();
    this.particleKey = this.particleKey || Math.random();
    this.particleRefs = this.particleRefs || [];
return (
  <div style={{display: "inline-block", position: "relative", width: 165, height: 249}}>
  <Animated animateKey={this.neckKey} animateNode="neck1" animate={this.animate}>
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
  <Animated animateKey={this.beardKey} animateNode="beard" animate={this.animate}>
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
  <Animated animateKey={this.headKey} animateNode="head" animate={this.animate}>
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
    <Animated animateKey={this.particleKey} animate={this.animateParticle} >
  <g>
  {[
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
  ].map((n, index) => (
      <image ref={particle => {this.particleRefs[index] = particle;}} x="0" y="0" width="16" height="16" xlinkHref={require('./smoke.png')} style={{opacity: 0}} />
  ))}
  </g>
    </Animated>
  </svg>
  </div>);
}
}
