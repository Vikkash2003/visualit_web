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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    return (
        <section id="pricing" className="min-h-screen relative flex flex-col items-center justify-center py-24 mx-auto px-4 snap-start scroll-mt-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="flex flex-col items-center justify-center max-w-2xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center max-w-2xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 bg-gradient-to-r from-white via-green-200 to-green-200 bg-clip-text text-transparent">
                        {contentData.pricing.title}
                    </h2>
                    <p className="text-base md:text-lg text-center text-gray-400 mt-6 max-w-lg">
                        {contentData.pricing.subtitle}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-center justify-center space-x-4 mt-8 bg-white/5 backdrop-blur-sm p-2 rounded-full border border-white/10"
                >
                    <button
                        onClick={() => setBillPlan("monthly")}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            billPlan === "monthly" ? "bg-[#1DB954] text-black shadow-lg" : "text-gray-400 hover:text-white"
                        )}
                    >
                        {contentData.pricing.billingToggle.monthly}
                    </button>
                    <button
                        onClick={() => setBillPlan("annually")}
                        className={cn(
                            "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                            billPlan === "annually" ? "bg-[#1DB954] text-black shadow-lg" : "text-gray-400 hover:text-white"
                        )}
                    >
                        {contentData.pricing.billingToggle.annually}
                    </button>
                </motion.div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col md:flex-row w-full pt-12 lg:pt-16 gap-6 lg:gap-8 max-w-4xl mx-auto justify-center items-stretch relative z-10"
            >
                {contentData.pricing.plans.map((plan, index) => (
                    <Plan key={plan.id} plan={plan} billPlan={billPlan} index={index} />
                ))}
            </motion.div>
        </section>
    );
}

function Plan({ plan, billPlan, index }) {
    const itemVariants = {
        hidden: { y: 40, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <motion.div
            variants={itemVariants}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={cn(
                "flex flex-col relative rounded-[2.5rem] transition-all bg-white/5 backdrop-blur-xl items-start w-full md:w-1/2 border border-white/10 overflow-hidden shadow-2xl h-auto group",
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
                <div className="flex justify-between w-full items-center">
                    <h2 className="font-bold text-2xl text-white">
                        {plan.title}
                    </h2>
                    {plan.badge && (
                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {plan.badge}
                        </span>
                    )}
                </div>

                <h3 className="mt-4 text-4xl font-bold md:text-5xl text-[#1DB954]">
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
                    "w-full text-base py-6 transition-all hover:scale-105 shadow-lg rounded-xl font-semibold",
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

            <div className="flex flex-col items-start w-full px-8 pb-8 gap-y-4 relative z-10">
                <span className={cn(
                    "text-sm text-left font-semibold uppercase tracking-wider opacity-80",
                    plan.title === "Pro" ? "text-purple-400" : "text-[#1DB954]"
                )}>Includes:</span>
                {plan.features.map((feature, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="flex items-start justify-start gap-3 text-gray-300"
                    >
                        <div className={cn(
                            "flex items-center justify-center mt-0.5",
                            plan.title === "Pro" ? "text-purple-400" : "text-[#1DB954]"
                        )}>
                            <CheckIcon className="size-4" />
                        </div>
                        <span className="text-sm leading-tight">{feature}</span>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}