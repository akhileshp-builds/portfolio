import React from 'react';

/**
 * Stationary Card Surface Component.
 * Provides a clean, stationary card layout across the portfolio with consistent
 * subtle warm box-shadow and border highlight on hover via .glass-panel.
 */
export const TiltCard = ({
  children,
  className = '',
  maxTilt,
  glare,
  style = {},
  onClick,
  ...rest
}) => {
  return (
    <div
      onClick={onClick}
      className={`glass-panel ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
};
