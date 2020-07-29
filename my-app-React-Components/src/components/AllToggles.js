import { useState } from 'react';

export function ToggleStateAdd(initialVal = false) {
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState(!state);
    };
    return [state, toggle];
};

export function ToggleStateDesc(initialVal = false) {
    const [isDescription, setState] = useState(initialVal);

    const toggle = () => {
        setState(!isDescription);
    };
    return [isDescription, toggle];
};

export function ToggleStateEdit(initialVal = false) {
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState(!state);
    };
    return [state, toggle];
};

export function ToggleStateSearch(initialVal = false) {
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState(!state);
    };
    return [state, toggle];
};
