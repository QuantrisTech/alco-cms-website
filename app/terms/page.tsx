import ContentSection from '@/component/contentSection'
import { BannerType } from '@/type/bannerType';
import { ContentSectionType } from '@/type/contentSection'
import programLevel2 from "@/assets/background/program-level-2.webp"
import Banner from '@/component/banner';
import Link from 'next/link';

const bannerData: BannerType = {
    title: {
        line1: "Terms And Condition​",
        align: "text-center mx-auto"
    },
    image: programLevel2.src,
    className: "bg-center bg-cover bg-no-repeat bg-primary",
    children: (
        <>
            <p className='text-sm text-center text-white mt-2'>Last Updated:
                <span className='italic font-extralight ms-2'></span>30/3/2026
            </p>

            <p className="text-sm text-center text-white mt-2 font-light">
                Welcome to <Link href='/' className='underline text-secondary'>Arslan Larik.</Link> By using our website, you agree to these terms.
            </p>
        </>
    )
};


const ContentSectionData: ContentSectionType = {
    description: (
        <>
            {/* 1 */}
            <p className="my-4 text-xl font-extrabold">1. Use of Website</p>
            <ul className="list-none pl-5 space-y-2">
                <li>You must be at least 18 years old or accessing the website under the supervision of a parent or guardian.</li>
                <li>You agree to use this website only for lawful purposes and in a way that does not infringe the rights of others.</li>
                <li>You must not attempt to gain unauthorized access to any part of the website, servers, or databases.</li>
                <li>You are responsible for ensuring that your use of the website complies with all applicable laws and regulations.</li>
            </ul>

            {/* 2 */}
            <p className="my-4 text-xl font-extrabold">2. Services</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We provide training programs, coaching sessions, and educational materials designed to support personal and professional growth.</li>
                <li>All services are subject to availability and may be updated, modified, or discontinued at any time without prior notice.</li>
                <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
            </ul>

            {/* 3 */}
            <p className="my-4 text-xl font-extrabold">3. User Accounts</p>
            <ul className="list-none pl-5 space-y-2">
                <li>When you create an account, you must provide accurate, complete, and up-to-date information.</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                <li>Any activity under your account will be considered your responsibility.</li>
                <li>You must notify us immediately of any unauthorized use of your account.</li>
            </ul>

            {/* 4 */}
            <p className="my-4 text-xl font-extrabold">4. Payments & Refunds</p>
            <ul className="list-none pl-5 space-y-2">
                <li>All payments must be completed before accessing paid services or courses.</li>
                <li>Prices are subject to change without prior notice.</li>
                <li>Refund requests will be reviewed on a case-by-case basis.</li>
                <li>No refunds will be issued once access to digital content or courses has been granted.</li>
            </ul>

            {/* 5 */}
            <p className="my-4 text-xl font-extrabold">5. Intellectual Property</p>
            <ul className="list-none pl-5 space-y-2">
                <li>All content on this website, including text, graphics, videos, logos, and course materials, is the property of Arslan Larik.</li>
                <li>You may not reproduce, distribute, modify, or exploit any content without prior written permission.</li>
                <li>Unauthorized use of content may result in legal action.</li>
            </ul>

            {/* 6 */}
            <p className="my-4 text-xl font-extrabold">6. User Conduct</p>
            <ul className="list-none pl-5 space-y-2">
                <li>You agree not to use the website for any unlawful or harmful activities.</li>
                <li>You must not upload or share content that is abusive, defamatory, or violates any rights.</li>
                <li>You must not attempt to disrupt or interfere with the website’s functionality or security.</li>
            </ul>

            {/* 7 */}
            <p className="my-4 text-xl font-extrabold">7. Limitation of Liability</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We do not guarantee specific results from the use of our training or services.</li>
                <li>We are not liable for any direct, indirect, or incidental damages resulting from the use of our website.</li>
                <li>We are not responsible for technical issues, interruptions, or errors beyond our control.</li>
            </ul>

            {/* 8 */}
            <p className="my-4 text-xl font-extrabold">8. Third-Party Links</p>
            <ul className="list-none pl-5 space-y-2">
                <li>Our website may include links to third-party websites for your convenience.</li>
                <li>We do not control or take responsibility for the content, policies, or practices of third-party websites.</li>
            </ul>

            {/* 9 */}
            <p className="my-4 text-xl font-extrabold">9. Termination</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We reserve the right to suspend or terminate your access to the website at any time without prior notice.</li>
                <li>This may occur if you violate these Terms & Conditions or engage in harmful behavior.</li>
            </ul>

            {/* 10 */}
            <p className="my-4 text-xl font-extrabold">10. Changes to Terms</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We may update or revise these Terms & Conditions at any time.</li>
                <li>Changes will be effective immediately upon posting on this page.</li>
                <li>Your continued use of the website indicates your acceptance of the updated terms.</li>
            </ul>

            {/* 11 */}
            <p className="my-4 text-xl font-extrabold">11. Governing Law</p>
            <ul className="list-none pl-5 space-y-2">
                <li>These Terms & Conditions are governed by and interpreted in accordance with the laws of Pakistan.</li>
                <li>Any disputes will be subject to the jurisdiction of local courts.</li>
            </ul>

            {/* 12 */}
            <p className="my-4 text-xl font-extrabold">12. Contact Us</p>
            <ul className="list-none pl-5 space-y-2">
                <li>If you have any questions regarding these Terms, you can contact us at:</li>
                <li>Email:  <Link
                        href="mailto:connect@arslanlarik.com"
                        className="text-primary underline"
                    >
                        connect@arslanlarik.com
                    </Link>
                </li>
            </ul>
        </>
    ),
    padding: "py-6 md:py-8 lg:py-12 xl:py-16",
    textAlign: "text-start"
}

export default function Terms() {
    return (
        <div>
            <Banner data={bannerData} />
            <ContentSection data={ContentSectionData} />
        </div>
    )
}
