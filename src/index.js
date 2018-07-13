/**
 * Created by antonio on 7/10/18.
 */
import React from 'react';
import { render } from 'react-dom';
import 'typeface-roboto';
import Demo from './dynamic';

const rootElement = document.querySelector('#root');
if (rootElement) {
    render(<Demo />, rootElement);
}