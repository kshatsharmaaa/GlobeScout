import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "GlobeScout" },
    { name: "Check out country data", content: "Welcome to GlobeScout!" },
  ];
}

export default function Home() {
  return <div className=""> HomePage</div>;
}
