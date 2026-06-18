import { BannerType } from '@/type/bannerType';
import programLevel2 from "@/assets/background/program-level-2.webp";
import Banner from '@/component/banner';
import PolicyContent, { PolicyContentType } from '@/component/policy-content';

const bannerData: BannerType = {
    title: {
        line1: "Terms & Conditions",
        align: "text-center mx-auto"
    },
    image: programLevel2.src,
    className: "bg-center bg-cover bg-no-repeat bg-primary",
    children: (
        <>
            <p className='text-sm text-center text-white mt-2'>
                Effective: May 2025 &nbsp;·&nbsp; Governed by the laws of the Islamic Republic of Pakistan
            </p>
            <p className="text-sm text-center text-white mt-2 font-light">
                These Terms and Conditions govern your use of AL&CO's website, services, and programs. Please read them carefully before engaging with any of our offerings.
            </p>
        </>
    )
};

const termsData: PolicyContentType = {
    sections: [
        {
            label: "Section 01",
            title: "Acceptance of Terms",
            content: (
                <>
                    <p className="text-neutral-600 custom-text1 mb-3">
                        By accessing our website, registering for any program, or purchasing any service from Arslan Larik & Company (AL&CO), you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, together with our Privacy Policy, Service Policy, and Refund Policy, all of which are incorporated herein by reference.
                    </p>
                    <p className="text-neutral-600 custom-text1 mb-3">
                        If you do not agree to these Terms, you must refrain from using our website or enrolling in any AL&CO program.
                    </p>
                    <p className="text-neutral-600 custom-text1">
                        These Terms constitute a legally binding agreement under the Contract Act, 1872 (Pakistan). AL&CO reserves the right to update these Terms at any time; continued use of our services following publication of updates constitutes acceptance.
                    </p>
                </>
            ),
        },
        {
            label: "Section 02",
            title: "Eligibility",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        To enter into this agreement and access AL&CO's services, you must:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "Be at least 18 years of age, or have obtained written parental or guardian consent",
                            "Have the legal capacity to enter into a binding contract under applicable law",
                            "Not be prohibited from receiving services under any applicable laws or regulations",
                            "Provide accurate, current, and complete information when registering or making a purchase",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        AL&CO reserves the right to suspend or terminate access where eligibility conditions are found to be unmet.
                    </p>
                </>
            ),
        },
        {
            label: "Section 03",
            title: "Use of Website & Digital Services",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        You agree to use AL&CO's website and digital services only for lawful purposes and in accordance with these Terms. You must not:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "Use the website in any manner that violates applicable local, national, or international law or regulation",
                            "Transmit unsolicited commercial messages, spam, or harmful code of any kind",
                            "Attempt to gain unauthorized access to any part of our systems, servers, or databases",
                            "Use automated tools, bots, or scrapers to access, index, or extract content from our website",
                            "Engage in any conduct that could disable, overburden, or impair the functionality of our website",
                            "Reproduce, duplicate, or exploit any portion of the website for commercial purposes without our written consent",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        Any violation of these provisions may constitute an offense under the Prevention of Electronic Crimes Act (PECA), 2016, and other applicable laws. AL&CO reserves the right to report such conduct to the relevant authorities.
                    </p>
                </>
            ),
        },
        {
            label: "Section 04",
            title: "Accounts & Registration",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        Where you create an account to access AL&CO's services or programs, you are responsible for:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "Maintaining the confidentiality of your login credentials",
                            "All activities that occur under your account",
                            "Notifying AL&CO immediately of any unauthorized use of your account",
                            "Ensuring that your account information remains accurate and up to date",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        AL&CO will not be liable for any loss or damage arising from unauthorized use of your account where you have failed to take reasonable steps to safeguard your credentials.
                    </p>
                    <div className="border-l-2 border-secondary bg-secondary/5 px-5 py-4 rounded-r-lg">
                        <p className="text-neutral-600 custom-text1 font-medium">
                            Sharing account credentials with any other person is strictly prohibited and may result in permanent suspension of access without refund.
                        </p>
                    </div>
                </>
            ),
        },
        {
            label: "Section 05",
            title: "Payment Terms",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        All fees for AL&CO programs and services are quoted in Pakistani Rupees (PKR) or United States Dollars (USD) as specified at the time of purchase. By completing a purchase, you agree that:
                    </p>
                    <ul className="space-y-2">
                        {[
                            "All stated prices are inclusive of applicable taxes unless otherwise noted",
                            "Payment is due in full at the time of enrollment, unless a formal instalment plan has been agreed in writing",
                            "AL&CO reserves the right to change pricing at any time; changes will not affect confirmed enrollments",
                            "Chargebacks or payment reversals initiated without first contacting AL&CO constitute a breach of these Terms",
                            "Where payment is made in a foreign currency, the applicable exchange rate and any conversion fees are the responsibility of the payer",
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
            title: "Intellectual Property",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        All content on the AL&CO website and in our programs — including but not limited to text, graphics, logos, videos, audio recordings, course materials, assessments, and training methodologies — is the exclusive intellectual property of Arslan Larik & Company, protected under the Copyright Ordinance, 1962 (Pakistan), the Trade Marks Ordinance, 2001, and applicable international intellectual property conventions.
                    </p>
                    <ul className="space-y-2">
                        {[
                            "You are granted a limited, non-exclusive, non-transferable license to access and use materials for personal learning purposes only",
                            "You may not reproduce, republish, redistribute, transmit, or commercially exploit any AL&CO content without prior written authorization",
                            "The AL&CO name, logo, and associated trademarks may not be used without express written permission",
                            "Any unauthorized use of AL&CO's intellectual property may result in civil or criminal liability",
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
            label: "Section 07",
            title: "Third-Party Links & Services",
            content: (
                <p className="text-neutral-500 custom-text1">
                    Our website may contain links to third-party websites or services for your convenience. AL&CO does not endorse, control, or assume responsibility for the content, privacy practices, or availability of any third-party sites. Accessing third-party links is entirely at your own risk, and we encourage you to review the terms and privacy policies of any external websites you visit.
                </p>
            ),
        },
        {
            label: "Section 08",
            title: "Disclaimer of Warranties",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        AL&CO's website and services are provided on an "as is" and "as available" basis. To the fullest extent permitted by applicable law, AL&CO makes no warranties — express or implied — regarding:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "The accuracy, completeness, or suitability of any content on our website",
                            "Uninterrupted, error-free, or secure operation of our digital platforms",
                            "Specific personal, professional, or financial outcomes resulting from participation in any program",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        AL&CO shall not be liable for any service interruptions, technical failures, or third-party platform issues beyond our reasonable control.
                    </p>
                </>
            ),
        },
        {
            label: "Section 09",
            title: "Limitation of Liability",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        To the maximum extent permitted under applicable law:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "AL&CO's total aggregate liability to any individual for any claim arising from these Terms shall not exceed the amount paid by that individual for the specific service giving rise to the claim",
                            "AL&CO shall not be liable for any indirect, incidental, consequential, special, or punitive damages of any kind",
                            "AL&CO is not liable for loss of data, revenue, business opportunities, or goodwill arising from use of our services",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        Nothing in these Terms excludes liability for fraud, death, or personal injury caused by AL&CO's gross negligence, to the extent such exclusion is prohibited by applicable law.
                    </p>
                </>
            ),
        },
        {
            label: "Section 10",
            title: "Indemnification",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        You agree to indemnify, defend, and hold harmless AL&CO, its directors, employees, trainers, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with:
                    </p>
                    <ul className="space-y-2">
                        {[
                            "Your breach of these Terms and Conditions",
                            "Your violation of any applicable law or the rights of a third party",
                            "Your use of our website or services in a manner not authorized under these Terms",
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
            label: "Section 11",
            title: "Termination",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        AL&CO reserves the right to suspend or terminate your access to its services or website at any time, with or without notice, for any of the following reasons:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "Breach of any provision of these Terms and Conditions",
                            "Conduct that is harmful to other participants, staff, or the reputation of AL&CO",
                            "Failure to make payment for enrolled services",
                            "Any activity that violates applicable law",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        Upon termination, your right to access any AL&CO content or services immediately ceases. Provisions of these Terms that by their nature should survive termination shall continue to apply.
                    </p>
                </>
            ),
        },
        {
            label: "Section 12",
            title: "Force Majeure",
            content: (
                <p className="text-neutral-500 custom-text1">
                    AL&CO shall not be liable for any failure or delay in the performance of its obligations where such failure or delay results from circumstances beyond its reasonable control, including but not limited to acts of God, natural disasters, pandemics, government actions, civil unrest, power failures, internet outages, or disruptions to third-party services. AL&CO will notify affected participants promptly and endeavor to resume services as soon as practicable.
                </p>
            ),
        },
        {
            label: "Section 13",
            title: "Governing Law & Jurisdiction",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-3">
                        These Terms and Conditions shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any dispute arising out of or relating to these Terms that cannot be resolved through good-faith negotiation within 30 days shall be submitted to the exclusive jurisdiction of the courts of Karachi, Pakistan.
                    </p>
                    <p className="text-neutral-500 custom-text1">
                        For participants based outside Pakistan, AL&CO will make reasonable efforts to resolve disputes amicably before initiating formal legal proceedings. Where applicable, alternative dispute resolution mechanisms may be proposed by either party.
                    </p>
                </>
            ),
        },
        {
            label: "Section 14",
            title: "Severability & Entire Agreement",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-3">
                        If any provision of these Terms is found to be invalid, unlawful, or unenforceable by a court of competent jurisdiction, that provision shall be severed and the remaining provisions shall continue in full force and effect.
                    </p>
                    <p className="text-neutral-500 custom-text1">
                        These Terms, together with AL&CO's Privacy Policy, Service Policy, and Refund Policy, constitute the entire agreement between you and AL&CO with respect to your use of our services and supersede all prior representations, agreements, or understandings on the subject matter.
                    </p>
                </>
            ),
        },
    ],
    contactCard: {
        title: "Questions About These Terms?",
        description: "If you have any queries regarding these Terms and Conditions, please reach out.",
        email: "connect@arslanlarik.com",
        address: "Arslan Larik & Company, Karachi, Pakistan · Dubai, UAE",
    },
};

export default function TermsAndConditions() {
    return (
        <div>
            <Banner data={bannerData} />
            <PolicyContent data={termsData} />
        </div>
    );
}