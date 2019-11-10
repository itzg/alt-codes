import Head from "next/head";
import AltCodes from "../components/AltCodes";

function Home() {
  return (
      <main>

        <Head>
          <title>Alt Codes</title>
        </Head>

        <div>
          <AltCodes/>
        </div>

        <div>
          Idea by enenbee, Developed by itzg
        </div>

        {/*language=css*/}
        <style global jsx>{`
          body {
            font-family: sans-serif;
          }
        `}</style>
      </main>
  )
}

export default Home;
