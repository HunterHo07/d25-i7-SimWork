// Animation variants for Framer Motion

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 }
};

export const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 }
};

export const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 }
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
};

export const rotateIn = {
  hidden: { opacity: 0, rotate: -5 },
  visible: { opacity: 1, rotate: 0 }
};

export const slideIn = {
  hidden: { width: 0 },
  visible: { width: '100%' }
};

export const typewriter = {
  hidden: { width: 0 },
  visible: {
    width: '100%',
    transition: {
      duration: 1.5,
      ease: 'easeInOut'
    }
  }
};

// Transition presets
export const transitions = {
  default: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  slow: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] },
  fast: { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] },
  bounce: { type: 'spring', stiffness: 300, damping: 20 },
  elastic: { type: 'spring', stiffness: 300, damping: 10 }
};

// Scroll animations
export const scrollAnimations = {
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: transitions.default
  },
  fadeInUp: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: transitions.default
  },
  fadeInDown: {
    initial: { opacity: 0, y: -50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: transitions.default
  },
  fadeInLeft: {
    initial: { opacity: 0, x: -50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: transitions.default
  },
  fadeInRight: {
    initial: { opacity: 0, x: 50 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true },
    transition: transitions.default
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true },
    transition: transitions.default
  }
};
