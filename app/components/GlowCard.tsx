"use client"
import { ReactNode, useEffect } from "react"

const GlowCard = (
    { 
    children,
    identifier
     }: {
    children: ReactNode,
    identifier: string
}) => {
    useEffect(() => {
        const CONTAINER = document.querySelector(`.glow-container-${identifier}`) as HTMLElement | null;
        const CARDS = document.querySelectorAll(`.glow-card-${identifier}`) as NodeListOf<HTMLElement>;

        const CONFIG = {
            proximity: 40,
            spread: 80,
            blur: 12,
            gap: 32,
            vertical: false,
            opacity: 0
        };

        const UPDATE = (event: MouseEvent | null=null) => {
            if (!event) return; 
            for (const CARD of CARDS){
                const CARD_BOUND = CARD.getBoundingClientRect();
                if(
                    event.x > CARD_BOUND.left - CONFIG.proximity &&
                    event.x < CARD_BOUND.left + CARD_BOUND.width + CONFIG.proximity &&
                    event.y > CARD_BOUND.top -CONFIG.proximity &&
                    event.y < CARD_BOUND.top + CARD_BOUND.height + CONFIG.proximity
                ){
                    CARD.style.setProperty("--active", "1")
                } else {
                    CARD.style.setProperty("--active", CONFIG.opacity.toString())
                }

                const CARD_CENTER = [
                    CARD_BOUND.left + CARD_BOUND.width * 0.5,
                    CARD_BOUND.top + CARD_BOUND.height * 0.5
                ]

                let ANGLE =
                 (Math.atan2(event!.y -CARD_CENTER[1], event!.x - CARD_CENTER[0]) * 180) /
                Math.PI;

                ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

                CARD.style.setProperty("--start", (ANGLE + 90).toString())
            }   
        };
         document.addEventListener("pointermove", UPDATE);

         const RESTYLE = () => {
            CONTAINER?.style.setProperty("--gap", CONFIG.gap.toString());
            CONTAINER?.style.setProperty("--blur", CONFIG.blur.toString());
            CONTAINER?.style.setProperty("--spread", CONFIG.spread.toString());
            CONTAINER?.style.setProperty("--direction", CONFIG.vertical ?
                "column" : "row"
            );
         };

         RESTYLE();
         UPDATE();

         return () => {
            document.body.removeEventListener("pointermove", UPDATE)
         }

    }, [identifier]);

  return (
    <section className={`glow-container-${identifier} glow-container`}>
      <article className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-stone-900 transition-all duration-300 relative
      text-stone-300 bg-[#0A0A0A] rounded-xl hover:border-transparent w-full`}>
        <div className="glows"></div>
        { children }
      </article>
    </section>
  )
}

export default GlowCard
