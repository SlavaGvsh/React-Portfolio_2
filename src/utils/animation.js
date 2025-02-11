import { delay } from "motion";
import { i } from "motion/react-client";

export const iconsVariants = {
  hidden: {
    x: 15,
    opacity: 0,
  },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.1,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};
export const motionVariants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (index) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: index * 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};
export const imgVariants = {
  hidden: {
    x: 150,
    opacity: 0,
  },
  visible: () => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

// export const slideInVariants = (
//   direction = "right",
//   duration = 0.5,
//   distance = 100,
//   useCustom = false
// ) => {
//   const x =
//     direction === "left" ? -distance : direction === "right" ? distance : 0;
//   const y =
//     direction === "top" ? -distance : direction === "bottom" ? distance : 0;
//   return {
//     hidden: {
//       x: useCustom ? x : 0,
//       y: useCustom ? y : 0,
//       opacity: 0,
//     },
//     visible: (index) => {
//       const animation = {
//         x: 0,
//         y: 0,
//         opacity: 1,
//         transition: {
//           delay: useCustom ? index * 0.2 : 0,
//           duration,
//           ease: "easeOut",
//         },
//       };

//       if (useCustom) {
//         animation.custom = index;
//       }
//       return animation;
//     },
//   };
// };

export const slideInVariants = (
   direction = "right",
   duration = 0.5,
   distance = 100,
   useCustom = false
 ) => {
   const x = direction === "left" ? -distance : direction === "right" ? distance : 0;
   const y = direction === "top" ? -distance : direction === "bottom" ? distance : 0;
 
   return {
     hidden: {
       x: useCustom ? x : 0,
       y: useCustom ? y : 0,
       opacity: 0,
     },
     visible: (index) => ({
       x: 0,
       y: 0,
       opacity: 1,
       transition: {
         delay: useCustom ? index * 0.2 : 0,
         duration,
         ease: "easeOut",
       },
     }),
     pulse: {
       scale: [1, 1.1, 1], // увеличивается до 1.1, затем обратно
       transition: {
         duration: 1, // время одного цикла пульсации
         repeat: Infinity, // бесконечное повторение
         ease: "easeInOut",
       },
     },
   };
 };
 