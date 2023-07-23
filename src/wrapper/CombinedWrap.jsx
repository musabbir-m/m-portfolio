import React, { useState, useEffect } from 'react';
import { NavigationDots, SocialMedia } from '../components';
import { motion } from 'framer-motion';


// CombinedWrap HOC (Includes both animation and layout features)
const CombinedWrap = (Component, idName, classNames) => function HOC() {

  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <motion.div whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }} transition={{ duration: 0.5 }} className={`${classNames} app__flex`}>
          {/* Render the About component inside MotionWrap */}
          <Component/>
        </motion.div>
        <div className="copyright">
          <p className="p-text">@2023 Musabbir</p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default CombinedWrap