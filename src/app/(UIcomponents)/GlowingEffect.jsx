"use client";
import { GlowingEffect } from "./glowing-effect";

const GridItem = ({ area, icon, title, description, stack }) => {
  return (
    <li className={`min-h-[25rem] list-none`}>
      <div className="relative h-full border border-gray-800 rounded-2xl p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl shadow-[0px_0px_18px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col justify-between">
            <div
              style={{ backgroundImage: `url(${icon.src})` }}
              className="h-44 w-full bg-no-repeat bg-cover bg-center"
            ></div>
            <div className="py-3 px-6">
              <div className="space-y-3">
                <h3 className="-tracking-4 pt-0.5 font-sans text-xl font-semibold text-balance text-white">
                  {title}
                </h3>
                <h2 className="font-sans text-sm text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                  {description}
                </h2>
              </div>
              <div className="space-x-1 mt-5 flex justify-end">
                {stack.map((icon, ind) => (
                  <div
                    key={ind}
                    className="h-8 w-8 rounded-full border border-gray-600 p-1.5 backdrop-blur-md bg-white/5 shadow-inner"
                  >
                    <span
                      className="block w-full h-full rounded-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${icon.src})` }}
                    ></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default GridItem;
