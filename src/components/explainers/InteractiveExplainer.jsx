"use client";

import QuantumPositionWidget from './QuantumPositionWidget';

export default function InteractiveExplainer({ name }) {
  if (name === 'quantum-position-verification') {
    return <QuantumPositionWidget />;
  }

  return null;
}
