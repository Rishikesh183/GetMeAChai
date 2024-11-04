/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">

        <div className="font-bold text-5xl flex gap-2">
          Buy me a chai
          <span>
            <img src="https://media.tenor.com/2Wu29iaHSYYAAAAi/coffee-lover-hot-coffee.gif" width={36} alt="" />
          </span>
        </div>
        <p>A crowd Funding platform For Creators.Get Funded by your Fans</p>
        <div><button type="button" className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Read More</button>
        </div>

      </div>
      <div>
        <div className="bg-white h-1 opacity-10"></div>
      </div>

      <div className="container text-white mx-auto pb-32 pt-10">
        <h1 className="text-3xl font-bold text-center mb-16">Your fans can buy you a chai</h1>
        <div className="flex justify-around ">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full text-black" width={88} src="https://media.tenor.com/xW37PXdzmsMAAAAi/working-stephen-stotch.gif" alt="man wokring" />
            <p className="fontbold ">Fans want to help</p>
            <p className="fontbold text-center">Your Fans are available to help</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="rounded-full object-cover text-black" width={88} src="https://media.tenor.com/s1dqsQPPpEMAAAAi/moneda.gif" alt="man wokring" />
            <p className="fontbold ">Fans want to help</p>
            <p className="fontbold text-center">Your Fans are available to help</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full text-black" width={88} src="https://media.tenor.com/xW37PXdzmsMAAAAi/working-stephen-stotch.gif" alt="man wokring" />
            <p className="fontbold ">Fans want to help</p>
            <p className="fontbold text-center">Your Fans are available to help</p>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white h-1 opacity-10"></div>
      </div>

      <div className="container text-white mx-auto pb-32 pt-10 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold text-center mb-16">Learn More about us</h2>
        <div><iframe width="560" height="315" src="https://www.youtube.com/embed/ljdQmak8Q-o?si=JJp87Sl_wqHdn6vG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe></div>
      </div>
    </>
  );
}