import React from 'react';
import AccordionItem from './accordion-item';

export default function Accordion({ data }) {
    return (
        <div className="mt-4 space-y-5">
            {data.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.recipes.map((recipe, i) => (
                        <li key={i} className="recipe-divider py-3 font-semibold">
                            <a href="">{recipe}</a>
                        </li>
                    ))}
                </AccordionItem>
            ))}
        </div>
    );
}