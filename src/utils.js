/* global window */
/* eslint-disable import/prefer-default-export */
export const isDOMReady =
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement;
