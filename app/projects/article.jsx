import Link from "next/link";
import { Eye } from "lucide-react";
import Image from "next/image";

const Article = ({ project, views }) => {
  return (
    <article className="p-4 md:p-8">
      <div className="flex justify-between gap-2 items-center">
        <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
          {project.published_date ? (
            <time dateTime={new Date(project.published_date).toISOString()}>
              {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                new Date(project.published_date)
              )}
            </time>
          ) : (
            <span>SOON</span>
          )}
        </span>
        {views && (
          <span className="text-zinc-500 text-xs  flex items-center gap-1">
            <Eye className="w-4 h-4" /> {views}k
          </span>
        )}
      </div>
      {project.project_image && (
        <div className="relative overflow-hidden my-5 will-change-transform rounded-xl">
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
              src={project.project_image}
              height={500}
              width={500}
            />
          </div>
        </div>
      )}
      <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
        {project.title}
      </h2>
      {project.title_tagline && (
        <p className="text-sm text-zinc-400 opacity-70">
          {project.title_tagline}
        </p>
      )}
      <p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
        {project.description}
      </p>
      <div className="lg:pb-3 my-4 text-zinc-100">
        <p className="sr-only">Project technologies used:</p>
        <ul
          className="flex flex-wrap pl-4 leading-loose list-disc"
          title="Project technologies used"
        >
          {project.usetech_list &&
            project.usetech_list.map((item, key) => (
              <li className="pr-6 text-sm uppercase" key={key}>
                {item}
              </li>
            ))}
        </ul>
      </div>
      {project.project_url && (
        <button className="focus:outline-none font-semibold underline decoration-neutral-300 dark:decoration-neutral-600 hover:decoration-yellow-300 dark:hover:decoration-yellow-300 cursor-pointer dark:text-white text-neutral-900 text-sm">
          <Link
            title="Visit the live website"
            target="_blank"
            rel="noopener noreferrer nofollow"
            href={project.project_url}
          >
            Visit the live site&nbsp;→
          </Link>
        </button>
      )}
    </article>
  );
};

export default Article;
