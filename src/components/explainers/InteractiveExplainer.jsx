"use client";

import QuantumPositionWidget from './QuantumPositionWidget';
import OxoboraneWidget from './OxoboraneWidget';

export default function InteractiveExplainer({ name }) {
  if (name === 'quantum-position-verification') {
    return <QuantumPositionWidget />;
  }

  if (name === 'stable-oxoboranes') {
    return <OxoboraneWidget />;
  }

  return null;
}
