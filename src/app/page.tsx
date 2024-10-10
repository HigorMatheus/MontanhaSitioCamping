import { Logo } from "@/components/Logo";
import Image from "next/image";

export default function Page() {
	return (
		<>
			<header className="bg-zinc-300 flex items-center justify-center w-full h-12">
				<div className="w-11/12 flex mx-auto max-w-screen-xl">
					<p>MS</p> <Logo className="h-10" />
				</div>
			</header>
			<Image
				src="https://instagram.fcgh22-1.fna.fbcdn.net/v/t51.29350-15/450110209_466029606161277_3211593287913457017_n.jpg?stp=dst-jpegr_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuaGRyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fcgh22-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=pQrG0z33IDgQ7kNvgFfu2tS&_nc_gid=5ec290f22fcf487e807f51a673befce2&edm=AA5fTDYBAAAA&ccb=7-5&ig_cache_key=MzQwNjk1MTY5MTY0MjUzODIyOA%3D%3D.3-ccb7-5&oh=00_AYDy1Yy3ZDk5IjuaqUkdwFHRFsvFlldRcHLM2K3nm_rTZg&oe=670D98EA&_nc_sid=7edfe2"
				alt=""
				className="w-96 h-96"
				width={384}
				height={384}
			/>
		</>
	);
}
