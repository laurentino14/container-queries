import Image from "next/image";

export function ArticlesCard() {
  return (
    <div className="@container">
      <div className="grid w-fit  @md:w-full @md:gap-x-4 @3xl:grid-cols-2">
        <Image
          src="https://github.com/lvdigitalpro.png"
          width={500}
          height={500}
          className="mx-auto h-full max-h-96 w-full rounded-lg object-cover @3xl:aspect-[3/2] "
          alt=""
        />
        <div className="flex  flex-col justify-between space-y-4 py-6">
          <div className="space-y-4">
            <span className="text-xs font-semibold normal-case text-gray-600">
              {new Date()
                .toLocaleString("pt-BR", { dateStyle: "full" })[0]
                .toUpperCase() +
                new Date()
                  .toLocaleString("pt-BR", { dateStyle: "full" })
                  .slice(1) +
                " - " +
                new Date().toLocaleString("pt-BR", { timeStyle: "short" })}
            </span>
            <h1 className="text-xl font-semibold tracking-wide @3xl:text-3xl">
              Title card
            </h1>
            <p className="3xl:text-base line-clamp-3 text-sm font-medium leading-7 text-gray-600 @3xl:line-clamp-4 @3xl:leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              sunt id quis perspiciatis quae aspernatur obcaecati! Nemo alias,
              similique tempore laudantium eveniet cumque maxime id adipisci
              unde placeat? Voluptatem, fugiat. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Quidem sunt id quis perspiciatis
              quae aspernatur obcaecati! Nemo alias, similique tempore
              laudantium eveniet cumque maxime id adipisci unde placeat?
              Voluptatem, fugiat.
            </p>
          </div>
          <div className=" flex items-center space-x-2">
            <Image
              src="https://github.com/laurentino14.png"
              alt=""
              width={500}
              height={500}
              className="w-9  rounded-full border-2 @3xl:w-12"
            />
            <span className="text-2xl text-neutral-700 @3xl:hidden">
              &middot;
            </span>
            <div className="flex flex-col">
              <span className="font-semibold @3xl:text-sm">Nome do Autor</span>
              <span className="text-xs font-semibold">Software Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
