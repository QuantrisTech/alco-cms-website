import ContentSection from '@/component/contentSection'
import { BannerType } from '@/type/bannerType';
import { ContentSectionType } from '@/type/contentSection'
import programLevel2 from "@/assets/background/program-level-2.webp"
import Banner from '@/component/banner';
import Link from 'next/link';

const bannerData: BannerType = {
    title: {
        line1: "Privacy Policy​",
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
                At <Link href='/' className='underline text-secondary'>Arslan Larik,</Link> we respect your privacy and are committed to protecting your personal data.
            </p>
        </>
    )
};


const ContentSectionData: ContentSectionType = {
    description: (
        <>
            {/* 1 */}
            <p className="my-4 text-xl font-extrabold">1. Information We Collect</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We may collect personal information such as your name, email address, phone number, and payment details.</li>
                <li>We also collect non-personal data including browser type, IP address, and device information.</li>
                <li>Information related to course enrollments, user activity, and interactions on the website may also be collected.</li>
            </ul>

            {/* 2 */}
            <p className="my-4 text-xl font-extrabold">2. How We Use Your Information</p>
            <ul className="list-none pl-5 space-y-2">
                <li>Your information is used to provide, manage, and improve our services.</li>
                <li>We may use your data to process payments and manage enrollments.</li>
                <li>We may send updates, promotional emails, or important notifications.</li>
                <li>Your data helps us improve website performance and user experience.</li>
            </ul>

            {/* 3 */}
            <p className="my-4 text-xl font-extrabold">3. Cookies & Tracking Technologies</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We use cookies to enhance user experience and website functionality.</li>
                <li>Cookies help us understand user behavior and improve our services.</li>
                <li>You can disable cookies through your browser settings if you prefer.</li>
            </ul>

            {/* 4 */}
            <p className="my-4 text-xl font-extrabold">4. Data Sharing</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We do not sell, trade, or rent your personal information to others.</li>
                <li>We may share data with trusted third-party services such as payment processors or email providers.</li>
                <li>We may disclose information if required by law or to protect our rights.</li>
            </ul>

            {/* 5 */}
            <p className="my-4 text-xl font-extrabold">5. Data Security</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We implement appropriate security measures to protect your personal data.</li>
                <li>However, no method of transmission over the internet is 100% secure.</li>
                <li>We strive to protect your data but cannot guarantee absolute security.</li>
            </ul>

            {/* 6 */}
            <p className="my-4 text-xl font-extrabold">6. Your Rights</p>
            <ul className="list-none pl-5 space-y-2">
                <li>You have the right to access, update, or delete your personal information.</li>
                <li>You may opt out of receiving marketing communications at any time.</li>
                <li>You can request details about the data we hold about you.</li>
            </ul>

            {/* 7 */}
            <p className="my-4 text-xl font-extrabold">7. Third-Party Links</p>
            <ul className="list-none pl-5 space-y-2">
                <li>Our website may contain links to third-party websites.</li>
                <li>We are not responsible for the privacy practices of those websites.</li>
                <li>We encourage you to review their privacy policies separately.</li>
            </ul>

            {/* 8 */}
            <p className="my-4 text-xl font-extrabold">8. Data Retention</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We retain your personal data only as long as necessary to provide services.</li>
                <li>We may retain data to comply with legal obligations or resolve disputes.</li>
            </ul>

            {/* 9 */}
            <p className="my-4 text-xl font-extrabold">9. Changes to Privacy Policy</p>
            <ul className="list-none pl-5 space-y-2">
                <li>We may update this Privacy Policy at any time.</li>
                <li>Changes will be posted on this page with an updated date.</li>
                <li>Continued use of the website means you accept the updated policy.</li>
            </ul>

            {/* 10 */}
            <p className="my-4 text-xl font-extrabold">10. Contact Us</p>
            <ul className="list-none pl-5 space-y-2">
                <li>If you have any questions about this Privacy Policy, you can contact us at:</li>
                <li>Email:  <Link
                    href="mailto:connect@arslanlarik.com"
                    className="text-primary underline"
                >
                    connect@arslanlarik.com
                </Link></li>
            </ul>
        </>
    ),
    padding: "py-6 md:py-8 lg:py-12 xl:py-16",
    textAlign: "text-start"
}

export default function PrivacyPolicy() {
    return (
        <div>
            <Banner data={bannerData} />
            <ContentSection data={ContentSectionData} />
        </div>
    )
}
