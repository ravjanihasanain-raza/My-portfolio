// Glowing red flow lines and a faint dot grid behind the hero.
const lines = [
  'M380 780 C 600 620, 700 780, 900 570 S 1190 300, 1400 390',
  'M540 900 C 760 710, 860 830, 1040 630 S 1270 450, 1400 530',
  'M700 120 C 820 270, 980 110, 1120 240 S 1310 430, 1400 320',
  'M260 520 C 470 570, 560 390, 730 440 S 990 570, 1110 740',
  'M840 30 C 950 170, 1040 50, 1170 140 S 1300 160, 1400 90',
  'M500 310 C 640 390, 700 250, 830 320 S 960 380, 1010 300',
];

const sparks = [
  [610, 487], [1124, 118], [890, 250], [1250, 650], [480, 640], [770, 700], [1010, 90],
];

export default function HeroBackground() {
  return (
    <div className="hero-bg" aria-hidden="true">
      <svg viewBox="0 0 1344 900" preserveAspectRatio="xMaxYMid slice">
        <defs>
          <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ff2d2d" stopOpacity="0" />
            <stop offset=".45" stopColor="#ff3b3b" stopOpacity=".85" />
            <stop offset="1" stopColor="#ff2d2d" stopOpacity="0.1" />
          </linearGradient>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        <g fill="none" stroke="url(#flow)">
          <g filter="url(#glow)" strokeWidth="3" opacity=".55">
            {lines.map((d) => <path key={d} d={d} />)}
          </g>
          <g strokeWidth="1" opacity=".75">
            {lines.map((d) => <path key={d} d={d} />)}
          </g>
        </g>

        <g fill="#ff4d4d">
          {sparks.map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="1.8" opacity=".9" />
          ))}
        </g>
      </svg>
    </div>
  );
}
