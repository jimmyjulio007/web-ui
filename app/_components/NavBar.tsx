

export default function NavBar() {
    return (
        <nav className="flex flex-wrap items-center gap-2 font-mono px-4 py-3 pb-[890px]">
            <button className="flex-1 min-w-[225px] bg-[#2a21197a] backdrop-blur-xs px-4 py-2 rounded-[4px] uppercase text-[#FFDA3D] text-[12px]">THE GSAP FIELD™</button>
            {NavItems.map((val, i) => (
                <button className="flex-1 px-4 py-2 bg-[#ffffff52] backdrop-blur-xs uppercase rounded-[4px] text-[12px] text-[#FFDA3D]" key={i}>{val}</button>
            ))}
            <button className="flex-1 min-w-[142px] uppercase px-4 py-2 rounded-[4px] backdrop-blur-lg text-[12px] bg-[#FFDA3D]">Get if for free</button>
        </nav>
    )
}

export const NavItems = [
    "base", "makes", "story", "signal"
]