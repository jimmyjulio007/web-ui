import Image from "next/image";


export default function ImageSection() {
    return (
        <div className="relative bg-[#2A2119] flex flex-col gap-8 bg-[#2A2119] py-[80px] px-2 ">
            <div className="relative">
                <Image className="oject-cover w-full h-full rounded-lg" src={"/images/the-quite-one.png"} alt="" width={1550} height={1162} />
                <div className="absolute inset-0 bg-black/40"></div>
                <Image className="absolute inset-x-0 z-20 bottom-0 oject-cover rounded-lg w-full h-screen" src={"/images/person.png"} alt="" fill priority />
            </div>
            <p className="text-[200px] leading-[160px] text-[#FFDA3D] text-center absolute top-[320px] left-[280px] font-sans z-10">The Quite One</p>
            <div className="relative ">
                <Image className="oject-cover w-full h-full rounded-lg" src={"/images/image-2.png"} alt="" width={1550} height={1162} />
                <div className="absolute inset-0 bg-black/40"></div>
                <Image className="absolute inset-x-0 z-20 bottom-0 oject-cover rounded-lg w-full h-screen" src={"/images/person-3.png"} alt="" fill priority />
            </div>
            <p className="text-[200px] leading-[160px] text-[#FFDA3D] text-center absolute top-[1545px] left-[300px] font-sans z-10">The Watcher</p>
            <div className="relative ">
                <Image className="oject-cover w-full h-full rounded-lg" src={"/images/image-3.png"} alt="" width={1550} height={1162} />
                <div className="absolute inset-0 bg-black/40"></div>
                <Image className="absolute inset-x-0 z-20 bottom-0 oject-cover rounded-lg w-full h-screen" src={"/images/person-2.png"} alt="" fill priority />
            </div>
            <p className="text-[200px] leading-[160px] text-[#FFDA3D] text-center absolute top-[2945px] left-[460px] font-sans z-10">The Sellers</p>
        </div>
    )
}