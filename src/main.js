import { getMenu } from "./components/site-menu";
import { getRoute } from "./components/route";
import { getFilters } from "./components/filters";
import { getSorting } from "./components/sorting";
import { getContent } from "./components/content";

const render = (container, text, position) => {
  container.insertAdjacentHTML(position, text);
};

render(document.querySelector(`.trip-main`), getRoute(), `afterbegin`);
render(document.querySelector(`.switch-trip-view`), getMenu(), `afterend`);
render(document.querySelector(`.filter-events`), getFilters(), `afterend`);
render(document.querySelector(`.trip-events`), getSorting(), `afterbegin`);
render(
  document.querySelector(`.trip-events__trip-sort`),
  getContent(),
  `afterend`
);
