import Image from "next/image";

export default function Home() {
  console.log('Hello from the home component!');
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl">Welcome to the next way of NEXT </h1>

        <ul>
          <li>Item 01</li>
          <li>Item 02</li>
          <li>Item 03</li>
          <li>Item 04</li>
          <li>Item 05</li>
        </ul>
      </main>
    </div>
  );
}
