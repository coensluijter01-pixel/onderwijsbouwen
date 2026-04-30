type Props = {
  number: string;
  title: string;
  body: string;
};

export function NumberedStat({ number, title, body }: Props) {
  return (
    <article className="flex flex-col px-0 sm:px-8 first:pl-0 last:pr-0">
      <span aria-hidden="true" className="stat-numeral text-[#1B4D3E]">
        {number}
      </span>
      <h3 className="h-display-md mt-10 text-[#0a1a14]">{title}</h3>
      <p className="mt-6 text-base leading-[1.6] text-[#5a5a52]">{body}</p>
    </article>
  );
}
