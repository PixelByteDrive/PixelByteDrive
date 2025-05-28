import Image from "next/image";

export default function Home() {
  return (
    <div id="Background">
      {/* Introductory Hero Section */}
      <div className="bg-[url(/backgrounds/background1.jpg)] bg-fixed min-h-screen justify-center">
        <div className="p-32 flex gap-6 bg-linear-to-t from-black/0 to-black/100 flex-col min-h-screen justify-center">
          <h1 className="text-5xl text-center font-black" id="IntroText">What's up?</h1>
        </div>
      </div>
      {/* Some Info Section */}
      <div className="p-24 flex gap-6 flex-col min-h-3/4 justify-center">
        <p className="text-2xl">The real world calls me <b className="font-black">Killian</b>, but online I prefer to be called <b className="font-black">Pixel</b>.</p>
        <p className="text-2xl">After all, I'm just a guy who does all sorts of things. I like to fiddle with things and build profound experiences.</p>
      </div>
      {/* Current Ventures Section */}
      <div className="p-16 flex gap-8 flex-col min-h-96 justify-center">
        <h1 className="text-5xl">My current adventures</h1>
        {/* Lua */}
        <div className="border-1 border-gray-800 rounded-2xl flex p-8 gap-6 items-center">
          <Image src="/icons/lua.png" width={96} height={96} alt="Lua logo"/>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Lua</h1>
            <h1 className="text-xl">A very easy-to-learn language and also one of the first programming languages I got my hands on. I've been experimenting with Lua ever since late 2020 and still use it today.</h1>
          </div>
        </div>
        {/* JavaScript */}
        <div className="border-1 border-gray-800 rounded-2xl flex p-8 gap-6 items-center">
          <Image src="/icons/javascript.png" width={96} height={96} alt="Lua logo"/>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">JavaScript</h1>
            <h1 className="text-xl">Also another very easy-to-learn language, I have been kicking in with JavaScript since 2019 and I am much stronger than ever with the programming language.</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
