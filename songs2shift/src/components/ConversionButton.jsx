import React from 'react';
import { ProgressBar } from 'primereact/progressbar';
import { Button } from 'primereact/button';


export default function ConversionButton({ onClick, isConverting }) {
  return (
    // <Button label="Check" icon="pi pi-check" />
    <Button onClick={onClick} disabled={isConverting}>
      {isConverting ? <ProgressBar mode="indeterminate" /> : 'Convert'}
    </Button>
  );
}