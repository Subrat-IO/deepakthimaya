"use client";

import { useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

export function useHydratedReducedMotion() {
  const prefersReducedMotion = useReducedMotion();
  const hydrated = useSyncExternalStore(subscribe, () => true, () => false);

  return hydrated && !!prefersReducedMotion;
}
