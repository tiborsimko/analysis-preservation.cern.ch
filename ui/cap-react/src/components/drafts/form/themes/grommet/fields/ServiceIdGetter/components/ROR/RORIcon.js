import React from "react";
import PropTypes from "prop-types";
import SVGIcon from "grommet/components/SVGIcon";

const RORIcon = ({ size = "small" }) => (
  <SVGIcon
    size={size}
    viewBox="0 0 229.82 75.17"
    version="1.1"
    type="logo"
    a11yTitle="ROR"
  >
    <path
      style={{ fill: "#53BAA1" }}
      d="M184.41 10.2L173.09 27.5499L161.76 10.2H184.41Z"
    />
    <g>
      <path
        style={{ fill: "#53BAA1" }}
        d="M161.76 67.0299L173.09 49.6799L184.41 67.0299H161.76Z"
      />
      <path
        style={{ fill: "#53BAA1" }}
        d="M221.49 10.2L210.17 27.5499L198.84 10.2H221.49Z"
      />
      <path
        style={{ fill: "#53BAA1" }}
        d="M198.84 67.0299L210.17 49.6799L221.49 67.0299H198.84Z"
      />
      <path
        style={{ fill: "#202826" }}
        d="M148.89 37.69C150.98 34.88 152.02 31.47 152.02 27.46C152.02 24.14 151.44 21.37 150.29 19.15C149.14 16.93 147.59 15.16 145.63 13.85C143.68 12.54 141.4 11.6 138.81 11.04C136.21 10.48 133.47 10.2 130.58 10.2H108.6V27.77C108.42 27.26 108.23 26.75 108.03 26.25C106.51 22.56 104.38 19.41 101.65 16.82C98.92 14.22 95.68 12.23 91.94 10.84C88.19 9.45 84.1 8.75 79.66 8.75C75.22 8.75 71.12 9.45 67.38 10.84C63.63 12.23 60.4 14.23 57.67 16.82C55.21 19.16 53.27 21.97 51.79 25.19C51.58 22.86 
        51.04 20.84 50.17 19.14C49.02 16.92 47.47 15.15 45.51 13.84C43.56 12.53 41.28 11.59 38.69 11.03C36.09 10.47 33.35 10.19 30.46 10.19H8.45001V67.02H20.97V44.31H27.15L39.03 67.03H54.04L39.59 43.03C43.6 42.28 46.65 40.5 48.74 37.69C48.84 37.56 48.92 37.42 49.01 37.29C49 37.73 48.98 38.17 48.98 38.61C48.98 43.16 49.74 47.28 51.27 50.97C52.8 54.66 54.92 57.81 57.65 60.4C60.38 63 63.62 64.99 67.36 66.38C71.11 67.77 75.2 68.47 79.64 68.47C84.08 68.47 88.17 67.77 91.92 66.38C95.66 64.99 98.9 63 101.63 60.4C104.36 57.8 106.49 54.66 108.01 50.97C108.22 50.47 108.41 49.96 108.58 49.45V67.02H121.1V44.31H127.28L139.16 67.03H154.17L139.72 43.03C143.76 42.28 146.81 40.5 148.89 37.69ZM37.87 30.99C37.2 31.85 36.36 32.48 35.34 32.88C34.32 33.28 33.19 33.52 31.93 33.6C30.67 33.68 29.48 33.72 28.36 33.72H20.98V20.79H29.17C30.29 20.79 31.44 20.87 32.62 21.03C33.8 21.19 34.84 21.5 35.75 21.95C36.66 22.41 37.41 23.06 38 23.92C38.59 24.78 38.88 25.93 38.88 27.37C38.87 28.93 38.54 30.13 37.87 30.99ZM96.07 45.96C95.24 48.18 94.05 50.11 92.5 51.74C90.95 53.37 89.09 54.64 86.92 55.55C84.75 56.46 82.33 56.92 79.66 56.92C76.98 56.92 74.56 56.47 72.4 55.55C70.23 54.64 68.37 53.37 66.82 51.74C65.27 50.11 64.08 48.18 63.25 45.96C62.42 43.74 62.01 41.29 62.01 38.62C62.01 36 62.42 33.56 63.25 31.32C64.08 29.07 65.27 27.13 66.82 25.5C68.37 23.87 70.23 22.6 72.4 21.69C74.57 20.78 76.99 20.32 79.66 20.32C82.34 20.32 84.76 20.78 86.92 21.69C89.08 22.6 90.95 23.87 92.5 25.5C94.05 27.13 95.24 29.07 96.07 31.32C96.9 33.57 97.31 36 97.31 38.62C97.31 41.29 96.9 43.74 96.07 45.96ZM138.02 30.99C137.35 31.85 136.51 32.48 135.49 32.88C134.47 33.28 133.34 33.52 132.08 33.6C130.82 33.68 129.63 33.72 128.51 33.72H121.13V20.79H129.32C130.44 20.79 131.59 20.87 132.77 21.03C133.95 21.19 134.99 21.5 135.9 21.95C136.81 22.41 137.56 23.06 138.15 23.92C138.74 24.78 139.03 25.93 139.03 27.37C139.02 28.93 138.69 30.13 138.02 30.99Z"
      />
    </g>
  </SVGIcon>
);

RORIcon.propTypes = {
  size: PropTypes.string
};

export default RORIcon;
