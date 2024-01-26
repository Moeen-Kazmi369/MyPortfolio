import Link from "next/link";
import React from "react";
import { Navigation } from "@/components/nav";
import { Card } from "@/components/card";
import Article from "./article";
import { Eye } from "lucide-react";
import { getProjectsFromDB } from "@/libs/getProjectsFromDB";
import Image from "next/image";
import { urlFor } from "@/sanity";

export const revalidate = 60;

export default async function ProjectsPage() {
  const myprojects = await getProjectsFromDB();
  console.log(myprojects.firstProject.technologies);
  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the projects are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto ">
          <Card>
            <article className="relative w-full h-full p-4 md:p-8">
              <div className="flex items-center justify-between gap-2 py-5">
                <div className="text-xs text-zinc-100">
                  {myprojects.firstProject.publishedAt ? (
                    <time
                      dateTime={new Date(
                        myprojects.firstProject.publishedAt
                      ).toISOString()}
                    >
                      {Intl.DateTimeFormat(undefined, {
                        dateStyle: "medium",
                      }).format(new Date(myprojects.firstProject.publishedAt))}
                    </time>
                  ) : (
                    <span>SOON</span>
                  )}
                </div>
                {myprojects.firstProject.project_views && (
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    <Eye className="w-4 h-4" />{" "}
                    {/* {myprojects.firstProject.project_views}k */}
                    {Intl.NumberFormat("en-US", { notation: "compact" }).format(
                      myprojects.firstProject.project_views
                    )}
                    k
                  </span>
                )}
              </div>
              <div className="flex w-full flex-col md:flex-row justify-between">
                {myprojects.firstProject.mainImage && (
                  <div className="relative overflow-hidden will-change-transform rounded-xl w-full md:w-[45%]">
                    <div className="pb-[56.25%] lg:pb-0 lg:h-[390px] xl:h-[460px] 2xl:h-[520px] relative">
                      <Image
                        id="image:case-study-card:geminai-rising"
                        alt="GeminAI Rising"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="transition-all duration-[0.5s] pointer-events-none select-none"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: "0",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          objectFit: "contain",
                          color: "transparent",
                        }}
                        sizes="(max-width: 768px) 200vw, (max-width: 1200px) 100vw"
                        src={urlFor(myprojects.firstProject.mainImage).url()}
                        height={500}
                        width={500}
                      />
                    </div>
                  </div>
                )}

                <div className="w-full md:w-[45%]">
                  <h2
                    id="featured-post"
                    className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                  >
                    {myprojects.firstProject.title}
                  </h2>
                  <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {myprojects.firstProject.shortdescription}
                  </p>
                  <div className="lg:pb-3 my-4 text-zinc-100">
                    <p className="sr-only">Project technologies used:</p>
                    <ul
                      className="flex flex-wrap pl-4 leading-loose list-disc"
                      title="Project technologies used"
                    >
                      {myprojects.firstProject.technologies &&
                        myprojects.firstProject.technologies.map(
                          (item, key) => (
                            <li className="pr-6 text-sm uppercase" key={key}>
                              {item.title}
                            </li>
                          )
                        )}
                    </ul>
                  </div>
                  {myprojects.firstProject.liveLink && (
                    <div className="absolute bottom-4 md:bottom-8">
                      <button className="focus:outline-none font-semibold underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-yellow-300 dark:hover:decoration-yellow-300 cursor-pointer dark:text-white text-neutral-900 text-sm">
                        <Link
                          title="Visit the live website"
                          target="_blank"
                          rel="noopener noreferrer nofollow"
                          href={myprojects.firstProject.liveLink}
                        >
                          Visit the live site&nbsp;→
                        </Link>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </article>
          </Card>

          <div className="flex flex-col md:flex-row w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {myprojects.secondAndThirdProjects.map((project) => (
              <Card key={project._id}>
                <Article project={project} views={project.project_views} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          {myprojects.remainingProjects.map((project) => (
            <Card key={project._id}>
              <Article project={project} views={project.project_views} />
            </Card>
          ))}
        </div>
      </div>
    </div>
    // <div className="relative min-h-screen bg-gradient-to-tl from-zinc-900 via-zinc-400/10 to-zinc-900 ">
    //   <div className="relative pb-16">
    //     <header>
    //       <div className="fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  bg-zinc-900/500  border-zinc-800 ">
    //         <div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
    //           <div className="flex justify-between gap-8">
    //             <a
    //               className="duration-200 text-zinc-400 hover:text-zinc-100"
    //               href="/projects"
    //             >
    //               Projects
    //             </a>
    //             <a
    //               className="duration-200 text-zinc-400 hover:text-zinc-100"
    //               href="/contact"
    //             >
    //               Contact
    //             </a>
    //           </div>
    //           <a
    //             className="duration-200 text-zinc-300 hover:text-zinc-100"
    //             href="/"
    //           >
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               width="24"
    //               height="24"
    //               viewBox="0 0 24 24"
    //               fill="none"
    //               stroke="currentColor"
    //               stroke-width="2"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               className="w-6 h-6 "
    //             >
    //               <path d="m12 19-7-7 7-7"></path>
    //               <path d="M19 12H5"></path>
    //             </svg>
    //           </a>
    //         </div>
    //       </div>
    //     </header>
    //     <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
    //       <div className="max-w-2xl mx-auto lg:mx-0">
    //         <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
    //           Projects
    //         </h2>
    //         <p className="mt-4 text-zinc-400">
    //           Some of the projects are from work and some are on my own time.
    //         </p>
    //       </div>
    //       <div className="w-full h-px bg-zinc-800"></div>
    //       <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
    //         <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //           <div className="pointer-events-none">
    //             <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //             <div
    //               className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //               style={{
    //                 WebkitMaskImage:
    //                   "radial-gradient(240px at 0px 0px, white, transparent)",
    //               }}
    //             ></div>
    //             <div
    //               className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //               style={{
    //                 WebkitMaskImage:
    //                   "radial-gradient(240px at 0px 0px, white, transparent)",
    //               }}
    //             ></div>
    //           </div>
    //           <a href="/projects/unkey">
    //             <article className="relative w-full h-full p-4 md:p-8">
    //               <div className="flex items-center justify-between gap-2">
    //                 <div className="text-xs text-zinc-100">
    //                   <time datetime="2023-07-01T00:00:00.000Z">
    //                     Jul 1, 2023
    //                   </time>
    //                 </div>
    //                 <span className="flex items-center gap-1 text-xs text-zinc-500">
    //                   <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     width="24"
    //                     height="24"
    //                     viewBox="0 0 24 24"
    //                     fill="none"
    //                     stroke="currentColor"
    //                     stroke-width="2"
    //                     stroke-linecap="round"
    //                     stroke-linejoin="round"
    //                     className="w-4 h-4"
    //                   >
    //                     <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                     <circle cx="12" cy="12" r="3"></circle>
    //                   </svg>{" "}
    //                   6.5K
    //                 </span>
    //               </div>
    //               <h2
    //                 id="featured-post"
    //                 className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
    //               >
    //                 unkey.dev
    //               </h2>
    //               <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
    //                 Unkey is an open source API Key management solution. It
    //                 allows you to create, manage and validate API Keys for your
    //                 users. It’s built with security and speed in mind.
    //               </p>
    //               <div className="absolute bottom-4 md:bottom-8">
    //                 <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
    //                   Read more <span aria-hidden="true">→</span>
    //                 </p>
    //               </div>
    //             </article>
    //           </a>
    //         </div>
    //         <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/planetfall">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2023-04-01T00:00:00.000Z">
    //                       Apr 1, 2023
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     9.1K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   planetfall.io
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   I'm building a SAAS providing global latency monitoring
    //                   for your APIs and websites from edge locations around the
    //                   world. Have you ever wondered how fast your API is in any
    //                   part of the world? Planetfall allows you to find out and
    //                   monitor it continuously.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/highstorm">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2023-05-01T00:00:00.000Z">
    //                       May 1, 2023
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     3.6K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   highstorm.app
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   Simple, fast, open source custom event tracking
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="hidden w-full h-px md:block bg-zinc-800"></div>
    //       <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
    //         <div className="grid grid-cols-1 gap-4">
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/zod-bird">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2023-05-21T00:00:00.000Z">
    //                       May 21, 2023
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     2.3K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   Zod Bird
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   Zodbird is an e2e typed tinybird.co client library for
    //                   typescript, leveraging zod for type safety and
    //                   transformations
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-react-ui">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2023-02-05T00:00:00.000Z">
    //                       Feb 5, 2023
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     1.1K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   React.js CLI
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   A CLI React component to interact with Upstash Redis
    //                   databases.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/access">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2022-11-13T00:00:00.000Z">
    //                       Nov 13, 2022
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     1K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   @chronark/access
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   A minimal library for access control. It is designed to be
    //                   used together with opaque access tokens by providing a
    //                   simple interface to define roles with different access
    //                   permissions and verifying requests to resources.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-ratelimit">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2022-06-06T00:00:00.000Z">
    //                       Jun 6, 2022
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     744
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   @upstash/ratelimit
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   Ratelimiting library for serverless and edge runtimes.
    //                   Built on top of Upstash Redis.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-kafka">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2022-01-08T00:00:00.000Z">
    //                       Jan 8, 2022
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     526
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   @upstash/kafka
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   A fully typed Kafka client built for Upstash Kafka and
    //                   HTTP, perfect for serverless and edge runtimes
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-web-analytics">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <span>SOON</span>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     877
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   Upstash Web Analytics
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   A library to record and analyse web page traffic and user
    //                   behaviour
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-1 gap-4">
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/chronark.com">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2023-03-28T00:00:00.000Z">
    //                       Mar 28, 2023
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     2.7K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   chronark.com
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   The website you're looking at
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/envshare">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2023-01-16T00:00:00.000Z">
    //                       Jan 16, 2023
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     2.9K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   envshare.dev
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   EnvShare is a simple tool to share environment variables
    //                   securely. It uses AES-GCM to encrypt your data before
    //                   sending it to the server. The encryption key never leaves
    //                   your browser.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/qstash">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2022-07-18T00:00:00.000Z">
    //                       Jul 18, 2022
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     2.5K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   QStash
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   QStash is a fully managed serverless queue and messaging
    //                   service designed for the serverless era.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-cli">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2022-05-16T00:00:00.000Z">
    //                       May 16, 2022
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     1K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   @upstash/cli
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   A CLI to provision and manage Upstash resources, including
    //                   Redis and Kafka databases.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/terraform-provider-vercel">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2021-03-16T00:00:00.000Z">
    //                       Mar 16, 2021
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     893
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   Vercel Terraform Provider
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   A Terraform provider for Vercel. It has been deprecated it
    //                   when Vercel rolled out their official provider.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //         </div>
    //         <div className="grid grid-cols-1 gap-4">
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-core-analytics">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2023-02-13T00:00:00.000Z">
    //                       Feb 13, 2023
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     1.1K
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   Upstash Core Analytics
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   Low level utilities to build analytics tools on top of
    //                   Redis.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-edge-flags">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2022-12-12T00:00:00.000Z">
    //                       Dec 12, 2022
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     566
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   @upstash/edge-flags
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   Feature flags for your edge functions.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage:
    //                     "radial-gradient(240px at 0px 0px, white, transparent)",
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-qstash-sdk">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2022-07-18T00:00:00.000Z">
    //                       Jul 18, 2022
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     616
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   @upstash/qstash
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   A typescript client and consumer for QStash.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage: 'radial-gradient(240px at 0px 0px, white, transparent)'
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage: 'radial-gradient(240px at 0px 0px, white, transparent)'
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-redis">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <time datetime="2022-03-14T00:00:00.000Z">
    //                       Mar 14, 2022
    //                     </time>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     862
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   @upstash/redis
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   A fully typed Redis client built for Upstash Redis and
    //                   HTTP, perfect for serverless and edge runtimes.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //           <div className="overflow-hidden relative duration-700 border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 ">
    //             <div className="pointer-events-none">
    //               <div className="absolute inset-0 z-0  transition duration-1000 [mask-image:linear-gradient(black,transparent)]"></div>
    //               <div
    //                 className="absolute inset-0 z-10  bg-gradient-to-br opacity-100  via-zinc-100/10  transition duration-1000 group-hover:opacity-50 "
    //                 style={{
    //                   WebkitMaskImage: 'radial-gradient(240px at 0px 0px, white, transparent)'
    //                 }}
    //               ></div>
    //               <div
    //                 className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
    //                 style={{
    //                   WebkitMaskImage: 'radial-gradient(240px at 0px 0px, white, transparent)'
    //                 }}
    //               ></div>
    //             </div>
    //             <a href="/projects/upstash-ratelimit-analytics">
    //               <article className="p-4 md:p-8">
    //                 <div className="flex justify-between gap-2 items-center">
    //                   <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
    //                     <span>SOON</span>
    //                   </span>
    //                   <span className="text-zinc-500 text-xs  flex items-center gap-1">
    //                     <svg
    //                       xmlns="http://www.w3.org/2000/svg"
    //                       width="24"
    //                       height="24"
    //                       viewBox="0 0 24 24"
    //                       fill="none"
    //                       stroke="currentColor"
    //                       stroke-width="2"
    //                       stroke-linecap="round"
    //                       stroke-linejoin="round"
    //                       className="w-4 h-4"
    //                     >
    //                       <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
    //                       <circle cx="12" cy="12" r="3"></circle>
    //                     </svg>{" "}
    //                     65
    //                   </span>
    //                 </div>
    //                 <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
    //                   Upstash Ratelimit Analytics
    //                 </h2>
    //                 <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
    //                   Near realtime analytics for your ratelimits. Integrated
    //                   into the @upstash/ratelimit library.
    //                 </p>
    //               </article>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
