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
                This policy outlines the conditions under which refund or cancellation requests may be considered for programs and services offered by Arslan Larik & Company (AL&CO).
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
                        AL&CO is committed to delivering transformational, high-quality programs that create lasting personal and professional impact. By enrolling in any AL&CO program, including but not limited to NLP Practitioner, Master Practitioner, Train the Trainer, Advanced Hypnotherapy Interventionist Training, Master Trainer Program, and any associated coaching or certification program, participants acknowledge and agree to the terms of this policy in full.
                    </p>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        This policy is established in accordance with applicable consumer protection laws in Pakistan, including the Punjab Consumer Protection Act 2005, the Sindh Consumer Protection Act 2014, and general principles of contract law under the Contract Act, 1872.
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
            title: "Core Refund Principle: Program Commencement",
            content: (
                <>
                    <p className="text-neutral-600 custom-text1 mb-3">
                        Once a program has commenced and a participant has attended or been granted access to any session, class, or program material, the enrollment fee becomes fully and permanently non-refundable.
                    </p>
                    <p className="text-neutral-500 custom-text1 mb-5">
                        This applies universally across all AL&CO programs, regardless of:
                    </p>
                    <ul className="space-y-2 mb-5">
                        {[
                            "The number of sessions attended after commencement",
                            "The participant's personal, professional, or scheduling circumstances",
                            "Whether the participant continues to attend subsequent sessions",
                            "The format of delivery, whether in-person, online, hybrid, or recorded",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="border-l-2 border-secondary bg-secondary/5 px-5 py-4 rounded-r-lg">
                        <p className="text-neutral-600 custom-text1 font-medium">
                            The commencement of a program is defined as the date on which the first session of the enrolled batch is held, irrespective of whether the participant was physically or virtually present on that date.
                        </p>
                    </div>
                </>
            ),
        },
        {
            label: "Section 03",
            title: "Pre-Commencement Requests",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-5">
                        Refund or cancellation requests submitted before a program has commenced will be considered on a case-by-case basis under the following conditions only:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                        {/* Eligible */}
                        <div className="rounded-xl border border-green-200 bg-green-50/50 px-5 py-5">
                            <p className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-4">
                                ✓ Potentially Eligible Circumstances
                            </p>
                            <ul className="space-y-2">
                                {[
                                    "Written cancellation request submitted 14 or more calendar days before the program start date",
                                    "Program cancelled or permanently discontinued by AL&CO",
                                    "Verified duplicate or erroneous payment",
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
                                    "Cancellation requested within 13 days or fewer of the program start date",
                                    "Change of personal plans, scheduling conflicts, or professional commitments",
                                    "Failure to review program dates, timings, or format prior to enrollment",
                                    "Enrollments made under promotional, discounted, or bundled pricing",
                                ].map((item, i) => (
                                    <li key={i} className="flex gap-2 text-neutral-500 custom-text1">
                                        <span className="text-red-500 flex-shrink-0 mt-1">—</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-neutral-500 custom-text1">
                        Where a pre-commencement refund is approved, AL&CO reserves the right to deduct applicable administrative and payment processing fees from the refunded amount.
                    </p>
                </>
            ),
        },
        {
            label: "Section 04",
            title: "Post-Commencement: No Refund Policy",
            content: (
                <>
                    <p className="text-neutral-600 custom-text1 mb-4">
                        Once a program has commenced, no refund, partial refund, credit, or transfer of fee will be issued under any circumstance. This includes but is not limited to situations where:
                    </p>
                    <ul className="space-y-2 mb-5">
                        {[
                            "The participant attended one or more sessions and chose to discontinue",
                            "The participant did not attend sessions after commencement due to personal reasons",
                            "The participant was unable to attend due to work, travel, health, or scheduling conflicts",
                            "The participant disagreed with program content, delivery style, or schedule after commencement",
                            "The participant enrolled expecting a different outcome than experienced",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-red-500 mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        AL&CO reserves and holds a seat exclusively for each enrolled participant across the full duration of their program. The reservation of that seat, the preparation of program materials, and the facilitation of each session constitute the delivery of service, regardless of the participant's attendance record.
                    </p>
                </>
            ),
        },
        {
            label: "Section 05",
            title: "Digital & Online Program Access",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        For programs delivered digitally or through AL&CO's online platform:
                    </p>
                    <ul className="space-y-2">
                        {[
                            "Once login credentials, course materials, or any program content has been shared or made accessible, the enrollment is considered commenced and the fee is non-refundable",
                            "A refund request may only be considered within 48 hours of purchase, provided no content has been accessed and the program start date has not passed",
                            "Technical issues preventing access must be reported within 7 business days; AL&CO will resolve the issue or issue a service credit at its discretion",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </>
            ),
        },
        {
            label: "Section 06",
            title: "Seat Reservation & Batch Flexibility",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-3">
                        AL&CO genuinely values every participant's journey. Where a participant is unable to attend their enrolled batch due to unavoidable circumstances, AL&CO may, at its sole discretion, offer a seat transfer to a future batch of the same program at no additional charge. This is a goodwill accommodation and does not constitute an entitlement or an acknowledgement of refund eligibility.
                    </p>
                    <p className="text-neutral-500 custom-text1">
                        Participants wishing to explore this option should contact AL&CO in writing at <span className="text-secondary">connect@arslanlarik.com</span> as early as possible.
                    </p>
                </>
            ),
        },
        {
            label: "Section 07",
            title: "Corporate & Group Enrollments",
            content: (
                <p className="text-neutral-500 custom-text1">
                    Refund and cancellation terms for corporate clients or group bookings of five or more participants are governed by the signed service agreement between AL&CO and the client organisation. In the absence of a specific written agreement, this standard policy applies in full.
                </p>
            ),
        },
        {
            label: "Section 08",
            title: "Dispute Resolution",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-3">
                        If you are dissatisfied with a decision made under this policy, you may escalate your concern in writing to AL&CO's management. We will review and respond within 10 business days.
                    </p>
                    <p className="text-neutral-500 custom-text1">
                        All disputes arising from this policy shall be governed by the laws of Pakistan. Unresolved matters may be referred to the relevant Consumer Protection Council or the courts of competent jurisdiction in Karachi, Pakistan.
                    </p>
                </>
            ),
        },
    ],
    contactCard: {
        title: "Submit a Refund Request",
        description: "Email us with your enrollment details and reason for the request. Please allow up to 3 business days for an initial response.",
        email: "connect@arslanlarik.com",
        address: "Arslan Larik & Company, D-86/1, Block-7, Gulshan-e-Iqbal, Karachi, Pakistan",
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