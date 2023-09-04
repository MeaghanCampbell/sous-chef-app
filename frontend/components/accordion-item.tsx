'use client'

import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

const duration = 400;

const defaultStyle = {
    transition: `max-height ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
    maxHeight: 0,
    overflow: 'hidden',
    opacity: 0,
};

const transitionStyles = {
    entering: { maxHeight: '2000px', opacity: 1 },  // you can increase 1000px if you think content can be larger
    entered:  { maxHeight: '2000px', opacity: 1 },
    exiting:  { maxHeight: 0, opacity: 0 },
    exited:   { maxHeight: 0, opacity: 0 },
};

export default function AccordionItem({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center bg-white rounded-xl px-5 py-3 w-full shadow-md transition">
                <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={`w-4 mr-3 arrow-icon ${isOpen ? 'rotated' : ''}`}viewBox="0 0 24 14.66"><path d="m12,8.96L4,.96C3.14.09,1.73.09.86.96h0C0,1.83,0,3.23.86,4.1l9.66,9.66c.82.82,2.14.82,2.96,0l9.66-9.66c.87-.87.87-2.27,0-3.14h0c-.87-.87-2.27-.87-3.14,0l-8,8Z"/></svg>
                <h2 className="font-semibold text-xl">{title}</h2>
            </button>
            <Transition in={isOpen} timeout={duration}>
                {state => (
                    <ul style={{
                        ...defaultStyle,
                        ...transitionStyles[state]
                    }}>
                        {children}
                    </ul>
                )}
            </Transition>
        </div>
    );
}