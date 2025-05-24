import CustomCursor from "../components/CustomCursor";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import ScrollUp from "../sections/ScrollUp";

const MainLayout = ({ children, isHovering, setIsHovering, cursorText }) => {
  return (
    <main className="relative">
      <CustomCursor
        isHovering={isHovering}
        setIsHovering={setIsHovering}
        cursorText={cursorText}
      />
      <Header />
      {children}
      <Footer />
      <ScrollUp />
    </main>
  );
};

export default MainLayout;
