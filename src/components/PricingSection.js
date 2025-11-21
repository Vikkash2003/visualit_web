"use client";

import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/button";
import { contentData } from "@/lib/contentData";

export default function PricingSection() {
    const [billPlan, setBillPlan] = useState("monthly");

    const handleSwitch = () => {
        setBillPlan((prev) => (prev === "monthly" ? "annually" : "monthly"));
    };

    return (
        <div id="pricing" className="min-h-screen relative flex flex-col items-center justify-center max-w-5xl py-20 mx-auto px-4 snap-start scroll-mt-24">
            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 bg-gradient-to-r from-white via-green-200 to-green-200 bg-clip-text text-transparent">
                        {contentData.pricing.title}
                    </h2>
                    <p className="text-base md:text-lg text-center text-gray-400 mt-6">
                        {contentData.pricing.subtitle}
                    </p>
                </div>

                <div className="flex items-center justify-center space-x-4 mt-6">
                    <span className="text-base font-medium">{contentData.pricing.billingToggle.monthly}</span>
                    <button
                        onClick={handleSwitch}
                        className="relative rounded-full focus:outline-none"
                    >
                        <div className="w-12 h-6 transition rounded-full shadow-md outline-none bg-blue-500"></div>
                        <div
                            className={cn(
                                "absolute inline-flex items-center justify-center w-4 h-4 transition-all duration-500 ease-in-out top-1 left-1 rounded-full bg-white",
                                billPlan === "annually" ? "translate-x-6" : "translate-x-0"
                            )}
                        />
                    </button>
                    <span className="text-base font-medium">{contentData.pricing.billingToggle.annually}</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row w-full pt-8 lg:pt-12 gap-4 lg:gap-6 max-w-3xl mx-auto justify-center items-stretch">
                {contentData.pricing.plans.map((plan, index) => (
                    <Plan key={plan.id} plan={plan} billPlan={billPlan} index={index} />
                ))}
            </div>
        </div>
    );
}

function Plan({ plan, billPlan, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className={cn(
                "flex flex-col relative rounded-[2.5rem] transition-all bg-white/5 backdrop-blur-xl items-start w-full md:w-1/2 md:max-w-sm border border-white/10 overflow-hidden shadow-2xl h-auto group",
                plan.title === "Pro" && "border-purple-500/50 shadow-lg shadow-purple-500/20"
            )}
        >
            {/* Hover Glow */}
            <div className={cn(
                "absolute inset-0 bg-gradient-to-br to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                plan.title === "Pro" ? "from-purple-500/10" : "from-[#1DB954]/10"
            )}></div>

            {plan.title === "Pro" && (
                <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-purple-600 rounded-2xl lg:rounded-3xl blur-[8rem] -z-10"></div>
            )}

            <div className="p-8 flex rounded-t-[2.5rem] flex-col items-start w-full relative z-10">
                <h2 className="font-bold text-2xl text-white">
                    {plan.title}
                </h2>
                <h3 className="mt-2 text-4xl font-bold md:text-5xl text-[#1DB954]">
                    <NumberFlow
                        value={
                            billPlan === "monthly" ? plan.monthlyPrice : plan.annuallyPrice
                        }
                        suffix={billPlan === "monthly" ? "/mo" : "/yr"}
                        format={{
                            currency: "USD",
                            style: "currency",
                            currencySign: "standard",
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                            currencyDisplay: "narrowSymbol",
                        }}
                    />
                </h3>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                    {plan.description}
                </p>
            </div>

            <div className="flex flex-col items-start w-full px-8 py-2 relative z-10">
                <Button className={cn(
                    "w-full text-base py-6 transition-all hover:scale-105 shadow-lg",
                    plan.title === "Pro"
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-600/90 hover:to-pink-600/90 shadow-purple-500/20 hover:shadow-purple-500/40"
                        : "bg-gradient-to-r from-[#1DB954] to-green-600 hover:from-[#1DB954]/90 hover:to-green-600/90 shadow-[#1DB954]/20 hover:shadow-[#1DB954]/40"
                )}>
                    {plan.buttonText}
                </Button>
                <div className="h-8 overflow-hidden w-full mx-auto mt-2">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={billPlan}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-xs text-center text-gray-400 block"
                        >
                            {billPlan === "monthly"
                                ? plan.billingNote.monthly
                                : plan.billingNote.annually}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex flex-col items-start w-full px-8 pb-8 gap-y-3 relative z-10">
                <span className={cn(
                    "text-base text-left mb-2 font-semibold",
                    plan.title === "Pro" ? "text-purple-400" : "text-[#1DB954]"
                )}>Includes:</span>
                {plan.features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-start gap-3 text-gray-300"
                    >
                        <div className={cn(
                            "flex items-center justify-center",
                            plan.title === "Pro" ? "text-purple-400" : "text-[#1DB954]"
                        )}>
                            <CheckIcon className="size-5" />
                        </div>
                        <span className="text-sm">{feature}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}