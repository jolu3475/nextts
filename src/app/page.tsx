import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center" style={{height: "100vh"}}>
        <div>
        <div>
          <h1 className="h-auto">Welcome to my channel We are going to learn next.js with TypeScript</h1>
        </div>
        <div className="flex justify-center">
          <Link href={'/home'} className="bg-lime-600 p-5 m-2 rounded-lg">Open the project</Link>
        </div>
        </div>
      </div> 
    </>
  );
}