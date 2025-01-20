import { createMemo, createSignal, For, onMount } from "solid-js";
import "./App.css";
import { Element } from "./Element";

const flowOptions = [
  "row",
  "row dense",
  "column",
  "column dense",
  "dense",
] as const;
type FlowOptions = (typeof flowOptions)[number];

function App() {
  const [columns, setColumns] = createSignal(4);
  const [minSize, setMinSize] = createSignal(10);
  const [gap, setGap] = createSignal(2);
  const [flow, setFlow] = createSignal<FlowOptions>("row");

  let resizer: HTMLDivElement | undefined;

  const stylesheet = new CSSStyleSheet({});

  const breakPoint_1x = createMemo(() => 2 * gap() + minSize());

  stylesheet.insertRule(`
    @container auto-grid (width < ${breakPoint_1x()}rem) {
        .item {
            --item-c-span: 0;
            --item-r-span: 1;

             filter: hue-rotate(120deg);
        }
    }
    `);
  onMount(() => {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];
  });

  return (
    <main>
      <div class="config">
        <label>
          <input
            id="auto-grid-max-columns"
            type="range"
            min={1}
            max={10}
            step={1}
            onInput={(ev) => setColumns(ev.currentTarget.valueAsNumber)}
          />
          max-columns
        </label>
        <label>
          <input
            id="auto-grid-min-size"
            type="range"
            min={1}
            max={10}
            step={1}
            onInput={(ev) => setMinSize(ev.currentTarget.valueAsNumber)}
          />
          min-size
        </label>
        <label>
          <input
            id="auto-grid-gap"
            type="range"
            min={0}
            max={5}
            step={0.5}
            onInput={(ev) => setGap(ev.currentTarget.valueAsNumber)}
          />
          gap
        </label>

        <fieldset>
          <legend>flow</legend>
          <For each={flowOptions}>
            {(option) => (
              <label>
                <input
                  name="flow"
                  id="auto-grid-gap"
                  type="radio"
                  checked={option === flow()}
                  value={option}
                  onInput={(ev) =>
                    setFlow(ev.currentTarget.value as typeof option)
                  }
                />
                {option}
              </label>
            )}
          </For>
        </fieldset>
      </div>

      <div class="resize" ref={resizer}>
        <div
          class="auto-grid"
          style={{
            "--auto-grid-max-columns": `${columns()}`,
            "--auto-grid-min-size": `${minSize()}rem`,
            "--auto-grid-gap": `${gap()}rem`,
            "--auto-grid-flow": `${flow()}`,
          }}
        >
          <Element />
          <Element />
          <Element />
          <Element columns={2} rows={2}>
            <p class="self-start">
              Quis enim duis ex. Duis nulla voluptate veniam incididunt occaecat
              Lorem elit nulla do Lorem nulla sint et. Aute mollit aliqua irure
              anim. Anim mollit do reprehenderit eiusmod magna eu id excepteur
              eu nisi cupidatat Lorem eiusmod do. Non est officia enim irure
              consectetur in ut. Reprehenderit elit esse culpa id labore veniam
              eu cillum irure duis aliquip sunt proident nulla labore. In aute
              eu commodo aliqua nostrud nostrud labore eiusmod ut culpa enim in
              minim. Do consequat cupidatat eu esse Lorem Lorem incididunt elit
              commodo do esse irure voluptate non. Reprehenderit elit esse culpa
              id labore veniam eu cillum irure duis aliquip sunt proident nulla
              labore. In aute eu commodo aliqua nostrud nostrud labore eiusmod
              ut culpa enim in minim. Do consequat cupidatat eu esse Lorem Lorem
              incididunt elit commodo do esse irure voluptate non.
            </p>
          </Element>
          <Element>
            <p>ipsum</p>
          </Element>
          <Element>
            <p>sit</p>
          </Element>
          <Element>
            <p>amet</p>
          </Element>
          <Element>
            <p>consetetur</p>
          </Element>
          <Element>
            <p>sadipscing</p>
          </Element>
          <Element>
            <p>elitr</p>
          </Element>
        </div>
      </div>
    </main>
  );
}

export default App;
