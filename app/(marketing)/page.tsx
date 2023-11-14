'use client';

import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { TypeAnimation } from 'react-type-animation';



export default async function IndexPage() {


  return (
    <>
      <section className=" space-y-6 pb-12 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">

        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
           Convert your Idea into a
          </h1>
        <TypeAnimation
        preRenderFirstString={true}
        className="font-heading text-3xl text-rose-500 sm:text-5xl md:text-6xl lg:text-7xl"
      sequence={[
        `Web App`,
        2000,
        `Mobile App`,
        2000,
        `SAAS`,
        2000,
        `Chrome Extension`,
        2000,
        `Landing Page`,
        2000
      ]}
      wrapper="span"
      speed={30}
      repeat={Infinity}
    />

          <p className="max-w-[42rem] pt-8 leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Delivering cutting edge solutions for startups at a flat fee
          </p>
          <div className="space-x-6 py-16">
            <Link href="https://calendly.com/masaicode/discovery-call" target="_blank" className={cn(buttonVariants({ size: "lg" }))}>
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="container space-y-6  py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
           What we can build for you ...
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
         Anything software we got it handled 😊
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[100rem] md:grid-cols-3">

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[300px] flex-col justify-between rounded-md p-6">

            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1e7650" viewBox="0 0 256 256" className="h-16 w-16 place-self-center fill-rose-500"><path d="M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z" opacity="0.2"></path><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM101.63,168h52.74C149,186.34,140,202.87,128,215.89,116,202.87,107,186.34,101.63,168ZM98,152a145.72,145.72,0,0,1,0-48h60a145.72,145.72,0,0,1,0,48ZM40,128a87.61,87.61,0,0,1,3.33-24H81.79a161.79,161.79,0,0,0,0,48H43.33A87.61,87.61,0,0,1,40,128ZM154.37,88H101.63C107,69.66,116,53.13,128,40.11,140,53.13,149,69.66,154.37,88Zm19.84,16h38.46a88.15,88.15,0,0,1,0,48H174.21a161.79,161.79,0,0,0,0-48Zm32.16-16H170.94a142.39,142.39,0,0,0-20.26-45A88.37,88.37,0,0,1,206.37,88ZM105.32,43A142.39,142.39,0,0,0,85.06,88H49.63A88.37,88.37,0,0,1,105.32,43ZM49.63,168H85.06a142.39,142.39,0,0,0,20.26,45A88.37,88.37,0,0,1,49.63,168Zm101.05,45a142.39,142.39,0,0,0,20.26-45h35.43A88.37,88.37,0,0,1,150.68,213Z"></path></svg>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Web  Apps</h3>
                <p className="text-sm text-muted-foreground">
                Craft visually stunning and highly functional websites that leave a lasting impression on your audience. Our web development team combines creativity with technical expertise to bring your brand to life online
                </p>
              </div>
            </div>
          </div>


          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[300px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1e7650" viewBox="0 0 256 256" className="h-16 w-16 place-self-center fill-rose-500"><path d="M192,56V200H64V56Z" opacity="0.2"></path><path d="M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z"></path></svg>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Mobile Apps</h3>
                <p className="text-sm text-muted-foreground">
                From iOS to Android, we create mobile applications that not only look good but also offer a seamless user experience. Your app, your way—tailored to your specifications.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[300px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1e7650" viewBox="0 0 256 256" className="h-16 w-16 place-self-center fill-rose-500"><path d="M224,56V96H32V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V88H40V56Zm0,144H40V104H216v96Z"></path></svg>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Landing Pages</h3>
                <p className="text-sm text-muted-foreground">
                Make every click count with captivating landing pages that convert visitors into customers. Our design team ensures your landing page reflects your brand personality and converts leads effectively
                </p>
              </div>
            </div>
          </div>



          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[300px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1e7650" viewBox="0 0 256 256" className="h-16 w-16 place-self-center fill-rose-500"><path d="M225.94,161.94a48,48,0,0,1-67.88,0L128,128l30.06-33.94a48,48,0,0,1,67.88,67.88ZM30.06,94.06a48,48,0,0,0,67.88,67.88L128,128,97.94,94.06A48,48,0,0,0,30.06,94.06Z" opacity="0.2"></path><path d="M248,128a56,56,0,0,1-95.6,39.6l-.33-.35L92.12,99.55a40,40,0,1,0,0,56.9l8.52-9.62a8,8,0,1,1,12,10.61l-8.69,9.81-.33.35a56,56,0,1,1,0-79.2l.33.35,59.95,67.7a40,40,0,1,0,0-56.9l-8.52,9.62a8,8,0,1,1-12-10.61l8.69-9.81.33-.35A56,56,0,0,1,248,128Z"></path></svg>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">SAAS/Fullstack Apps</h3>
                <p className="text-sm text-muted-foreground">
                Experience the advantage of end-to-end development, covering frontend, backend, and database, to ensure a cohesive and efficient digital ecosystem.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[300px] flex-col justify-between rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#1e7650" viewBox="0 0 256 256" className="h-16 w-16 place-self-center fill-rose-500"><path d="M232,120v72a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V120Z" opacity="0.2"></path><path d="M224,64H176V56a24,24,0,0,0-24-24H104A24,24,0,0,0,80,56v8H32A16,16,0,0,0,16,80V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM96,56a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8v8H96ZM32,80H224v32H192v-8a8,8,0,0,0-16,0v8H80v-8a8,8,0,0,0-16,0v8H32ZM224,192H32V128H64v8a8,8,0,0,0,16,0v-8h96v8a8,8,0,0,0,16,0v-8h32v64Z"></path></svg>
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Consulting Services</h3>
                <p className="text-sm text-muted-foreground">
                Benefit from the insights of our experienced consultants who provide strategic guidance to propel your startup to new heights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-600 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Process
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We offer a straightforward and transparent approach to any project
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-3 md:max-w-[64rem] md:grid-cols-5">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256" className="h-12 w-12 fill-rose-500"><path d="M174,232a6,6,0,0,1-6,6H88a6,6,0,0,1,0-12h80A6,6,0,0,1,174,232Zm40-128a85.56,85.56,0,0,1-32.88,67.64A18.23,18.23,0,0,0,174,186v6a14,14,0,0,1-14,14H96a14,14,0,0,1-14-14v-6a18,18,0,0,0-7-14.23h0a85.59,85.59,0,0,1-33-67.24C41.74,57.91,79.39,19.12,125.93,18A86,86,0,0,1,214,104Zm-12,0a74,74,0,0,0-75.79-74C86.17,31,53.78,64.34,54,104.42a73.67,73.67,0,0,0,28.4,57.87A29.92,29.92,0,0,1,94,186v6a2,2,0,0,0,2,2h64a2,2,0,0,0,2-2v-6a30.18,30.18,0,0,1,11.7-23.78A73.59,73.59,0,0,0,202,104Zm-20.08-9A55.58,55.58,0,0,0,137,50.08a6,6,0,1,0-2,11.84C152.38,64.84,167.13,79.6,170.08,97a6,6,0,0,0,5.91,5,6.87,6.87,0,0,0,1-.08A6,6,0,0,0,181.92,95Z"></path></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Ideate</h3>
                <p className="text-sm text-muted-foreground">
                  Identify, shape and validate your product idea
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">

              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256" className="h-12 w-12 fill-rose-500"><path d="M208,94a14,14,0,0,0,14-14V48a14,14,0,0,0-14-14H176a14,14,0,0,0-14,14V58H94V48A14,14,0,0,0,80,34H48A14,14,0,0,0,34,48V80A14,14,0,0,0,48,94H58v68H48a14,14,0,0,0-14,14v32a14,14,0,0,0,14,14H80a14,14,0,0,0,14-14V198h68v10a14,14,0,0,0,14,14h32a14,14,0,0,0,14-14V176a14,14,0,0,0-14-14H198V94ZM174,48a2,2,0,0,1,2-2h32a2,2,0,0,1,2,2V80a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2ZM46,80V48a2,2,0,0,1,2-2H80a2,2,0,0,1,2,2V80a2,2,0,0,1-2,2H48A2,2,0,0,1,46,80ZM82,208a2,2,0,0,1-2,2H48a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2H80a2,2,0,0,1,2,2Zm128-32v32a2,2,0,0,1-2,2H176a2,2,0,0,1-2-2V176a2,2,0,0,1,2-2h32A2,2,0,0,1,210,176Zm-24-14H176a14,14,0,0,0-14,14v10H94V176a14,14,0,0,0-14-14H70V94H80A14,14,0,0,0,94,80V70h68V80a14,14,0,0,0,14,14h10Z"></path></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Design</h3>
                <p className="text-sm text-muted-foreground">
                  Craft beautiful digital experiences across platforms.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256" className="h-12 w-12 fill-rose-500"><path d="M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"></path></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Develop</h3>
                <p className="text-sm text-muted-foreground">
                  Bring products to life with world-class engineering
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256" className="h-12 w-12 fill-rose-500"><path d="M224.91,69.75a6,6,0,0,0-9.63-2.16l-41.07,37.9L154.7,101.3l-4.19-19.51,37.9-41.07a6,6,0,0,0-2.16-9.63,70,70,0,0,0-89.77,94.39l-61.39,53c-.11.09-.21.19-.32.3A30,30,0,0,0,77.2,221.23c.11-.11.21-.21.3-.32l53-61.39a70,70,0,0,0,94.39-89.77ZM160,154a58,58,0,0,1-28-7.22,6,6,0,0,0-7.45,1.33L68.57,212.88a18,18,0,0,1-25.45-25.45l64.76-55.94A6,6,0,0,0,109.2,124a58,58,0,0,1,64-84.53L139.58,75.93a6,6,0,0,0-1.45,5.33l5.65,26.35a6,6,0,0,0,4.61,4.61l26.35,5.65a6,6,0,0,0,5.33-1.45L216.49,82.8A58.06,58.06,0,0,1,160,154Z"></path></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Maintain</h3>
                <p className="text-sm text-muted-foreground">
                  Safeguard your products quality and reliability
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[200px] flex-col justify-between rounded-md p-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256" className="h-12 w-12 fill-rose-500"><path d="M238,56v64a6,6,0,0,1-12,0V70.48l-85.76,85.76a6,6,0,0,1-8.48,0L96,120.49,28.24,188.24a6,6,0,0,1-8.48-8.48l72-72a6,6,0,0,1,8.48,0L136,143.51,217.52,62H168a6,6,0,0,1,0-12h64A6,6,0,0,1,238,56Z"></path></svg>
              <div className="space-y-2">
                <h3 className="font-bold">Scale</h3>
                <p className="text-sm text-muted-foreground">
                  Gain flexibility to adjust and expand on the fly
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section id="portfolio" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Projects
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            At Masai Code, we take an agile, iterative approach to software development that enables us to deliver high-quality solutions quickly and efficiently. We work in close collaboration with our clients to understand their business goals and ensure that the final product meets their needs. Our agile methodology allows us to respond quickly to changing requirements, ensuring that our clients receive the best possible solution for their business.
          </p>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-rose-50 py-8 dark:bg-rose-950 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Talk To Us
          </h2>
          <p className="max-w-[85%] leading-normal  sm:text-lg sm:leading-7">
          Send us a message at <a href="mailto:hello@masaicode.com" className="underline underline-offset-4">hello@masaicode.com</a>
          </p>
        </div>


      </section>




    </>
  )
}
