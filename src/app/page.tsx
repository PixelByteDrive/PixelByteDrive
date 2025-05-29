import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div id="Background" className="z-0">
      {/* Introductory Hero Section */}
      <div className="bg-[url(/backgrounds/background1.jpg)] bg-fixed min-h-screen justify-center">
        <div className="p-32 flex gap-6 bg-linear-to-t from-black/0 to-black/100 flex-col min-h-screen justify-center">
          <h1 className="text-5xl text-center font-black" id="IntroText">What&apos;s up?</h1>
        </div>
      </div>
      {/* Some Info Section */}
      <div className="p-24 flex gap-6 flex-col min-h-3/4 justify-center">
        <p className="text-2xl">The real world calls me <b className="font-black">Killian</b> (he/him btw), but online I prefer to be called <b className="font-black">Pixel</b>.</p>
        <p className="text-2xl">After all, I&apos;m just a guy who does all sorts of things. I like to fiddle with things and build profound experiences.</p>
      </div>
      {/* Current Ventures Section */}
      <div className="p-16 flex gap-8 flex-col min-h-96 justify-center">
        <h1 className="text-5xl">My current adventures</h1>
        {/* React */}
        <div className="border-1 border-gray-800 rounded-2xl flex p-8 gap-6 items-center">
          <Image src="/icons/react.png" width={96} height={96} alt="React logo"/>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">React</h1>
            <h1 className="text-xl inline">Recently as part of a project at onPoint I am currently exploring React (with Next.JS). It is a lifesaver for backend and frontend programming as I no longer have to figure out how to tie the two together. Alongside with this, I am also learning Tailwind which has been a breeze. Did you know this site was written entirely with Tailwind and Next.JS?</h1>
          </div>
        </div>
        {/* Swift */}
        <div className="border-1 border-gray-800 rounded-2xl flex p-8 gap-6 items-center">
          <Image src="/icons/swift.png" width={96} height={96} alt="Swift logo"/>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Swift</h1>
            <h1 className="text-xl">Swift is an incredibly impressionable language to me and I am excited to explore what it has to offer as a segue to learning actual compiled languages. Often times, people may say that it is only for Apple platforms, but now that it&apos;s become universal it&apos;s much more useful than ever!</h1>
          </div>
        </div>
      </div>
      {/* Skills Section */}
      <div className="p-16 flex gap-8 flex-col min-h-96 justify-center">
        <h1 className="text-5xl">What do I use?</h1>
        <h1 className="text-3xl font-bold">A lot, actually. Let&apos;s take a look!</h1>
        {/* List */}
        <div className="grid grid-cols-4 sm:grid-cols-6 xl:grid-cols-12 gap-8">
          <Image src={"/icons/nodejs.png"} alt="NodeJS logo" width={48} height={48}/>
          <Image src={"/icons/lua.png"} alt="Lua logo" width={48} height={48}/>
          <Image src={"/icons/git.png"} alt="Git logo" width={48} height={48}/>
          <Image src={"/icons/mongodb.svg"} alt="MongoDB logo" width={48} height={48}/>
          <Image src={"/icons/craft.svg"} alt="Craft Documents logo" width={48} height={48}/>
          <Image src={"/icons/vscode.png"} alt="Visual Studio Code logo" width={48} height={48}/>
          <Image src={"/icons/figma.png"} alt="Figma logo" width={48} height={48}/>
          <Image src={"/icons/rbxstudio.png"} alt="Roblox Studio logo" width={48} height={48}/>
          <Image src={"/icons/ae.png"} alt="After Effects logo" width={48} height={48}/>
          <Image src={"/icons/pr.png"} alt="Premiere Pro logo" width={48} height={48}/>
          <Image src={"/icons/ps.png"} alt="Photoshop logo" width={48} height={48}/>
          <Image src={"/icons/ai.png"} alt="Illustrator logo" width={48} height={48}/>
        </div>
      </div>
      {/* Find Me Section */}
      <div className="p-16 flex gap-8 flex-col min-h-96 justify-center">
        <h1 className="text-5xl">Where can you find me?</h1>
        {/* onPoint */}
        <div className="border-1 border-gray-800 rounded-2xl flex p-8 gap-6 items-center">
          <Image src="/icons/OPserverlogo.webp" width={96} height={96} className="rounded-3xl" alt="Server logo"/>
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">onPoint</h1>
            <h1 className="text-xl">Leading technology services group that powers thousands of Roblox users with convenient tools to create more possibilities with ease.</h1>
          </div>
        </div>
      </div>

      <div className="p-16 py-40 flex gap-8 flex-col min-h-96 justify-center">
        <h1 className="text-5xl">Sorry, but...</h1>
        <h1 className="text-2xl">At this time, I am not publicly looking to be hired for any commissions. I sincerely appreciate your consideration in my work so far and I will continue to post more when I can!</h1>
      </div>
      <div className="p-16 py-40 flex gap-8 flex-col min-h-96 text-center justify-center">
        <h1 className="text-5xl">You&apos;re still here?</h1>
        <h1 className="text-2xl">Perhaps you can come find me elsewhere...</h1>
        <div className="flex justify-center items-center gap-8">
          <Link href="https://bsky.app/profile/pixelbytedrive.xyz">
            <Image src={"/icons/bluesky.png"} alt="Bluesky logo" width={32} height={32}/>
          </Link>
          <Link href="https://github.com/PixelByteDrive">
            <Image src={"/icons/github.png"} alt="Github logo" width={32} height={32}/>
          </Link>
        </div>
      </div>
      <Image src={"/backgrounds/bunnies.gif"} alt="Bunnies bouncing around" className="w-full" width={600} height={50}/>
      <Link href="https://bento.me/pixelbytedrive" className="text-gray-500 underline mt-8 text-center">(Bento)</Link>
      <div className="p-6 z-10 flex gap-4 items-center opacity-50 justify-center w-full max-w-6xl">
        <Image src="./logo.svg" className="flex-none" alt="Site logo" width={24} height={24}/>
        <p>© 2025 pixelbytedrive</p>
      </div>
    </div>
  );
}
