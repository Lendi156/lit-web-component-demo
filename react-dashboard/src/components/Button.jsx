import React from 'react';
import { createComponent } from '@lit/react';
import { CyberpunkButton } from "@edts/cyberpunk-ui/cyber-button"

export const CyberpunkButtonComponent = createComponent({
  tagName: 'cyberpunk-button',
  elementClass: CyberpunkButton,
  react: React,
  events: {
    onClick: 'click',
  },
});