import { v4 as uuid } from "uuid";
import {
  HomePage,
  AboutPage,
  ClickerCounterPage,
  SpinnerPage,
  TSReviewPage,
 } from "../pages";

export const projectList = [
  {
    id: uuid(),
    title: "Home Page",
    path: "/",
    component: HomePage
  },
  {
    id: uuid(),
    title: "About Page",
    path: "/about",
    component: AboutPage
  },
  {
    id: uuid(),
    title: "Clicker Counter",
    path: "/clickercounter",
    component: ClickerCounterPage
  },
  {
    id: uuid(),
    title: "Spinner",
    path: "/spinner",
    component: SpinnerPage
  },
  {
    id: uuid(),
    title: "TS Review",
    path: "/tsreview",
    component: TSReviewPage
  },
]