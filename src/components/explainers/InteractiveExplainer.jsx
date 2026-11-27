"use client";

import QuantumPositionWidget from './QuantumPositionWidget';
import OxoboraneWidget from './OxoboraneWidget';
import TalhesinWidget from './TalhesinWidget';

export default function InteractiveExplainer({ name }) {
  if (name === 'quantum-position-verification') {
    return <QuantumPositionWidget />;
  }

  if (name === 'stable-oxoboranes') {
    return <OxoboraneWidget />;
  }

  if (name === 'talhesin-chromosome-glue') {
    return <TalhesinWidget />;
  }

  return null;
}
