import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Hello</h1>
            <p className="description">Wellcome to my profile site</p>

            <Link href="/contact">
              <a className="cta">Contact</a>
            </Link>
          </div>

          <div className="image-wrapper">
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="750px"
              height="750px"
              viewBox="0 0 2028.000000 1152.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <metadata>
                Created by potrace 1.16, written by Peter Selinger 2001-2019
              </metadata>
              <g
                transform="translate(0.000000,1152.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M6990 10415 l0 -375 370 0 370 0 0 375 0 375 -370 0 -370 0 0 -375z
m720 310 l0 -35 -350 0 -350 0 0 35 0 35 350 0 350 0 0 -35z m0 -70 c0 -13
-46 -15 -350 -15 -304 0 -350 2 -350 15 0 13 46 15 350 15 304 0 350 -2 350
-15z m-390 -320 l0 -275 -155 0 -155 0 0 275 0 275 155 0 155 0 0 -275z m390
180 l0 -95 -182 2 -183 3 -3 93 -3 92 186 0 185 0 0 -95z m0 -140 l0 -25 -185
0 -185 0 0 25 0 25 185 0 185 0 0 -25z m0 -180 l0 -135 -185 0 -185 0 0 128
c0 71 3 132 7 135 3 4 87 7 185 7 l178 0 0 -135z"
                />
                <path
                  d="M15577 10722 c-12 -13 -16 -33 -13 -70 l3 -51 -74 -22 c-77 -23 -95
-35 -72 -50 10 -6 10 -9 2 -9 -13 0 -37 36 -38 57 0 6 -10 23 -22 37 -34 38
-66 33 -141 -21 -124 -91 -132 -109 -87 -175 14 -20 25 -41 25 -46 0 -5 -16
-30 -36 -56 -27 -36 -33 -50 -25 -60 9 -10 -3 -10 -55 2 -93 23 -109 13 -145
-98 -44 -131 -38 -159 41 -180 44 -12 44 -13 54 -55 5 -23 4 -27 -5 -15 -8 12
-9 7 -5 -20 4 -19 11 -39 18 -45 8 -7 9 -4 5 13 -3 12 -1 22 5 22 5 0 8 -9 6
-20 -2 -12 -7 -19 -12 -18 -5 2 -12 -7 -17 -19 -5 -14 -22 -26 -48 -33 -78
-21 -86 -50 -45 -170 36 -108 44 -117 96 -115 64 3 70 4 62 16 -5 8 -1 8 13 0
11 -6 24 -7 28 -3 5 4 5 2 2 -4 -8 -14 41 -86 53 -79 6 4 7 -1 3 -11 -4 -12
-3 -15 5 -10 21 13 12 -18 -18 -63 -17 -25 -28 -51 -25 -59 3 -7 5 -20 5 -27
0 -14 69 -62 83 -57 4 1 7 -4 7 -11 0 -15 35 -38 52 -33 7 1 10 1 5 -1 -4 -3
-4 -9 -1 -14 3 -6 11 -5 20 2 12 10 13 9 8 -5 -5 -12 0 -16 20 -16 32 0 89 57
81 80 -4 8 -3 11 1 7 4 -4 13 -2 21 4 8 7 13 8 13 1 0 -5 29 -18 65 -28 63
-18 85 -38 76 -69 -11 -39 -9 -57 9 -75 21 -21 56 -28 44 -9 -4 8 0 7 15 0 34
-19 181 -11 202 10 19 19 24 89 6 89 -27 0 33 39 83 55 30 9 60 18 66 21 7 3
25 -13 40 -35 40 -56 72 -61 132 -22 73 48 85 59 77 71 -5 8 -11 7 -23 -2 -15
-12 -16 -11 -3 5 11 14 17 15 28 5 11 -9 19 -7 36 12 12 12 15 20 7 16 -9 -5
-8 -2 3 7 23 19 22 38 -8 82 -16 23 -23 44 -20 56 6 18 -9 27 -18 12 -2 -5 -2
-3 -1 4 6 23 -13 22 -36 -2 l-22 -24 36 -49 c20 -27 36 -54 36 -58 -1 -11
-144 -114 -159 -114 -6 0 -11 -4 -11 -8 0 -13 -29 -10 -34 4 -3 7 2 10 15 7
11 -3 19 0 19 6 0 7 -4 9 -10 6 -5 -3 -8 0 -5 7 2 7 -8 28 -23 46 l-27 32 -60
-25 c-33 -13 -79 -27 -102 -31 l-43 -6 2 -49 c0 -27 5 -52 10 -55 18 -12 -33
-36 -87 -41 -30 -3 -55 -10 -55 -14 0 -5 -5 -9 -11 -9 -5 0 -7 5 -4 10 4 6 -6
10 -24 10 -35 0 -45 12 -43 56 1 27 -2 32 -16 27 -15 -6 -15 -4 2 15 23 26 15
52 -16 52 -13 0 -59 14 -103 30 -94 35 -89 34 -81 14 3 -9 -1 -25 -9 -37 -8
-12 -15 -17 -15 -11 0 5 5 15 12 22 6 6 9 14 6 17 -3 3 -18 -13 -33 -35 -15
-22 -31 -40 -36 -40 -5 0 -36 19 -69 43 -33 23 -75 50 -93 60 -17 10 -25 16
-17 14 14 -4 71 59 85 94 3 9 -8 31 -28 54 -19 22 -46 60 -62 85 -15 25 -29
46 -30 48 -1 1 -28 -7 -60 -18 -44 -15 -61 -17 -72 -9 -15 13 -18 -2 -3 -17 6
-6 3 -10 -9 -10 -16 0 -17 4 -9 26 7 19 4 43 -13 98 -20 63 -25 71 -35 57 -11
-15 -13 -15 -19 4 -3 11 -1 29 5 38 8 15 9 12 5 -12 -6 -29 -6 -29 7 -7 8 12
17 20 20 17 3 -4 31 1 62 11 l55 17 -4 41 c-9 73 -9 110 -1 149 7 30 5 37 -7
37 -8 0 -17 -3 -20 -7 -2 -5 -3 -3 -1 3 1 7 -15 16 -37 22 -33 8 -40 8 -35 -4
3 -7 0 -16 -6 -20 -6 -4 -8 -3 -5 3 3 5 -3 27 -14 49 -11 21 -14 32 -7 23 12
-15 17 -5 42 72 15 49 29 89 29 89 1 0 30 -9 65 -19 l62 -19 42 61 c23 34 52
73 65 87 23 25 25 47 4 42 -7 -1 -10 2 -6 8 4 6 -5 26 -19 45 -14 18 -26 38
-26 44 0 6 -5 11 -11 11 -5 0 -7 -4 -4 -10 9 -15 -1 -12 -14 4 -10 12 -8 14
14 12 18 -2 45 11 90 45 35 27 70 49 77 49 7 0 28 -23 47 -50 19 -28 35 -50
36 -50 2 0 27 11 57 24 31 14 72 28 92 31 20 4 36 11 36 17 0 5 5 6 10 3 9 -5
13 38 13 127 0 10 3 16 6 13 4 -2 49 -5 99 -6 55 -1 95 -6 100 -13 4 -6 7 -36
7 -66 l0 -55 45 -13 c25 -7 69 -22 98 -34 29 -11 58 -18 65 -15 17 6 81 97 68
97 -5 0 -16 -6 -23 -13 -7 -8 -21 -13 -30 -11 -10 1 -22 -4 -28 -11 -9 -11
-16 -11 -38 1 -15 8 -43 17 -62 20 -19 4 -43 15 -52 25 -20 20 -25 44 -7 34
17 -11 -1 68 -19 83 -11 8 -53 12 -127 12 -95 0 -114 -3 -128 -18z"
                />
                <path
                  d="M16050 10615 c-27 -29 -22 -45 6 -18 23 23 34 23 59 -2 11 -11 47
-40 80 -64 33 -24 62 -46 64 -47 2 -2 -13 -26 -33 -54 -30 -42 -35 -54 -26
-71 6 -11 15 -17 21 -14 5 4 8 3 7 -2 -2 -4 2 -8 7 -8 6 0 9 6 8 14 -1 9 2 10
10 2 7 -7 7 -15 -2 -25 -9 -11 -10 -18 -1 -28 6 -7 18 -22 26 -33 9 -11 12
-14 8 -6 -4 9 -3 12 4 7 6 -4 9 -12 7 -19 -3 -7 2 -20 9 -30 12 -16 19 -17 60
-6 25 6 44 15 41 19 -3 5 4 6 15 3 11 -3 28 1 38 8 15 12 16 12 4 -2 -10 -14
-8 -31 14 -99 14 -45 23 -87 21 -94 -3 -7 -26 -19 -51 -26 -25 -7 -43 -16 -40
-21 3 -5 -1 -6 -9 -3 -11 4 -13 -5 -9 -48 3 -29 10 -56 16 -60 7 -5 7 -8 -3
-8 -9 0 -12 -12 -9 -45 2 -25 -1 -45 -6 -45 -23 0 12 -19 59 -33 43 -12 50
-18 56 -45 4 -17 3 -30 -1 -27 -4 2 -15 -24 -25 -58 -27 -90 -30 -92 -85 -70
-66 27 -65 28 -109 -38 -23 -34 -41 -63 -41 -65 0 -2 9 -8 20 -14 17 -9 25 -3
62 51 33 47 44 56 46 41 4 -24 57 -37 95 -23 25 10 34 28 71 145 31 95 20 118
-67 146 -20 6 -35 16 -32 21 4 5 1 9 -4 9 -6 0 -11 5 -11 11 0 5 4 8 8 5 5 -3
9 21 9 53 1 66 6 81 31 81 9 0 24 5 32 10 13 8 13 11 1 19 -11 7 -9 12 10 22
21 11 22 10 12 -3 -16 -18 -5 -32 14 -17 7 6 13 23 13 38 -1 41 -55 190 -77
213 -18 17 -25 18 -62 8 -23 -6 -48 -13 -56 -16 -8 -4 -22 10 -37 35 -24 43
-34 49 -41 29 -2 -7 -3 -4 -1 6 2 11 -2 26 -8 34 -6 7 -13 30 -14 50 -2 29 -1
32 5 12 l7 -25 15 25 c9 14 15 42 15 62 -1 35 -6 42 -81 98 -92 68 -127 76
-165 35z"
                />
                <path
                  d="M3392 10234 c-17 -35 -27 -45 -40 -41 -156 52 -267 65 -387 48 -198
-29 -360 -112 -488 -250 l-56 -61 -111 55 c-60 30 -112 55 -115 55 -6 0 -125
-237 -125 -250 0 -5 50 -35 111 -66 l111 -55 -6 -32 c-68 -325 47 -637 305
-828 38 -29 69 -55 69 -58 0 -3 -9 -21 -20 -39 -11 -18 -20 -37 -20 -42 0 -5
58 -39 128 -74 l128 -64 66 132 66 132 -133 67 -134 66 -17 -44 c-9 -25 -21
-45 -26 -45 -17 0 -53 23 -106 69 -176 151 -271 395 -242 626 36 286 221 507
505 602 70 23 96 26 205 26 98 0 140 -5 194 -21 38 -12 71 -23 73 -26 2 -2 -5
-22 -16 -45 -12 -22 -21 -43 -21 -46 0 -2 58 -34 130 -70 l130 -65 65 132 c35
73 63 133 62 134 -5 5 -254 124 -258 124 -3 0 -15 -21 -27 -46z m178 -119 c0
-6 -50 -107 -55 -113 -3 -3 -105 46 -114 54 -3 2 8 31 24 63 l28 60 59 -30
c32 -16 58 -32 58 -34z m-1250 -295 c-17 -33 -33 -60 -35 -60 -6 0 -107 50
-113 55 -2 2 11 30 28 64 l30 61 60 -30 60 -30 -30 -60z m550 -1120 c-33 -66
-33 -65 -107 -23 l-42 25 29 59 30 59 60 -30 60 -30 -30 -60z"
                />
                <path
                  d="M5980 10175 c0 -58 3 -105 8 -105 11 0 33 80 26 92 -4 6 -3 8 4 4 6
-3 20 7 31 23 28 39 72 55 155 55 l71 1 3 -37 c2 -22 -1 -38 -7 -38 -8 0 -11
-101 -11 -320 0 -302 -5 -370 -30 -370 -3 0 -15 -6 -25 -14 -17 -12 -16 -13
16 -12 19 1 40 5 47 10 6 4 12 4 12 -1 0 -4 54 -8 120 -8 66 0 120 1 120 2 0
0 -16 10 -35 22 l-35 20 0 377 0 377 71 -6 c88 -7 130 -33 164 -101 14 -28 25
-56 25 -63 0 -7 5 -13 10 -13 7 0 10 39 9 105 l-1 105 -374 0 -374 0 0 -105z"
                />
                <path
                  d="M15615 10237 c-62 -21 -104 -45 -151 -89 -36 -33 -43 -45 -39 -67 4
-21 4 -22 -3 -6 -8 18 -12 15 -32 -25 -12 -24 -23 -64 -24 -87 0 -24 -5 -43
-10 -43 -14 0 3 -117 26 -178 28 -76 116 -162 194 -192 123 -46 241 -34 346
36 112 76 152 155 152 304 0 85 -3 101 -29 155 -17 33 -35 60 -42 60 -6 0 -15
4 -20 9 -5 5 -3 6 5 2 20 -12 13 9 -11 32 -20 19 -62 33 -44 15 4 -3 2 -12 -4
-19 -11 -14 18 -57 33 -48 5 3 7 2 6 -3 -2 -4 2 -9 7 -11 16 -5 45 -34 45 -45
0 -5 -9 1 -20 14 -25 31 -25 19 -1 -23 41 -70 43 -206 5 -281 -30 -57 -102
-123 -166 -152 -54 -24 -70 -27 -137 -23 -94 6 -161 37 -219 104 -135 153 -95
382 86 491 43 26 55 28 147 28 92 0 104 -2 148 -28 50 -30 59 -29 64 2 2 14
-12 25 -58 46 -73 33 -191 43 -254 22z"
                />
                <path
                  d="M9788 10159 c-17 -9 -18 -51 -18 -644 l0 -634 22 -15 c20 -14 106
-16 736 -16 l713 0 -3 63 -3 62 -640 3 c-511 2 -642 5 -653 16 -17 17 -18 772
-1 793 9 11 158 13 805 13 l793 0 15 -22 c13 -19 16 -58 16 -230 l0 -208 75 0
75 0 2 378 c1 415 1 421 -14 439 -14 17 -1893 18 -1920 2z m937 -140 c9 -9 17
-30 17 -47 2 -64 14 -62 -407 -62 -425 0 -409 -3 -403 67 5 63 7 63 415 61
316 -3 364 -5 378 -19z m532 -5 c18 -24 16 -69 -3 -88 -11 -12 -35 -16 -89
-16 -82 0 -105 13 -105 59 0 56 29 72 119 67 48 -3 68 -9 78 -22z m300 1 c17
-23 11 -84 -9 -97 -24 -15 -155 -9 -172 8 -24 24 -20 80 7 99 33 24 154 17
174 -10z"
                />
                <path
                  d="M10814 9625 c-3 -8 -2 -19 2 -26 4 -7 3 -9 -2 -6 -12 7 -10 11 -119
-268 -5 -11 -7 -26 -6 -34 1 -7 -2 -10 -7 -7 -5 3 -15 -14 -22 -37 -8 -23 -18
-48 -23 -55 -7 -9 -6 -11 7 -6 9 3 16 1 16 -6 0 -6 5 -8 10 -5 6 3 10 13 10
20 0 14 39 109 60 147 6 10 10 24 10 32 0 7 12 39 26 70 14 31 22 61 18 67 -4
8 -3 9 4 5 7 -4 12 -1 12 6 0 7 7 26 15 42 9 16 14 35 11 42 -3 7 0 14 7 17 6
2 3 6 -6 10 -11 4 -20 1 -23 -8z"
                />
                <path
                  d="M14335 9593 c-46 -7 -58 -22 -51 -64 6 -37 5 -38 -49 -67 l-54 -30
-28 24 c-16 13 -33 24 -38 24 -14 0 -105 -93 -105 -107 0 -6 13 -22 28 -35
l28 -23 -25 -57 -26 -57 -44 2 c-40 2 -45 0 -52 -26 -4 -15 -9 -49 -11 -75
l-3 -47 42 -9 c41 -8 41 -9 52 -70 10 -53 9 -62 -5 -71 -59 -36 -59 -35 -25
-103 33 -66 44 -71 90 -47 28 14 30 13 75 -31 l46 -45 -16 -30 c-8 -17 -13
-37 -10 -45 5 -14 105 -64 126 -64 6 0 18 16 27 36 14 27 22 34 38 30 11 -3
39 -6 62 -6 42 0 43 -1 49 -41 4 -22 13 -43 22 -46 8 -3 42 1 76 8 l61 15 -2
44 -1 45 56 28 55 28 27 -26 c14 -14 31 -25 36 -25 12 0 104 92 104 105 0 5
-12 21 -26 36 l-26 27 27 56 c27 55 28 56 71 56 48 0 42 -10 59 104 6 38 -6
53 -49 58 -27 3 -30 8 -42 63 -11 53 -11 61 4 72 62 45 59 35 32 92 -13 28
-31 58 -40 66 -16 14 -21 14 -52 -1 l-35 -16 -45 43 -46 43 15 32 c9 18 13 38
11 46 -3 8 -33 26 -67 40 l-62 27 -19 -32 c-11 -18 -21 -35 -22 -38 -2 -4 -31
-2 -65 3 -60 10 -62 12 -70 47 -8 32 -12 36 -43 37 -19 1 -48 -1 -65 -3z m203
-329 c149 -62 189 -255 76 -368 -142 -142 -385 -39 -384 162 1 154 167 265
308 206z"
                />
                <path
                  d="M10536 9501 c-3 -5 -17 -12 -30 -15 -14 -3 -70 -27 -126 -53 -67 -32
-100 -53 -100 -64 0 -18 103 -69 139 -69 12 0 20 -4 17 -9 -3 -5 22 -19 57
-32 34 -13 64 -25 67 -27 3 -1 6 7 7 18 2 24 -47 53 -74 44 -13 -4 -14 -3 -5
3 10 7 -1 16 -39 31 -28 12 -61 22 -72 22 -19 0 -19 1 -2 19 9 11 41 30 71 42
30 13 54 26 54 31 0 4 8 8 18 8 24 1 52 24 52 44 0 17 -25 22 -34 7z"
                />
                <path
                  d="M10920 9491 c0 -13 11 -24 35 -32 19 -7 35 -17 35 -22 0 -4 5 -5 11
-1 6 3 14 2 18 -3 3 -5 30 -21 59 -35 53 -25 53 -25 30 -40 -13 -8 -43 -22
-68 -32 -66 -26 -107 -54 -113 -76 -3 -11 -3 -20 0 -20 15 0 103 44 103 52 0
5 6 8 13 6 6 -2 47 12 90 31 52 23 77 39 77 50 0 17 -57 51 -85 51 -8 0 -15 4
-15 8 0 11 -61 32 -74 25 -6 -3 -8 -2 -3 2 7 8 -76 53 -100 54 -7 1 -13 -8
-13 -18z"
                />
                <path
                  d="M11543 9149 c20 -17 37 -37 37 -45 0 -8 4 -13 9 -10 5 4 7 -3 4 -14
-3 -11 -9 -20 -14 -20 -5 0 -23 -16 -40 -35 -38 -41 -55 -43 -91 -11 -14 14
-29 22 -32 19 -3 -4 -6 0 -6 7 0 7 -2 11 -5 8 -10 -10 16 -106 34 -122 27 -25
93 -44 118 -35 17 6 29 3 50 -15 26 -22 27 -26 14 -50 -8 -14 -16 -24 -19 -21
-2 2 -11 -2 -19 -10 -10 -10 -27 -13 -56 -10 -51 6 -107 -23 -107 -55 0 -11
-4 -20 -10 -20 -5 0 -10 -16 -10 -35 0 -19 3 -35 6 -35 3 0 17 14 31 30 13 17
31 30 39 30 18 0 84 -62 84 -80 0 -7 7 -10 15 -6 8 3 15 1 15 -4 0 -6 -5 -10
-11 -10 -5 0 -24 -15 -40 -32 l-30 -33 27 -3 c66 -9 125 53 120 125 -3 35 2
48 24 73 15 16 31 30 37 30 5 0 50 -40 99 -90 48 -49 93 -90 98 -90 5 0 0 10
-12 23 -30 32 -29 70 4 87 23 13 30 12 57 -4 l32 -18 -20 24 c-27 31 -37 38
-49 31 -5 -3 -6 -1 -2 6 5 7 -16 35 -52 71 l-60 60 28 30 c23 25 36 30 75 30
54 0 101 21 110 50 3 11 11 20 16 20 13 0 11 34 -3 49 -11 10 -10 11 5 5 13
-5 16 -2 11 10 -5 14 -8 14 -29 -2 -12 -9 -32 -30 -44 -47 -12 -18 -21 -24
-21 -14 0 8 -18 32 -40 53 -22 21 -40 46 -40 56 0 10 15 33 32 51 l33 32 -45
-7 c-24 -4 -48 -12 -52 -19 -4 -7 -8 -8 -8 -3 0 15 -30 -16 -30 -31 0 -8 -6
-21 -14 -29 -10 -9 -12 -26 -9 -53 5 -35 2 -44 -25 -71 l-31 -30 -24 26 c-21
22 -24 34 -20 74 4 46 2 50 -40 94 -40 42 -47 46 -93 46 l-49 0 38 -31z"
                />
                <path
                  d="M6367 8982 l-2647 -2 2 -3388 3 -3387 1083 -3 1082 -2 0 -425 0 -425
-441 0 -441 0 -63 -61 c-48 -46 -72 -62 -97 -64 -18 -2 -317 -3 -664 -4 l-631
-1 -144 -113 c-79 -62 -423 -330 -764 -596 -341 -266 -627 -490 -635 -497 -12
-12 1209 -14 8030 -14 l8044 0 -114 118 c-63 64 -337 341 -609 615 l-494 497
-2259 0 -2260 0 60 68 c157 179 232 366 249 628 5 79 3 101 -15 151 -32 90
-78 246 -111 378 -31 126 -81 366 -81 391 0 12 277 14 2033 16 l2032 3 3 2085
c2 1898 1 2089 -14 2135 -36 111 -121 206 -223 247 l-56 23 -3310 3 c-2999 2
-3315 1 -3365 -14 -164 -47 -277 -198 -281 -374 -1 -36 -4 -55 -6 -42 -4 21
-23 32 -23 13 0 -6 -9 -8 -20 -6 -11 2 -20 0 -20 -6 0 -5 -5 -9 -12 -9 -6 0
-26 -11 -44 -25 -18 -14 -37 -25 -43 -25 -6 0 -11 -4 -11 -8 0 -5 -11 -15 -24
-22 -14 -7 -27 -22 -29 -34 -2 -12 -5 473 -6 1076 0 603 -4 1098 -8 1100 -5 2
-1199 2 -2656 0z m1682 -290 c7 -11 9 -11 14 2 9 24 52 20 71 -6 9 -13 13 -16
10 -6 -7 21 49 24 359 20 l227 -3 0 -2122 c0 -1167 -3 -2132 -6 -2143 -7 -26
-43 -44 -89 -44 -31 0 -164 -71 -271 -144 -29 -20 -155 -159 -154 -171 0 -3
-3 -5 -7 -6 -49 -7 -286 -194 -298 -236 -8 -24 -21 -29 -119 -39 -44 -4 -63
-10 -55 -15 11 -7 11 -9 1 -9 -7 0 -11 -4 -8 -9 3 -5 -1 -14 -9 -21 -20 -17
-10 -30 23 -30 15 0 37 -3 48 -6 23 -6 21 -16 -11 -64 -6 -8 -28 -60 -51 -115
l-40 -100 -65 -9 c-35 -5 -59 -11 -52 -13 8 -3 9 -13 2 -36 -5 -18 -9 -33 -9
-34 0 -2 15 -3 33 -4 17 0 39 -3 47 -7 18 -8 25 -32 9 -32 -6 0 -9 -7 -5 -15
4 -12 -3 -15 -32 -16 -56 -2 -77 -11 -80 -39 -2 -14 -11 -31 -20 -37 -13 -11
-9 -13 29 -14 52 -1 75 -9 73 -26 -1 -7 -2 -17 -3 -22 0 -5 -26 -12 -57 -16
-41 -5 -54 -10 -50 -20 3 -8 1 -17 -5 -21 -6 -3 -8 -12 -5 -19 3 -8 -3 -15
-12 -17 -9 -2 11 -7 46 -12 61 -7 62 -8 57 -34 -13 -60 -26 -134 -49 -272 -14
-80 -28 -153 -31 -162 -7 -17 -100 -18 -1756 -18 l-1749 0 0 3085 0 3085 218
3 c119 2 1028 3 2020 2 1491 0 1804 -2 1811 -13z m8171 -3572 l0 -1915 -1917
0 -1917 0 -24 125 c-29 158 -95 415 -139 544 -18 55 -33 105 -33 112 0 26 -93
175 -123 198 -56 41 -268 144 -367 177 -52 17 -153 61 -225 96 -121 61 -241
109 -378 154 -31 10 -76 31 -100 47 -23 16 -74 47 -113 70 -52 30 -80 54 -103
89 -17 27 -42 60 -55 74 -24 27 -65 54 -72 47 -2 -2 3 -60 10 -128 13 -112 12
-128 -4 -184 -41 -141 -108 -272 -194 -376 l-46 -55 0 -85 -1 -85 -112 -118
c-62 -64 -117 -117 -123 -117 -6 0 -55 39 -108 87 l-96 86 0 87 c0 76 -3 89
-21 106 -35 31 -153 184 -204 262 -26 41 -69 120 -97 178 l-50 104 4 120 c1
66 1 120 -2 120 -3 0 -5 30 -5 68 0 54 -10 95 -49 212 -67 200 -76 218 -140
289 -55 63 -74 108 -63 151 3 11 1 23 -5 26 -6 4 -19 27 -30 52 -23 52 -29
197 -10 245 13 32 37 35 52 7 11 -20 69 -203 90 -280 6 -25 19 -56 28 -70 9
-14 24 -43 32 -64 8 -21 32 -53 53 -70 l39 -31 175 0 c202 0 191 -6 239 118
26 64 29 67 60 67 32 0 36 -4 69 -75 20 -41 45 -80 56 -86 40 -21 238 -24 325
-4 43 9 87 22 97 27 22 11 56 83 57 117 0 14 11 36 24 50 19 20 33 62 60 179
20 85 42 166 50 180 7 15 19 70 26 122 6 52 18 122 26 155 18 78 18 166 -1
301 -30 210 -52 249 -208 375 l-49 39 2806 -2 2806 -3 0 -1915z m-5611 1381
c49 -61 79 -138 96 -244 9 -58 26 -118 40 -148 l26 -50 -39 -120 -39 -120
-154 -4 c-168 -3 -362 -32 -400 -59 -34 -23 -114 -21 -149 4 -26 18 -50 21
-259 27 -173 5 -234 3 -245 -6 -18 -15 -18 -16 -55 116 -25 88 -30 117 -21
133 8 14 6 46 -5 120 l-16 100 26 59 c15 33 37 69 49 80 23 21 23 21 92 4 54
-14 112 -18 269 -18 245 0 374 22 507 85 66 32 201 76 240 79 3 1 20 -17 37
-38z m31 -793 c0 -40 -7 -78 -19 -104 -17 -38 -24 -43 -70 -53 -77 -16 -210
-25 -272 -17 -50 6 -57 10 -81 47 -33 51 -46 116 -26 135 8 8 52 21 99 29 116
20 139 22 262 23 l107 2 0 -62z m-697 12 c25 -12 27 -18 27 -69 0 -75 -25
-117 -77 -128 -21 -4 -93 -8 -160 -8 -107 0 -124 3 -144 20 -33 30 -69 114
-69 164 l0 43 198 -4 c135 -3 206 -9 225 -18z m2243 -2596 c68 -32 64 45 64
-1216 0 -1114 -1 -1144 -20 -1175 -10 -17 -28 -37 -39 -42 -14 -8 -644 -11
-2103 -11 -2009 0 -2084 1 -2108 18 -53 40 -51 -12 -50 1192 0 615 3 1134 7
1152 3 18 10 41 15 51 25 48 -63 46 2136 47 1890 0 2067 -1 2098 -16z m-4864
-931 c-12 -2 -20 -9 -17 -14 4 -5 2 -9 -3 -9 -5 0 -10 -11 -11 -25 -1 -14 -2
-33 -3 -42 0 -10 -4 -22 -8 -28 -7 -9 -28 -117 -70 -366 -13 -71 -13 -109 0
-109 6 0 10 -28 10 -64 0 -68 21 -144 46 -162 11 -9 -23 -13 -148 -19 -90 -4
-183 -5 -208 -3 l-45 3 -3 423 -2 422 242 -1 c134 -1 233 -4 220 -6z m4928
-1647 c0 -61 -7 -74 -51 -96 -38 -20 -73 -20 -2111 -20 l-2073 0 -35 21 c-46
28 -50 35 -50 92 l0 47 2160 0 2160 0 0 -44z"
                />
                <path
                  d="M7140 8691 c-20 -6 -25 -13 -23 -38 2 -26 -2 -32 -37 -48 -39 -17
-41 -17 -60 0 -20 18 -22 18 -58 -18 l-37 -37 22 -22 22 -21 -20 -40 c-17 -33
-24 -38 -45 -33 -20 5 -26 2 -34 -19 -6 -15 -10 -39 -10 -55 0 -24 5 -29 27
-32 24 -3 29 -9 35 -43 5 -35 3 -42 -18 -58 l-24 -18 21 -42 c12 -23 23 -43
24 -45 1 -1 14 3 29 9 24 11 29 9 56 -16 17 -16 28 -35 25 -42 -3 -7 -8 -20
-11 -28 -4 -10 8 -21 42 -37 30 -15 48 -19 51 -12 11 33 28 42 68 36 31 -6 40
-13 45 -32 6 -22 11 -25 46 -23 60 4 66 9 59 42 -6 28 -4 30 30 37 19 3 48 4
64 1 23 -5 34 0 62 29 l33 34 -20 21 -21 20 20 41 c17 33 24 39 44 35 27 -5
43 22 43 72 0 23 -5 30 -29 34 -24 5 -29 12 -34 44 -4 32 -1 42 20 59 l25 21
-27 42 c-17 28 -31 41 -41 37 -8 -3 -20 -8 -27 -11 -7 -3 -25 8 -41 24 -23 24
-26 32 -17 49 15 29 15 29 -29 52 -50 25 -54 25 -67 -3 -10 -21 -16 -23 -54
-18 -36 5 -44 10 -49 31 -6 27 -35 35 -80 21z m170 -230 c71 -51 89 -132 45
-207 -77 -130 -278 -72 -278 81 0 58 29 105 83 133 51 26 108 24 150 -7z"
                />
                <path
                  d="M7738 8146 c-34 -8 -36 -12 -31 -38 6 -32 15 -30 -124 -28 -54 1 -94
-3 -98 -9 -4 -8 30 -11 106 -11 95 0 114 3 126 18 10 13 13 13 11 2 -2 -8 -14
-26 -28 -39 -18 -17 -20 -22 -7 -17 11 3 16 2 12 -4 -3 -6 -12 -10 -20 -10 -7
0 -16 -7 -19 -16 -8 -22 -8 -26 4 -19 6 3 10 1 10 -4 0 -6 -9 -11 -21 -11 -11
0 -17 5 -14 10 4 6 -6 10 -22 10 -27 0 -29 -3 -29 -38 0 -31 3 -38 20 -40 11
0 24 4 28 11 6 9 8 9 8 -1 0 -7 4 -10 10 -7 6 4 7 -1 3 -11 -5 -13 -3 -15 7
-9 9 5 11 4 6 -3 -8 -14 10 -52 25 -52 5 0 15 14 21 31 6 16 13 28 15 25 3 -3
-2 -19 -10 -35 -9 -17 -12 -31 -7 -31 5 0 3 -15 -5 -34 -13 -30 -13 -35 2 -40
9 -4 18 -4 21 -1 3 3 -1 5 -9 5 -10 1 -9 4 4 11 12 7 16 17 12 32 -5 17 -4 18
4 7 5 -8 7 -27 4 -44 -4 -19 -3 -27 5 -22 5 3 12 1 14 -6 2 -6 10 3 18 21 11
26 11 34 1 41 -9 5 -10 10 -2 14 6 4 11 2 11 -3 0 -6 10 -11 23 -11 24 0 79
32 79 46 0 5 2 11 4 13 4 4 8 -17 5 -32 -1 -5 3 -6 8 -2 7 4 7 15 0 32 -13 34
3 52 26 29 19 -19 6 -22 -14 -3 -11 10 -12 7 -5 -13 4 -14 7 -33 6 -42 0 -9 5
-21 12 -27 9 -8 18 -3 33 17 21 28 27 42 17 41 -12 -1 -44 50 -44 71 0 11 -4
18 -10 15 -5 -3 -10 -2 -10 4 0 5 5 13 11 17 6 3 9 18 6 33 -4 21 0 30 16 40
22 14 22 14 3 -8 -23 -26 -13 -28 19 -3 15 12 20 23 15 33 -7 12 15 14 151 11
112 -2 159 0 159 8 0 8 -50 10 -170 8 -132 -2 -171 0 -175 10 -4 10 -9 10 -27
0 -13 -7 -27 -11 -32 -10 -5 2 -22 -2 -38 -7 -18 -6 -26 -7 -23 -1 4 6 2 10
-4 10 -5 0 -18 3 -28 6 -15 5 -15 4 -3 -5 13 -9 13 -11 -1 -11 -21 0 -31 11
-20 24 6 7 5 21 -2 36 -11 24 -15 25 -49 16z m121 -170 c6 -38 4 -61 -4 -80
-6 -14 -5 -17 3 -12 8 5 10 1 5 -10 -4 -11 -8 -13 -11 -6 -2 7 -10 12 -18 12
-7 0 -11 -6 -8 -14 3 -7 -3 -16 -13 -20 -15 -6 -15 -8 -3 -16 13 -8 12 -10 -2
-10 -10 0 -18 7 -18 15 0 8 5 15 10 15 6 0 10 5 10 11 0 7 -10 9 -27 5 -19 -4
-23 -4 -14 3 11 7 10 11 -8 20 -15 9 -21 21 -21 46 0 18 5 37 10 40 6 4 8 10
6 14 -3 4 19 7 48 7 45 0 52 -3 55 -20z"
                />
                <path
                  d="M4430 8070 c0 -7 432 -10 1295 -10 844 0 1295 4 1295 10 0 7 -451 10
-1295 10 -863 0 -1295 -3 -1295 -10z"
                />
                <path
                  d="M10891 5802 c-6 -47 -11 -85 -9 -86 2 0 112 0 246 2 l242 3 0 80 0
79 -207 1 c-115 0 -220 1 -234 3 -25 1 -26 -1 -38 -82z"
                />
                <path
                  d="M11430 5800 l0 -80 355 0 c195 0 358 0 361 0 3 0 7 36 7 80 l2 80
-362 0 -363 0 0 -80z"
                />
                <path d="M12220 5798 l0 -83 263 3 263 3 -1 79 0 80 -262 0 -263 0 0 -82z" />
                <path d="M12790 5800 l0 -80 365 0 365 0 0 80 0 80 -365 0 -365 0 0 -80z" />
                <path
                  d="M14320 4447 l0 -1157 665 0 665 0 -2 892 -3 893 -90 63 c-49 34 -116
80 -147 102 -31 22 -63 40 -70 40 -7 0 -32 -51 -58 -116 -24 -64 -48 -118 -51
-120 -4 -2 -17 9 -28 25 -23 32 -27 46 -9 35 7 -4 8 -3 4 5 -4 6 -11 9 -15 7
-8 -5 -56 57 -229 294 -47 63 -88 115 -92 115 -5 0 -42 -33 -83 -72 l-75 -73
-16 -82 c-9 -46 -25 -128 -36 -183 -12 -55 -25 -125 -30 -155 -6 -30 -17 -88
-26 -128 l-16 -73 -40 63 c-22 35 -49 78 -60 96 -11 17 -25 32 -31 31 -7 0
-34 -27 -62 -59 -33 -39 -51 -53 -53 -43 -2 9 2 19 10 24 9 6 9 9 1 9 -9 0
-12 85 -13 357 0 196 -3 359 -5 362 -3 2 -5 -516 -5 -1152z"
                />
                <path
                  d="M10424 5931 c-82 -32 -222 -105 -244 -127 -13 -14 -12 -15 10 -10 14
3 56 11 93 16 41 6 83 20 105 35 49 32 160 68 191 62 32 -6 71 8 71 27 0 35
-133 34 -226 -3z"
                />
                <path
                  d="M9501 5920 c-51 -11 -55 -14 -48 -33 4 -11 30 -16 94 -19 66 -3 104
-11 153 -32 48 -20 88 -28 155 -32 l90 -5 -48 26 c-66 36 -248 95 -305 100
-26 2 -67 0 -91 -5z"
                />
                <path
                  d="M10105 2158 c-7 -20 -115 -496 -115 -508 0 -12 87 -13 95 -1 7 12
115 485 115 505 0 20 -88 23 -95 4z"
                />
                <path
                  d="M9650 2035 c-142 -79 -156 -93 -145 -152 5 -28 17 -38 93 -79 48 -25
111 -60 140 -76 l52 -29 0 59 0 60 -75 41 c-41 23 -75 43 -75 46 0 2 34 22 75
45 l75 41 0 60 c0 32 -1 59 -2 58 -2 0 -64 -33 -138 -74z"
                />
                <path
                  d="M10390 2052 l0 -60 75 -41 c41 -23 75 -44 75 -46 0 -2 -34 -23 -75
-46 l-75 -41 0 -60 0 -60 43 25 c23 13 85 48 139 76 l96 52 4 46 c2 25 -1 51
-7 58 -5 7 -50 34 -100 60 -49 26 -109 59 -132 72 l-43 25 0 -60z"
                />
                <path
                  d="M17967 8332 c-28 -31 -21 -66 23 -112 22 -23 40 -51 40 -60 0 -36
-12 -50 -44 -50 -17 0 -36 -4 -42 -8 -19 -12 -34 -50 -28 -67 4 -10 1 -21 -7
-26 -26 -16 -55 -9 -86 21 -46 45 -82 61 -107 48 -53 -28 -49 -71 12 -130 26
-25 57 -51 69 -57 38 -19 131 -13 174 11 36 20 40 20 57 5 19 -17 18 -19 -4
-64 -29 -57 -31 -120 -5 -171 11 -20 73 -89 138 -153 90 -89 127 -119 158
-128 59 -16 86 -14 141 14 46 23 50 24 66 7 17 -16 16 -20 -7 -66 -44 -88 -25
-167 58 -243 51 -48 77 -53 107 -23 29 29 25 62 -11 96 -45 43 -61 77 -49 108
7 20 17 26 39 26 37 0 61 23 61 60 0 54 59 54 119 0 49 -45 81 -50 111 -20 30
30 24 56 -26 110 -79 84 -175 101 -257 46 l-35 -24 -20 20 -20 20 23 34 c30
45 39 101 25 155 -10 36 -34 67 -133 166 -66 67 -135 129 -153 138 -50 23
-121 19 -173 -11 -44 -25 -45 -25 -64 -5 -20 19 -20 20 2 46 58 75 47 165 -31
251 -55 59 -91 70 -121 36z m436 -526 c112 -109 130 -136 116 -173 -6 -18 -16
-23 -43 -23 -40 0 -72 -35 -63 -69 6 -25 -29 -42 -63 -29 -14 5 -71 56 -128
115 -82 85 -102 112 -100 131 2 14 10 28 18 32 65 30 75 38 78 60 5 33 30 60
56 60 14 0 61 -38 129 -104z"
                />
                <path
                  d="M1370 7469 c-25 -22 -37 -38 -27 -35 11 4 16 2 12 -5 -4 -5 15 -35
42 -67 26 -31 57 -68 68 -81 11 -13 25 -29 30 -35 6 -6 32 -37 58 -69 27 -31
55 -57 63 -57 9 0 12 -5 9 -10 -4 -6 21 -43 55 -83 34 -39 81 -94 104 -121 22
-27 48 -57 56 -66 8 -9 33 -38 55 -65 22 -27 54 -63 72 -81 42 -42 34 -44
-152 -28 -82 7 -150 12 -151 11 -5 -7 -10 -107 -5 -107 3 0 85 -7 181 -15 96
-7 212 -17 258 -21 l82 -6 0 28 c0 16 9 130 20 253 10 124 17 228 15 231 -2 4
-28 8 -58 9 l-54 1 -12 -152 c-8 -110 -16 -156 -26 -164 -8 -6 -12 -14 -8 -17
3 -4 1 -7 -6 -7 -7 0 -9 9 -5 25 5 20 3 24 -10 19 -11 -4 -15 -2 -11 8 3 7
-14 36 -37 64 -24 28 -54 64 -68 81 -14 16 -46 54 -72 84 -26 30 -75 88 -109
129 -34 41 -65 77 -68 80 -4 3 -22 25 -41 50 -19 25 -40 51 -47 58 -6 7 -40
46 -74 87 -34 41 -65 75 -69 75 -4 0 -11 9 -16 20 -9 19 -12 18 -54 -21z"
                />
                <path
                  d="M869 7168 c0 -7 -10 -126 -22 -264 l-22 -252 59 -7 c32 -3 60 -5 61
-3 2 2 9 72 16 156 7 83 16 152 20 152 4 0 86 -93 182 -207 96 -115 187 -221
201 -238 14 -16 81 -96 148 -176 l122 -146 43 35 c24 20 43 40 43 44 0 5 -46
63 -102 129 -57 67 -145 172 -197 233 -51 61 -117 138 -145 172 -28 33 -84
100 -125 148 -40 47 -71 89 -69 92 5 5 273 -14 294 -21 12 -3 24 46 24 96 0
26 0 26 -101 34 -55 4 -115 8 -132 10 -18 2 -68 6 -112 10 -44 3 -104 9 -132
11 -40 4 -53 2 -54 -8z"
                />
                <path
                  d="M18611 4978 c-5 -13 -39 -102 -76 -198 -37 -96 -105 -273 -151 -392
-46 -119 -84 -220 -84 -223 0 -3 16 -5 36 -3 l37 3 158 410 c87 226 159 413
159 418 0 4 -16 7 -35 7 -28 0 -37 -5 -44 -22z"
                />
                <path
                  d="M17943 4683 c-262 -135 -263 -135 -263 -168 0 -31 4 -34 123 -95 67
-35 186 -96 263 -136 78 -41 145 -74 149 -74 3 0 5 17 3 38 l-3 37 -225 113
c-124 62 -224 116 -223 118 1 3 102 56 225 118 l223 112 3 37 c2 20 0 37 -5
36 -4 0 -126 -61 -270 -136z"
                />
                <path
                  d="M18772 4784 l3 -36 221 -112 c121 -61 222 -115 223 -120 2 -6 -98
-60 -221 -121 l-223 -112 -3 -37 c-2 -20 -1 -36 2 -36 4 0 126 61 272 136
l265 136 -3 35 c-3 34 -4 34 -266 169 -144 73 -265 134 -268 134 -3 0 -4 -16
-2 -36z"
                />
                <path
                  d="M1599 4437 c-57 -149 -105 -274 -107 -278 -6 -14 34 -10 45 4 6 6 54
127 108 267 53 140 99 260 101 266 3 5 -6 10 -20 10 -22 0 -31 -20 -127 -269z"
                />
                <path
                  d="M1258 4494 c-143 -71 -168 -88 -168 -107 0 -18 27 -36 169 -109 93
-49 172 -88 175 -88 3 0 6 10 6 23 0 19 -23 34 -152 98 l-153 76 150 75 c117
58 151 79 153 96 2 12 0 22 -5 21 -4 0 -83 -38 -175 -85z"
                />
                <path
                  d="M2270 4560 c0 -16 32 -36 152 -96 l153 -77 -153 -76 c-129 -64 -152
-79 -152 -98 0 -13 3 -23 6 -23 4 0 83 39 176 87 220 113 220 105 -1 219 -91
46 -168 84 -173 84 -4 0 -8 -9 -8 -20z"
                />
                <path
                  d="M12835 2696 c-86 -32 -139 -129 -116 -215 16 -61 44 -96 94 -120 51
-25 104 -27 154 -6 50 21 72 42 94 90 68 148 -75 306 -226 251z"
                />
                <path
                  d="M2359 2336 c-2 -2 -3 -198 -1 -435 l2 -431 95 0 95 0 0 30 0 30 -60
0 -60 0 0 375 0 375 60 0 60 0 0 30 0 30 -93 0 c-52 0 -96 -2 -98 -4z"
                />
                <path
                  d="M3140 2310 l0 -30 60 0 60 0 0 -375 0 -375 -60 0 -60 0 0 -30 0 -30
95 0 95 0 0 435 0 435 -95 0 -95 0 0 -30z"
                />
                <path
                  d="M2759 2198 l-14 -103 -52 -3 c-51 -3 -53 -4 -53 -33 0 -28 2 -29 46
-29 l47 0 -8 -72 c-3 -40 -9 -76 -11 -80 -3 -5 -25 -8 -50 -8 -42 0 -44 -1
-44 -30 0 -29 2 -30 41 -30 l42 0 -6 -57 c-4 -32 -9 -79 -13 -104 -6 -44 -5
-46 20 -51 15 -3 29 -2 31 2 3 5 10 43 15 86 17 132 13 124 75 124 64 0 62 7
41 -128 -6 -46 -9 -85 -5 -87 6 -4 49 2 54 7 2 2 9 48 16 103 l14 100 53 3
c50 3 52 4 52 33 0 28 -2 29 -46 29 l-47 0 7 61 c3 34 6 70 6 80 0 16 8 19 50
19 49 0 50 1 50 30 0 28 -2 30 -38 30 -21 0 -41 2 -44 5 -2 3 1 44 8 93 18
116 18 112 -16 112 -16 0 -30 -3 -30 -7 0 -8 -16 -113 -25 -170 -6 -33 -7 -33
-62 -33 l-56 0 7 58 c3 31 9 78 12 105 7 47 7 47 -23 47 l-30 0 -14 -102z
m147 -220 c-3 -29 -6 -65 -6 -80 0 -27 -1 -28 -61 -28 l-61 0 7 73 c4 39 9 75
12 80 2 4 29 7 60 7 l56 0 -7 -52z"
                />
                <path
                  d="M17630 1975 c0 -58 -2 -105 -5 -105 -3 0 -14 9 -24 19 -27 27 -84 36
-131 22 -140 -42 -156 -287 -23 -352 56 -27 111 -19 159 23 l34 30 0 -31 c0
-26 4 -31 25 -31 l25 0 0 265 0 265 -30 0 -30 0 0 -105z m-34 -139 c31 -31 34
-39 34 -95 0 -74 -18 -115 -62 -137 -26 -13 -38 -14 -70 -5 -50 16 -78 59 -78
124 0 130 97 192 176 113z"
                />
                <path
                  d="M16515 1942 c-5 -5 -83 -47 -173 -92 -136 -68 -163 -85 -160 -102 2
-14 50 -44 176 -109 168 -88 172 -90 172 -65 0 23 -15 33 -145 98 -80 40 -145
75 -145 78 0 4 64 37 141 75 78 38 143 75 146 82 8 20 -1 45 -12 35z"
                />
                <path
                  d="M18174 1919 c0 -17 28 -35 151 -96 l150 -76 -147 -70 c-117 -57 -147
-75 -151 -94 -2 -12 -2 -24 0 -26 2 -2 79 35 171 82 129 67 168 91 170 107 3
19 -20 34 -163 108 -92 47 -170 86 -174 86 -4 0 -7 -9 -7 -21z"
                />
                <path
                  d="M16735 1908 c-101 -37 -146 -136 -115 -248 21 -76 114 -128 204 -115
56 9 70 18 62 43 -6 18 -11 19 -39 11 -77 -23 -158 27 -173 106 -8 46 18 118
52 140 35 22 86 30 123 17 26 -9 31 -8 37 10 3 11 1 25 -5 31 -15 15 -110 19
-146 5z"
                />
                <path
                  d="M17052 1908 c-91 -31 -138 -165 -93 -263 25 -54 57 -81 112 -96 84
-23 178 24 208 104 16 42 13 134 -5 174 -35 73 -136 110 -222 81z m119 -48
c27 -15 59 -82 59 -125 0 -117 -109 -187 -180 -117 -83 84 -39 252 66 252 19
0 44 -5 55 -10z"
                />
                <path
                  d="M17863 1895 c-109 -66 -111 -267 -4 -329 59 -34 211 -25 211 13 0 27
-7 29 -54 18 -93 -21 -176 27 -176 102 0 19 7 21 128 23 l127 3 -3 44 c-8 126
-123 189 -229 126z m145 -52 c12 -13 22 -37 22 -54 l0 -29 -95 0 c-105 0 -109
3 -79 61 18 35 68 60 104 52 14 -3 35 -16 48 -30z"
                />
              </g>
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
