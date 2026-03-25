import React from "react";

export type Faq = {
  question?: string;
  answer?: React.ReactNode;
};

export const homeFaqs: Faq[] = [
  {
    question: "What is the scope of Neuro-Linguistic Programming?",
    answer: (
      <>
        <p>
          NLP training equips individuals with powerful tools to reshape behavior, improve communication, and unlock potential, fostering success and growth in all areas of life and work.
        </p>
        <ul className="list-none">
          <li><b className="text-secondary-medium mb-4">House Managers:</b> <br/> NLP empowers house managers to resolve family disputes efficiently and manage responsibilities with emotional balance.</li>
          <li><b className="text-secondary-medium mb-4">Parents:</b> <br/> NLP helps parents understand children better and improve communication.</li>
          <li><b className="text-secondary-medium mb-4">Psychologists & Psychiatrists:</b> <br/> NLP helps identify and reshape negative patterns and improve mental health outcomes.</li>
          <li><b className="text-secondary-medium mb-4">HR Professionals:</b> <br/> Improves hiring, conflict resolution, and team cohesion.</li>
          <li><b className="text-secondary-medium mb-4">Counselors & Trainers:</b> <br/> Helps in emotional healing and delivering impactful sessions.</li>
          <li><b className="text-secondary-medium mb-4">Educationists & Doctors:</b> <br/> Improves teaching methods and patient communication.</li>
          <li><b className="text-secondary-medium mb-4">Lawyers & Entrepreneurs:</b> <br/> Enhances persuasion, decision-making, and leadership.</li>
          <li><b className="text-secondary-medium mb-4">Students & Managers:</b> <br/> Improves focus, confidence, and team dynamics.</li>
          <li><b className="text-secondary-medium mb-4">Public Speakers & Athletes:</b> <br/> Builds confidence, focus, and performance.</li>
        </ul>
        <p>No matter your role, NLP equips you to excel with confidence, clarity, and purpose.</p>
      </>
    )
  },
  {
    question: "How would NLP Training help me?",
    answer: (
      <>
        <p>NLP adapts to your specific needs and transforms both personal and professional life.</p>
        <ul className="list-none">
          <li><b className="text-secondary-medium mb-4">For Personal Growth:</b> <br/> Helps manage emotions, break limiting beliefs, and improve relationships.</li>
          <li><b className="text-secondary-medium mb-4">For Professional Excellence:</b> <br/> Enhances communication, leadership, and decision-making.</li>
          <li><b className="text-secondary-medium mb-4">For Coaching Career:</b> <br/> Provides tools and certifications to help others transform.</li>
          <li><b className="text-secondary-medium mb-4">For Financial Freedom:</b> <br/> Helps you build a coaching business and attract clients.</li>
        </ul>
      </>
    )
  },
  {
    question: "I don’t have a Psychology background. Can I attend NLP training?",
    answer: (
      <>
        <p>Yes, NLP is designed for everyone. It focuses on practical application rather than theory.</p>
        <p>You don’t need any prior psychology background—just a willingness to learn and practice.</p>
      </>
    )
  },
  {
    question: "Will I get my return on investment from this training?",
    answer: (
      <>
        <p>NLP provides strong ROI depending on your goals.</p>
        <ul className="list-none">
          <li><b className="text-secondary-medium mb-4">Personal Growth:</b> <br/> Better mindset, emotional control, and quality of life.</li>
          <li><b className="text-secondary-medium mb-4">Professional Growth:</b> <br/> Improved communication, leadership, and career advancement.</li>
          <li><b className="text-secondary-medium mb-4">Coaching Business:</b> <br/> Opportunity to earn and build financial independence.</li>
        </ul>
      </>
    )
  },
  {
    question: "Can I start a coaching career after AL&CO provides training?",
    answer: (
      <>
        <p>Yes, you receive globally recognized certifications including <b className="text-secondary-medium mb-4">ABNLP, TLTA, ABH, NGH</b>, and <b className="text-secondary-medium mb-4">Coaching Division</b>.</p>
        <p>You also gain 150+ practical tools and interventions to help clients transform and build a successful coaching career.</p>
      </>
    )
  },
  {
    question: "How would I manage the time of this training?",
    answer: (
      <>
        <p>Training is scheduled from 8 PM to 2 AM (PKT), making it ideal for professionals, students, and homemakers.</p>
        <p>Sessions are structured, efficient, and include breaks to keep you engaged.</p>
      </>
    )
  },
  {
    question: "Will I become a coach in 10 days or 13 days?",
    answer: (
      <>
        <p>You can start your coaching journey after 10-day Practitioner or 13-day Master Practitioner training.</p>
        <p>The program also includes:</p>
        <ul className="list-none">
          <li>5-year access with unlimited revisions</li>
          <li>450+ audio resources</li>
          <li>Expert mentorship</li>
          <li>Graduate support system</li>
        </ul>
        <p>Mastery comes with practice and continuous learning.</p>
      </>
    )
  },
  {
    question: "How is NLP different from ICF?",
    answer: (
      <p>ICF focuses on asking questions and structured coaching frameworks. NLP goes deeper by addressing beliefs, emotions, and behaviors using practical tools for transformation.</p>
    )
  },
  {
    question: "How is NLP different from Psychotherapy?",
    answer: (
      <p>NLP is action-oriented and focuses on fast transformation. Psychotherapy focuses on deep analysis and long-term healing. NLP works on past, present, and future to create quick and practical results.</p>
    )
  },
  {
    question: "Is NLP a Pseudo-Science?",
    answer: (
      <p>NLP is not a science but a practical methodology based on modeling successful behaviors. It focuses on creating real, measurable changes in thinking, emotions, and actions.</p>
    )
  },
  {
    question: "How Will I Get Paid Coaching Clients After NLP Training?",
    answer: (
      <>
        <p>You’ll learn sales and marketing strategies, social media growth, and client conversion techniques.</p>
        <p>You also get:</p>
        <ul className="list-none">
          <li>Dedicated training sessions</li>
          <li>Quarterly masterclasses</li>
          <li>Community support</li>
        </ul>
        <p>Your success depends on consistent action and implementation.</p>
      </>
    )
  }
];