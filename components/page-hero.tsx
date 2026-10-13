import { CompassRose, ChartLines } from "@/components/chart";
import { Entrance, Item } from "@/components/motion";
import { Eyebrow } from "@/components/section";

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(90%_100%_at_50%_0%,#081225_0%,#020617_75%)]"
      />
      <ChartLines />
      <CompassRose className="absolute -right-16 -top-16 h-72 w-72 opacity-80 sm:-right-10 sm:-top-10" />
      <Entrance className="relative mx-auto max-w-6xl px-4 pb-14 pt-32 sm:px-6 lg:pb-20 lg:pt-40">
        <Item>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Item>
        <Item>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-light leading-[1.05] tracking-tighter text-foreground sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </Item>
        {lede && (
          <Item>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lede}
            </p>
          </Item>
        )}
        {children && <Item>{children}</Item>}
      </Entrance>
    </section>
  );
}
