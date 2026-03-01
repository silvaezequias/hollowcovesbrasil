import { Footer } from "./hollow-coves/footer";
import { Header } from "./hollow-coves/header";

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <div className="pt-10">
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
