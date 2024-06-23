import type { Metadata } from "next";

import "bootstrap/dist/css/bootstrap.min.css"
import RequestForm from "./components/request-form/request";

export default function IndexPage() {
  return <RequestForm />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
