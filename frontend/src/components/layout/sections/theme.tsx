"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/animated-beam";

import {
    IconBrandDocker,
    IconBrandTypescript,
    IconBrandFirebase,
    IconUsers,
    IconBrandPowershell,
    IconCode,
} from "@tabler/icons-react";

const Circle = forwardRef<HTMLDivElement,{ className?: string; children?: React.ReactNode } >(({ className, children }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-dark p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
                className,
            )}
        >
            {children}
        </div>
    );
});

Circle.displayName = "Circle";

export function AnimatedBeamMultipleOutputDemo({
    className,
}: {
    className?: string;
}) {
    const containerRef = useRef<HTMLDivElement>(null);
    const div1Ref = useRef<HTMLDivElement>(null);
    const div2Ref = useRef<HTMLDivElement>(null);
    const div3Ref = useRef<HTMLDivElement>(null);
    const div4Ref = useRef<HTMLDivElement>(null);
    const div5Ref = useRef<HTMLDivElement>(null);
    const div6Ref = useRef<HTMLDivElement>(null);
    const div7Ref = useRef<HTMLDivElement>(null);

    return (
        <>
            <div className="text-center mb-8">
                <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                    Flexibility
                </h2>

                <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                    flexible to use it
                </h2>
            </div>

            <div
                className={cn(
                    "relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg bg-background p-10 md:shadow-xl",
                    className,
                )}
                ref={containerRef}
            >
                <div className="flex size-full flex-row items-stretch justify-between gap-10 max-w-lg">
                    <div className="flex flex-col justify-center gap-2">
                        <Circle ref={div1Ref}>
                            <IconCode />
                        </Circle>
                        <Circle ref={div2Ref}>
                            <IconBrandTypescript />
                        </Circle>
                        <Circle ref={div3Ref}>
                            <IconBrandPowershell />
                        </Circle>
                        <Circle ref={div4Ref}>
                            <IconBrandDocker />
                        </Circle>
                        <Circle ref={div5Ref}>
                            <IconBrandFirebase />
                        </Circle>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Circle ref={div6Ref} className="size-16">
                            <IconCode />
                        </Circle>
                    </div>
                    <div className="flex flex-col justify-center">
                        <Circle ref={div7Ref}>
                            <IconUsers />
                        </Circle>
                    </div>
                </div>

                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div1Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div2Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div3Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div4Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div5Ref}
                    toRef={div6Ref}
                />
                <AnimatedBeam
                    containerRef={containerRef}
                    fromRef={div6Ref}
                    toRef={div7Ref}
                />
            </div>
        </>
    );
}