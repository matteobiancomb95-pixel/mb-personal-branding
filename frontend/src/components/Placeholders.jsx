import { Logo } from "./Logo";

const CornerTicks = () => (
  <>
    <span className="absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-line-strong" />
    <span className="absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-line-strong" />
    <span className="absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-line-strong" />
    <span className="absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-line-strong" />
  </>
);

export const PortraitFrame = ({ label, note }) => (
  <div
    data-testid="portrait-placeholder"
    className="bg-blueprint relative flex aspect-[4/5] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
  >
    <CornerTicks />
    <div className="opacity-30">
      <Logo size={96} testId="portrait-placeholder-logo" />
    </div>
    <span className="mt-6 rounded-full border border-line-strong px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-mut">
      {label}
    </span>
    <span className="mt-2 text-sm text-mut">{note}</span>
  </div>
);

export const ScreenFrame = ({ label, note }) => (
  <div
    data-testid="nascitara-screen-placeholder"
    className="relative w-full overflow-hidden rounded-2xl border border-line bg-surface shadow-soft"
  >
    <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
      <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
      <span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
      <span className="h-2.5 w-2.5 rounded-full bg-coral" />
      <span className="ml-3 hidden h-5 flex-1 rounded-full bg-alt sm:block" />
    </div>
    <div className="bg-blueprint-fine relative flex aspect-[16/10] flex-col items-center justify-center">
      <CornerTicks />
      <div className="w-2/3 space-y-3 opacity-60">
        <div className="h-3 w-3/4 rounded-full bg-line-strong" />
        <div className="h-3 w-full rounded-full bg-line" />
        <div className="h-3 w-5/6 rounded-full bg-line" />
        <div className="mt-5 h-16 w-full rounded-xl border border-dashed border-line-strong" />
      </div>
      <span className="mt-5 rounded-full border border-coral px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-coral">
        {label}
      </span>
      <span className="mt-2 text-sm text-mut">{note}</span>
    </div>
  </div>
);
