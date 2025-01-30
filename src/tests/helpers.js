import { render, screen } from '@testing-library/react';
// import { describe, it, expect, vi } from 'vitest';
// import React from 'react';

function getItemById(toRender, id) {
    render(toRender);
    return document.getElementById(id) !== null;
}

export { getItemById };