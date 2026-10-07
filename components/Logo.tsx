export default function Logo() {
  return (
    <span className="inline-flex items-center gap-[2px] font-sans font-extrabold text-[26px] tracking-[-0.04em] select-none text-ink">
      c
      <span
        className="inline-block bg-lime text-ink px-[6px] rounded-[6px]"
        style={{ transform: 'skewX(-12deg)' }}
        aria-hidden="true"
      >
        /
      </span>
      n
    </span>
  );
}
