import { getMarkdownData } from "@/lib/markdown";
import MainComponent from "./MainComponent";

const HomePage = async () => {
  const contentHtml = await getMarkdownData("public/tou.md");
  return <MainComponent contentHtml />;
};

export default HomePage;
