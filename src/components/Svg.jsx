export default function Svg({ src, className = "", width = '24px', height = '24px' }) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={src} width={'100%'} height={'100%'} />
    </svg>
  );
}