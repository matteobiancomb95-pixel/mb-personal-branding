export const FlowLine = ({ coral = false }) => (
  <div className="wrap" aria-hidden="true" data-testid={coral ? "flow-line-nascitara" : "flow-line-hero"}>
    <div className="flex items-center gap-0 py-6 lg:py-8">
      <span
        className="h-[7px] w-[7px] shrink-0 rounded-full border-2"
        style={{ borderColor: "var(--brand)" }}
      />
      <div
        className="relative h-px flex-1"
        style={{
          background: coral
            ? "linear-gradient(90deg, var(--brand), var(--coral))"
            : "linear-gradient(90deg, var(--brand), var(--sage))",
        }}
      >
        <span className={`flow-dot${coral ? " flow-dot--coral" : ""}`} />
      </div>
      <span
        className="h-[7px] w-[7px] shrink-0 rounded-full"
        style={{ background: coral ? "var(--coral)" : "var(--sage)" }}
      />
    </div>
  </div>
);
