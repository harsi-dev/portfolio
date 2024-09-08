import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Harsimranjit Dhaliwal&apos;s Portfolio</title>
        <meta name="description" content="Harsimranjit Dhaliwal's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className="flex flex-row items-center justify-center space-x-6 ">
          <div className="align-middle justify-center">
            <img
              className="w-24 rounded-2xl m-4 mx-auto"
              src="/images/headshot.jpeg"
              alt=""
              width="384"
              height="512"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl  text-center text-white">
              Harsimranjit Dhaliwal
            </h1>
            <h2 className="text-xl  text-center text-white ">
              Technology Enthusiast
            </h2>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center pt-4 space-x-2">
          <a
            href="
                https://www.linkedin.com/in/harsimran-d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
              width="32"
              height="32"
              focusable="false"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>

          <a
            href="
              https://www.github.com/harsimran-d/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="32"
              aria-hidden="true"
              version="1.1"
              width="32"
              focusable="false"
              viewBox="0 0 16 16"
              data-supported-dps="24x24"
              fill="currentColor"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </a>
          <a
            href="https://x.com/harsimran_d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="32"
              aria-hidden="true"
              version="1.1"
              width="32"
              focusable="false"
              viewBox="0 0 24 24"
              data-supported-dps="24x24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </a>
          <a
            href="https://hdyadu.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              height="32"
              aria-hidden="true"
              version="1.1"
              width="32"
              focusable="false"
              viewBox="0 20 160 120"
              data-supported-dps="24x24"
              fill="currentColor"
            >
              <path d="M0 80l0-80 80 0 80 0 0 80 0 80-80 0-80 0 0-80zm30 30c0-11 7-20 15-20 8 0 15 9 15 20 0 11 5 20 10 20 6 0 10-22 10-50 0-27-4-50-10-50-5 0-10 9-10 20 0 11-7 20-15 20-8 0-15-9-15-20 0-11-4-20-10-20-5 0-10 23-10 50 0 28 5 50 10 50 6 0 10-9 10-20zm108 8c7-7 12-24 12-38 0-30-17-50-42-50-15 0-18 9-18 50 0 41 3 50 18 50 10 0 23-5 30-12zM114.34 99.171A1 1 0 00114.542 64.298M115.109 99.171 114.724 64.184" />
            </svg>
          </a>
        </div>
      </main>
    </>
  );
}
