import Services from "./service";


export default function ScrollSection() {
    return (
        <div className="flex flex-col justify-center gap-[80px] bg-[#EBE8DB] py-[160px]">
            <Services />
            <div className="flex  overflow-x-hidden flex-nowrap overflow w-full justify-center">
                <div className="relative max-w-[934px] shrink-0 h-full flex items-center p-2 gap-">
                    <video
                        className="w-full h-full rounded-[8px] object-cover"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/videos/pop.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo HTML5.
                    </video>
                    <div className="absolute inset-y-0 left-0 flex flex-col justify-between p-8  rounded-[8px] bg-[#FFDA3D] ">
                        <p className="font-sans text-[40px] leading-[40px] ">Popcorn
                            <br />Strategy</p>
                        <p className="font-instru text-xs">They play, but the game is
                            <br />serious. No one knows the
                            <br />rules — and that’s the fun.</p>
                    </div>
                </div>
                <div className="relative max-w-[934px] shrink-0 h-full flex items-center p-2 gap-">
                    <video
                        className="w-full h-full rounded-[8px] object-cover"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/videos/pop.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo HTML5.
                    </video>
                    <div className="absolute inset-y-0 left-0 flex flex-col justify-between p-8  rounded-[8px] bg-[#FFDA3D] ">
                        <p className="font-sans text-[40px] leading-[40px] ">Popcorn
                            <br />Strategy</p>
                        <p className="font-instru text-xs">They play, but the game is
                            <br />serious. No one knows the
                            <br />rules — and that’s the fun.</p>
                    </div>
                </div>
                <div className="relative max-w-[934px] shrink-0 h-full flex items-center p-2 gap-">
                    <video
                        className="w-full h-full rounded-[8px] object-cover"
                        autoPlay
                        loop
                        muted
                    >
                        <source src="/videos/pop.mp4" type="video/mp4" />
                        Votre navigateur ne supporte pas la vidéo HTML5.
                    </video>
                    <div className="absolute inset-y-0 left-0 flex flex-col justify-between p-8  rounded-[8px] bg-[#FFDA3D] ">
                        <p className="font-sans text-[40px] leading-[40px] ">Popcorn
                            <br />Strategy</p>
                        <p className="font-instru text-xs">They play, but the game is
                            <br />serious. No one knows the
                            <br />rules — and that’s the fun.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}