import React, { useState, useEffect } from "react";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import AnimatedSection from './components/AnimatedSection';
import './index.scss';

function App() {
    const [mode, setMode] = useState<string>('dark');

    const handleModeChange = () => {
        if (mode === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);

    return (
    <div className={`main-container ${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Navigation parentToChild={{mode}} modeChange={handleModeChange}/>
        <Main/>
        <AnimatedSection animation="fade-up" delay={0}>
            <Expertise/>
        </AnimatedSection>
        <AnimatedSection animation="fade-left" delay={0}>
            <Timeline/>
        </AnimatedSection>
        <AnimatedSection animation="fade-up" delay={0}>
            <Project/>
        </AnimatedSection>
        <AnimatedSection animation="fade-right" delay={0}>
            <Contact/>
        </AnimatedSection>
        <Footer />
    </div>
    );
}

export default App;