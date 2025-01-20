import { createSignal, ParentComponent } from "solid-js";

export type ElementProps = {
  columns?: number;
  rows?: number;
  keepAspect?: boolean;
};

export const Element: ParentComponent<ElementProps> = (initialProps) => {
  const [columns, setColumns] = createSignal(initialProps.columns || 1);
  const [rows, setRows] = createSignal(initialProps.rows || 1);
  const [keepAspect, setKeepAspect] = createSignal(
    initialProps.keepAspect || false,
  );

  return (
    <div
      class={`item span-c-${columns()} span-r-${rows()}`}
      classList={{ "keep-aspect": keepAspect() }}
      tabIndex={0}
    >
      <div class="controls">
        <label>
          aspect
          <input
            type="checkbox"
            checked={keepAspect()}
            onInput={() => setKeepAspect((v) => !v)}
          />
        </label>
        <label>
          columns
          <input
            type="number"
            value={columns()}
            min={1}
            max={10}
            step={1}
            onInput={(ev) => setColumns(ev.currentTarget.valueAsNumber)}
          />
        </label>
        <label>
          rows
          <input
            type="number"
            value={rows()}
            min={1}
            max={10}
            step={1}
            onInput={(ev) => setRows(ev.currentTarget.valueAsNumber)}
          />
        </label>
      </div>
      <div class="content">{initialProps.children}</div>
    </div>
  );
};
