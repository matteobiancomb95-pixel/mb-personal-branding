export const Marquee = ({ items }) => {
  const doubled = [...items, ...items];
  return (
    <div className="marquee border-y border-line py-5" aria-hidden="true" data-testid="editorial-marquee">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-mut">
              {item}
            </span>
            <span className="mx-14 inline-block h-1.5 w-1.5 rotate-45 bg-sage" />
          </span>
        ))}
      </div>
    </div>
  );
};
