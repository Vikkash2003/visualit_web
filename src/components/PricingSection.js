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
                {contentData.pricing.plans.map((plan) => (
                    <Plan key={plan.id} plan={plan} billPlan={billPlan} />
                ))}
            </div>
        </div>
    );
}

function Plan({ plan, billPlan }) {
    return (
        <div
            className={cn(
                "flex flex-col relative rounded-2xl transition-all bg-black/50 backdrop-blur items-start w-full md:w-1/2 md:max-w-sm border border-white/10 overflow-hidden hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10 h-auto",
                plan.title === "Pro" && "border-purple-500/50 shadow-lg shadow-purple-500/20"
            )}
        >
            {plan.title === "Pro" && (
                <div className="absolute top-1/2 inset-x-0 mx-auto h-12 -rotate-45 w-full bg-purple-600 rounded-2xl lg:rounded-3xl blur-[8rem] -z-10"></div>
            )}

            <div className="p-6 flex rounded-t-2xl flex-col items-start w-full relative">
                <h2 className="font-bold text-2xl text-white">
                    {plan.title}
                </h2>
                <h3 className="mt-1 text-3xl font-bold md:text-4xl text-[#1DB954]">
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
                <p className="text-sm text-gray-400 mt-2">
                    {plan.description}
                </p>
            </div>

            <div className="flex flex-col items-start w-full px-6 py-2">
                <Button className="w-full text-base py-5 bg-gradient-to-r from-[#1DB954] to-green-600 hover:from-[#1DB954]/90 hover:to-green-600/90 transition-all hover:scale-105 shadow-lg shadow-[#1DB954]/20 hover:shadow-[#1DB954]/40">
                    {plan.buttonText}
                </Button>
                <div className="h-8 overflow-hidden w-full mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={billPlan}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="text-xs text-center text-gray-400 mt-2 mx-auto block"
                        >
                            {billPlan === "monthly"
                                ? plan.billingNote.monthly
                                : plan.billingNote.annually}
                        </motion.span>
                    </AnimatePresence>
                </div>
            </div>

            <div className="flex flex-col items-start w-full px-6 pb-6 gap-y-2">
                <span className="text-base text-left mb-2 font-semibold text-[#1DB954]">Includes:</span>
                {plan.features.map((feature, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-start gap-2 text-gray-300"
                    >
                        <div className="flex items-center justify-center text-[#1DB954]">
                            <CheckIcon className="size-5" />
                        </div>
                        <span className="text-sm">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}