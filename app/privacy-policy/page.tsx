import { BannerType } from '@/type/bannerType';
import programLevel2 from "@/assets/background/program-level-2.webp";
import Banner from '@/component/banner';
import Link from 'next/link';
import PolicyContent, { PolicyContentType } from '@/component/policy-content';

const bannerData: BannerType = {
    title: {
        line1: "Privacy Policy",
        align: "text-center mx-auto"
    },
    image: programLevel2.src,
    className: "bg-center bg-cover bg-no-repeat bg-primary",
    children: (
        <>
            <p className='text-sm text-center text-white mt-2'>
                Effective: May 2025 &nbsp;·&nbsp; PECA 2016 compliant &nbsp;·&nbsp; GDPR-aligned
            </p>
            <p className="text-sm text-center text-white mt-2 font-light">
                At <Link href='/' className='underline text-secondary'>Arslan Larik & Company,</Link> we respect your privacy and are committed to protecting your personal data.
            </p>
        </>
    )
};

const privacyData: PolicyContentType = {
    sections: [
        {
            label: "Section 01",
            title: "Introduction & Scope",
            content: (
                <>
                    <p className="text-neutral-600 custom-text1 mb-3">
                        Arslan Larik & Company (AL&CO) operates from Karachi, Pakistan, with activities in Dubai, UAE. This Privacy Policy applies to all personal data collected through our website, registration processes, online platform, and the delivery of our services.
                    </p>
                    <p className="text-neutral-600 custom-text1 mb-3">
                        This Policy is established in compliance with the Prevention of Electronic Crimes Act (PECA), 2016, the Electronic Transactions Ordinance 2002, and is aligned with internationally recognized data protection standards including the General Data Protection Regulation (GDPR) where applicable.
                    </p>
                    <p className="text-neutral-600 custom-text1">
                        By using our website or registering for any AL&CO service, you consent to the data practices described in this policy.
                    </p>
                </>
            ),
        },
        {
            label: "Section 02",
            title: "Information We Collect",
            content: (
                <>
                    <p className="text-neutral-600 custom-text1 mb-4">
                        We collect only the personal information necessary for the purposes outlined in this policy:
                    </p>
                    <div className="overflow-x-auto rounded-lg border border-primary/10 mb-4">
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="bg-primary/5 border-b border-primary/10">
                                    <th className="text-left px-4 py-3 text-neutral-600 font-semibold">Category</th>
                                    <th className="text-left px-4 py-3 text-neutral-600 font-semibold">Examples</th>
                                    <th className="text-left px-4 py-3 text-neutral-600 font-semibold">How Collected</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Identity Data", "Full name, date of birth, gender", "Registration and enrollment forms"],
                                    ["Contact Data", "Email address, phone number, city, country", "Registration, contact and inquiry forms"],
                                    ["Payment Data", "Transaction ID, payment method type, billing address", "Checkout process (full card numbers are never stored)"],
                                    ["Program Data", "Course progress, assessment results, attendance records", "Participation in AL&CO programs"],
                                    ["Technical Data", "IP address, browser type, device type, operating system", "Automatically via cookies and server logs"],
                                    ["Communications", "Messages sent via contact forms or email", "Direct communication with AL&CO"],
                                ].map(([cat, ex, how], i) => (
                                    <tr key={i} className="border-b border-primary/5 last:border-0">
                                        <td className="px-4 py-3 text-neutral-600 font-medium">{cat}</td>
                                        <td className="px-4 py-3 text-neutral-500">{ex}</td>
                                        <td className="px-4 py-3 text-neutral-500">{how}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-neutral-500 custom-text1">
                        We do not collect sensitive categories of data — such as national identity numbers, health information, or financial account credentials — unless explicitly required and separately consented to.
                    </p>
                </>
            ),
        },
        {
            label: "Section 03",
            title: "How We Use Your Information",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        We process personal data only for specified, lawful purposes. These include:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "Creating and managing participant accounts and program access",
                            "Processing enrollments, payments, and issuing certificates",
                            "Communicating program updates, schedules, and account-related notices",
                            "Sending promotional or informational communications, where you have provided consent",
                            "Improving the quality of our services and website through analytics",
                            "Complying with legal, regulatory, and accreditation obligations",
                            "Preventing unauthorized access, fraud, or misuse of our services",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <div className="border-l-2 border-secondary bg-secondary/5 px-5 py-4 rounded-r-lg">
                        <p className="text-neutral-600 custom-text1 font-medium">
                            We will never sell, rent, or trade your personal data to third parties for their own commercial or marketing purposes.
                        </p>
                    </div>
                </>
            ),
        },
        {
            label: "Section 04",
            title: "Legal Basis for Processing",
            content: (
                <ul className="space-y-2">
                    {[
                        ["Contractual Necessity", "To fulfill our obligations under the enrollment agreement"],
                        ["Legal Compliance", "To comply with applicable laws and regulatory requirements"],
                        ["Legitimate Interests", "To operate, improve, and protect our services"],
                        ["Consent", "For marketing communications and optional data uses, where freely given and withdrawable at any time"],
                    ].map(([title, desc], i) => (
                        <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                            <span className="text-secondary mt-1 flex-shrink-0">—</span>
                            <span><span className="text-neutral-600 font-medium">{title}:</span> {desc}</span>
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            label: "Section 05",
            title: "Sharing of Personal Data",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        AL&CO does not sell personal data. We share data only in the following limited circumstances:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            ["Accreditation Bodies", "ABNLP, ICF, American Board of Hypnotherapy, and similar — for certificate verification and issuance"],
                            ["Payment Processors", "Licensed gateways for secure transaction processing"],
                            ["Technology Service Providers", "Platform and communication tool providers acting as data processors under written agreements"],
                            ["Legal Obligations", "Where disclosure is required by law, court order, or competent government authority"],
                        ].map(([title, desc], i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span><span className="text-neutral-600 font-medium">{title}:</span> {desc}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        All third-party service providers are contractually bound to handle data securely and use it only for specified, agreed purposes.
                    </p>
                </>
            ),
        },
        {
            label: "Section 06",
            title: "Cookies & Tracking Technologies",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        Our website uses cookies and similar tracking technologies to improve user experience and gather usage data:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            ["Essential Cookies", "Required for the website to function (e.g., session management, security). These cannot be disabled"],
                            ["Analytics Cookies", "Used to understand how visitors interact with our website (e.g., Google Analytics). Data is aggregated and anonymized"],
                            ["Marketing Cookies", "Used to deliver relevant advertising, only activated with your explicit consent"],
                        ].map(([title, desc], i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span><span className="text-neutral-600 font-medium">{title}:</span> {desc}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        You may manage or disable non-essential cookies through your browser settings or our cookie consent tool at any time.
                    </p>
                </>
            ),
        },
        {
            label: "Section 07",
            title: "Data Retention",
            content: (
                <ul className="space-y-2">
                    {[
                        "Active participant records: retained for the duration of participation plus 2 years",
                        "Enrollment and certificate records: retained for 7 years in accordance with recordkeeping obligations",
                        "Payment records: retained for 5 years as required by financial regulations",
                        "Marketing data: retained until consent is withdrawn or the participant opts out",
                        "Inactive accounts (no activity for 3+ years): data is anonymized or securely deleted",
                    ].map((item, i) => (
                        <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                            <span className="text-secondary mt-1 flex-shrink-0">—</span>
                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            ),
        },
        {
            label: "Section 08",
            title: "Your Data Rights",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-6">
                        You have the following rights regarding your personal data held by AL&CO, exercisable by submitting a written request to{" "}
                        <Link href="mailto:privacy@arslanlarik.com" className="text-secondary underline">
                            privacy@arslanlarik.com
                        </Link>:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {[
                            ["Right of Access", "Request a copy of the personal data we hold about you."],
                            ["Right to Rectification", "Request correction of inaccurate or incomplete personal data."],
                            ["Right to Erasure", "Request deletion of your data where we no longer have a legal basis to retain it."],
                            ["Right to Object", "Object to processing of your data for direct marketing at any time."],
                            ["Right to Portability", "Request a structured, machine-readable copy of your personal data."],
                            ["Withdraw Consent", "Withdraw consent for marketing or optional processing at any time."],
                        ].map(([title, desc], i) => (
                            <div key={i} className="border border-primary/10 rounded-xl px-4 py-5 bg-primary/3">
                                <p className="text-neutral-600 font-semibold text-sm mb-2">{title}</p>
                                <p className="text-neutral-500 custom-text1">{desc}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-neutral-500 custom-text1">
                        We will respond to all requests within 30 days. Requests that are manifestly unfounded or excessive may be subject to a reasonable administrative fee.
                    </p>
                </>
            ),
        },
        {
            label: "Section 09",
            title: "Data Security",
            content: (
                <>
                    <p className="text-neutral-500 custom-text1 mb-4">
                        AL&CO implements appropriate technical and organizational measures to protect personal data:
                    </p>
                    <ul className="space-y-2 mb-4">
                        {[
                            "SSL/TLS encryption for all data transmitted via our website and digital platform",
                            "Passwords stored using industry-standard secure hashing; never stored in plain text",
                            "Access to personal data restricted to authorized personnel on a need-to-know basis",
                            "Regular security assessments and platform updates",
                            "Staff trained on data protection responsibilities",
                        ].map((item, i) => (
                            <li key={i} className="flex gap-3 text-neutral-500 custom-text1">
                                <span className="text-secondary mt-1 flex-shrink-0">—</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="text-neutral-500 custom-text1">
                        In the event of a data breach that poses a risk to individuals, AL&CO will notify affected parties and relevant authorities in accordance with applicable legal requirements.
                    </p>
                </>
            ),
        },
        {
            label: "Section 10",
            title: "International Data Transfers",
            content: (
                <p className="text-neutral-500 custom-text1">
                    Where personal data is transferred outside of Pakistan (e.g., to service providers or accreditation bodies in other jurisdictions), AL&CO ensures appropriate safeguards are in place, including contractual data protection clauses consistent with recognized international standards.
                </p>
            ),
        },
        {
            label: "Section 11",
            title: "Policy Updates",
            content: (
                <p className="text-neutral-500 custom-text1">
                    AL&CO may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. Material updates will be communicated via email or a prominent notice on our website, along with a revised effective date. Continued use of our services following notification of changes constitutes acceptance of the updated policy.
                </p>
            ),
        },
    ],
    contactCard: {
        title: "Privacy Inquiries",
        description: "For any data-related requests or concerns, contact our privacy team.",
        email: "privacy@arslanlarik.com",
        address: "Arslan Larik & Company, Karachi, Pakistan",
    },
};

export default function PrivacyPolicy() {
    return (
        <div>
            <Banner data={bannerData} />
            <PolicyContent data={privacyData} />
        </div>
    );
}