import { BannerType } from '@/type/bannerType';
import programLevel2 from "@/assets/background/program-level-2.webp";
import Banner from '@/component/banner';
import PolicyContent, { PolicyContentType } from '@/component/policy-content';

const bannerData: BannerType = {
    title: {
        line1: "Refund & Return Policy",
        align: "text-center mx-auto"
    },
    image: programLevel2.src,
    className: "bg-center bg-cover bg-no-repeat bg-primary",
    children: (
        <>
            <p className='text-sm text-center text-white mt-2'>
                Effective: May 2025 &nbsp;·&nbsp; Governed by the laws of Pakistan
            </p>
            <p className="text-sm text-center text-white mt-2 font-light">
                This policy outlines the conditions under which refunds or cancellations may be requested for services and programs offered by Arslan Larik & Company.
            </p>
        </>
    )
};

const refundData: PolicyContentType = {
    sections: [
        {
            label: "Section 01",
            title: "General Principles",
            content: (
                <>
                    <p className="text-neutral-600 custom-text1 mb-3">
                        AL&CO is committed to delivering high-quality programs and services. This Refund & Return Policy is established in accordance with applicable consumer protection laws in Pakistan, including the Punjab Consumer Protection Act 2005, the Sindh Consumer Protection Act 2014, and general principles of contract law under the Contract Act, 1872.
                    </p>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        As our services are primarily educational and intangible in nature, refunds are subject to the specific conditions outlined below. All requests are assessed fairly and on a case-by-case basis.
                    </p>
                    <div className="border-l-2 border-secondary bg-secondary/5 px-5 py-4 rounded-r-lg">
                        <p className="text-neutral-600 custom-text1 font-medium">
                            All refund requests must be submitted in writing to <span className="text-secondary">connect@arslanlarik.com</span>, including your full name, program name, payment reference, and reason for the request.
                        </p>
                    </div>
                </>
            ),
        },
        {
            label: "Section 02",
            title: "Eligibility for Refund",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-5">
                        The following conditions determine eligibility for a refund request:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Eligible */}
                        <div className="rounded-xl border border-green-200 bg-green-50/50 px-5 py-5">
                            <p className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-4">
                                ✓ Eligible Circumstances
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Cancellation submitted 14 or more days before the program start date",
                                    "Program cancelled or permanently discontinued by AL&CO",
                                    "Significant, undisclosed material change to program content or format",
                                    "Duplicate or erroneous payment verified by AL&CO",
                                    "Confirmed failure to deliver purchased digital access within 7 business days",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-neutral-500 custom-text1">
                                        <span className="text-green-600 flex-shrink-0 mt-1">—</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Non-Eligible */}
                        <div className="rounded-xl border border-red-200 bg-red-50/50 px-5 py-5">
                            <p className="text-xs font-semibold tracking-widest uppercase text-red-600 mb-4">
                                ✗ Non-Eligible Circumstances
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Cancellation made within 7 days of the program start date",
                                    "Digital or online content that has been accessed or downloaded",
                                    "Failure to attend a program without prior notice (no-show)",
                                    "Failure to meet attendance or assessment requirements",
                                    "Change of mind after course materials have been made available",
                                    "Enrollments made under promotional or discounted pricing",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-neutral-500 custom-text1">
                                        <span className="text-red-500 flex-shrink-0 mt-1">—</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </>
            ),
        },
        {
            label: "Section 03",
            title: "Refund Schedule",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-5">
                        Where a refund is approved, the applicable amount is determined by the notice period provided prior to the program start date:
                    </p>
                    <div className="divide-y divide-primary/10 border border-primary/10 rounded-xl overflow-hidden">
                        {[
                            {
                                period: "14+ Days",
                                sub: "Prior to Start",
                                title: "Full Refund",
                                desc: "The complete amount paid is refunded, less any applicable payment processing or gateway fees.",
                            },
                            {
                                period: "8–13 Days",
                                sub: "Prior to Start",
                                title: "50% Refund",
                                desc: "Half of the enrollment fee is refunded. The remaining 50% is retained as a cancellation and administrative charge.",
                            },
                            {
                                period: "4–7 Days",
                                sub: "Prior to Start",
                                title: "25% Refund or Full Program Credit",
                                desc: "A 25% cash refund is available, or alternatively, a 100% credit toward any future AL&CO program, valid for 12 months.",
                            },
                            {
                                period: "0–3 Days",
                                sub: "Prior to Start",
                                title: "No Cash Refund — Credit Only",
                                desc: "No monetary refund is applicable. A program credit valid for 6 months may be issued at AL&CO's discretion.",
                            },
                            {
                                period: "After Start",
                                sub: "Post Commencement",
                                title: "No Refund",
                                desc: "Once a program has commenced, no refund is applicable regardless of the participant's attendance or continued participation.",
                            },
                        ].map((row, i) => (
                            <div key={i} className="flex flex-col sm:flex-row gap-4 px-5 py-4 bg-primary/3">
                                <div className="sm:min-w-[130px]">
                                    <p className="text-primary font-semibold text-base">{row.period}</p>
                                    <p className="text-xs uppercase tracking-wider text-neutral-400 mt-0.5">{row.sub}</p>
                                </div>
                                <div>
                                    <p className="text-neutral-700 font-medium custom-text1 mb-1">{row.title}</p>
                                    <p className="text-neutral-500 custom-text1">{row.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ),
        },
        {
            label: "Section 04",
            title: "Digital & Online Course Purchases",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        For programs delivered digitally or through our online platform, the following additional conditions apply:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "A full refund may be requested within 48 hours of purchase, provided less than 10% of the course content has been accessed",
                            "Once 10% or more of the content has been viewed or downloaded, the purchase is considered final and no refund is applicable",
                            "Technical issues preventing access must be reported within 7 business days; AL&CO will resolve the issue or issue a service credit",
                            "Refunds are not available on bundled packages once any component of the bundle has been accessed",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="border-l-2 border-secondary bg-secondary/5 px-5 py-4 rounded-r-lg">
                        <p className="text-neutral-600 custom-text1 font-medium">
                            If you experience technical difficulties accessing any digital content, please contact our support team before initiating a refund request. Most issues are resolved promptly.
                        </p>
                    </div>
                </>
            ),
        },
        {
            label: "Section 05",
            title: "Refund Processing",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        Approved refunds are returned via the original payment method used at the time of purchase:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "Bank transfer: 7–14 business days",
                            "Credit or debit card: 5–10 business days, subject to the issuing bank's processing times",
                            "Mobile wallet (JazzCash, EasyPaisa, etc.): 3–7 business days",
                            "Program credits are issued digitally and confirmed via email",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        AL&CO reserves the right to deduct any non-recoverable payment processing fees from the refund amount. Refunds will not be issued to a different account or method than the original payment.
                    </p>
                </>
            ),
        },
        {
            label: "Section 06",
            title: "Corporate & Group Enrollments",
            content: (
                <p className="text-neutral-500 custom-text1">
                    Refund and cancellation terms for corporate clients or group bookings of five or more participants are governed by the signed service agreement between AL&CO and the client organization. In the absence of a specific written agreement, this standard Refund Policy shall apply in full.
                </p>
            ),
        },
        {
            label: "Section 07",
            title: "Dispute Resolution",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-3">
                        If you are dissatisfied with a refund decision, you may escalate your concern in writing to AL&CO's management. We will review and respond within 10 business days.
                    </p>
                    <p className="text-neutral-500 custom-text1 mb-3">
                        All disputes arising from this policy shall be governed by the laws of Pakistan. Unresolved matters may be referred to the relevant Consumer Protection Council or the courts of competent jurisdiction in Karachi, Pakistan.
                    </p>
                    <p className="text-neutral-500 custom-text1">
                        For international participants, AL&CO commits to good-faith resolution efforts prior to any formal legal process.
                    </p>
                </>
            ),
        },
    ],
    contactCard: {
        title: "Submit a Refund Request",
        description: "Email us with your enrollment details and reason for the request. Please allow up to 3 business days for an initial response.",
        email: "connect@arslanlarik.com",
        address: "Arslan Larik & Company, Karachi, Pakistan · Dubai, UAE",
    },
};

export default function RefundPolicy() {
    return (
        <div>
            <Banner data={bannerData} />
            <PolicyContent data={refundData} />
        </div>
    );
}