'use client';

import { useSyncExternalStore } from 'react';

const listeners = new Set<() => void>();

// Add a single scroll listener
const subscribe = (callback: () => void) => {
  if (listeners.size === 0) {
    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  listeners.add(callback);

  return () => {
    listeners.delete(callback);
    if (listeners.size === 0) {
      window.removeEventListener('scroll', handleScroll);
    }
  };
};

const handleScroll = () => {
  // Notify all subscribers that a scroll event occurred
  for (const callback of listeners) {
    callback();
  }
};

export const useScrolled = (threshold = 10) =>
  useSyncExternalStore(
    subscribe,
    () => window.scrollY > threshold,
    () => false,
  );

export const useScrollProgress = () =>
  useSyncExternalStore(
    subscribe,
    () =>
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) *
      100,
    () => 0,
  );

export const useActiveSection = (elements: HTMLElement[]) =>
  useSyncExternalStore(
    subscribe,
    () => {
      let activeSection: string | undefined = undefined;

      for (const element of elements) {
        if (element.offsetTop <= window.scrollY + window.innerHeight / 2) {
          activeSection = element.id;
        }
      }

      return activeSection;
    },
    () => undefined,
  );
