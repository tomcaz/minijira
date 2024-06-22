import type { Metadata } from "next";
import { Counter } from "./components/counter/Counter";
import RequestForm from "./components/request-form/request";

export default function IndexPage() {
  return <RequestForm />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
