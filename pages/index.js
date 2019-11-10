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

        <div className="credits">
          Idea by <a href="https://github.com/enenbee" target="_blank">enenbee</a>, Developed by <a href="https://github.com/itzg" target="_blank">itzg</a>
        </div>

        {/*language=css*/}
        <style jsx>{`
          .credits {
            margin-top: 10px;
            opacity: 50%;
          }
        `}</style>
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
