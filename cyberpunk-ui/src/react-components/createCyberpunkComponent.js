import React from 'react'
import { createComponent } from '@lit/react'

export const createCyberpunkComponent = (elementClass, tagName, events = {}) =>
  createComponent({
    react: React,
    tagName,
    elementClass,
    events,
  })
