import { useEffect, useRef, useState } from "react";
import { handleScroll } from "utils/handle-scroll";
import Header from "./styles/header-styled";

function DashboardHeader() {
	const [toggleMenu, setToggleMenu] = useState(false);

	let headerRef = useRef(null);

	useEffect(() => {
		document.addEventListener("scroll", () => handleScroll(headerRef));
		return () => document.removeEventListener("scroll", handleScroll);
	}, []);

	return <Header className="sticky-header" ref={headerRef}></Header>;
}

export default DashboardHeader;
